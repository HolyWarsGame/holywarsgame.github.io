//Battle script for HW//
var BattlePower = 0;

function calculateBattlePower(){
	BattlePower = BattlePower + personPage * 10;
	BattlePower = BattlePower + paladins * 1000;
};

function battleOgre(number){
	var percentComplete = 0;
	document.getElementById('BatOgreProgBarBox').style.display = "block";	
	var progressBar = document.getElementById('BatOgreProgBar');

	var go = setInterval(function() {
		if ( percentComplete == 100) {
			clearInterval(go);
			progressBar.style.display = "none";
		} else {
			percentComplete = percentComplete + 1;
			console.log(percentComplete);
		}
		progressBar.setAttribute("aria-valuenow", percentComplete);
//		console.log(progress);
	}, 500);
};

//function incrementProgBar(elem, percentComplete){
//	document.getElementById(elem).setAttribute("aria-valuenow", percentComplete);
//};


