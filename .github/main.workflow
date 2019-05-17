workflow "Regenerate" {
  on = "push"
  resolves = "Commit, and push changes"
}

action "Install" {
  uses = "actions/npm@master"
  args = "install --only=production"
}

action "Update" {
  needs = ["Install"]
  uses = "./.github/actions/update"
}

action "Validate" {
  needs = ["Update"]
  uses = "./.github/actions/validate-json"
}

action "Greenkeeper filter" {
  needs = ["Validate"]
  uses = "actions/bin/filter@master"
  args = "branch greenkeeper/@octokit/routes\\*"
}

action "Commit, and push changes" {
  needs = ["Greenkeeper filter"]
  uses = "./.github/actions/commit-and-push"
  secrets = ["GITHUB_TOKEN"]
}
