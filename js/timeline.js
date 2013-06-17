window.onload = function () {
	
	var timeline = document.getElementById("timeline");
	setInterval(function () {
			var current = new Date();	
			console.log(current);
			var time = document.createElement("p");
			time.innerHTML = current;
			timeline.appendChild(time);
		
		}, 1000);

	
	};
	
if(OWF.Util.isRunningInOWF()){
	OWF.ready(function () {
			
		OWF.Eventing.subscribe('org.everest.owf.rawdata', function (sender, msg, channel) {
				Timeline.add(msg);			
			});	
		
		OWF.Itents.receive( {
				action: 'plot',
				dataType: 'applicat			
			
			})
				
		
		});	
	
	
	}