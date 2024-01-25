const http = require("http")

const Data = [
    {Name : "Tejas Joshi", Age:21},
    {Name : "Sachin Tendulkar", Age:46},
    {Name : "Virat Kohli"}
]


http.createServer((req, res) =>{
    res.writeHead(200, {'content-type': 'application.json'})    // Convert Object into String
    // res.write(JSON.stringify({Name:"Tejas Joshi", Age:21}))
    res.write(JSON.stringify(Data))
    res.end()
}).listen(5000)