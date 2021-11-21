function submission(){
	event.preventDefault();
	document.getElementById("submission_form").style.display="none";
	
	var visitorName=document.getElementById("name").value;
	var visitorEmail=document.getElementById("email").value;
	
	alert("thank you for your details "+visitorName+", one of our team members will be in touch shortly!");
	
}
