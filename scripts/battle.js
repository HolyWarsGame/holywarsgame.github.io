//Battle script for HW//

//Battle variables//
var defeatedGoblins = false;
var defeatedBandits = false;
var defeatedHermit = false;
var defeatedOgre = false;
var defeatedHhounds = false;
var defeatedPixie = false;
var defeatedOoze = false;
var defeatedArchmage = false;
var defeatedArmor = false;
var defeatedSuccubus = false;
var defeatedUArmy = false;
var defeatedNecromancer = false;

var goldStolen = 0;		//Bandit statistic
var justStolen = 0;		//Bandit statistic
var typeKilled = "none"	//HHound statistic
var justKilled = 0;		//HHound statistic
var peasantsKilled = 0; //HHound statistic
var minersKilled = 0;	//HHound statistic
var absorbedType = "none"//Ooze statistic
var absorbedAmount = 0; //Ooze statistic
var ironAbsorbed = 0;	//Ooze statistic
var silverAbsorbed = 0; //Ooze statistic
var unitsSeduced = 0;   //Succubus statistic
var UARevivedCount = 0; //Undead Army Statistic

var inbattle = false;
var curBattling;
var battlePercent;
var spellBoostPercent;

var Raidtime = 0;
var BattlePower = 0;
var SpiritPower = 0;


function calculateBattlePower(){
	var weapmult = 1;
	if(paladinWepUpgrade == true)
	{
		weapmult = 2;
	}
	BattlePower =  (Page.number * 10) + (Squire.number*50) + (Knight.number*150) + (Paladin.number * 500 * weapmult) + (Shade.number * 5) + (Aspect.number * 100) + (Angel.number * 450);
	document.getElementById("BattlePower").innerHTML = fnum(BattlePower);
	document.getElementById("BattlePower2").innerHTML = BattlePower;
};

function calculateSpiritPower(){
	var weapmult = 1;
	if(paladinWepUpgrade == true)
	{
		weapmult = 2;
	}	
	SpiritPower =  ((Paladin.number * 5 * weapmult)+(Shade.number*10) + (Aspect.number * 50) + (Angel.number * 200));
	document.getElementById("SpiritPower").innerHTML = fnum(SpiritPower);
	document.getElementById("SpiritPower2").innerHTML = SpiritPower;
	if (SpiritPower > 0){
		document.getElementById('spiritarmystrdiv').style.display = "block";
	}
};

