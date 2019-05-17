const { readFileSync } = require('fs')

const splitReadme = () => {
  const readme = readFileSync('README.md', {encoding: 'utf8'})
  const readmeLines = readme.split('\n')
  const contentBegin = readmeLines.indexOf('<!-- BEGIN -->')
  const contentEnd = readmeLines.indexOf('<!-- END -->')
  const head = readmeLines.slice(0, contentBegin + 1).join('\n')
  const foot = readmeLines.slice(contentEnd, readmeLines.length).join('\n')

  return [head, foot]
}

module.exports = splitReadme
