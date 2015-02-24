//Battle script for HW//

//Battle variables needed to be saved//
var defeatedBandits = false;
var defeatedOgre = false;
var defeatedHhounds = false;
var goldStolen = 0;
var justStolen = 0;
var typeKilled = "none"	//HHound statistic
var justKilled = 0;		//HHound statistic
var peasantsKilled = 0; //HHound statistic
var minersKilled = 0;

var Raidtime = 0;
var BattlePower = 0;

function calculateBattlePower(){
	BattlePower =  (Page.returnNumber() * 10) + (Squire.returnNumber()*50) + (Paladin.returnNumber() * 500) * (1.5*(weapons+1));
	document.getElementById("BattlePower").innerHTML = BattlePower;
	document.getElementById("BattlePower2").innerHTML = BattlePower;
};

var Enemy = function(name, description, htmlBoxRef, htmlBarRef, htmlBtnRef, htmlAlertRef, BPReq, percentComplete, percentIncrement,speed,flag){
	this.name = name;
	this.description = description;
	this.htmlBoxRef = htmlBoxRef;
	this.htmlBarRef = htmlBarRef;
	this.htmlBtnRef = htmlBtnRef;
	this.htmlAlertRef = htmlAlertRef;
	this.BPReq = BPReq;
	this.percentComplete = percentComplete;
	this.percentIncrement = percentIncrement;
	this.speed = speed;
};



Enemy.prototype.fight = function(){
	var perComplete = this.percentComplete;
	var perIncrement = this.percentIncrement;
	var alert = this.htmlAlertRef;
	var btn = this.htmlBtnRef;
	var box = this.htmlBoxRef;
	var bar = this.htmlBarRef;
	
	if(BattlePower >= this.BPReq){
		document.getElementById(this.htmlBoxRef).style.display = "block";
		var $bar = $(document.getElementById(this.htmlBarRef));
		var progress = setInterval(function() {
			var currWidth = parseInt($bar.attr('aria-valuenow'));
		    var maxWidth = parseInt($bar.attr('aria-valuemax'));	
	
			//update the progress
			$bar.width(perComplete +'%');
			$bar.attr('aria-valuenow',perComplete);
			$bar.text(perComplete+'%');
			perComplete = perComplete + perIncrement;  

		  if (currWidth >= maxWidth){
			clearInterval(progress);
			$bar.text("Complete!");
			flag = false;
			document.getElementById(alert).style.display = "block";			//Displays alert related to this battle
			document.getElementById(box).style.display = "none";			//Hides progress bar box
			document.getElementById(btn).innerHTML = "Enemy Defeated!";     //Changes button text
			document.getElementById(btn).disabled = true;					//disables the buttons
		  } 		
		}, this.speed);
		return true;
	}
	else{
		return false;
		//Your army isn't strong enough to fight this enemy.
	}
}

function setEnemyDescription(Enemy, element){
	var popover = document.getElementById(element);
	popover.setAttribute("data-content", Enemy.description);		
};


var banditsDesc = "A bandit camp sits on the outskirts of your village. Bandits occasionally ride into your village and do dastardly things like looting and pillaging your poor peasants.  <br><br> You should probably stop them."
var Bandits = new Enemy("bandits", banditsDesc, 'BatBanditsProgBarBox', 'BatBanditsProgBar', 'btnBatBandits','unlockCathAlert',100,0,5,500,defeatedBandits);
setEnemyDescription(Bandits, 'btnDescBandits');

function GoFightBandits(){
	var win = Bandits.fight();
	
	if (win == true){
		document.getElementById('FaithStructuresTab').style.display = "block";
//		defeatedBandits = true;
		gold = gold + Math.floor(goldStolen/2);
	}
	else
		defeatedBandits = false;
}
	
	
function banditLoot(){
	if(defeatedBandits == false){
		var raidtime = Math.floor((Math.random() * 90) + 30); ;
//		console.log("Raidtime in: " + raidtime)
		var ticker = raidtime;
		
		var raid = setInterval(function() {
			ticker = ticker - 1;  
//			console.log(ticker);
		  if (ticker == 0){
			clearInterval(raid);
			if(defeatedBandits == false){
				justStolen =  Math.ceil(gold*1/3);
				goldStolen = goldStolen + justStolen;
				gold = gold - justStolen;
				document.getElementById("goldStolen").innerHTML = goldStolen;
				document.getElementById("justStolen").innerHTML = justStolen;
				document.getElementById("banditLootAlert").style.display = "block";
				banditLoot();
				//Dismisses Raid Alert
				var ticker2 = 0 ;
				var clearLootAlert = setInterval(function() {
					ticker2 = ticker2 + 1;   
						if (ticker2 == 20){
							clearInterval(clearLootAlert);
							if(document.getElementById('banditLootAlert').style.display == "block"){
							document.getElementById("banditLootAlert").style.display = "none";
						}	
					}
				}, 1000);	
				//End Dismisses Raid Alert
			}
		  }
		}, 1000);				
	};
};

