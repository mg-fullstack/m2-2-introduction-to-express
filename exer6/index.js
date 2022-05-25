const express = require("express");
const app = express();
app.listen(3000);

// Declare an array with the names of the Bootcamp students. Create an application in which elements can be added to that array using the get method. Add the names of the teachers.

let array = ["Miguel", "Ander", "Ruben", "Alvaro", "Lucia", "Samuel"];

app.get("/", function(req, res){
    res.send(array)
})


app.get("/:parameter", function(req, res){
    let parameter = req.params.parameter;
    array.push(parameter)
    res.send(array)
})