init = () => {

    let students = [
            {"id": 1, "name": "John Doe", "email": "jdoe@gmail.com" }, 
            {"id": 2, "name": "Jane Doe", "email": "jdoe2@gmail.com" },
            {"id": 3, "name": "Jack Smith", "email": "jsmith@gmail.com" }, 
            {"id": 4, "name": "Laura Smith", "email": "lsmith@gmail.com" }, 
            {"id": 5, "name": "Eric Jones", "email": "ejones@gmail.com" }];

    for(let i = 0; i < students.length; i++) {
        console.log(`id: ${students[i].id}\nemail: ${students[i].email}`);
    }
}

window.onload = init;