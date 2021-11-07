

resource "aws_route53_zone" "zone" {
  name = var.domain
  tags = local.tags
}



resource "aws_route53_record" "cloudfront" {

  zone_id = aws_route53_zone.zone.zone_id
  name    = var.domain
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}