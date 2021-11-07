resource "aws_s3_bucket" "artifacts" {
  bucket   = "${local.project_name}--artifacts"
  acl      = "private"


  website {
    index_document = "index.html"
    error_document = "index.html"
    routing_rules  = ""
  }

  versioning {
    enabled = true
  }
}