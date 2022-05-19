const init = () => {

    // adds new task to task list
    const addNewTask = () => {
        console.log("adding a new task...");

        let xhr = new XMLHttpRequest();
        let url = "https://ghu8xhzgfe.execute-api.us-east-1.amazonaws.com/tasks";
        let apiKey = "Itcheui2tB58SlUGe8rrP8mskudGsNDT9nfKKG9S";
        let studentId = "2694082"
        let taskDescription = document.querySelector("#description").value;
        let params = {
            "StudentId" : studentId,
            "Description" : taskDescription  
        };

        xhr.open("post", url);

        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("x-api-key", apiKey);

        xhr.onreadystatechange = () => {
            if(xhr.readyState ==4) {
                console.log("new record was added");
                location.reload();
            }
        }

        xhr.send(JSON.stringify(params));

        // clear form entry
        document.getElementById("description").value = "";

    }

    // reads the existing task list and outputs it to the page. 
    const getTasks = () => {
        let xhr = new XMLHttpRequest();
        let url = "https://ghu8xhzgfe.execute-api.us-east-1.amazonaws.com/tasks/";
        let apiKey = "Itcheui2tB58SlUGe8rrP8mskudGsNDT9nfKKG9S";
        let studentID = "2694082"

        xhr.open("get", url + studentID);

        xhr.setRequestHeader("x-api-key", apiKey);

        xhr.onreadystatechange = () => {
            if(xhr.readyState ==4) {
                let taskData = JSON.parse(xhr.responseText);

                let tasks = taskData.Items;
 
                for(let i = 0; i < tasks.length; i++) {

                    let task = `${tasks[i].Description}`;

                    // create delete button
                    let deleteButton = document.createElement("button");
                    let deleteID = task + "Button";
                    deleteButton.setAttribute("type", "button");
                    deleteButton.setAttribute("name", "deleteButton");
                    deleteButton.setAttribute("id", '"' + deleteID + '"' );
                    deleteButton.setAttribute("value", "Delete");
                    deleteButton.setAttribute("class", "btn d-inline-block");
                    deleteButton.innerHTML = '<img src="images/delete-icon.png" width="25" height="25"/>';
                    
                    // event listener for delete button
                    deleteButton.addEventListener("click", () => {
                        deleteTask(task)
                    });

                    // create paragraph for task description
                    let taskText = document.createElement("p");
                    taskText.setAttribute("id", '"' + task + '"');
                    taskText.setAttribute("class", "d-inline-block mx-4");
                    taskText.innerHTML = task;

                    // create div for task item
                    let taskDiv = document.createElement("div");
                    taskDiv.setAttribute("id", "taskDiv");
                    taskDiv.appendChild(deleteButton);
                    taskDiv.appendChild(taskText);

                    // output task to web page
                    document.getElementById("main").appendChild(taskDiv);
                }               
            }
        }
        xhr.send(null);
    }

    // deletes a task 
    const deleteTask = (task) => {

            let xhr = new XMLHttpRequest();
            let url = "https://ghu8xhzgfe.execute-api.us-east-1.amazonaws.com/tasks";
            let apiKey = "Itcheui2tB58SlUGe8rrP8mskudGsNDT9nfKKG9S";
            let studentId = "2694082";

            let params = {
                "StudentId" : studentId,
                "Description" : task
            };
    
            xhr.open("delete", url);
    
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("x-api-key", apiKey);
    
            xhr.onreadystatechange = () => {
                if(xhr.readyState ==4) {
                    console.log("task was deleted");
                    location.reload();
                }
            }
    
            xhr.send(JSON.stringify(params));
    }

    // runs the getTasks function to retrieve the task list on page load. 
    onload = getTasks();

    // event listener to add a new task on button click
    document.querySelector("#addNewTask").addEventListener("click", addNewTask);
}

window.onload = init;