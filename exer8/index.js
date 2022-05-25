const express = require("express");
const random = require("./random");
const app = express();
app.listen(3000);

// Create a module of its own with an array of 10 zeroes. Create another module with a function that returns a random number between 0 and 9. Create a route so that every time a get request is made, the random number method is called and 1 is added to the value of the number in the index of the random number. Shows the array with the values in the response.

let array = [0,0,0,0,0,0,0,0,0,0];

app.get("/", function(req, res){
    res.send(array)
})


app.get("/add", function(req, res){
    array[random()]++
    res.send(array)
})