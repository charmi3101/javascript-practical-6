$(document).ready(function() {
	
		
        $("#arrival_date").datepicker();

		$("form").submit(
 			function(event) {
	
 			var n =  /[0-9]|\./;
 			var self = $('#nights').val().trim();
   			 if (self == "") 
    			 {
	   				$('#nights').next().text("this field is requiered.");
 					isValid = false;
    			 }
    		else if (! n.test(self)) {
    				$("#nights").next().text("Must be a number.");
	   				isValid = false;
    		}
    		else {
    			$("#nights").val(self);
    		}
    	
 		var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
 		var email = $ ("#email").val().trim();
 		if (email == "") {
 			$('#email').next().text("this field is requiered.");
 			isValid = false;
 		}
 		else if (!emailPattern.test(email)) {
 			$("#email").next().text("Must be a valid email address.");
 			isValid = false;
 		}
 		else {
 				$("#email").next().text("");
 			  }

 			$("#email").val(email);

 			var name = $('#name').val().trim();
 			if (name == ""){
 				$('#name').next().text("this field is requiered.");
 				isValid = false;
 			}
 			else {
 				$('#name').val(name);
 			}

 			var phnno = /^\(?([0-9]{3})\)?[-.]?([0-9]{3})[-.]?([0-9]{4})$/;
 			var phn = $("#phone").val().trim();
 			if (phn == "") {
 				$('#phone').next().text("this field is requiered.");
 				isValid = false;
 			}
 			else if (!phnno.test(phn)) {
 				$ ('#phone').next().text("Must be a valid number.");
 				isValid = false;
 			}
 			else{
 				$("#phone").next().text("");
 			}
 			$("#phone").val(phn);

 				if(isValid == false) 
 			{
 				event.preventDefault();
 			}
 		}
 
 	);
}); // end ready
