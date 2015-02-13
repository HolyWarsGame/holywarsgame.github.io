
var souls = 0;

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

window.setInterval(function(){
	
	demonClick(warriors);
	
}, 10000);