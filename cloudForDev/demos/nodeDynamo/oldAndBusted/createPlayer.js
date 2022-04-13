// "Item": {
//     "TeamID":{"S":"PLAYERINFO_LAA"},
//     "SK":{"S":"27"},
//     "PlayerName":{"S":"Mike Trout"},
//     "Position":{"S":"CF"}
// }

let AWS = require("aws-sdk");

AWS.config.update( {
    "region": "us-east-1",
    "endpoint": "http://localhost:8000"
} );

let dynamoDB = new AWS.DynamoDB();

let player  = {
        "TeamID":{"S":"PLAYERINFO_MIL"},
        "SK":{"S":"22"},
        "PlayerName":{"S":"Christian Yelich"},
        "Position":{"S":"RF"}
    }

let params = {
    "TableName": "BaseballStats",
    "Item": player
};

dynamoDB.putItem(params, function(error, data) {
    if(error){
        console.error(error);
    } else {
        console.log(data);
        console.log("player was successfully created");
    }

});


