const { response } = require('express');
const express = require('express');
const app = express();
app.listen(3000);

// 2. Create an application with a route that can be reached by a parameter in the url. When making a get request to that route, the server will return a random number between 1 and the number that arrives as a parameter.

app.get("/:num", function(req, res){
    let variableNum = parseInt(req.params.num);
    let random = Math.floor(Math. random() * (variableNum) + 1);
    res.send(JSON.stringify(random))

})