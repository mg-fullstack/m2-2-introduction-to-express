const express = require("express");
const random = require("./random");
const app = express();
app.listen(3000);

// With the two modules from the previous exercise, create an application in which to make get-type requests to which you add “/delete/:number” to delete the number (set it to zero) indicated (if it exists), not the index in which it is found.

let array = [0,0,0,0,0,0,0,0,0,0];

app.get("/", function(req, res){
    res.send(array)
})


app.get("/add", function(req, res){
    array[random()]++
    res.send(array)
})

app.get("/delete/:num", function(req, res){
    let number = parseInt(req.params.num)
    array.forEach((element, i)=>{
        if(element === number){
            array[i] = 0;
        }
    })
    res.send(array)
})