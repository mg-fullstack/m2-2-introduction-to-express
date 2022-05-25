const express = require("express");
const greetInExpress = require("./file");
const app = express();
app.listen(3000);

// Create an express application with an index.js and a separate .js file in which you will have a greetInExpress function that returns a string. Import this module in index.js and create a route so that every time a get request is made to that route, the string returned by the function is displayed.

app.get("/", function(req, res){
    res.send(greetInExpress())
})