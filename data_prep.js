var fs = require("fs");

module.exports ={
    prep,
    cpa,
    highGPA,
}
let students = [];

function prep(){
    return new Promise((resolve,reject) =>{
        fs.readFile('./students.json',(err,data)=>{
            if(err)
            {
                reject("Unable to read file.");
            }
            else{
                students=JSON.parse(data);
                resolve();
            }
        })
    })
}


function cpa(){
    return new Promise((resolve, reject) =>{
        if(students.length == 0)
        {
            reject("No results returned!");
        }
        else{
            resolve(students);
        }
    })
}

function highGPA(){
    return new Promise((resolve, reject) =>{
        let highest = Math.max(students.gpa);
        if (highest.length == 0)
        {
            reject("no result returned");
        }
        else{
            resolve(highest);
        }
    });
}
