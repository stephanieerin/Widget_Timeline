OWF.relayFile = '/owf-sample-html/js/eventing/rpc_relay.uncompressed.html';
	
function init() {
	document.getElementById("message").innerHTML = new Date();
	OWF.Eventing.subscribe("testChannel", this.add);		
}
		
var add = function(sender, msg){
		var num = parseInt(msg);
		var container = document.getElementById("container");
		var current = container.childNodes;
		var time = new Date();
	
		var piece = document.createElement("span");
		piece.time = time;
		piece.className = "element";
		piece.style.height = (num * 5) + "px";
		//piece.onclick = send;
	 	container.insertBefore(piece, current[0]);
	 	
	 	
	 	var count = parseInt(document.getElementById("counter").innerHTML);
	 	count = count + 1;
	 	document.getElementById("counter").innerHTML = count;
	 	
	 	OWF.Eventing.publish("testChannel", count);
};
		
owfdojo.addOnLoad(function(){
	OWF.ready(init);
});

function call_with_random(){

	var rand = Math.floor((Math.random() * 20) +1);
	add(rand);
		
}
		
function send(){
	console.log(this.time);
	
}
