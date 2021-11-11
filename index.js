var intervalID;
var running = false;
console.log(running);
document.body.innerHTML += running;

document.getElemntById("submit-form").addEventListener("click",submitForm);

/*function createStopBtn(){
	var stopBtn = document.createElement("button");
	stopBtn.innerText = "STOP";
	document.getElementById("sheetdb-form").appendChild(stopBtn);
	stopBtn.addEventListener("click",clearInterval(intervalId));
}*/

function sendData(room,id){
	console.log("attempting to send data...");
	if (running == true){
		axios.post('https://sheetdb.io/api/v1/a2p84tz3nd0mb',
				  {"data":{"studentID":id}
		  }).then(response => {
			console.log("data sent!{"+id+","+room+"}");
			document.body.innerHTML += "data sent!{"+id+","+room+"}";
			console.log(response);
		})
	}
	else{
		console.log("no data to send. failure");
		document.body.innerHTML += "no data to send. failure";
	}
}
function submitForm(){
	document.body.innerHTML += "clicked to submit form";
	
	var studentID = document.getElementById("student_id").value;
	var roomNum = document.getElementById("room_number").value;

	if (studentID != null && roomNum != null){
		running = true;
		console.log("form submitted!");
		document.body.innerHTML += "form submitted!";
		sendData(roomNum,studentID);
		//createStopBtn();
		window.setInterval(sendData,60000,roomNum,studentID); 
	}
	else {
		console.log("data could not be sent");
		document.body.innerHTML += "data could not be sent";
	}

	 
}
