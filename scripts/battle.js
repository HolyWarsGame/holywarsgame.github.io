//Battle script for HW//
var BattlePower = 0;

function calculateBattlePower(){
	BattlePower = BattlePower + personPage * 10;
	BattlePower = BattlePower + paladins * 1000;
};

function battleOgre(number){
	var progress = 0;
	document.getElementById('BatOgreProgBar').style.display = "block";
	while(progress <= 99){
		window.setInterval(function(){
			progress = progress + 1;
			console.log(progress);
		}, 1000);	
	}
};


