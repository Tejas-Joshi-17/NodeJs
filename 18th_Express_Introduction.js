const express = require("express")
const app = express()

app.get('', (req, res) =>{     
    res.send("`This is Home Page")
})

app.get('/About', (req, res) =>{    // Apply for both About/about
    res.send(`This is About Page`)
})

app.get('/Login', (req, res) =>{    // Apply for both Login/login
    res.send(`This is Login Page`)
})

app.listen(5000)