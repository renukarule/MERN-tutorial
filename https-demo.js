const http = require('http')

http.createServer((req, res ) => {
res.write('This is renu from server');
res.end();
})
.listen(3000, () => console.log('server is running..'));