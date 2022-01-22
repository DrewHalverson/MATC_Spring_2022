/* 
This is the JavaScript library
file for the Web page in the 
customerComment.html
file.
*/


/*------------------------------------------
  This function validates the entry fields
------------------------------------------*/
function checkFormInputs()  {
	var no_errors_found = true;
	
	var ID_PATTERN = /^[a-zA-Z]('?[- [a-zA-Z]){1,19}/;
	var enteredValue = document.getElementById("firstname").value;
	if (!ID_PATTERN.test(enteredValue)) {
        document.getElementById("firstname_error").innerHTML = "First Name must contain at least one character and start with a-z";
        document.form01.firstname.select();
		document.getElementById("firstname").style.backgroundColor = 'yellow';
        no_errors_found = false;     // leave now
	} else {
		document.getElementById("firstname").style.backgroundColor = 'white';
		document.getElementById("firstname_error").innerHTML = "";
	}
    
	var ID_PATTERN = /^[a-zA-Z]('?[- [a-zA-Z]){2,19}/;
	var enteredValue = document.getElementById("lastname").value;
	if (!ID_PATTERN.test(enteredValue)) {
//        document.getElementById("lastname_error").innerHTML = "Last Name must contain at least two characters and start with a-z";
//        document.form01.lastname.select();
//		document.getElementById("lastname").style.backgroundColor = 'yellow';
        window.alert('Last Name must contain at least two characters and start with a-z');   
        no_errors_found = false;     // leave now
	} else {
		document.getElementById("lastname").style.backgroundColor = 'white';
		document.getElementById("lastname_error").innerHTML = "";
	}
	
	
	if (document.form01.comments.value.length < 10) { 
        document.form01.comments.focus();
		document.getElementById("comments").style.backgroundColor = 'yellow';
        document.getElementById("comments_error").innerHTML = "Comments must be at least 10 characters";
        no_errors_found = false;    // leave now
    } else {
		document.getElementById("comments").style.backgroundColor = 'white';
		document.getElementById("comments_error").innerHTML = "";
	}
	
	var elementExists = document.getElementById("telephone");
	if (elementExists) {
		if (document.form01.telephone.value.length <= 9) {
			document.getElementById("telephone").style.backgroundColor = 'yellow';
			document.getElementById("telephone_error").innerHTML = "Telephone entry must be at least 9 characters";
			document.form01.telephone.select();
			no_errors_found = false;    // leave now
		} else {
			document.getElementById("telephone").style.backgroundColor = 'white';
			document.getElementById("telephone_error").innerHTML = "";
		} 
					
    }
	
	
	// check to see that no validation errors were found
	if (no_errors_found) {
		return true;
	} else {
		return false;
	}
	
}

function resetFields() {
	document.getElementById("firstname").style.backgroundColor = 'white';
	document.getElementById("firstname_error").innerHTML = "";
	document.getElementById("lastname").style.backgroundColor = 'white';
	document.getElementById("lastname_error").innerHTML = "";
	document.getElementById("comments").style.backgroundColor = 'white';
	document.getElementById("comments_error").innerHTML = "";
	document.getElementById("contact").checked = false;
	document.getElementById("moreinfo").innerHTML = "<br /><br />";	
}

function checkContact() {
	if (document.getElementById("contact").checked == true ) {
        document.form01.contact.focus();
		document.getElementById("moreinfo").innerHTML = '<br /><br />'
				    + '<fieldset><legend>Contact Info</legend>'
					+ '<label class="setWidth" for="telephone">Local Telephone:</label>'
				    + '<input type="tel" id="telephone" '
					+ '	 name="telephone"  '
//					+ '	 required="required" '
					+ '	 maxlength="15" '
					+ '	 placeholder="Telephone Number" /> '
					+ '	 <span id="telephone_error" class="errorMessages"></span> '					
				    + '<br /><br />	 '
				    + '<label class="setWidth" for="email">Email:</label> '
				    + '<input type="email" id="email" '
					+ '	 name="email" '
//					+ '	 required="required" '
					+ '	 maxlength="40" '
					+ '	 placeholder="Email Address" /></fieldset> ';
					
        return false;    // leave now
    } else {
		document.getElementById("moreinfo").innerHTML = "<br /><br />";
	}
}