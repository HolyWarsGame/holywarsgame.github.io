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

function upgradeTavern(){
	tavernUpgrade = true;
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

function buildTower(){
	if(gold >= 1000000 && iron >= 10000 && faith >= 1000){
		towerBuilt = true;
		document.getElementById('Magic').style.display = "block";
		document.getElementById('TowerMenu').style.display = "block";
		document.getElementById('builtTowerAlert').style.display = "block";
		gold = gold - 1000000;
		iron = iron - 10000;
		faith = faith - 1000;
		document.getElementById('gold').innerHTML = gold;
		document.getElementById('iron').innerHTML = iron;
		document.getElementById('faith').innerHTML = faith;
	}
};



window.setInterval(function(){					//Tavern unit generation
	clickThing(taverns,"peasant");
	tavernpeasants = tavernpeasants + taverns;
	document.getElementById('tavernpeasants').innerHTML = tavernpeasants;
	
	if(tavernUpgrade == true){
	clickThing(taverns,"miner");
	tavernminers = tavernminers + taverns;
	document.getElementById('tavernminers').innerHTML = tavernminers;	
	}

}, 30000);