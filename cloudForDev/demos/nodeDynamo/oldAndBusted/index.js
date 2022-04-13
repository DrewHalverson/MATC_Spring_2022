
let AWS = require("aws-sdk");

AWS.config.update( {
    "region": "us-east-1",
    "endpoint": "http://localhost:8000"
} );

let dynamoDB = new AWS.DynamoDB();

let params = {
    "TableName": "BaseballStats"
};

dynamoDB.scan(params,function(error, data) {
    if(error){
        console.error(error);
    } 

    console.log(data);
// log team ID
    // for(i=0; i < data.Items.length; i++ ) {
    //     console.log(data.Items[i].TeamID);
    // }

// log player name excluding items that do not contain a player name
    // for(i=0; i < data.Items.length; i++ ) {
    //     if(data.Items[i].PlayerName) {
    //         console.log(data.Items[i].PlayerName);
    //     }
    // }



} )


