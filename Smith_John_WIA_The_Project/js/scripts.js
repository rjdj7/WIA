
if(Modernizr.canvas){
	//Canvas is supported
	
	var theCanvas = document.getElementById("Canvas1");
	var ctx = theCanvas.getContext("2d");
	
	
	}else {
		
		console.log("Canvas Not Supported");
		
		}

	console.log(Modernizr);