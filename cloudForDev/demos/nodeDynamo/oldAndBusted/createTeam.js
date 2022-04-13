// "Item": {
//     "TeamID":{"S":"TEAMINFO_LAA"},
//     "SK":{"S":"LAA"},
//     "TeamName":{"S":"Los Angeles Angels"}
// }

let AWS = require("aws-sdk");

AWS.config.update( {
    "region": "us-east-1",
    "endpoint": "http://localhost:8000"
} );

let dynamoDB = new AWS.DynamoDB();

let team  = {
        "TeamID":{"S":"TEAMINFO_MIL"},
        "SK":{"S":"MIL"},
        "TeamName":{"S":"Milwaukee Brewers"}
    }

let params = {
    "TableName": "BaseballStats",
    "Item": team
};

dynamoDB.putItem(params, function(error, data) {
    if(error){
        console.error(error);
    } else {
        console.log(data);
        console.log("team was successfully created");
    }

});


