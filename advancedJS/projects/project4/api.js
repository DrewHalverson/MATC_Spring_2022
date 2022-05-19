const express = require("express");
const app = express();
const fs = require("fs");
const cors = require('cors');

app.use(express.json());
app.use(cors());


let rawData = fs.readFileSync('data.json');

let tasks = JSON.parse(rawData);

//GET
app.get("/api/tasks/", (req, res) => {
    res.json(tasks);
});


// POST 

app.post("/api/tasks/", (req, res) => {
    let newTaskRaw = {
        "id": tasks.length +1,
        "title": req.body.title
    }

    fs.readFile('./data.json', 'utf-8', (err,data) => {
        if (err) console.error(err);
        let taskArray = JSON.parse(data);
        taskArray.push(newTaskRaw);

        fs.writeFile('./data.json', JSON.stringify(taskArray), 'utf-8', (err) => {
            if (err) console.error(err);
            console.log("completed!");
        })
    })
});

// DELETE 

app.delete("/api/courses/:id", (req, res) => {

    fs.readFile('./data.json', 'utf-8', (err,data) => {
        if (err) console.error(err);
        let taskArray = JSON.parse(data);
        let taskToRemove = taskArray.find(t => t.id == parseInt(req.params.id));
        taskArray.splice(taskToRemove,1);

        console.log(taskArray);

        fs.writeFile('./data.json', JSON.stringify(taskArray), 'utf-8', (err) =>{
            if (err) console.error(err);
            console.log('deleted!');
        })

    })
})



app.listen(3030, () => {
    console.log("listening on port 3030");
})


