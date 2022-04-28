let mysql = require("mysql");

class TaskManager {

    allTasks(callBack) {
        let connection = mysql.createConnection({
            "host": "127.0.0.1",
            "database": "ToDo",
            "user": "root",
            "password": "Sylvan 99!"
        });

        let query = "select * from tasks";

        connection.query(query, (err,data) => {
            if(err) throw err;
            callBack(data);
        })
    }
}

module.exports = TaskManager