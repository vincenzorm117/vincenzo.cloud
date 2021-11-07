echo '[START:DEPLOY]'

echo '[STEP] Loading environment variables'
if [ -f ../.env ]
then
    echo 'ERROR: Missing environment variables'
    exit 1
fi

export $(cat .env | xargs)


TAG="$1"

echo "[STEP] Downloading artifact: $TAG"

# Create folder
mkdir -p .artifacts/dist

# Download file
aws s3 cp s3://$S3_BUCKET_ARTIFACTS/$TAG ./.artifacts

# Unzip and prep files for syncing
echo "[STEP] Prepping files for upload"
cd .artifacts
rm -rf dist
mkdir ./dist
cp $TAG ./dist
cd ./dist
tar -xf $TAG
rm $TAG

# Sync files
echo "[STEP] Uploading files to site"
aws s3 sync ./ s3://$S3_BUCKET_SITE --delete


cd ../..


# Invalidate cloudfront
echo '[STEP] Cloudfront Invalidation'
CF_INVALIDATION_ID=$(aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION --paths "/*" | jq -r '.Invalidation.Id')

echo "aws cloudfront wait invalidation-completed --distribution-id $CLOUDFRONT_DISTRIBUTION --id $CF_INVALIDATION_ID"


aws cloudfront wait invalidation-completed --distribution-id $CLOUDFRONT_DISTRIBUTION --id $CF_INVALIDATION_ID

echo '[END:DEPLOY]'
afplay /System/Library/Sounds/Funk.aiff