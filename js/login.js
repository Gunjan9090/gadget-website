<script type="text/javascript">
	
	function validation(){

	        var user = document.getElementById('user').value;
	        var pass=document.getElementById('pass').value;
			var confirmpass = document.getElementById('confirmpass').value;
			var mobile=document.getElementById('mobile').value;
			var email=document.getElementById('email').value;


	        if(user == ""){
				document.getElementById('username').innerHTML =" ** Please fill the username field";
				return false;
			}
			if((user.length <= 2) || (user.length > 20)) {
				document.getElementById('username').innerHTML =" ** Username lenght must be between 2 and 20";
				return false;	
			}
            if(!isNaN(user)){
				document.getElementById('username').innerHTML =" ** only characters are allowed";
				return false;
			}
			// password
			if(pass == ""){
				document.getElementById('password').innerHTML =" ** Please fill the password field";
				return false;
			}
			if((pass.length <= 4) || (pass.length > 9)) {
				document.getElementById('password').innerHTML =" ** Password lenght must be between 4 and 9";
				return false;	
			}
            if(!isNaN(pass)){
				document.getElementById('password').innerHTML =" ** only characters are allowed";
				return false;
			}
			// password confirm
			if(pass!=confirmpass){
				document.getElementById('confirm').innerHTML =" ** Password does not match";
				return false;
			}
            if(confirmpass == ""){
				document.getElementById('confirm').innerHTML =" ** Please fill the confirmpassword field";
				return false;
			}
			// mobile
			if(mobile == ""){
				document.getElementById('mob').innerHTML =" ** Please fill the Mobile Number";
				return false;
			}
			if(mobile.length != 10) {
				document.getElementById('mob').innerHTML =" ** Mobile Number must be 10 digit number";
				return false;	
			}
            if(isNaN(mobile)){
				document.getElementById('mob').innerHTML =" ** only digits are allowed";
				return false;
			}
			// email
			if(email == ""){
				document.getElementById('emailid').innerHTML =" ** Please fill the email id field";
				return false;
			}
			if(email.indexOf('@') <= 0 ){
				document.getElementById('emailid').innerHTML =" ** @ Invalid Position";
				return false;
			}

			if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
				document.getElementById('emailid').innerHTML =" ** . Invalid Position";
				return false;
			}
		}

</script>