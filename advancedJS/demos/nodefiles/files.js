const fs = require("fs");

let fileName = "dummy.txt";

// READ FILE
// fs.readFile(fileName, (err, data) => {
//     if(err) console.error(err);

//     console.log(data.toString());
// })

//APPEND TO FILE
let newText = " here is some more new text";

//ASYNCHRONOUS METHOD FOR APPENDING TO FILE
// fs.appendFile(fileName, newText, err=> {
//     if(err) console.error(err);
// })

//SYNCHRONOUS METHOD FOR APPENDING TO FILE
//fs.appendFileSync(fileName, newText);

// RENAME FILE
let newFileName = "renamedFile.txt";

//ASYNCHRONOUS METHOD FOR RENAMING FILE
// fs.rename(fileName, newFileName, err=> {
//     if(err) console.error(err);
// })

//SYNCHRONOUS METHOD FOR RENAMING FILE
//fs.renameSync(fileName, newFileName);

//CREATE NEW FILE

//ASYNC
// fs.writeFile(fileName, newText, err=> {
//     if(err) console.error(err);
// })

//SYNC
//fs.writeFileSync(fileName, newText);

//DELETE A FILE
//ASYNC
// fs.unlink(fileName, err=> {
//     if(err) console.error(err);
// })
//SYNC
fs.unlinkSync(fileName);