// CREATES A WEB SERVER
// const http = require("http");

// http.createServer((req, res) => {
//     res.write("hello world from nodejs");
//     res.end();
// }).listen(3000);

// console.log("listening on port 3000");

const Logger = require("./logger");
let logger = new Logger();

logger.on("messageLogged", eventArgs => {
    console.log("--------------------------");
    console.log("messageLogged event triggered");
    console.log("--------------------------");
    console.log(eventArgs);
    console.log("--------------------------");
})

logger.log("hello world");

