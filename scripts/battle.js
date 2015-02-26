//Battle script for HW//

//Battle variables//
var defeatedGoblins = false;
var defeatedBandits = false;
var defeatedOgre = false;
var defeatedHhounds = false;
var defeatedArchmage = false;
var goldStolen = 0;
var justStolen = 0;
var typeKilled = "none"	//HHound statistic
var justKilled = 0;		//HHound statistic
var peasantsKilled = 0; //HHound statistic
var minersKilled = 0;

var Raidtime = 0;
var BattlePower = 0;


function calculateBattlePower(){
	var weapmult = 1;
	if(paladinWepUpgrade == true)
	{
		weapmult = 2;
	}
	BattlePower =  (Page.number * 10) + (Squire.number*50) + (Knight.number*150) + (Paladin.number * 500 * weapmult);
	document.getElementById("BattlePower").innerHTML = BattlePower;
	document.getElementById("BattlePower2").innerHTML = BattlePower;
};

var Enemy = function(name, description, htmlBoxRef, htmlBarRef, htmlBtnRef, htmlAlertRef, BPReq, percentComplete, percentIncrement,speed){
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
	this.fightable = false;
};

//Fighting enemy function prototype
Enemy.prototype.fight = function(){
	var perComplete = this.percentComplete;
	var perIncrement = this.percentIncrement;
	var alert = this.htmlAlertRef;
	var btn = this.htmlBtnRef;
	var box = this.htmlBoxRef;
	var bar = this.htmlBarRef;
	var EnemyName = this.name;
	
	if(this.fightable == true){
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
			document.getElementById(alert).style.display = "block";			//Displays alert related to this battle
			document.getElementById(box).style.display = "none";			//Hides progress bar box
			document.getElementById(btn).innerHTML = EnemyName + " Defeated!";     //Changes button text
			document.getElementById(btn).disabled = true;					//disables the buttons
			this.inCombat = false;
			setDefeatEvents(EnemyName);
		  } 		
		}, this.speed);
		return true;
	}
	else{
		return false;
		//Your army isn't strong enough to fight this enemy.
	}
}

Enemy.prototype.canFight = function(){
	
	var myButton = this.htmlBtnRef
	
	if(BattlePower >= this.BPReq ){
		this.fightable = true;
		document.getElementById(myButton).disabled = false;
		this.checkFlag();
	}
	else{
		this.fightable = false;
		document.getElementById(myButton).disabled = true;
		this.checkFlag();
	}	
};

Enemy.prototype.checkFlag = function(){
	var myButton = this.htmlBtnRef
	switch(this.name){
		case 'Goblins':
			if(defeatedGoblins == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;	
			}
						
		break;	
	
		case 'Bandits':
			if(defeatedBandits == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;	
			}
		break;
		
		case 'Ogre':
			if(defeatedOgre == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;	
			}
			break;
		
		case 'Hellhounds':
			if(defeatedHhounds == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;	
			}			
		break;
		
		case 'Archmage':
			if(defeatedArchmage == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;	
			}							
		break;
		
		default:		
	}
};

Enemy.prototype.setPercent = function(previousPercent){
	this.percentComplete = previousPercent;
};

function setEnemyDescription(Enemy, element){
	var popover = document.getElementById(element);
	popover.setAttribute("data-content", Enemy.description);		
};

function setDefeatEvents(name){
	switch(name){

		case 'Goblins':
			defeatedGoblins = true;
			gold = gold + 2000;
			document.getElementById("gold").innerHTML = gold;
		break;	
	
		case 'Bandits':
			defeatedBandits = true;
			document.getElementById('FaithStructuresTab').style.display = "block";
			gold = gold + Math.floor(goldStolen/2);
		break;
		
		case 'Ogre':
			document.getElementById('soulsdiv').style.display = "block";			
			document.getElementById('PaladinTab').style.display = "block";
			document.getElementById('PaladinUpgradeTab').style.display = "block"; //Until a drop unlocks paladin weapon upgrade		
			document.getElementById('FaithStructuresTab').style.display = "block";
			defeatedOgre = true;
			setTimeout(function() { triggerHellhound(); }, 30000);		
		break;
		
		case 'Hellhounds':
			document.getElementById('Ethereal').style.display = "block";
			document.getElementById('EtherealMenu').style.display = "block";
			defeatedHhounds = true;
		break;
		
		case 'Archmage':
			document.getElementById('buildTowerTab').style.display = "block";
			defeatedArchmage = true;
		break;
		
		default:
	}
		
};

