
var souls = 0;
var gold = 0;
var faith = 0;
var goldpersec = 0;
var faithpersec = 0;
var soulspersec = 0;

function goldClick(number){
    gold = gold + number;
    document.getElementById("gold").innerHTML = gold;
};

function clickFaith(number){
    faith = faith + number;
	faith = faith.toFixedDown(2);
    document.getElementById("faith").innerHTML = faith;
};

function demonClick(number){
    souls = souls + number;
    document.getElementById("souls").innerHTML = souls;
};

function peasantClick(number){
	peasants = peasants + number;
	document.getElementById("peasants").innerHTML = peasants;
};

function debugCurrency(){
	gold = gold + 10000;
	faith = faith + 1000;
	souls = souls + 200;
}

var peasants = 0;
var tavernpeasants = 0;																//Tavern generated peasants
function buyPeasant(){
    var PeasantCost = Math.floor(10 * Math.pow(1.25,peasants - tavernpeasants));     //works out the cost of this Peasant
    if(gold >= PeasantCost){                                   //checks that the player can afford the Peasant
        peasants = peasants + 1;                                   //increases number of Peasants
    	gold = gold - PeasantCost;                          //removes the gold spent
        document.getElementById('peasants').innerHTML = peasants;  //updates the number of Peasants for the user
        document.getElementById('gold').innerHTML = gold;  //updates the number of gold for the user
    };
    var nextPeasantCost = Math.floor(10 * Math.pow(1.25,peasants - tavernpeasants));       //works out the cost of the next Peasant
    document.getElementById('PeasantCost').innerHTML = nextPeasantCost;  //updates the Peasant cost for the user
};


var priests = 0;
function buyPriest(){
    var PriestCost = Math.floor(1000 * Math.pow(1.3,priests));     //works out the cost of this Priest
    if(gold >= PriestCost){                                   //checks that the player can afford the Priest
        priests = priests + 1;                                   //increases number of Priests
    	gold = gold - PriestCost;                          //removes the gold spent
        document.getElementById('priests').innerHTML = priests;  //updates the number of Priests for the user
        document.getElementById('gold').innerHTML = gold;  //updates the number of gold for the user
    };
    var nextPriestCost = Math.floor(1000 * Math.pow(1.3,priests));       //works out the cost of the next Priest
    document.getElementById('PriestCost').innerHTML = nextPriestCost;  //updates the Priest cost for the user
};

var paladins = 0;

function buyPaladin(){
    var PaladinCost = Math.floor(100 * Math.pow(1.1,paladins));     //works out the cost of this Paladin
    if(faith >= PaladinCost){                                   //checks that the player can afford the Paladin
        paladins = paladins + 1;                                   //increases number of Paladins
    	faith = faith - PaladinCost;                          //removes the souls spent
        document.getElementById('paladins').innerHTML = paladins;  //updates the number of Paladins for the user
        document.getElementById('faith').innerHTML = faith;  //updates the number of souls for the user
    };
    var nextPaladinCost = Math.floor(100 * Math.pow(1.1,paladins));       //works out the cost of the next Paladin
    document.getElementById('PaladinCost').innerHTML = nextPaladinCost;  //updates the Paladin cost for the user
};

var weapons = 0;

function buyWeapon(){
    var WeaponCost = Math.floor(1000 * Math.pow(1.1,weapons));     //works out the cost of this weapon
    if(faith >= WeaponCost){                                   //checks that the player can afford the weapon
        weapons = weapons + 1;                                   //increases number of weapons
    	faith = faith - WeaponCost;                          //removes the souls spent
        document.getElementById('weapons').innerHTML = weapons;  //updates the number of weapons for the user
        document.getElementById('souls').innerHTML = souls;  //updates the number of souls for the user
    };
    var nextWeapCost = Math.floor(1000 * Math.pow(1.1,weapons));       //works out the cost of the next weapon
    document.getElementById('WeaponCost').innerHTML = nextWeapCost;  //updates the weapon cost for the user
};

var minesOpened=false;

function buyMines(){
	if(gold >= 1500){
		minesOpened = true;
		document.getElementById('Mining').style.display = "block";
		document.getElementById('openMineAlert').style.display = "block";
		gold = gold - 1500;
		document.getElementById('gold').innerHTML = gold;
	}
};

function UpdateButtons() {
	//Enable/disables buy peasant button depending on if there is enough currency
	if(gold < document.getElementById('PeasantCost').innerHTML){	
		document.getElementById("btnbuyPeasant").disabled = true;
	}
	else{
		document.getElementById("btnbuyPeasant").disabled = false;
	}
	
	//Enable/disables buy priest button depending on if there is enough currency
	if(gold < document.getElementById('PriestCost').innerHTML){	
		document.getElementById("btnbuyPriest").disabled = true;
	}
	else{
		document.getElementById("btnbuyPriest").disabled = false;
	}	
	
	//Enable/disables buy paladin button depending on if there is enough currency
	if(faith < document.getElementById('PaladinCost').innerHTML){	
		document.getElementById("btnbuyPaladin").disabled = true;
	}
	else{
		document.getElementById("btnbuyPaladin").disabled = false;
	}	
	
	//Enable/disables buy imbue weapon button depending on if there is enough currency
	if(faith < document.getElementById('WeaponCost').innerHTML){	
		document.getElementById("btnbuyWeapon").disabled = true;
	}
	else{
		document.getElementById("btnbuyWeapon").disabled = false;
	}

	//Enable/disables buy tavern button depending on if there is enough currency
	if(gold < document.getElementById('TavernCost').innerHTML){	
		document.getElementById("btnbuyTavern").disabled = true;
	}
	else{
		document.getElementById("btnbuyTavern").disabled = false;
	}	
	
	if(minesOpened){
		document.getElementById("btnOpenMines").disabled = true
	}
}

window.setInterval(function(){                                 //Update per second counts
    goldpersec = peasants;
    document.getElementById("goldpersec").innerHTML = goldpersec;
    
    faithpersec = priests*0.1
	faithpersec = faithpersec.toFixedDown(2)
    document.getElementById("faithpersec").innerHTML = faithpersec;
    
    soulspersec = paladins*(weapons+1);
    document.getElementById("soulspersec").innerHTML = soulspersec;
    
},10);

window.setInterval(function(){					//Soul generation via paladins etc
	
	demonClick(paladins*(weapons+1));
	
}, 1000);

window.setInterval(function(){					//Gold generation via peasants etc

	goldClick(peasants);
	
}, 1000);

window.setInterval(function(){					//Faith Generation via priests etc

	clickFaith(priests*0.1);
	faith = faith.toFixedDown(2);
}, 1000);

window.setInterval(function(){					//Enables/disables buttons 
	
	UpdateButtons();
	
}, 10);


Number.prototype.toFixedDown = function(digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        m = this.toString().match(re);
    return m ? parseFloat(m[1]) : this.valueOf();
};

