function submission(){
	event.preventDefault();
	document.getElementById("submission_form").style.display="none";
	
	var visitorName=document.getElementById("name").value;
	var visitorEmail=document.getElementById("email").value;
	var errorName=document.getElementById("errorName").value;
	var errorEmail=document.getElementById("errorName").value;
	var locationMap=document.getElementById("map");
	var change=document.getElementById("main");
	
	locationMap.classList.toggle("afterSubmission");
	change.classList.toggle("changeBackground");
	alert("thank you for your details "+visitorName+", one of our team members will be in touch shortly!");
	document.getElementById("emptyDiv").innerHTML="Walk-ins also welcome!";
	
	//user input validation
	if (visitorName==""){
		errorName="Name in invalid format, please try again";
		return false;
	}
	else if (visitorEmail==""){
		errorEmail="Email in invalid format, please try again";
		return false;
	}
	else{
		return true;
	}
		
}
