const validateForm = () => {
    console.log('this is working');
    let fName = document.forms["lab13Form"]["fname"].value;
    let lName = document.forms["lab13Form"]["lname"].value;
    let email = document.forms["lab13Form"]["email"].value;
    let hPhone = document.forms["lab13Form"]["homephone"].value;
    if (fName == "") {
      alert("First name must be filled out");
      return false;
    } else if (lName == "") {
        alert("Last name must be filled out");
        return false;
    } else if (email == "") {
        alert("Emailmust be filled out");
        return false;
    } else if (hphone == "") {
        alert("Home Phone must be filled out");
        return false;
      }
  }
 