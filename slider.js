// Forsøg på slider
var i = 0; 			// START
var images = [];	// BILLEDER ARRAY
var time = 3000;	// TID SKIFT I MS
	 
// Image List
images[0] = "assets/images/grenaastrandtwo.jpg";
images[1] = "assets/images/strandnord.jpg";
images[2] = "assets/images/grenaastrand.jpg";


// TID SKIFT
function changeImg(){
	document.slider.src = images[i];

	
	if(i < images.length - 1){
	  // PLUS 1 INDEX
	  i++; 
	} else { 
		// TILBAGE TIL 0
		i = 0;
	}

	// FUNKTION SKAL KØRE ANTAL 
	setTimeout("changeImg()", time);
}

// VED PAGE LOAD KØR SLIDER
window.onload=changeImg();