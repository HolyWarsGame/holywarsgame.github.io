//Battle script for HW//
var BattlePower = 0;

function calculateBattlePower(){
	BattlePower = BattlePower + personPage * 10;
	BattlePower = BattlePower + paladins * 1000;
};

function battleOgre(number){
	var progress = 0;
	document.getElementById('BatOgreProgBarBox').style.display = "block";
	var go = setInterval(function() {
		if ( progress == 100) {
			clearInterval(go);
			document.getElementById('BatOgreProgBar').style.display = "block";
		} else {
			progress = progress + 1;
			console.log(progress);
		}
		document.getElementById('BatOgreProgBar').setAttribute("aria-valuenow", progress);
//		console.log(progress);
	}, 1000);
	

};

//function incrementProgBar(elem, percentComplete){
//	document.getElementById(elem).setAttribute("aria-valuenow", percentComplete);
//};


