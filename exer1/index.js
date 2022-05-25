// Create an express app with a get call that returns the following HTML: "Hello World from express"

const express = require('express');
const app = express();
app.listen(3000)


app.get("/", (req, res)=>{
    res.send(`
    <h1>Hello World</h1>
    <h2>from Express</h2>
    `)
})