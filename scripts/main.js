//Main Script for HW //

//Currency Variables//
var souls = 0;
var gold = 0;
var faith = 0;
var iron = 0;

//Statistic Variables//
var goldpersec = 0;
var faithpersec = 0;
var soulspersec = 0;
var ironpersec = 0;
var totalTimePlayed = 0;
var tTPinHHMMSS = 0;

//Unit Variables//
var peasants = 0;
var tavernpeasants = 0;			//Tavern generated peasants
var miners = 0;
var tavernminers = 0;			//Tavern generated miners
var personPage = 0;
var priests = 0;
var paladins = 0;
var weapons = 0;

//Status Variables//
var minesOpened = false;
var cathedralOpened = false;
var barracksOpened = false;

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

function mineClick(number){
	iron = iron + number;
	document.getElementById("iron").innerHTML = iron;
};

function debugCurrency(){
	gold = gold + 10000;
	faith = faith + 1000;
	souls = souls + 200;
	iron = iron + 500;
}

function buyPeasant(){
    var PeasantCost = Math.floor(50 * Math.pow(1.25,peasants - tavernpeasants));     //works out the cost of this Peasant
    if(gold >= PeasantCost){                                   //checks that the player can afford the Peasant
        peasants = peasants + 1;                                   //increases number of Peasants
    	gold = gold - PeasantCost;                          //removes the gold spent
        document.getElementById('peasants').innerHTML = peasants;  //updates the number of Peasants for the user
        document.getElementById('gold').innerHTML = gold;  //updates the number of gold for the user
    };
    var nextPeasantCost = Math.floor(50 * Math.pow(1.25,peasants - tavernpeasants));       //works out the cost of the next Peasant
    document.getElementById('PeasantCost').innerHTML = nextPeasantCost;  //updates the Peasant cost for the user
};

function buyMiner(){
    var MinerCost = Math.floor(250 * Math.pow(1.25,miners - tavernminers));     //works out the cost of this miners
    if(gold >= MinerCost){                                   //checks that the player can afford the miners
        miners = miners + 1;                                   //increases number of miners
    	gold = gold - MinerCost;                          //removes the gold spent
        document.getElementById('miners').innerHTML = miners;  //updates the number of miners for the user
        document.getElementById('gold').innerHTML = gold;  //updates the number of gold for the user
    };
    var nextMinerCost = Math.floor(250 * Math.pow(1.25,miners - tavernminers));       //works out the cost of the next Peasant
    document.getElementById('MinerCost').innerHTML = nextMinerCost;  //updates the Peasant cost for the user
};

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

function buyPage(){
    var PageCost = Math.floor(500 * Math.pow(1.1,personPage));     //works out the cost of this Page
    if(gold >= PageCost && iron >= 100){                                   //checks that the player can afford the Page
        personPage = personPage + 1;                                   //increases number of Pages
    	gold = gold - PageCost;                                  //removes the gold spent
        iron = iron - 100; 										 //removes the iron spent
		document.getElementById('personPage').innerHTML = personPage;  //updates the number of Pages for the user
        document.getElementById('gold').innerHTML = gold;  //updates the number of gold for the user
		document.getElementById('iron').innerHTML = gold;  //updates the number of iron for the user
    };
    var nextPageCost = Math.floor(500 * Math.pow(1.1,personPage));       //works out the cost of the next Page
    document.getElementById('PageCost').innerHTML = nextPageCost;  //updates the Page cost for the user
};

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



function UpdateButtons() {
	//Enable/disables buy peasant button depending on if there is enough currency
	if(gold < document.getElementById('PeasantCost').innerHTML){	
		document.getElementById("btnbuyPeasant").disabled = true;
	}
	else{
		document.getElementById("btnbuyPeasant").disabled = false;
	}

	if(gold < document.getElementById('MinerCost').innerHTML){	
		document.getElementById("btnbuyMiner").disabled = true;
	}
	else{
		document.getElementById("btnbuyMiner").disabled = false;
	}
	
	//Enable/disables buy priest button depending on if there is enough currency
	if(gold < document.getElementById('PriestCost').innerHTML){	
		document.getElementById("btnbuyPriest").disabled = true;
	}
	else{
		document.getElementById("btnbuyPriest").disabled = false;
	}

	//Enable/disables buy page button depending on if there is enough currency
	if(gold < document.getElementById('PageCost').innerHTML || iron < 100){	
		document.getElementById("btnbuyPage").disabled = true;
	}
	else{
		document.getElementById("btnbuyPage").disabled = false;
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
	
	//Changes status of the building mines button
	if(minesOpened){
		document.getElementById("btnOpenMines").disabled = true
		document.getElementById("btnOpenMines").innerHTML = "Mines built";
	}
	else if(!minesOpened && gold < 1500){
		document.getElementById("btnOpenMines").disabled = true
	}
	else{
		document.getElementById("btnOpenMines").disabled = false
	}
	
	//Changes status of the building barracks button
	if(barracksOpened){
		document.getElementById("btnOpenBarracks").disabled = true
		document.getElementById("btnOpenBarracks").innerHTML = "Barracks built";
	}
	else if(!cathedralOpened && (gold < 10000 || iron < 250)){
		document.getElementById("btnOpenBarracks").disabled = true
	}
	else{
		document.getElementById("btnOpenBarracks").disabled = false
	}
	
	//Changes status of the building cathedral button
	if(cathedralOpened){
		document.getElementById("btnOpenCathedral").disabled = true
		document.getElementById("btnOpenCathedral").innerHTML = "Cathedral built";
	}
	else if(!cathedralOpened && (gold < 10000 || iron < 500)){
		document.getElementById("btnOpenCathedral").disabled = true
	}
	else{
		document.getElementById("btnOpenCathedral").disabled = false
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
	
	ironpersec = miners;
	document.getElementById("ironpersec").innerHTML = ironpersec;
    
},10);

window.setInterval(function(){					//Soul generation via paladins etc every second
	demonClick(paladins*(weapons+1));
}, 1000);

window.setInterval(function(){					//Gold generation via peasants etc every second
	goldClick(peasants);
}, 1000);

window.setInterval(function(){					//Faith Generation via priests etc every second
	clickFaith(priests*0.1);
	faith = faith.toFixedDown(2);
}, 1000);

window.setInterval(function(){					//Iron Generation via minors etc every second
	mineClick(miners);
},1000);


window.setInterval(function(){					//Enables/disables buttons 
	UpdateButtons();
}, 10);

window.setInterval(function(){					//Increases totalTimePlayed by 1 second per second 
	totalTimePlayed = totalTimePlayed + 1;
	tTPinHHMMSS = totalTimePlayed.toHHMMSS();
	document.getElementById("tTPinHHMMSS").innerHTML = tTPinHHMMSS;
}, 1000);

Number.prototype.toFixedDown = function(digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        m = this.toString().match(re);
    return m ? parseFloat(m[1]) : this.valueOf();
};

String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = hours+':'+minutes+':'+seconds;
    return time;
}

