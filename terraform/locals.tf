locals {
  tags = {
    Project = var.project
  }

  project_name = replace(var.domain, ".", "-")
}
