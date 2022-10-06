var express = require("express");
var app = express();
var dataPrep = require("./data_prep")

var HTTP_PORT = process.env.Port || 8080;

function onHttpStart(){
    console.log("Express http server listening on: "+ HTTP_PORT);
}

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/views/home.html");
});

app.listen(HTTP_PORT, onHttpStart);

app.get("/GPA", (req,res) =>{
    dataPrep.get().then((data) =>{
        const student = data;
        let resText = "<br>";
        resText = JSON.stringify(student) + "<br>";
        res.send(resText);
    }).catch((err) =>{
        res.send("Message: ", err);
    })
})