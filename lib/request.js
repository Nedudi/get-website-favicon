'use strict'
const axios = require('axios').create({
    headers: {
        // 'Accept': '*/*',
        'accept-language': 'en,ru;q=0.9,sv;q=0.8,en-US;q=0.7',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        'Pragma': 'no-cache',
        'Accept-Encoding': 'gzip, identity',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36',
    },
    // withCredentials: true,
    maxRedirects: 10,
    timeout: 10000
})


//TODO: add custom options, such as interceptor, be used for set proxy or rule
module.exports = async (url, options={})=>{
    options.url = url
    return await axios.request(options)
}
