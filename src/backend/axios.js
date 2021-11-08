const axios = require('axios')
const rateLimit = require('axios-rate-limit')
const axiosRetry = require('axios-retry')

const http = rateLimit(axios.create(), {
    maxRequests: 1000, perMilliseconds: 1000, maxRPS: 1000,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
})

axiosRetry(http, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

console.log("Server Axios RPS: " + http.getMaxRPS())

module.exports = http;