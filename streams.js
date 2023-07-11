const http = require('http')

const server = http.createServer((req,res) =>{
    const url = req.url
    if(url === "/"){
        res.writeHead(200 ,{'content-type':'type/html'})
        res.end('<h1>Home</h1>')
    }
    else if(url === "/about"){
        res.writeHead(200 ,{'content-type':'type/html'})
        res.end('<h1>about</h1>')
    }
  else{
        res.writeHead(404 ,{'content-type':'type/html'})
        res.end('<h1>Page not found</h1>')
    }
})
server.listen(9090)