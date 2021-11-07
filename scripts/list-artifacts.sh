
if [ -f ../.env ]
then
    echo 'ERROR: Missing environment variables'
    exit 1
fi

export $(cat .env | xargs)

aws s3 ls s3://$S3_BUCKET_ARTIFACTS
afplay /System/Library/Sounds/Funk.aiff