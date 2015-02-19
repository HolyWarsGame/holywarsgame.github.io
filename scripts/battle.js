//Battle script for HW//
var BattlePower = 0;

function calculateBattlePower(){
	BattlePower = BattlePower + personPage * 10;
	BattlePower = BattlePower + paladins * 1000;
};

function battleOgre(number){
	var progress = 0;
	val progressBar = document.getElementById('BatOgreProgBar');
	document.getElementById('BatOgreProgBarBox').style.display = "block";
	
	var go = setInterval(function() {
		if ( progress == 100) {
			clearInterval(go);
			progressBar.style.display = "none";
		} else {
			progress = progress + 1;
			console.log(progress);
		}
		progressBar.setAttribute("aria-valuenow", progress);
//		console.log(progress);
	}, 500);
	

};

//function incrementProgBar(elem, percentComplete){
//	document.getElementById(elem).setAttribute("aria-valuenow", percentComplete);
//};


