


################################################
# Lambda function - Cloudfront Edge Router

data "archive_file" "edge" {
  type        = "zip"
  source_dir  = "../lambdas/cloudfront_edge"
  output_path = "../lambdas/cloudfront_edge.zip"
}

resource "aws_lambda_function" "edge" {
  function_name = "${local.project_name}--cloudfront-edge"
  role          = aws_iam_role.edge.arn
  handler       = "index.handler"
  filename         = "../lambdas/cloudfront_edge.zip"
  source_code_hash = data.archive_file.edge.output_base64sha256
  runtime = "nodejs14.x"
  publish = true
}

resource "aws_iam_role" "edge" {
  name               = "${local.project_name}--cloudfront-edge"
  assume_role_policy = data.aws_iam_policy_document.edge.json
}

data "aws_iam_policy_document" "edge" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type = "Service"
      identifiers = [
        "lambda.amazonaws.com",
        "edgelambda.amazonaws.com"
      ]
    }
    effect = "Allow"
  }
}


resource "aws_iam_role_policy_attachment" "execution_role" {
  role       = aws_iam_role.edge.name
  policy_arn = aws_iam_policy.edge.arn
}

resource "aws_iam_policy" "edge" {
  name        = "LambdaEdgeLogging"
  description = "Enable CloudFront Edge lambda function logging."

  policy = data.aws_iam_policy_document.edge-logging.json
}


data "aws_iam_policy_document" "edge-logging" {

  statement {
    sid = "Logging"
    actions = [
      "logs:CreateLogGroup",
      "logs:CreateLogStream",
      "logs:PutLogEvents"
    ]
    effect    = "Allow"
    resources = ["*"]
  }

}

