
resource "aws_iam_user" "syncer" {
  name     = "${var.domain}--github"
  path     = "/${var.domain}/syncer/"
}

resource "aws_iam_access_key" "syncer" {
  user     = aws_iam_user.syncer.name
}

resource "aws_iam_user_policy" "syncer" {
  name     = "${var.domain}--github-syncer"
  user     = aws_iam_user.syncer.name

  policy = data.aws_iam_policy_document.syncer.json
}

data "aws_iam_policy_document" "syncer" {

  statement {
    sid = "S3SiteSync"
    actions = [
      "s3:ListObjectsV2",
      "s3:CopyObject",
      "s3:GetObject",
      "s3:PutObject",
      "s3:ListBucket",
      "s3:DeleteObjects",
      "s3:DeleteObject",
    ]
    effect = "Allow"
    resources = [
      aws_s3_bucket.site.arn,
      "${aws_s3_bucket.site.arn}/*",
      aws_s3_bucket.artifacts.arn,
      "${aws_s3_bucket.artifacts.arn}/*",
    ]
  }

}
