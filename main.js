
var souls = 50000;

function demonClick(number){
    souls = souls + number;
    document.getElementById("souls").innerHTML = souls;
};


var warriors = 0;

function buyWarrior(){
    var WarriorCost = Math.floor(10 * Math.pow(1.1,warriors));     //works out the cost of this cursor
    if(souls >= WarriorCost){                                   //checks that the player can afford the cursor
        warriors = warriors + 1;                                   //increases number of warriors
    	souls = souls - WarriorCost;                          //removes the souls spent
        document.getElementById('warriors').innerHTML = warriors;  //updates the number of warriors for the user
        document.getElementById('souls').innerHTML = souls;  //updates the number of souls for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,warriors));       //works out the cost of the next cursor
    document.getElementById('WarriorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

var weapons = 0;

function buyWeapon(){
    var WeaponCost = Math.floor(50 * Math.pow(1.1,weapons));     //works out the cost of this weapon
    if(souls >= WeaponCost){                                   //checks that the player can afford the weapon
        weapons = weapons + 1;                                   //increases number of weapons
    	souls = souls - WeaponCost;                          //removes the souls spent
        document.getElementById('weapons').innerHTML = weapons;  //updates the number of weapons for the user
        document.getElementById('souls').innerHTML = souls;  //updates the number of souls for the user
    };
    var nextWeapCost = Math.floor(50 * Math.pow(1.1,weapons));       //works out the cost of the next weapon
    document.getElementById('WeaponCost').innerHTML = nextWeapCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	demonClick(warriors);
	
}, (10000-50*weapons));