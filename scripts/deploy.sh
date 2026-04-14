#!/bin/bash
# ============================================================
# Twine Pulse — AWS Deployment Script
# ============================================================
# PURPOSE:
#   This script packages and deploys the Twine Pulse backend
#   to AWS ECS Fargate. It also syncs the frontend to S3.
#
# BEFORE YOU RUN THIS:
#   1. AWS CLI must be installed and configured
#      (your tech team can help with this one-time setup)
#   2. Docker must be installed and running
#   3. You must have your AWS account ID and region
#   4. The ECR repository must already exist (your tech team creates this)
#
# HOW TO RUN:
#   chmod +x scripts/deploy.sh        (makes it executable — run once)
#   ./scripts/deploy.sh               (runs the deployment)
#
# WHAT IT DOES:
#   Step 1: Builds a Docker container image of the Python backend
#   Step 2: Pushes it to AWS ECR (Elastic Container Registry)
#   Step 3: Updates the ECS service to use the new image
#   Step 4: Syncs the frontend files to S3
#   Step 5: Invalidates CloudFront cache so users get the new version
#
# ============================================================

set -e  # Stop if any command fails

# ============================================================
# CONFIGURATION — Fill these in with your actual values
# (Your tech team will provide these after setup)
# ============================================================
AWS_REGION="us-east-1"                         # AWS region (confirm with tech team)
AWS_ACCOUNT_ID="YOUR_ACCOUNT_ID"               # 12-digit AWS account number
ECR_REPO_NAME="twinepulse-backend"             # Name of the ECR repository
ECS_CLUSTER="twinepulse-cluster"               # Name of the ECS cluster
ECS_SERVICE="twinepulse-backend-service"       # Name of the ECS service
S3_BUCKET="twinepulse-frontend"                # Name of the S3 bucket for frontend
CLOUDFRONT_DIST_ID="YOUR_CLOUDFRONT_DIST_ID"  # CloudFront distribution ID

# ============================================================
# Derived values (do not change these)
# ============================================================
ECR_URI="${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPO_NAME}"
IMAGE_TAG="latest"
TIMESTAMP=$(date +%Y%m%d-%H%M%S)

echo ""
echo "=============================================="
echo " Twine Pulse Deployment — ${TIMESTAMP}"
echo "=============================================="
echo " Region:      ${AWS_REGION}"
echo " ECR repo:    ${ECR_URI}"
echo " ECS cluster: ${ECS_CLUSTER}"
echo " S3 bucket:   ${S3_BUCKET}"
echo "=============================================="
echo ""

# ============================================================
# STEP 1: Build Docker image
# ============================================================
echo "[1/5] Building Docker image..."
cd backend
docker build -t ${ECR_REPO_NAME}:${IMAGE_TAG} .
cd ..
echo "      Done."

# ============================================================
# STEP 2: Push to AWS ECR
# ============================================================
echo "[2/5] Pushing image to AWS ECR..."
# Log in to ECR
aws ecr get-login-password --region ${AWS_REGION} \
  | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com

# Tag the image for ECR
docker tag ${ECR_REPO_NAME}:${IMAGE_TAG} ${ECR_URI}:${IMAGE_TAG}
docker tag ${ECR_REPO_NAME}:${IMAGE_TAG} ${ECR_URI}:${TIMESTAMP}

# Push both tags (latest + timestamp for rollback ability)
docker push ${ECR_URI}:${IMAGE_TAG}
docker push ${ECR_URI}:${TIMESTAMP}
echo "      Done. Pushed: ${ECR_URI}:${IMAGE_TAG}"

# ============================================================
# STEP 3: Update ECS service (triggers a new deployment)
# ============================================================
echo "[3/5] Deploying to ECS..."
aws ecs update-service \
  --cluster ${ECS_CLUSTER} \
  --service ${ECS_SERVICE} \
  --force-new-deployment \
  --region ${AWS_REGION} \
  --output text \
  --query "service.deployments[0].status"
echo "      ECS deployment triggered. New tasks will start in ~2-3 minutes."

# ============================================================
# STEP 4: Sync frontend to S3
# ============================================================
echo "[4/5] Syncing frontend files to S3..."
aws s3 sync frontend/ s3://${S3_BUCKET}/ \
  --delete \
  --cache-control "max-age=86400" \
  --exclude "*.DS_Store"
# Set HTML files to not be cached (so users always get latest version)
aws s3 cp frontend/index.html s3://${S3_BUCKET}/index.html \
  --cache-control "no-cache, no-store, must-revalidate" \
  --content-type "text/html"
echo "      Done. Frontend files uploaded to s3://${S3_BUCKET}/"

# ============================================================
# STEP 5: Invalidate CloudFront cache
# ============================================================
echo "[5/5] Clearing CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id ${CLOUDFRONT_DIST_ID} \
  --paths "/*" \
  --output text \
  --query "Invalidation.Status"
echo "      Cache cleared. New version will be live in ~1-2 minutes."

# ============================================================
# Done
# ============================================================
echo ""
echo "=============================================="
echo " Deployment complete!"
echo "=============================================="
echo ""
echo " Backend:  ECS is updating — check AWS console"
echo " Frontend: Live at your CloudFront URL"
echo ""
echo " To check ECS deployment status:"
echo "   aws ecs describe-services --cluster ${ECS_CLUSTER} --services ${ECS_SERVICE}"
echo ""
echo " To roll back if something is wrong:"
echo "   aws ecs update-service --cluster ${ECS_CLUSTER} --service ${ECS_SERVICE} --task-definition PREVIOUS_TASK_DEF"
echo ""
