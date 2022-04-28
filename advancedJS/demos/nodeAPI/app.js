/* RESTful api located at /api/courses 
    -get
    -post
    -put
    -delete
*/

const express = require("express");
const app = express();
// tells application to use json middleware
app.use(express.json());

let courses = [
    {"id": 1, "title": "adv.js"},
    {"id": 2, "title": "adv. css"},
    {"id": 3, "title": "cloud"},
    {"id": 4, "title": "uiux"},
    {"id": 5, "title": "databases"}
];

// GET examples

// returns a list of all data in courses. /api/courses/ needs to be included in url
app.get("/api/courses/", (req,res) => {
    res.json(courses);
});

// returns an individual course based on ID entered in url. If ID does not exist, returns error message. 
app.get("/api/courses/:id", (req, res) => {
    let course = courses.find(c => c.id == parseInt(req.params.id));
    if(course) res.json(course);
    else res.json("Your course does not exist");
});

// outputs a message to the web page
app.get("/", (req, res) => {
    res.send("hello, world");
});

// POST examples

//posts a new course via postman
app.post("/api/courses/", (req, res) => {
    let newCourse = {
        // id functionality is for demo only. Will break when deleting, adding, etc. 
        "id": courses.length + 1,
        "title": req.body.title
    }
    courses.push(newCourse);
    res.json(newCourse);
})

// DELETE example 

app.delete("/api/courses/:id", (req, res) => {
    let courseToDelete = courses.find(c => c.id == parseInt(req.params.id));
    let index = courses.indexOf(courseToDelete);
    courses.splice(index, 1);
    res.json(courseToDelete);
})


// PUT example

app.put("/api/courses/:id", (req, res) => {
    let courseToUpdate = courses.find(c => c.id == parseInt(req.params.id));
    courseToUpdate.title = req.body.title;
    res.json(courseToUpdate);
})

//starts server and listens on port 3000
app.listen(3000, () => {
    console.log("listening on port 3000");
});