// option 1
// get a timestamp, add it to the histogram

// option 2
// every second get a number of events, add them to histogram

window.onload = function(){
		
	call_with_random();
	var interval = setInterval(call_with_random, 1000);
	
	document.getElementById("stop_button").onclick = function (){
		interval = clearInterval(interval);		
		
		};
		
		$('#container').jscroll();
	
};


function add(num){

	var container = document.getElementById("container");
	
	var time = new Date();
	
	var piece = document.createElement("span");
	piece.time = time;
	piece.className = "element";
	piece.style.height = (num * 5) + "px";
	piece.onclick = send;
		//piece.style = "height: " + num * 10 + "px;";
	
 container.appendChild(piece);
		
	}
	
	function call_with_random(){

		var rand = Math.floor((Math.random() * 20) +1);
		add(rand);

		
		}
		
function send(){
	console.log(this.time);
	
	}