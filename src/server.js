import fetch from 'node-fetch'

exports.handler = async function (event, context) {

  const response = await fetch('https://www.uuidgenerator.net/api/guid')
  const responseText = await response.text()

  const name = event.queryStringParameters['name'] || 'world'
  return {
    statusCode: 200,
    body: `Hello, ${name}! Your unique GUID is: {${responseText}}`
  };
}
