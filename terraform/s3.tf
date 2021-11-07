resource "aws_s3_bucket" "site" {
  bucket   = "${local.project_name}--site"
  acl      = "private"


  website {
    index_document = "index.html"
    error_document = "index.html"
    routing_rules  = ""
  }

  versioning {
    enabled = false
  }
}



resource "aws_s3_bucket_policy" "site_bucket_policy" {
  bucket = aws_s3_bucket.site.id
  policy = data.aws_iam_policy_document.site_bucket_policy.json
}


data "aws_iam_policy_document" "site_bucket_policy" {

  statement {
    actions = ["s3:GetObject"]
    resources = [
      "${aws_s3_bucket.site.arn}/*"
    ]

    principals {
      type = "AWS"
      identifiers = [
        aws_cloudfront_origin_access_identity.site.iam_arn
      ]
    }
  }
}