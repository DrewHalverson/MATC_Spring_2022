const TaskManager = require("./taskManager");
const mgr = new TaskManager

mgr.allTasks(data => {
    console.log(data);
})