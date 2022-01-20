function validate() {

    // Declare and assign variables
    let form = document.getElementById("form");
    let output = form.username.value;

    // validate if user has entered a username in text field and output appropriate message
    if (output == "") {
        alert("username is a required field");
    } else {
        alert("You have entered " + output + " as the user name.");
    }
}
