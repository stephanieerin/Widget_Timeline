OWF.relayFile = '/owf-sample-html/js/eventing/rpc_relay.uncompressed.html';
	
var EVENTS = [];	
function Event(t, m){
	this.time = t;
	this.msg = m;
}
	
	// initialize subscription to channel
function init() {
	OWF.Eventing.subscribe("testChannel1", this.make);		
}

var make = function(sender, msg){
	var objs = msg.substr(1,msg.length-1);
	objs = objs.split(",");
	document.getElementById("message").innerHTML = objs[0];
	
	var num = objs.length;
	var time = new Date();
	var e = new Event(time, "hello");

	EVENTS.push(e)	
	
	add(time, num)
	
	
	};
		
	// when information is received, add a bar to the timeline
var add = function(time, num){
		var container = document.getElementById("container");
		var current = container.childNodes;
//		var time = new Date();
	
		var piece = document.createElement("span");
		piece.time = time;
		piece.className = "element";
		piece.style.height = (num * 5) + "px";
		piece.id = time;
		piece.onclick = send;
	 	container.insertBefore(piece, current[0]);
	 	
	 	
	 	var count = parseInt(document.getElementById("counter").innerHTML);
	 	count = count + 1;
	 	document.getElementById("counter").innerHTML = count;
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
	var msg = "invalid";
	for(var i = 0; i < EVENTS.length; i++){
		if (EVENTS[i].time == this.id){
						msg = this.msg;
			}				
		}
	OWF.Eventing.publish("testChannel2", msg);
	

}
