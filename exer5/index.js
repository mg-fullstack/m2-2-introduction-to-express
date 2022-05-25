const express = require("express");
const app = express();
app.listen(3000);

// Declare an array with the names of the Bootcamp students. Create an application in which elements can be added to that array using the get method. Add the names of the teachers.

let people = {
    name: "",
    surname: "",
    age: -1
}

app.get("/", function(req, res){
    res.send(people)
})

app.get("/name/:name", function(req, res){
    people.name = req.params.name
    res.send("edited name")
})
app.get("/surname/:surname", function(req, res){
    people.surname = req.params.surname
    res.send("edited surname")
})
app.get("/age/:age", function(req, res){
    people.age = parseInt(req.params.age)
    res.send("edited age")
})