// have a global array of current bars
var EVENTS = [];	
function Event(t, k){
	this.time = t;
	this.key = k;
	this.count = 0;
}

// Get an array of timestamps from Ashley
function init() {
	OWF.Eventing.subscribe("testChannel1", this.add);		
}
// For each item in the array:
// check to see if we've already added that day before
// if we have, increment that things height and rebuild it
// else, make a new bar with height 1


var add = function add(sender, msg){
	var objs = msg.substr(1,msg.length-1);
	objs = objs.split(",");
	
	for (var i = 0; i < objs.length; i++){
			var time = new Date(objs[i]);
			var month = time.getMonth();
			if (month < 10){
				month = "0" + month;				
			}
			var day = time.getDate();
			var year = time.getYear();	
			var key = year + month + day;
			console.log(key);
			
			if (EVENTS.length > 0) {
			
			for (var k = 0; k < EVENTS.length; k++){
				if(key == EVENTS[k].key){
						EVENTS[k].count = EVENTS[k].count + 1;
						document.getElementById(key).style.height = (EVENTS[k].count * 10) + "px";							
				} else {
						var e = new Event(time, key);
						e.count = 1;
												
						var container = document.getElementById("container");
						var current = container.childNodes;

						var bar = document.createElement("span");
						bar.className = "element";
						bar.style.height = (e.count * 10) + "px";
						bar.id = key;
						bar.onclick = send;
					 	container.insertBefore(bar, current[0]);
						 	
						EVENTS.push(e);
				}
			}
		} else {
			console.log(key + " is first element");
			var e = new Event(time, key);
			e.count = 1;
									
			var container = document.getElementById("container");
			var bar = document.createElement("span");
			bar.className = "element";
			bar.style.height = (e.count * 10) + "px";
			bar.id = key;
			bar.onclick = send;
		 	container.appendChild(bar);
			 	
			EVENTS.push(e);
		}
	}
};

var send = function send(){
	OWF.Eventing.publish("testChannel2", new Date(this.id));

}

owfdojo.addOnLoad(function(){
	OWF.ready(init);
});
