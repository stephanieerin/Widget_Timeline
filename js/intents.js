OWF.relayFile = '/owf-sample-html/js/eventing/rpc_relay.uncompressed.html';
	
	
	// initialize subscription to channel
function init() {
	OWF.Eventing.subscribe("testChannel", this.add);		
}
		
	// when information is received, add a bar to the timeline
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
	 	
//	 	OWF.Eventing.publish("testChannel", count);
};
		
 // owfdojo stuff (when ready, call init)
owfdojo.addOnLoad(function(){
	OWF.ready(init);
});

	// old function used for testing (calls add with a random number)
function call_with_random(){

	var rand = Math.floor((Math.random() * 20) +1);
	add(null, rand);
		
}
	//	send time information on click
function send(){
	console.log(this.time);
	//OWF.Eventing.publish(this.time);
	
	// problem: subscribing to the channel means that if you publish to it you end
	// up in an infinite loop. fix?
}
