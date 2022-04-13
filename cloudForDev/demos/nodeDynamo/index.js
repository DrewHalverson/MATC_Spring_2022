let AWS = require("aws-sdk");

AWS.config.update({region: "us-east-1"});

let docClient = new AWS.DynamoDB.DocumentClient({endpoint: "http://localhost:8000"});

let params = {
    TableName: "BaseballStats",
    // query params
    KeyConditionExpression: "TeamID = :t",
    ExpressionAttributeValues: {
        ":t": "PLAYERINFO_LAA",
        ":p": "Shohei Ohtani"
    },
    // filter table data 
    FilterExpression: "PlayerName = :p"

    // FilterExpression: "PlayerName = :p",
    // ExpressionAttributeValues: {
    //     ":p": "Aaron Judge"
    // }
}

// scan all items in table and return data if there are no errors
// docClient.scan(params, (error, data) => {
//     if(error) {
//         console.error(error);
//     } else {
//         console.log(data);
//     }
// });
// scans and returns only the Team ID
// docClient.scan(params, (error, data) => {
//     if(error) {
//         console.error(error);
//     } else {
//         for(let i =0; i < data.Items.length; i++) {
//             let teamID = data.Items[i].TeamID;
//             console.log(`TeamID: ${teamID}`);
//         }
//     }
// });

// scan using filter
// docClient.scan(params, (error, data) => {
//     if(error) {
//         console.error(error);
//     } else {
//         console.log(data);
//     }
// });
// query table
docClient.query(params, (error, data) => {
    if(error) {
        console.error(error);
    } else {
        console.log(data);
    }
});