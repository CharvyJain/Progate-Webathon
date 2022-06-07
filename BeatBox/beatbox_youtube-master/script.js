document.addEventListener('keydown', (event) => {
	console.log(event.keyCode);
	var key = event.keyCode;
	if (key == 49) {
		var audio = new Audio("Piano Chord 331.mp3");
		audio.currentTime = 0;
		audio.play();
		document.getElementById('49').style.backgroundColor = "aqua"
		document.getElementById('49').style.boxShadow = "0px 0px 1px 0px aqua";
		setTimeout(function() {
			document.getElementById('49').style.backgroundColor = "transparent";
			document.getElementById('49').style.boxShadow = "none";
		}, 500)
	}
	if (key == 50) {
		var audio = new Audio("Piano Chord 209.mp3");
		audio.currentTime = 0;
		audio.play();
		document.getElementById('50').style.backgroundColor = "#ff00ff"
		document.getElementById('50').style.boxShadow = "0px 0px 1px 0px #ff00ff";
		setTimeout(function() {
			document.getElementById('50').style.backgroundColor = "transparent";
			document.getElementById('50').style.boxShadow = "none";
		}, 500)
	}
	if (key == 51) {
		var audio = new Audio("Piano Chord 208.mp3");
		audio.currentTime = 0;
		audio.play();
		document.getElementById('51').style.backgroundColor = "aqua"
		document.getElementById('51').style.boxShadow = "0px 0px 1px 0px aqua";
		setTimeout(function() {
			document.getElementById('51').style.backgroundColor = "transparent";
			document.getElementById('51').style.boxShadow = "none";
		}, 500)
	}
	if (key == 52) {
		var audio = new Audio("Musical Orches 4.mp3");
		audio.currentTime = 0;
		audio.play();
		document.getElementById('52').style.backgroundColor = "#ff00ff"
		document.getElementById('52').style.boxShadow = "0px 0px 1px 0px #ff00ff";
		setTimeout(function() {
			document.getElementById('52').style.backgroundColor = "transparent";
			document.getElementById('52').style.boxShadow = "none";
		}, 500)
	}
	if (key == 53) {
		var audio = new Audio("Drum Sticks Hit 3.mp3");
		audio.currentTime = 0;
		audio.play();
		document.getElementById('53').style.backgroundColor = "#FFCC00"
		document.getElementById('53').style.boxShadow = "0px 0px 1px 0px #FFCC00";
		setTimeout(function() {
			document.getElementById('53').style.backgroundColor = "transparent";
			document.getElementById('53').style.boxShadow = "none";
		}, 500)
	}
	if (key == 54) {
		var audio = new Audio("Musical Compos 33.mp3");
		audio.currentTime = 0;
		audio.play();
		document.getElementById('54').style.backgroundColor = "#ff00ff"
		document.getElementById('54').style.boxShadow = "0px 0px 1px 0px #ff00ff";
		setTimeout(function() {
			document.getElementById('54').style.backgroundColor = "transparent";
			document.getElementById('54').style.boxShadow = "none";
		}, 500)
	}
	if (key == 55) {
		var audio = new Audio("Drum Sticks Hit 3.mp3");
		audio.currentTime = 0;
		audio.play();
		document.getElementById('55').style.backgroundColor = "aqua"
		document.getElementById('55').style.boxShadow = "0px 0px 1px 0px aqua";
		setTimeout(function() {
			document.getElementById('55').style.backgroundColor = "transparent";
			document.getElementById('55').style.boxShadow = "none";
		}, 500)
	}
	if (key == 56) {
		var audio = new Audio("Drum Snare Roll.mp3");
		audio.currentTime = 0;
		audio.play();
		document.getElementById('56').style.backgroundColor = "#ff00ff"
		document.getElementById('56').style.boxShadow = "0px 0px 1px 0px #ff00ff";
		setTimeout(function() {
			document.getElementById('56').style.backgroundColor = "transparent";
			document.getElementById('56').style.boxShadow = "none";
		}, 500)
	}
	if (key == 57) {
		var audio = new Audio("Cymbal Suspended 2.mp3");
		audio.currentTime = 0;
		audio.play();
		document.getElementById('57').style.backgroundColor = "aqua"
		document.getElementById('57').style.boxShadow = "0px 0px 1px 0px aqua";
		setTimeout(function() {
			document.getElementById('57').style.backgroundColor = "transparent";
			document.getElementById('57').style.boxShadow = "none";
		}, 500)
	}
});