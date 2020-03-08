function getParams() {
  	var idx = document.URL.indexOf('?');
  	var params = new Array();
  	if (idx != -1) {
  		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
  		for (var i=0; i<pairs.length; i++) {
  			nameVal = pairs[i].split('=');
  			params[nameVal[0]] = nameVal[1];
  		}
 	}
  	return params;
}

window.onload = loginLoad;
function loginLoad(){
	
	var onsub = document.getElementById("myLogin");
	onsub.onsubmit = checkLogin;
	
	//วิธีใช้ getParams()
	var parameter = getParams();
	//console.log(parameter["username"]);
	user1=parameter["username"];
	pass1=parameter["password"];
	
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	var user2=document.forms["myLogin"]["username"].value;
	var pass2=document.forms["myLogin"]["password"].value;

	if((user2==user1)&&(pass1==pass2)){
		alert("Login!");
		return true;
	}
	else{
		alert("Incorrect");
		return false;
	}
}