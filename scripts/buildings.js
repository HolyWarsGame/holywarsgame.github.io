//Building Script for HW//

//Building variables//
var taverns = 0;

function buyTavern(){
	var TavernCost = Math.floor(5000 * Math.pow(1.5,taverns));
		if(gold >= TavernCost){
			taverns = taverns + 1;
			gold = gold - TavernCost;
			document.getElementById('taverns').innerHTML = taverns;
			document.getElementById('gold').innerHTML = gold;
		};
		var nextTavernCost = Math.floor(5000 * Math.pow(1.5, taverns));		//Calculates the cost of the next tavern
		document.getElementById('TavernCost').innerHTML = nextTavernCost;   //Updates page with cost of next tavern
};

function buildMines(){
	if(gold >= 1500){
		minesOpened = true;
		document.getElementById('irondiv').style.display = "block";
		document.getElementById('Mining').style.display = "block";
		document.getElementById('openMineAlert').style.display = "block";
		gold = gold - 1500;
		document.getElementById('gold').innerHTML = gold;
	}
};

function buildBarracks(){
	if(gold >= 10000 && iron >= 250){
		barracksOpened = true;
		document.getElementById('BarracksMenu').style.display = "block";
		document.getElementById('openBarracksAlert').style.display = "block";
		document.getElementById('armystrdiv').style.display = "block";
		gold = gold - 10000;
		iron = iron - 250
		document.getElementById('gold').innerHTML = gold;
		document.getElementById('iron').innerHTML = iron;
	}
};

function buildCathedral(){
	if(gold >= 10000 && iron >= 500){
		cathedralOpened = true;
		document.getElementById('faithdiv').style.display = "block";
		document.getElementById('FaithMenu').style.display = "block";
		document.getElementById('openCathAlert').style.display = "block";
		gold = gold - 10000;
		iron = iron - 500
		document.getElementById('gold').innerHTML = gold;
		document.getElementById('iron').innerHTML = iron;
		
	}
};



window.setInterval(function(){					//Tavern unit generation

	peasantClick(taverns);
	tavernpeasants = tavernpeasants + taverns;
	document.getElementById('tavernpeasants').innerHTML = tavernpeasants;

}, 10000);