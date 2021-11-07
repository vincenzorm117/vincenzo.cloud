terraform {
  backend "s3" {
    bucket               = "jumper-terraform-state"
    workspace_key_prefix = "vincenzo.cloud"
    key                  = "terraform.tfstate"
    region               = "us-east-1"
    encrypt              = true
  }
}
