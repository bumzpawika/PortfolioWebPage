window.onload = pageLoad;

function pageLoad(){
	document.getElementById("start").onclick = startGame;

}

function startGame(){
	
	alert("Ready");
	clearScreen();
	addBox();
	timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById("clock");
	timer = setInterval(timeCount,TIMER_TICK)
	//x.innerHTML;
	 

	function timeCount(){
		second--;
		x.innerHTML=second;
		var allbox = document.querySelectorAll("#squares-layer div");
		if(allbox.length==0 && second>0){
			alert("You Win!!!!!!!!!");
			clearInterval(timer);
		}
		if(second<=0){
			alert("You Lose!!!!!");
			clearInterval(timer);
			clearScreen();
		}
		if(second<=5){
			document.getElementById("clock").style.color = "red";
		}
	}
}

function addBox(){

	var numbox = document.getElementById("numbox").value;
	var squaresLayer = document.getElementById("squares-layer");
	var colorDrop = document.getElementById("color").value;
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("div");//document.getElementById("squares-layer");
		tempbox.className = "square";
		tempbox.classList.add(colorDrop);
		//alert(tempbox.className);
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		squaresLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		box.parentNode.removeChild(box);
	}
}

function clearScreen(){
	 var allbox = document.querySelectorAll("#squares-layer div");

	// //delete all  squares
	for (var i=0;i<allbox.length;i++){
		allbox[i].parentNode.removeChild(allbox[i]);
	}
}




