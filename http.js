const http = require('http')
const server = http.createServer((req, res)=>{
if (req.url === '/'){s
    res.end('welcome to our homepage')
}
if (req.url === '/about'){
    res.end(' here is our short history' )
}
res.end(`<h1>Opps<h1>
<a href ="/"> Back home</a>`)
})
server.listen(5000)
