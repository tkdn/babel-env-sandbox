if (BABEL_ENV != 'development' && BABEL_ENV != 'chrome') {
  require('whatwg-fetch')
}

/**
 * Async Function
 * 
 */
async function asyncFunction () {
  const response = await fetch('https://api.github.com/orgs/mediba-system')
  const json = response.json()
  return json
}

export default asyncFunction
