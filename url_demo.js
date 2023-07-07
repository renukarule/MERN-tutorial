const  url = require('url')

const myurl = new URL('https://www.google.com?id=4&status=true')

console.log(myurl.searchParams)