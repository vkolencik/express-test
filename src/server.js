import fetch from 'node-fetch'

exports.handler = async function (event, context) {
  const uuid = await fetch('https://www.uuidgenerator.net/api/guid')
  return {
    statusCode: 200,
    body: `Hello, world! {${uuid}}`
  };
}
