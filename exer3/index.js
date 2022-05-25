const express = require("express");
const app = express();
app.listen(3000);

// Create an array of 5 names. Define two routes: one will be of type “/person” and the other will be /person/:parameter’. When entering the first route, it will return the list of people and when entering the second, it will return the requested person.

let array = ["Erlantz", "Peio", "Carla", "Julen", "Dylan"];

app.get("/people", function(req, res){
    res.send(array)
})


app.get("/people/:parameter", function(req, res){
    let parameter = req.params.parameter;
    let exist = false;
    array.forEach(element=>{
        if(element.toLowerCase() === parameter.toLowerCase()){
            exist = true;
        }
    })
    if(exist){
        res.send(parameter);
    } else {
        res.send("The name is not on the list");
    }
})