# `github-rest-api-availability-analysis`

[![Greenkeeper badge](https://badges.greenkeeper.io/swinton/github-rest-api-availability-analysis.svg)](https://greenkeeper.io/)

The following REST API routes are currently _unavailable_ on GitHub Enterprise Server 2.16:

<!-- BEGIN -->
## apps
- Delete an installation:  [`DELETE /app/installations/:installation_id`](https://developer.github.com/v3/apps/#delete-an-installation)
- List all plans for your Marketplace listing:  [`GET /marketplace_listing/plans`](https://developer.github.com/v3/apps/marketplace/#list-all-plans-for-your-marketplace-listing)
- List all plans for your Marketplace listing (stubbed):  [`GET /marketplace_listing/stubbed/plans`](https://developer.github.com/v3/apps/marketplace/#list-all-plans-for-your-marketplace-listing)
- List all GitHub accounts (user or organization) on a specific plan:  [`GET /marketplace_listing/plans/:plan_id/accounts`](https://developer.github.com/v3/apps/marketplace/#list-all-github-accounts-user-or-organization-on-a-specific-plan)
- List all GitHub accounts (user or organization) on a specific plan (stubbed):  [`GET /marketplace_listing/stubbed/plans/:plan_id/accounts`](https://developer.github.com/v3/apps/marketplace/#list-all-github-accounts-user-or-organization-on-a-specific-plan)
- Check if a GitHub account is associated with any Marketplace listing:  [`GET /marketplace_listing/accounts/:account_id`](https://developer.github.com/v3/apps/marketplace/#check-if-a-github-account-is-associated-with-any-marketplace-listing)
- Check if a GitHub account is associated with any Marketplace listing (stubbed):  [`GET /marketplace_listing/stubbed/accounts/:account_id`](https://developer.github.com/v3/apps/marketplace/#check-if-a-github-account-is-associated-with-any-marketplace-listing)
- Get a user's Marketplace purchases:  [`GET /user/marketplace_purchases`](https://developer.github.com/v3/apps/marketplace/#get-a-users-marketplace-purchases)
- Get a user's Marketplace purchases (stubbed):  [`GET /user/marketplace_purchases/stubbed`](https://developer.github.com/v3/apps/marketplace/#get-a-users-marketplace-purchases)

## codesOfConduct
- List all codes of conduct:  [`GET /codes_of_conduct`](https://developer.github.com/v3/codes_of_conduct/#list-all-codes-of-conduct)
- Get an individual code of conduct:  [`GET /codes_of_conduct/:key`](https://developer.github.com/v3/codes_of_conduct/#get-an-individual-code-of-conduct)
- Get the contents of a repository's code of conduct:  [`GET /repos/:owner/:repo/community/code_of_conduct`](https://developer.github.com/v3/codes_of_conduct/#get-the-contents-of-a-repositorys-code-of-conduct)

## interactions
- Get interaction restrictions for an organization:  [`GET /orgs/:org/interaction-limits`](https://developer.github.com/v3/interactions/orgs/#get-interaction-restrictions-for-an-organization)
- Add or update interaction restrictions for an organization:  [`PUT /orgs/:org/interaction-limits`](https://developer.github.com/v3/interactions/orgs/#add-or-update-interaction-restrictions-for-an-organization)
- Remove interaction restrictions for an organization:  [`DELETE /orgs/:org/interaction-limits`](https://developer.github.com/v3/interactions/orgs/#remove-interaction-restrictions-for-an-organization)
- Get interaction restrictions for a repository:  [`GET /repos/:owner/:repo/interaction-limits`](https://developer.github.com/v3/interactions/repos/#get-interaction-restrictions-for-a-repository)
- Add or update interaction restrictions for a repository:  [`PUT /repos/:owner/:repo/interaction-limits`](https://developer.github.com/v3/interactions/repos/#add-or-update-interaction-restrictions-for-a-repository)
- Remove interaction restrictions for a repository:  [`DELETE /repos/:owner/:repo/interaction-limits`](https://developer.github.com/v3/interactions/repos/#remove-interaction-restrictions-for-a-repository)

## migrations
- Start an organization migration:  [`POST /orgs/:org/migrations`](https://developer.github.com/v3/migrations/orgs/#start-an-organization-migration)
- Get a list of organization migrations:  [`GET /orgs/:org/migrations`](https://developer.github.com/v3/migrations/orgs/#get-a-list-of-organization-migrations)
- Get the status of an organization migration:  [`GET /orgs/:org/migrations/:migration_id`](https://developer.github.com/v3/migrations/orgs/#get-the-status-of-an-organization-migration)
- Download an organization migration archive:  [`GET /orgs/:org/migrations/:migration_id/archive`](https://developer.github.com/v3/migrations/orgs/#download-an-organization-migration-archive)
- Delete an organization migration archive:  [`DELETE /orgs/:org/migrations/:migration_id/archive`](https://developer.github.com/v3/migrations/orgs/#delete-an-organization-migration-archive)
- Unlock an organization repository:  [`DELETE /orgs/:org/migrations/:migration_id/repos/:repo_name/lock`](https://developer.github.com/v3/migrations/orgs/#unlock-an-organization-repository)
- Start an import:  [`PUT /repos/:owner/:repo/import`](https://developer.github.com/v3/migrations/source_imports/#start-an-import)
- Get import progress:  [`GET /repos/:owner/:repo/import`](https://developer.github.com/v3/migrations/source_imports/#get-import-progress)
- Update existing import:  [`PATCH /repos/:owner/:repo/import`](https://developer.github.com/v3/migrations/source_imports/#update-existing-import)
- Get commit authors:  [`GET /repos/:owner/:repo/import/authors`](https://developer.github.com/v3/migrations/source_imports/#get-commit-authors)
- Map a commit author:  [`PATCH /repos/:owner/:repo/import/authors/:author_id`](https://developer.github.com/v3/migrations/source_imports/#map-a-commit-author)
- Set Git LFS preference:  [`PATCH /repos/:owner/:repo/import/lfs`](https://developer.github.com/v3/migrations/source_imports/#set-git-lfs-preference)
- Get large files:  [`GET /repos/:owner/:repo/import/large_files`](https://developer.github.com/v3/migrations/source_imports/#get-large-files)
- Cancel an import:  [`DELETE /repos/:owner/:repo/import`](https://developer.github.com/v3/migrations/source_imports/#cancel-an-import)
- Start a user migration:  [`POST /user/migrations`](https://developer.github.com/v3/migrations/users/#start-a-user-migration)
- Get a list of user migrations:  [`GET /user/migrations`](https://developer.github.com/v3/migrations/users/#get-a-list-of-user-migrations)
- Get the status of a user migration:  [`GET /user/migrations/:migration_id`](https://developer.github.com/v3/migrations/users/#get-the-status-of-a-user-migration)
- Download a user migration archive:  [`GET /user/migrations/:migration_id/archive`](https://developer.github.com/v3/migrations/users/#download-a-user-migration-archive)
- Delete a user migration archive:  [`DELETE /user/migrations/:migration_id/archive`](https://developer.github.com/v3/migrations/users/#delete-a-user-migration-archive)
- Unlock a user repository:  [`DELETE /user/migrations/:migration_id/repos/:repo_name/lock`](https://developer.github.com/v3/migrations/users/#unlock-a-user-repository)

## oauthAuthorizations
- List your grants:  [`GET /applications/grants`](https://developer.github.com/v3/oauth_authorizations/#list-your-grants)
- Get a single grant:  [`GET /applications/grants/:grant_id`](https://developer.github.com/v3/oauth_authorizations/#get-a-single-grant)
- Delete a grant:  [`DELETE /applications/grants/:grant_id`](https://developer.github.com/v3/oauth_authorizations/#delete-a-grant)
- List your authorizations:  [`GET /authorizations`](https://developer.github.com/v3/oauth_authorizations/#list-your-authorizations)
- Get a single authorization:  [`GET /authorizations/:authorization_id`](https://developer.github.com/v3/oauth_authorizations/#get-a-single-authorization)
- Create a new authorization:  [`POST /authorizations`](https://developer.github.com/v3/oauth_authorizations/#create-a-new-authorization)
- Get-or-create an authorization for a specific app:  [`PUT /authorizations/clients/:client_id`](https://developer.github.com/v3/oauth_authorizations/#get-or-create-an-authorization-for-a-specific-app)
- Get-or-create an authorization for a specific app and fingerprint:  [`PUT /authorizations/clients/:client_id/:fingerprint`](https://developer.github.com/v3/oauth_authorizations/#get-or-create-an-authorization-for-a-specific-app-and-fingerprint)
- Get-or-create an authorization for a specific app and fingerprint:  [`PUT /authorizations/clients/:client_id/:fingerprint`](https://developer.github.com/v3/oauth_authorizations/#get-or-create-an-authorization-for-a-specific-app-and-fingerprint)
- Update an existing authorization:  [`PATCH /authorizations/:authorization_id`](https://developer.github.com/v3/oauth_authorizations/#update-an-existing-authorization)
- Delete an authorization:  [`DELETE /authorizations/:authorization_id`](https://developer.github.com/v3/oauth_authorizations/#delete-an-authorization)
- Check an authorization:  [`GET /applications/:client_id/tokens/:access_token`](https://developer.github.com/v3/oauth_authorizations/#check-an-authorization)
- Reset an authorization:  [`POST /applications/:client_id/tokens/:access_token`](https://developer.github.com/v3/oauth_authorizations/#reset-an-authorization)
- Revoke an authorization for an application:  [`DELETE /applications/:client_id/tokens/:access_token`](https://developer.github.com/v3/oauth_authorizations/#revoke-an-authorization-for-an-application)
- Revoke a grant for an application:  [`DELETE /applications/:client_id/grants/:access_token`](https://developer.github.com/v3/oauth_authorizations/#revoke-a-grant-for-an-application)

## orgs
- List credential authorizations for an organization:  [`GET /orgs/:org/credential-authorizations`](https://developer.github.com/v3/orgs/#list-credential-authorizations-for-an-organization)
- Remove a credential authorization for an organization:  [`DELETE /orgs/:org/credential-authorizations/:credential_id`](https://developer.github.com/v3/orgs/#remove-a-credential-authorization-for-an-organization)
- List blocked users:  [`GET /orgs/:org/blocks`](https://developer.github.com/v3/orgs/blocking/#list-blocked-users)
- Check whether a user is blocked from an organization:  [`GET /orgs/:org/blocks/:username`](https://developer.github.com/v3/orgs/blocking/#check-whether-a-user-is-blocked-from-an-organization)
- Block a user:  [`PUT /orgs/:org/blocks/:username`](https://developer.github.com/v3/orgs/blocking/#block-a-user)
- Unblock a user:  [`DELETE /orgs/:org/blocks/:username`](https://developer.github.com/v3/orgs/blocking/#unblock-a-user)
- List organization invitation teams:  [`GET /orgs/:org/invitations/:invitation_id/teams`](https://developer.github.com/v3/orgs/members/#list-organization-invitation-teams)
- List pending organization invitations:  [`GET /orgs/:org/invitations`](https://developer.github.com/v3/orgs/members/#list-pending-organization-invitations)
- Create organization invitation:  [`POST /orgs/:org/invitations`](https://developer.github.com/v3/orgs/members/#create-organization-invitation)

## projects
- List user projects:  [`GET /users/:username/projects`](https://developer.github.com/v3/projects/#list-user-projects)
- Create a user project:  [`POST /user/projects`](https://developer.github.com/v3/projects/#create-a-user-project)

## pulls
- Update a pull request review:  [`PUT /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id`](https://developer.github.com/v3/pulls/reviews/#update-a-pull-request-review)

## rateLimit
- Get your current rate limit status:  [`GET /rate_limit`](https://developer.github.com/v3/rate_limit/#get-your-current-rate-limit-status)

## repos
- Enable vulnerability alerts:  [`PUT /repos/:owner/:repo/vulnerability-alerts`](https://developer.github.com/v3/repos/#enable-vulnerability-alerts)
- Disable vulnerability alerts:  [`DELETE /repos/:owner/:repo/vulnerability-alerts`](https://developer.github.com/v3/repos/#disable-vulnerability-alerts)
- List branches for HEAD commit:  [`GET /repos/:owner/:repo/commits/:commit_sha/branches-where-head`](https://developer.github.com/v3/repos/commits/#list-branches-for-head-commit)
- List pull requests associated with commit:  [`GET /repos/:owner/:repo/commits/:commit_sha/pulls`](https://developer.github.com/v3/repos/commits/#list-pull-requests-associated-with-commit)
- Retrieve community profile metrics:  [`GET /repos/:owner/:repo/community/profile`](https://developer.github.com/v3/repos/community/#retrieve-community-profile-metrics)
- Enable a Pages site:  [`POST /repos/:owner/:repo/pages`](https://developer.github.com/v3/repos/pages/#enable-a-pages-site)
- Disable a Pages site:  [`DELETE /repos/:owner/:repo/pages`](https://developer.github.com/v3/repos/pages/#disable-a-pages-site)
- List referrers:  [`GET /repos/:owner/:repo/traffic/popular/referrers`](https://developer.github.com/v3/repos/traffic/#list-referrers)
- List paths:  [`GET /repos/:owner/:repo/traffic/popular/paths`](https://developer.github.com/v3/repos/traffic/#list-paths)
- Views:  [`GET /repos/:owner/:repo/traffic/views`](https://developer.github.com/v3/repos/traffic/#views)
- Clones:  [`GET /repos/:owner/:repo/traffic/clones`](https://developer.github.com/v3/repos/traffic/#clones)

## scim
- Get a list of provisioned identities:  [`GET /scim/v2/organizations/:org/Users`](https://developer.github.com/v3/scim/#get-a-list-of-provisioned-identities)
- Get provisioning details for a single user:  [`GET /scim/v2/organizations/:org/Users/:scim_user_id`](https://developer.github.com/v3/scim/#get-provisioning-details-for-a-single-user)
- Provision and invite users:  [`POST /scim/v2/organizations/:org/Users`](https://developer.github.com/v3/scim/#provision-and-invite-users)
- Provision and invite users:  [`POST /scim/v2/organizations/:org/Users`](https://developer.github.com/v3/scim/#provision-and-invite-users)
- Replace a provisioned user's information:  [`PUT /scim/v2/organizations/:org/Users/:scim_user_id`](https://developer.github.com/v3/scim/#replace-a-provisioned-users-information)
- Update a provisioned organization membership:  [`PUT /scim/v2/organizations/:org/Users/:scim_user_id`](https://developer.github.com/v3/scim/#replace-a-provisioned-users-information)
- Update a user attribute:  [`PATCH /scim/v2/organizations/:org/Users/:scim_user_id`](https://developer.github.com/v3/scim/#update-a-user-attribute)
- Remove a user from the organization:  [`DELETE /scim/v2/organizations/:org/Users/:scim_user_id`](https://developer.github.com/v3/scim/#remove-a-user-from-the-organization)

## teams
- Get team by name:  [`GET /orgs/:org/teams/:team_slug`](https://developer.github.com/v3/teams/#get-team-by-name)
- List pending team invitations:  [`GET /teams/:team_id/invitations`](https://developer.github.com/v3/teams/members/#list-pending-team-invitations)

## users
- List blocked users:  [`GET /user/blocks`](https://developer.github.com/v3/users/blocking/#list-blocked-users)
- Check whether you've blocked a user:  [`GET /user/blocks/:username`](https://developer.github.com/v3/users/blocking/#check-whether-youve-blocked-a-user)
- Block a user:  [`PUT /user/blocks/:username`](https://developer.github.com/v3/users/blocking/#block-a-user)
- Unblock a user:  [`DELETE /user/blocks/:username`](https://developer.github.com/v3/users/blocking/#unblock-a-user)
- Toggle primary email visibility:  [`PATCH /user/email/visibility`](https://developer.github.com/v3/users/emails/#toggle-primary-email-visibility)

<!-- END -->

## Usage

Run the included script, [`regenerate.sh`](regenerate.sh), to update this information.
