$(document).ready(function () {
	
	OWF.ready(function()){
		
		OWF.Eventing.subscribe('owf-everest.testing', function(sender, msg, channel){
				document.getElementById("message").innerHTML =  "subscribe " + msg;
			});
			
		OWF.Intents.receive({
			action: 'add',
			dataType: 'text'			
			}, function(sender, intent, msg){
				document.getElementById("message").innerHTML = "add " + msg;				
			
			});
			
			OWF.Intents.receive ({
				dataType: 'text'				
				}, function(sender, intent, msg){
					document.getElementById("message").innerHTML = "remove " + msg;
					
				});
		
			OWF.notifyWidgetReady();
		
		});	
});