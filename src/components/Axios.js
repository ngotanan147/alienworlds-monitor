import axios from 'axios';
import rateLimit from 'axios-rate-limit';
import axiosRetry from 'axios-retry';

const http = rateLimit(axios.create(), {
    maxRequests: 20, perMilliseconds: 1000, maxRPS: 20,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
})

axiosRetry(http, { retries: 2, retryDelay: axiosRetry.exponentialDelay });

console.log("USER MAX RPS: " + http.getMaxRPS())

export default http;