setTimeout(function() { banditLoot(); }, 30000);//Triggers bandit looting

var ogreDesc = "A large and particularly odorous Ogre is threatening your village! Take it out before it tries to eat any more of your cattle or decides to pass wind in your direction.";
var Ogre = new Enemy("ogre", ogreDesc, 'BatOgreProgBarBox','BatOgreProgBar','btnBatOgre','unlockPaladinsAlert',100,0,1,500, defeatedOgre);
setEnemyDescription(Ogre, 'btnDescOgre');

function GoFightOgre(){
	var win = Ogre.fight();
	if (win == true){
		document.getElementById('soulsdiv').style.display = "block";			
		document.getElementById('PaladinTab').style.display = "block";
		document.getElementById('PaladinUpgradeTab').style.display = "block"; //Until a drop unlocks paladin weapon upgrade		
		document.getElementById('FaithStructuresTab').style.display = "block";
		defeatedOgre = true;
		setTimeout(function() { triggerHellhound(); }, 30000);
	}
	else
		defeatedOgre = false;	
};

function triggerHellhound(){
	document.getElementById('hellhoundUnlockAlert').style.display = "block";
	document.getElementById('BatHellhound').style.display = "block";
	hellHoundRaid();
}

function hellHoundRaid(){
	if(defeatedHhounds == false){
		var raidtime = Math.floor((Math.random() * 90) + 45); ;
//		console.log("Raidtime in: " + raidtime)
		var ticker = raidtime;
		
		var raid = setInterval(function() {
			ticker = ticker - 1;  
//			console.log(ticker);
		  if (ticker == 0){
			clearInterval(raid);
			if(defeatedHhounds == false){
				hellhoundCull();
				hellHoundRaid();
				//Dismisses Raid Alert
				var ticker2 = 0 ;
				var clearAttackAlert = setInterval(function() {
					ticker2 = ticker2 + 1;   
						if (ticker2 == 20){
							clearInterval(clearAttackAlert);
							if(document.getElementById('hellHoundAttackAlert').style.display == "block"){
							document.getElementById("hellHoundAttackAlert").style.display = "none";
						}	
					}
				}, 1000);	
				//End Dismisses Raid Alert
			}
		  }
		}, 1000);				
	};	
}

function hellhoundCull(){
	var flipCoin = Math.floor(Math.random()*10+1);    //Determining which unit gets killed
		if(flipCoin%2 == 0){
			typeKilled = "peasants";
			document.getElementById("typeKilled").innerHTML = typeKilled;
			justKilled = Math.floor(peasants / 10);
			peasants = peasants - justKilled;
			document.getElementById("justKilled").innerHTML = justKilled;
			peasantsKilled = peasantsKilled + justKilled;
			document.getElementById("peasants").innerHTML = peasants;
			document.getElementById('hellHoundAttackAlert').style.display = "block"
			document.getElementById("peasantsKilled").innerHTML = peasantsKilled;
		}
		else{
			typeKilled = "miners";
			document.getElementById("typeKilled").innerHTML = typeKilled;
			justKilled = Math.floor(miners / 10);
			miners = miners - justKilled;
			document.getElementById("justKilled").innerHTML = justKilled;
			minersKilled = minersKilled + justKilled;
			document.getElementById("miners").innerHTML = miners;
			document.getElementById('hellHoundAttackAlert').style.display = "block"
			document.getElementById("minersKilled").innerHTML = minersKilled;
		}
		recalculateCosts();
};

function battleHellhound(){
	if(BattlePower >= 200){	
		var percentComplete = 0;
		document.getElementById('BatHhoundProgBarBox').style.display = "block";	  
		
		var $bar = $(document.getElementById('BatHhoundProgBar'));
		var progress = setInterval(function() {
		  
		  var currWidth = parseInt($bar.attr('aria-valuenow'));
		  var maxWidth = parseInt($bar.attr('aria-valuemax'));
			  
		  //update the progress
			$bar.width(percentComplete +'%');
			$bar.attr('aria-valuenow',percentComplete);
			$bar.text(percentComplete+'%');
			percentComplete = percentComplete + 1;   
			
		  //clear timer when max is reach
		  if (currWidth >= maxWidth){
			clearInterval(progress);
			$bar.text("Complete!");
			document.getElementById('Ethereal').style.display = "block";
			document.getElementById('EtherealMenu').style.display = "block";
			document.getElementById('openEtherealAlert').style.display = "block";
			document.getElementById('BatHhoundProgBarBox').style.display = "none";
			document.getElementById("btnBatHellhound").disabled = true;
			document.getElementById("btnBatHellhound").innerHTML = "Hellhounds Defeated!";
			defeatedHhounds = true;
		  } 
		}, 1000);
	}
	else{
//		alert("Your army is not strong enough to fight this enemy!");		
	};
};

window.setInterval(function(){					//Calculates Battle Power 
	calculateBattlePower();
}, 100);


