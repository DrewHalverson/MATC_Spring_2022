const http = require("http");
const fs = require("fs");

let server = http.createServer((req, res) => {
    //let content = "hello world";
    let fileName = "index.html";
    fs.readFile(fileName, (err, data) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(data.toString());
    res.end();
    })
})

server.listen(3000);

console.log("listening on port 3000...");
