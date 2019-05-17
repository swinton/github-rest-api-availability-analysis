const routesMissing = require('./missing-routes')()

// Generate a table
for (const namespace of Object.keys(routesMissing)) {
  console.log(`## ${namespace}`)
  for (const route of routesMissing[namespace]) {
    console.log(`- ${route.name}:  [\`${route.method} ${route.path}\`](${route.documentationUrl})`)
  }
  console.log('')
}
