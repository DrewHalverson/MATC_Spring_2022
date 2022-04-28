const express = require("express");
const fs = require('fs');
const app = express();

// first endpoint - outputs hello, world to page using GET - Base url = localhost:3000
app.get("/", (req, res) => {
    res.send("<h1>hello, world</h1>");
});

//second endpoint - Outputs JSON object - Requires adding /api/movie to base URL
let movie = [{"id": 1, "title": "The Fellowship of the Ring"}];

app.get("/api/movie/", (req,res) => {
    res.json(movie);
});

// third endpoint - outputs HTML page - Requires adding /api/lab10.html to base URL
app.get("/api/lab10.html/", (req,res) => {
    fs.readFile('lab10.html', 'utf8', (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        res.send(data);
      })
});

//starts server and listens on port 3000
app.listen(3000, () => {
    console.log("listening on port 3000");
});