var Enemy = function(name, description, htmlBoxRef, htmlBarRef, htmlBtnRef, htmlAlertRef, BPReq, SPReq, percentComplete, percentIncrement,speed){
	this.name = name;
	this.description = description;
	this.htmlBoxRef = htmlBoxRef;
	this.htmlBarRef = htmlBarRef;
	this.htmlBtnRef = htmlBtnRef;
	this.htmlAlertRef = htmlAlertRef;
	this.BPReq = BPReq;
	this.SPReq = SPReq;
	this.percentComplete = percentComplete;
	this.percentIncrement = percentIncrement;
	this.speed = speed;
	this.fightable = false;
	var $bar = $(document.getElementById(this.htmlBarRef));
	this.spellBoostPercent;
	//Need to add $bar here to add % fight spell?
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
	inbattle = true;
	curBattling = this.name
	document.getElementById(this.htmlBoxRef).style.display = "block";
	
	$bar = $(document.getElementById(this.htmlBarRef));
		var progress = setInterval(function() {
			 currWidth = parseInt(this.$bar.attr('aria-valuenow'));
		     maxWidth = parseInt(this.$bar.attr('aria-valuemax'));	
			 	
			//update the progress
			if(this.spellBoostPercent > 0){
				perComplete = perComplete + parseInt(spellBoostPercent);
				spellBoostPercent = 0
				if(perComplete > 100){
					perComplete = 100;
				}
			}
			
			$bar.width(perComplete +'%');
			$bar.attr('aria-valuenow',perComplete);
			$bar.text(perComplete+'%');
			perComplete = perComplete + perIncrement;
			this.percentComplete = perComplete;
			battlePercent = perComplete;
			
		  if (currWidth >= maxWidth){
			clearInterval(progress);
				$bar.text("Complete!");
			document.getElementById(box).style.display = "none";			//Hides progress bar box
			document.getElementById(btn).innerHTML = EnemyName + " Defeated!";     //Changes button text
			document.getElementById(btn).disabled = true;					//disables the buttons
			document.getElementById(alert).style.display = "block";			//Displays alert related to this battle
			scroll(alert,500);
			inbattle = false;
			
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

Enemy.prototype.canFight = function(){		//Checks to see if this enemy can be fought
	var myButton = this.htmlBtnRef
	
	if(BattlePower >= this.BPReq && SpiritPower >= this.SPReq && inbattle == false){
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

Enemy.prototype.checkFlag = function(){		//Checks to see if battle has been won, if so change button to reflect
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
		
		case 'Hermit':
			if(defeatedHermit == true){
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
		
		case 'Pixie':
			if(defeatedPixie == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;	
			}			
		break;

		case 'Armor':
			if(defeatedArmor == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;	
			}			
		break;	
		
		case 'Ooze':
			if(defeatedOoze == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;
			}			
		
		case 'Archmage':
			if(defeatedArchmage == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;	
			}							
		break;
		
		case 'Succubus':
			if(defeatedSuccubus == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;	
			}							
		break;	
		
		case 'UndeadArmy':
			if(defeatedUArmy == true){
				document.getElementById(myButton).innerHTML = "Undead Army" + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;	
			}							
		break;		

		case 'Necromancer':
			if(defeatedUArmy == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;	
			}							
		break;			
		
		default:		
	}
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
		
		case 'Hermit':
			defeatedHermit = true;
			document.getElementById('gatherPaper').style.display = "block";
			document.getElementById('paperdiv').style.display = "block";
			document.getElementById('PaperMillTab').style.display = "block";
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
			document.getElementById('SpiritualStrength').style.display = "block";
			showBattle('Armor');
			showBattle('Pixie');
			document.getElementById('BatArmor').style.display = "block";
			document.getElementById('BatPixie').style.display = "block";
			setTimeout(function() { triggerOoze(); }, 30000);	
			defeatedHhounds = true;
		break;

		case 'Ooze':
			document.getElementById('tomeUnlock').style.display = "block";
			document.getElementById('tomeUnlockAlert').style.display = "block";
			defeatedOoze = true;
		break;	
		
		case 'Pixie':
			defeatedPixie = true;
		break;	

		case 'Armor':
			document.getElementById('AspectofJustice').style.display = "block";
			defeatedArmor = true;
		break;			
		
		case 'Archmage':
			document.getElementById('buildTowerTab').style.display = "block";
			defeatedArchmage = true;
			setTimeout(function() { triggerSuccubus(); }, 30000);
		break;
		
		case 'Succubus':
			defeatedSuccubus = true;
			document.getElementById('RelicPedestalTab').style.display = "block";
		break;
		
		case 'UndeadArmy':
			defeatedUArmy = true;
			UARevivedCount = UARevivedCount + 1;
				switch(UARevivedCount){
					case 1:
						document.getElementById('UADefeatMessage').innerHTML = "The zombie army is chopped into arms, legs, torsos, and other various pieces by your army. " +
						"You figure that they won't be able to cause any further harm in that shape and have your army bury the pieces that they can find. " +
						"Everyone returns home to take a bath to get rid of the ungodly stench caused by the ichor that has splattered all over."
						setTimeout(function() { necroReviveUA(); }, 60000);
					break;
					
					case 2:
						document.getElementById('UADefeatMessage').innerHTML = "The zombie army is chopped into finer pieces than before." +
						"You figure that they won't be able to cause any further harm in that shape and have your army bury the pieces that they can find. " +
						"Everyone returns home to take a bath to get rid of the ungodly stench caused by the ichor that has splattered all over."
						setTimeout(function() { necroReviveUA(); }, 120000);
					break;
					
					case 3:
						document.getElementById('UADefeatMessage').innerHTML = "You realize that fighting the undead army is basically pointless, as they keep coming back. "+
						"You have one of your paladins whom is more attuned to magic tracking seek out the source. It turns out there's a necromancer hiding in a cave you " +
						"never noticed before! Clearly he was sent to harass you by The Evil One."
						
						setTimeout(function() { necroReviveUA(); }, 180000);
						document.getElementById("BatNecromancer").style.display = "block";
						showBattle('Necromancer');
					break;
					
					default:
						document.getElementById('UADefeatMessage').innerHTML = "You realize that fighting the undead army is basically pointless, as they keep coming back. "+
						"You have one of your paladins whom is more attuned to magic tracking seek out the source. It turns out there's a necromancer hiding in a cave you " +
						"never noticed before! Clearly he was sent to harass you by The Evil One."
						
						setTimeout(function() { necroReviveUA(); }, 180000);
						document.getElementById("BatNecromancer").style.display = "block";
						showBattle('Necromancer');					
				}

			
		//	alert("Unfinished battle!");
		break;
		
		case 'Necromancer':
			defeatedNecromancer = true;
//			document.getElementById('RelicPedestalTab').style.display = "block";
		break;		
		
		default:
	}	
};

$(document).ready(function(){
    $(".toggle-false").click(function(){
        $("#myCollapsible").collapse({
            toggle: false
        });
    });
    $(".show-btn").click(function(){
        $("#myCollapsible").collapse('show');
    });
    $(".hide-btn").click(function(){
        $("#myCollapsible").collapse('hide');
    });
    $(".toggle-btn").click(function(){
        $("#myCollapsible").collapse('toggle');
    });
});

function showBattle(name){
	switch (name){
		case 'Goblins':
			$("#GoblinCollapse").collapse('show');
		break;	
	
		case 'Bandits':
			$("#BanditCollapse").collapse('show');
		break;
		
		case 'Hermit':
			$("#HermitCollapse").collapse('show');
		break;	
		
		case 'Ogre':	
			$("#OgreCollapse").collapse('show');
		break;
		
		case 'Hellhounds':
			$("#HellhoundCollapse").collapse('show');
		break;
		
		case 'Pixie':
			$("#pixieCollapse").collapse('show');
		break;	

		case 'Armor':
			$("#ArmorCollapse").collapse('show');
		break;	

		case 'Ooze':
			$("#OozeCollapse").collapse('show');
		break;			
		
		case 'Archmage':
			$("#ArchmageCollapse").collapse('show');
		break;	
		
		case 'Succubus':
			$("#SuccubusCollapse").collapse('show');
		break;

		case 'UndeadArmy':
			$("#UndeadArmyCollapse").collapse('show');
		break;	

		case 'Necromancer':
			$("#NecromancerCollapse").collapse('show');
		break;			
		
		default:
	}	
}

function showUndefeatedBattles(){
	if(defeatedGoblins == false){
		showBattle('Goblins');
		scroll('BatGoblins', 500);	
	}
	if(defeatedBandits == false){
		showBattle('Bandits');
		scroll('BatBandits', 500);
	}

	if(defeatedHermit == false){
		showBattle('Hermit');
		scroll('BatHermit', 500);
	}
	
	if(defeatedOgre == false){
		showBattle('Ogre');
		scroll('BatPixie', 500);
	}
	
	if(defeatedHhounds == false){
		showBattle('Hellhounds');
		scroll('BatHellhound', 500)
	}			

	if(defeatedPixie == false){
		showBattle('Pixie');
		scroll('BatPixie', 500);	
	}			

	if(defeatedArmor == false){
		showBattle('Armor');
		scroll('BatArmor', 500);				
	}	

	if(defeatedOoze == false){
		showBattle('Ooze');
		scroll('BatOoze', 500);		
	}		

	if(defeatedArchmage == false){
		showBattle('Archmage');
		scroll('BatArchMage', 500);
	}							

	if(defeatedSuccubus == false){
		showBattle('Succubus');
		scroll('BatSuccubus', 500);
	}	
	
	if(defeatedUArmy == false){
		showBattle('UndeadArmy');
		scroll('BatUndeadArmy', 500);
	}

	if(defeatedNecromancer == false){
		showBattle('Necromancer');
		scroll('BatNecromancer', 500);
	}		
}

/*
function hideBattle(name){
	switch (name){
		case 'Goblins':
			$("#GoblinCollapse").collapse('hide');
		break;	
	
		case 'Bandits':
			$("#BanditCollapse").collapse('hide');
		break;
		
		case 'Hermit':
			$("#HermitCollapse").collapse('hide');
		break;	
		
		case 'Ogre':	
			$("#OgreCollapse").collapse('hide');
		break;
		
		case 'Hellhounds':
			$("#HellhoundCollapse").collapse('hide');
		break;
		
		case 'Pixie':
			$("#pixieCollapse").collapse('hide');
		break;	

		case 'Armor':
			$("#ArmorCollapse").collapse('hide');
		break;	

		case 'Ooze':
			$("#OozeCollapse").collapse('hide');
		break;			
		
		case 'Archmage':
			$("#ArchmageCollapse").collapse('hide');
		break;	
		
		case 'Succubus':
			$("#SuccubusCollapse").collapse('hide');
		break;
		default:
	}	
}

function hideAllBattles(){
	hideBattle('Goblins');
	hideBattle('Bandits');
	hideBattle('Hermit');
	hideBattle('Ogre');
	hideBattle('Hellhounds');
	hideBattle('Pixie');
	hideBattle('Armor');
	hideBattle('Ooze');
	hideBattle('Archmage');
	hideBattle('Succubus');
}
*/

function loadBattle(name, percent){
	spellBoost(percent);
	showBattle(name);
	switch (name){
		case 'Goblins':
			Goblins.fight();
		break;	
	
		case 'Bandits':
			Bandits.fight();
		break;
		
		case 'Hermit':
			Hermit.fight();
		break;		
		
		case 'Ogre':	
			Ogre.fight();
		break;
		
		case 'Hellhounds':
			Hellhounds.fight();
		break;
		
		case 'Pixie':
			Pixie.fight();
		break;	

		case 'Armor':
			Armor.fight();
		break;			

		case 'Ooze':
			Ooze.fight();
		break;			
		
		case 'Archmage':
			Archmage.fight();
		break;
		
		case 'Succubus':
			Succubus.fight();
		break;
		
		case 'UndeadArmy':
			UndeadArmy.fight();
		break;

		case 'Necromancer':
			Necromancer.fight();
		break;			
		
		default:
	}
};


//function(name, description, htmlBoxRef, htmlBarRef, htmlBtnRef, htmlAlertRef, BPReq, SPReq, percentComplete, percentIncrement,speed)
var goblinsDesc = "Goblin description placeholder <br><br> You should probably stop them.";
var Goblins = new Enemy('Goblins', goblinsDesc, 'BatGoblinsProgBarBox', 'BatGoblinsProgBar', 'btnBatGoblins','goblinDefeatAlert',75,0,0,10,500);
setEnemyDescription(Goblins, 'btnDescGoblins');

var banditsDesc = "A bandit camp sits on the outskirts of your village. Bandits occasionally ride into your village and do dastardly things like looting and pillaging your poor peasants.  <br><br> You should probably stop them."
var Bandits = new Enemy('Bandits', banditsDesc, 'BatBanditsProgBarBox', 'BatBanditsProgBar', 'btnBatBandits','unlockCathAlert',100,0,0,5,500);
setEnemyDescription(Bandits, 'btnDescBandits');


function banditLoot(){
	if(defeatedBandits == false){
		var raidtime = Math.floor((Math.random() * 90) + 15); ;
		var ticker = raidtime;
		var raid = setInterval(function() {
			ticker = ticker - 1;  
		  if (ticker == 0){
			clearInterval(raid);
			if(defeatedBandits == false){
				justStolen =  Math.ceil(gold*1/5);
				goldStolen = goldStolen + justStolen;
				gold = gold - justStolen;
				document.getElementById("gold").innerHTML = fnum(gold);
				document.getElementById("goldStolen").innerHTML = fnum(goldStolen);
				document.getElementById("justStolen").innerHTML = fnum(justStolen);
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

setTimeout(function() { banditLoot(); }, 90000);//Triggers bandit looting

var hermitDesc = "There is a hermit living in the middle of the forest. She keeps mostly to herself, but you can observe her cutting down trees from time to time. It is clear, however, that she is a menace because she has a tendency to throw poisoned knives at anyone who come near her.";
var Hermit = new Enemy('Hermit', hermitDesc, 'BatHermitProgBarBox', 'BatHermitProgBar', 'btnBatHermit','paperMillAlert',250,0,0,2,500);
setEnemyDescription(Hermit, 'btnDescHermit');

var ogreDesc = "A large and particularly odorous Ogre is threatening your village! Take it out before it tries to eat any more of your cattle or decides to pass wind in your direction.";
var Ogre = new Enemy("Ogre", ogreDesc, 'BatOgreProgBarBox','BatOgreProgBar','btnBatOgre','unlockPaladinsAlert',500,0,0,1,500);
setEnemyDescription(Ogre, 'btnDescOgre');

var hellhoundsDesc = "The Evil One has released these fiery hounds to stalk your village. Occasionally the are able to slip past your defences and kill some of your peasants and miners.";
var Hellhounds = new Enemy("Hellhounds", hellhoundsDesc, 'BatHhoundProgBarBox','BatHhoundProgBar','btnBatHellhound','openEtherealAlert',2000,0,0,1,1000);
setEnemyDescription(Hellhounds, 'btnDescHellhounds');


function triggerHellhound(){
	document.getElementById('hellhoundUnlockAlert').style.display = "block";
	document.getElementById('BatHellhound').style.display = "block";
	showBattle('Hellhounds');
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
			if(defeatedHhounds == false && (inbattle == false || (inbattle == true && curBattling == "Hellhounds"))){	
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


var pixieDesc = "This little pixie hates your guts.";
var Pixie = new Enemy("Pixie", pixieDesc, 'BatPixieProgBarBox','BatPixieProgBar','btnBatPixie','PixieDefeatAlert',3500,100,0,1,1000);
setEnemyDescription(Pixie, 'btnDescPixie');

var armorDesc = "In the woods nearby, you notice a nasty looking armor hanging about in the shadows. It makes threatening gestures at you from afar.";
var Armor = new Enemy("Armor", armorDesc, 'BatArmorProgBarBox','BatArmorProgBar','btnBatArmor','unlockAspectofJustice',4000,250,0,1,1000);
setEnemyDescription(Armor, 'btnDescArmor');

var oozeDesc = "Nasty and moist noises come from your mines at night. Upon deeper exploration of the cave system attached to your mines, you find a particularly large and copper-toned ooze sucking up iron and silver. Somehow it is both gelatinous and metallic at the same time... Conventional weapons don't seem to hurt it at all."
var Ooze = new Enemy("Ooze", oozeDesc, 'BatOozeProgBarBox','BatOozeProgBar','btnBatOoze','tomeUnlockAlert',0,550,0,1,1500);
setEnemyDescription(Ooze, 'btnDescOoze');

function triggerOoze(){
	document.getElementById('BatOoze').style.display = "block";
	showBattle('Ooze');	
	oozeRaid();
}

function oozeRaid(){
	if(defeatedOoze == false){
		var raidtime = Math.floor((Math.random() * 120) + 60); ;
		var ticker = raidtime;
		
		var raid = setInterval(function() {
			ticker = ticker - 1;  
		  if (ticker == 0){
			clearInterval(raid);
			if(defeatedOoze == false && (inbattle == false || (inbattle == true && curBattling == "Ooze"))){	
				oozeAbsorb();
				oozeRaid();
			}
		  }
		}, 1000);				
	};		
};

function oozeAbsorb(){
	var flipCoin = Math.floor(Math.random()*10+1);    //Determining which unit gets killed
	if(flipCoin%2 == 0){
		absorbedType = "iron";
		ironAbsorbed = ironAbsorbed + Math.floor(iron/5);
		absorbedAmount = Math.floor(iron/5);
		iron = iron - Math.floor(iron/5);
		document.getElementById('iron').innerHTML = fnum(iron);
		document.getElementById('ironAbsorbed').innerHTML = fnum(ironAbsorbed);
	}
	else{
		absorbedType = "silver";
		silverAbsorbed = silverAbsorbed + Math.floor(silver/5);
		absorbedAmount = Math.floor(silver/5);
		silver = silver - Math.floor(silver/5);
		document.getElementById('silver').innerHTML = fnum(silver);
		document.getElementById('silverAbsorbed').innerHTML = fnum(silverAbsorbed);	
	}
	document.getElementById('absorbedAmount').innerHTML = fnum(absorbedAmount);
	document.getElementById('absorbedType').innerHTML = absorbedType;
	document.getElementById('OozeAttackAlert').style.display = "block"
	document.getElementById('BatOoze').style.display = "block";
	
	
	//Dismisses Raid Alert
	var ticker2 = 0 ;
	var clearAttackAlert = setInterval(function() {
		ticker2 = ticker2 + 1;   
			if (ticker2 == 20){
				clearInterval(clearAttackAlert);
				if(document.getElementById('OozeAttackAlert').style.display == "block"){
				document.getElementById("OozeAttackAlert").style.display = "none";
			}	
		}
	}, 1000);	
	//End Dismisses Raid Alert	
};

var archmageDesc = "One of The Evil One's lieutenants, capable of casting nasty and powerful spells.";
var Archmage = new Enemy("Archmage", archmageDesc, 'BatMageProgBarBox','BatMageProgBar','btnBatMage','unlockWizardTowerAlert',20000,750,0,1,2000);
setEnemyDescription(Archmage, 'btnDescMage');

var succubusDesc = "A very shapely demon. She has magic powers that make it difficult to resist her will. Not wearing any clothes probably helps too.";
var Succubus = new Enemy("Succubus", succubusDesc, 'BatSuccubusProgBarBox','BatSuccubusProgBar','btnBatSuccubus','SuccubusDefeatAlert',35000,2000,0,1,3000);
setEnemyDescription(Succubus, 'btnDescSuccubus');

function triggerSuccubus(){
	document.getElementById('EvilOneIreAlert').style.display = "block";
	showBattle('Succubus');	
	document.getElementById('BatSuccubus').style.display = "block";
	showBattle('UndeadArmy');
	document.getElementById('BatUndeadArmy').style.display = "block";
	succubusRaid();
}

function succubusRaid(){
		if(defeatedSuccubus == false){
		var raidtime = Math.floor((Math.random() * 130) + 70); ;
//		console.log("Raidtime in: " + raidtime)
		var ticker = raidtime;
		
		var raid = setInterval(function() {
			ticker = ticker - 1;  
		  if (ticker == 0){
			clearInterval(raid);
			if(defeatedSuccubus == false && (inbattle == false || (inbattle == true && curBattling == "Succubus"))){
				succubusSeduce();
				succubusRaid();
			}
		  }
		}, 1000);				
	};	
}

function succubusSeduce(){
	//find highest tier unit in Barracks
	var highestTier
	var previousTier
	
	if(Paladin.number > 0){
		highestTier = Paladin
		previousTier = Knight
	}
	else if(Knight.number > 0){
		highestTier = Knight
		previousTier = Squire
	}
	else if(Squire.number > 0){
		highestTier = Squire
		previousTier = Page
	}
	else{
		return;
	}
	
	highestTier.number = highestTier.number - 1;
	previousTier.number = previousTier.number + 1;
	unitsSeduced = unitsSeduced + 1;
	
	document.getElementById(highestTier.htmlNumRef).innerHTML = highestTier.number;
	document.getElementById(previousTier.htmlNumRef).innerHTML = previousTier.number;		
	document.getElementById('seducedUnitType').innerHTML = highestTier.name;
	document.getElementById('previousUnitType').innerHTML = previousTier.name;
	document.getElementById('unitsSeduced').innerHTML = unitsSeduced;
	
	document.getElementById('SuccubusAttackAlert').style.display = "block"
	
	//Dismisses Raid Alert
	var ticker2 = 0 ;
	var clearAttackAlert = setInterval(function() {
		ticker2 = ticker2 + 1;   
			if (ticker2 == 20){
				clearInterval(clearAttackAlert);
				if(document.getElementById('SuccubusAttackAlert').style.display == "block"){
				document.getElementById("SuccubusAttackAlert").style.display = "none";
			}	
		}
	}, 1000);	
	//End Dismisses Raid Alert
}

var undeadArmyDesc = "You hear unearthly moaning and groaning from beyond your kingdom. You find the smell before the actual army. Even though the zombies are in an advanced state of decomposition, they are still equipped with dangerous weapons and tough looking armor.";
var UndeadArmy = new Enemy("UndeadArmy", undeadArmyDesc, 'BatUArmyProgBarBox','BatUArmyProgBar','btnBatUArmy','UArmyDefeatAlert',40000,3000,0,1,3000);
setEnemyDescription(UndeadArmy, 'btnDescUArmy');

var necroDesc = "A master of unholy magic, this wizard is quite adept at bringing corpses back to life. You really, really hope he's not into necrophilia.";
var Necromancer = new Enemy("Necromancer", necroDesc, 'BatNecroProgBarBox','BatNecroProgBar','btnBatNecro','NecroDefeatAlert',52500,6000,0,1,4000);
setEnemyDescription(Necromancer, 'btnDescNecro');

function necroReviveUA(){
	if(defeatedUArmy == true){
		defeatedUArmy = false;
		document.getElementById('btnBatUArmy').innerHTML = "Battle Again!";
		document.getElementById(UndeadArmy.htmlBoxRef).style.display = "block";
		$bar = $(document.getElementById(UndeadArmy.htmlBarRef));		
		$bar.width(0 +'%');
		$bar.attr('aria-valuenow',0);
		$bar.text(0+'%');	
		document.getElementById(UndeadArmy.htmlBoxRef).style.display = "none";
		showBattle("UndeadArmy");
		document.getElementById('UArmyReviveAlert').style.display = "block";
		show('UArmyReviveAlert',500);
	}
}


function checkBattleButtons(){
	//Changes status of Battle Buttons
	//Goblin Button
	Goblins.canFight();
	
	//Bandit Button
	Bandits.canFight();
	
	//Hermit Button
	Hermit.canFight();	

	//Ogre Button
	Ogre.canFight();
	
	//Hellhound Button
	Hellhounds.canFight();
	
	//Pixie Button
	Pixie.canFight();

	//Armor Button
	Armor.canFight();
	
	//Ooze Button
	Ooze.canFight();
	
	//Archmage Button
	Archmage.canFight();

	//Succubus Button
	Succubus.canFight();
	
	//Undead Army Button
	UndeadArmy.canFight();
};

window.setInterval(function(){					//Calculates Battle Power 
	calculateBattlePower();
	calculateSpiritPower();
}, 100);


