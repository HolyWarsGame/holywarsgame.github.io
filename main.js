
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
    faith.toFixedDown(2);
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
function buyPeasant(){
    var PeasantCost = Math.floor(10 * Math.pow(1.1,peasants));     //works out the cost of this Peasant
    if(gold >= PeasantCost){                                   //checks that the player can afford the Peasant
        peasants = peasants + 1;                                   //increases number of Peasants
    	gold = gold - PeasantCost;                          //removes the gold spent
        document.getElementById('peasants').innerHTML = peasants;  //updates the number of Peasants for the user
        document.getElementById('gold').innerHTML = gold;  //updates the number of gold for the user
    };
    var nextPeasantCost = Math.floor(10 * Math.pow(1.1,peasants));       //works out the cost of the next Peasant
    document.getElementById('PeasantCost').innerHTML = nextPeasantCost;  //updates the Peasant cost for the user
};


var priests = 0;
function buyPriest(){
    var PriestCost = Math.floor(1000 * Math.pow(1.1,priests));     //works out the cost of this Priest
    if(gold >= PriestCost){                                   //checks that the player can afford the Priest
        priests = priests + 1;                                   //increases number of Priests
    	gold = gold - PriestCost;                          //removes the gold spent
        document.getElementById('priests').innerHTML = priests;  //updates the number of Priests for the user
        document.getElementById('gold').innerHTML = gold;  //updates the number of gold for the user
    };
    var nextPriestCost = Math.floor(1000 * Math.pow(1.1,priests));       //works out the cost of the next Priest
    document.getElementById('PriestCost').innerHTML = nextPriestCost;  //updates the Priest cost for the user
};

var paladins = 0;

function buyPaladin(){
    var PaladinCost = Math.floor(100 * Math.pow(1.1,paladins));     //works out the cost of this Paladin
    if(faith >= PaladinCost){                                   //checks that the player can afford the Paladin
        paladins = paladins + 1;                                   //increases number of Paladins
    	faith = faith - PaladinCost;                          //removes the souls spent
        document.getElementById('paladins').innerHTML = paladins;  //updates the number of Paladins for the user
        document.getElementById('souls').innerHTML = faith;  //updates the number of souls for the user
    };
    var nextPaladinCost = Math.floor(100 * Math.pow(1.1,paladins));       //works out the cost of the next Paladin
    document.getElementById('PaladinCost').innerHTML = nextPaladinCost;  //updates the Paladin cost for the user
};

var weapons = 0;

function buyWeapon(){
    var WeaponCost = Math.floor(1000 * Math.pow(1.1,weapons));     //works out the cost of this weapon
    if(souls >= WeaponCost){                                   //checks that the player can afford the weapon
        weapons = weapons + 1;                                   //increases number of weapons
    	souls = souls - WeaponCost;                          //removes the souls spent
        document.getElementById('weapons').innerHTML = weapons;  //updates the number of weapons for the user
        document.getElementById('souls').innerHTML = souls;  //updates the number of souls for the user
    };
    var nextWeapCost = Math.floor(1000 * Math.pow(1.1,weapons));       //works out the cost of the next weapon
    document.getElementById('WeaponCost').innerHTML = nextWeapCost;  //updates the weapon cost for the user
};

window.setInterval(function(){                                 //Update per second counts
    goldpersec = peasants;
    document.getElementById("goldpersec").innerHTML = goldpersec;
    
    faithpersec = priests*0.1
    document.getElementById("faithpersec").innerHTML = faithpersec;
    
    soulspersec = paladins*(weapons+1);
    document.getElementByID("soulspersec").innerHTML = soulspersec;
    
},10);

window.setInterval(function(){
	
	demonClick(paladins*(weapons+1));
	
}, 1000);

window.setInterval(function(){

	goldClick(peasants);
	
}, 1000);

window.setInterval(function(){

	clickFaith(priests*0.1);
	
}, 1000);


Number.prototype.toFixedDown = function(digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        m = this.toString().match(re);
    return m ? parseFloat(m[1]) : this.valueOf();
};

