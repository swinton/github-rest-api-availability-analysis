const splitReadme = require('./split-readme')
const routesMissing = require('./missing-routes')()

function main() {
  // Split up README
  const [ readmeHead, readmeFoot ] = splitReadme()

  // Begin README
  console.log(readmeHead)

  // Generate a table
  for (const namespace of Object.keys(routesMissing)) {
    console.log(`## ${namespace}`)
    for (const route of routesMissing[namespace]) {
      console.log(`- ${route.name}:  [\`${route.method} ${route.path}\`](${route.documentationUrl})`)
    }
    console.log('')
  }

  // End README
  console.log(readmeFoot)
}

main()
