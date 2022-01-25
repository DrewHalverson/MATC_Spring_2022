// initial submission

// function validate() {

//     // Declare and assign variables
//     let form = document.getElementById("form");
//     let output = form.username.value;

//     // validate if user has entered a username in text field and output appropriate message
//     if (output == "") {
//         alert("username is a required field");
//     } else {
//         alert("You have entered " + output + " as the user name.");
//     }
// }


// refactored

const validate = () => {
    let usernameField = document.querySelector("#username");
    console.log(usernameField.value);
    if (username.value == "") {
        alert("username is a required field");
    } else {
        alert("You have entered " + usernameField.value + " as the user name.");
    }
}