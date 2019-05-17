const routesDotCom = require('@octokit/routes/routes/api.github.com')

module.exports = () => {
  const routesMissing = {}

  // Iterate over each api.github.com namespace, e.g. 'repos`
  for (const namespace of Object.keys(routesDotCom)) {
    let routesGHES216
    const routesGHES216ByIdName = {}
  
    try {
      routesGHES216 = require(`@octokit/routes/routes/ghe-2.16/${namespace}`)
      for (const route of routesGHES216) {
        Object.assign(routesGHES216ByIdName, {[route.idName]: route})
      }
    } catch (e) {
      // Add **all** routes within namespace to routesMissing
      Object.assign(routesMissing, {[namespace]: routesDotCom[namespace]})
      continue
    }
  
    // Extract idName, method and path for each route within namespace
    // E.g. 'get', GET', '/repos/:owner/:repo'
    for (const route of routesDotCom[namespace]) {
      const { idName } = route
      const routeMissing = !routesGHES216ByIdName.hasOwnProperty(idName)
      if (routeMissing) {
        routesMissing[namespace] = routesMissing[namespace] || []
        routesMissing[namespace].push(route)
      }
    }
  }
  
  return routesMissing  
}
