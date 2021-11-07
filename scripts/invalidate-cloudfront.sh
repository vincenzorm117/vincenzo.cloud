echo '[START:DEPLOY]'

echo '[STEP] Loading environment variables'
if [ -f ../.env ]
then
    echo 'ERROR: Missing environment variables'
    exit 1
fi

export $(cat .env | xargs)


# Invalidate cloudfront
echo '[STEP] Cloudfront Invalidation'
CF_INVALIDATION_ID=$(aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION --paths "/*" | jq -r '.Invalidation.Id')

echo "aws cloudfront wait invalidation-completed --distribution-id $CLOUDFRONT_DISTRIBUTION --id $CF_INVALIDATION_ID"


aws cloudfront wait invalidation-completed --distribution-id $CLOUDFRONT_DISTRIBUTION --id $CF_INVALIDATION_ID

echo '[END:DEPLOY]'
afplay /System/Library/Sounds/Funk.aiff