var goblinsDesc = "Goblin description placeholder <br><br> You should probably stop them.";
var Goblins = new Enemy('Goblins', goblinsDesc, 'BatGoblinsProgBarBox', 'BatGoblinsProgBar', 'btnBatGoblins','goblinDefeatAlert',75,0,10,500);
setEnemyDescription(Goblins, 'btnDescGoblins');

var banditsDesc = "A bandit camp sits on the outskirts of your village. Bandits occasionally ride into your village and do dastardly things like looting and pillaging your poor peasants.  <br><br> You should probably stop them."
var Bandits = new Enemy('Bandits', banditsDesc, 'BatBanditsProgBarBox', 'BatBanditsProgBar', 'btnBatBandits','unlockCathAlert',100,0,5,500);
setEnemyDescription(Bandits, 'btnDescBandits');

function banditLoot(){
	if(defeatedBandits == false){
		var raidtime = Math.floor((Math.random() * 90) + 30); ;
		var ticker = raidtime;
		var raid = setInterval(function() {
			ticker = ticker - 1;  
		  if (ticker == 0){
			clearInterval(raid);
			if(defeatedBandits == false){
				justStolen =  Math.ceil(gold*1/5);
				goldStolen = goldStolen + justStolen;
				gold = gold - justStolen;
				document.getElementById("gold").innerHTML = gold;
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
var Ogre = new Enemy("Ogre", ogreDesc, 'BatOgreProgBarBox','BatOgreProgBar','btnBatOgre','unlockPaladinsAlert',100,0,1,500);
setEnemyDescription(Ogre, 'btnDescOgre');

var hellhoundsDesc = "The Evil One has released these fiery hounds to stalk your village. Occasionally the are able to slip past your defences and kill some of your peasants and miners.";
var Hellhounds = new Enemy("Hellhounds", hellhoundsDesc, 'BatHhoundProgBarBox','BatHhoundProgBar','btnBatHellhound','openEtherealAlert',2000,0,1,1000);
setEnemyDescription(Hellhounds, 'btnDescHellhounds');


function triggerHellhound(){
	document.getElementById('hellhoundUnlockAlert').style.display = "block";
	document.getElementById('BatHellhound').style.display = "block";
	hellHoundRaid();
}

function hellHoundRaid(){
	if(defeatedHhounds == false){
		var raidtime = Math.floor((Math.random() * 120) + 60); ;
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

//Hellhounds killing peasants or Miners
function hellhoundCull(){
	var flipCoin = Math.floor(Math.random()*10+1);    //Determining which unit gets killed
		if(flipCoin%2 == 0){
			typeKilled = "peasants";
			document.getElementById("typeKilled").innerHTML = typeKilled;
			justKilled = Math.floor(Peasant.number / 10);
			Peasant.number = Peasant.number - justKilled;
			document.getElementById("justKilled").innerHTML = justKilled;
			peasantsKilled = peasantsKilled + justKilled;
			document.getElementById("peasants").innerHTML = Peasant.number;
			document.getElementById('hellHoundAttackAlert').style.display = "block"
			document.getElementById("peasantsKilled").innerHTML = peasantsKilled;
		}
		else{
			typeKilled = "miners";
			document.getElementById("typeKilled").innerHTML = typeKilled;
			justKilled = Math.floor(Miner.number / 10);
			Miner.number = Miner.number - justKilled;
			document.getElementById("justKilled").innerHTML = justKilled;
			minersKilled = minersKilled + justKilled;
			document.getElementById("miners").innerHTML = Miner.number;
			document.getElementById('hellHoundAttackAlert').style.display = "block"
			document.getElementById("minersKilled").innerHTML = minersKilled;
		}
		recalculateCosts();
};

var archmageDesc = "One of The Evil One's lieutenants, capable of casting nasty and powerful spells.";
var Archmage = new Enemy("Archmage", archmageDesc, 'BatMageProgBarBox','BatMageProgBar','btnBatMage','unlockWizardTowerAlert',20000,0,1,2000);
setEnemyDescription(Archmage, 'btnDescMage');


window.setInterval(function(){					//Calculates Battle Power 
	calculateBattlePower();
}, 100);


