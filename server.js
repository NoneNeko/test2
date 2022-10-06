var express = require("express");
var app = express();
var dataPrep = require("./data_prep");
app.use(express.static('public'));

var HTTP_PORT = process.env.Port || 8080;

function onHttpStart(){
    console.log("Express http server listening on: "+ HTTP_PORT);
}

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/views/home.html");
});

app.get("/GPA", (req,res) =>{
    dataPrep.cpa().then((data) =>{
        const student = data;
        let resText = "<br>";
        resText = JSON.stringify(student) + "<br>";
        res.send(resText);
    }).catch((err) =>{
        res.send("Message: ", err);
    })
})

app.get("highGPA", (req,res) =>{
    dataPrep.highGPA().then((data) =>{
        const highStudent = data;
        let resText = "<br>";
        resText = JSON.stringify(highStudent) + "<br>";
        res.send(resText);
    }).catch((err) =>{
        res.send("Message: ", err);
    })
})

app.use((req, res) =>{
    res.status(404).send("<b>Error 404: Page not found.</b>");
})

dataPrep.prep().then(() =>{
    app.listen(HTTP_PORT, onHttpStart);
}).catch((err) =>{
    console.log(err);
})