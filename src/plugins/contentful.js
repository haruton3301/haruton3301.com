const contentful = require('contentful')
// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js

console.log(process.env)
const config = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
}

// export `createClient` to use it in page components
export default contentful.createClient(config)
