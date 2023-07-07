const http = require('http')

const server = http.createServer((req,res) =>{
res.end  ('Welcome')

})

server.listen(5000)