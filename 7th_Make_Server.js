const http = require("http")

http.createServer((req, res) =>{        // Passing Function as a Parameter
    res.write(`<div style="font-size:30px; color:red">Hello from Tejas Joshi</div>`)
    res.end()
}).listen(4500)


const Data_Control = (req, res) =>{
    res.write(`<div style="font-size:30px; color:red">Hello from Tejas Joshi</div>`)
    res.end()
}

// http.createServer(Data_Control).listen(4500)