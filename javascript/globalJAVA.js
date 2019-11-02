/* for reponsive navbar */
			function myFunction() {
			  var x = document.getElementById("navbar01");
			  if (x.className === "gennavb") {
			    x.className += " responsive";
			  } else {
			    x.className = "gennavb";
			  }
			}


			/*form validation*/

		function checkFname (document) {

			var fname = document.getElementById("fname");
			var fname_msg = document.getElementById('fname_msg');


			if (fname.value == "") { 

			fname_msg.innerHTML="You did not enter a name.Please enter your name now.";
			fname.focus();
			return false;

			}

			else {
				fname_msg.innerHTML ="";
			}

			return true; 

		}

			function checkLname (document) {

			var lname = document.getElementById("lname");
			var lname_msg = document.getElementById('lname_msg');


			if (lname.value == "") { 

			lname_msg.innerHTML="You did not enter last name.Please enter your name now.";
			lname.focus();
			return false;

			}

			else {
				lname_msg.innerHTML ="";
			}

			return true; 

		}


		function checkEmail (document) {

			var email = document.getElementById("email");
			var email_msg = document.getElementById('email_msg');

			if (email.value == ""){

				email_msg.innerHTML="You did not enter an email address. Please enter your email.";
				email.focus();
				return false;
			}

			else {

				email_msg.innerHTML ="";
			}

			return true;

		}



		function checkPassword (document)  {

			var pass = document.getElementById("pass");
			var pass_msg = document.getElementById('pass_msg');

				if (pass.value == "") {

				pass_msg.innerHTML="You did not enter a password. Please enter your password now.";
				pass.focus();
				return false;

				}	

				else {

				pass_msg.innerHTML = "";

				}

				return true;

			}



		function checkRePassword(document) { 

			var pass = document.getElementById("pass");
			var pass_msg = document.getElementById('pass_msg');
			var conpass = document.getElementById("conpass");

			if ( pass.value != conpass.value) {

				pass_msg.innerHTML = "The two passwords are not the same. Please re-enter both now."; 
				conpass.value = "";
				pass.focus(); 
				return false;
			}

			else {
				pass_msg.innerHTML = "";
			}

			return true;


		}


		


		function validateInfo (document) {
			
			if 
			( checkFname (document) && checkLname (document) && checkEmail (document) && checkPassword (document) && checkRePassword (document)

				 )

			{
				return true;
			}
			return false;
		}


		function showPassword() {

		  var showpass = document.getElementById("pass");

		  if (showpass.type === "password") {

		    showpass.type = "text";
		  } else {

		    showpass.type = "password";

		  }
		}

			function showconPassword() {

		  var showconpass = document.getElementById("conpass");

		  if (showconpass.type === "password") {

		    showconpass.type = "text";
		  } else {

		    showconpass.type = "password";

		  }
		}

		function checkfootMail (document) {

			var checkfootMail = document.getElementById("footmail");
			var checkfootMail_msg = document.getElementById('footmail_msg');


			if (footmail.value == "") { 

			footmail_msg.innerHTML="You did not enter an e-mail.Please enter your e-mail now.";
			footmail.focus();
			return false;

			}

			else {
				footmail_msg.innerHTML ="";
			}

			return true; 


		}


		function checkfootPass (document) {

			var checkfootPass = document.getElementById("footpass");
			var checkfootPass_msg = document.getElementById('footpass_msg');


			if (footpass.value == "") { 

			footpass_msg.innerHTML="You did not enter password.Please enter your password now.";
			footpass.focus();
			return false;

			}

			else {
				footpass_msg.innerHTML ="";
			}

			return true; 


		}







		function validateInfoFoot(document) {

			if 
			( checkfootMail (document) && checkfootPass (document) )

			{
				return true;
			}
			return false;
		}



/* for filters */ 

/* for filters */

			filterSelection("all")
				function filterSelection(c) {
				  var x, i;
				  x = document.getElementsByClassName("filterDiv");
				  if (c == "all") c = "";
				  for (i = 0; i < x.length; i++) {
				    w3RemoveClass(x[i], "show");
				    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
				  }
				}

				function w3AddClass(element, name) {
				  var i, arr1, arr2;
				  arr1 = element.className.split(" ");
				  arr2 = name.split(" ");
				  for (i = 0; i < arr2.length; i++) {
				    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
				  }
				}

				function w3RemoveClass(element, name) {
				  var i, arr1, arr2;
				  arr1 = element.className.split(" ");
				  arr2 = name.split(" ");
				  for (i = 0; i < arr2.length; i++) {
				    while (arr1.indexOf(arr2[i]) > -1) {
				      arr1.splice(arr1.indexOf(arr2[i]), 1);     
				    }
				  }
				  element.className = arr1.join(" ");
				}

				// Add active class to the current button (highlight it)
				var btnContainer = document.getElementById("btncontainer");
				var btns = btnContainer.getElementsByClassName("btn");
				for (var i = 0; i < btns.length; i++) {
				  btns[i].addEventListener("click", function(){
				    var current = document.getElementsByClassName("active");
				    current[0].className = current[0].className.replace(" active", "");
				    this.className += " active";
				  });
				}
