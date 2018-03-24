'use strict'
const request = require('../request')
const {URL, parse:urlParse} = require('url')

module.exports =  async baseurl=>{
    let icons = []
    return new Promise(async (resolve, reject)=>{
        let url = new URL('/favicon.ico', baseurl).href
        try {
            let response = await request(url, {
                method:'HEAD'
            })
            console.log(response.headers)
            if(
                response.status ==200 &&
                parseInt(response.headers['content-length'],10) > 0 &&
                response.headers['content-type'] == 'image/x-icon'
            ){
                icons.push({
                    src:url,
                    sizes:'',
                    type:'image/x-icon',
                    origin:'site/favicon.ico'
                })
            }
        } catch (error) {
            
        }
        resolve(icons)
    })
}