//Battle script for HW//

//Battle variables//
var defeatedBoar = false;
var defeatedGoblins = false;
var defeatedBandits = false;
var defeatedHermit = false;
var defeatedOgre = false;
var defeatedHhounds = false;
var defeatedPixie = false;
var defeatedOoze = false;
var defeatedDwarf = false;
var defeatedArchmage = false;
var defeatedArmor = false;
var defeatedSuccubus = false;
var defeatedUArmy = false;
var defeatedNecromancer = false;
var defeatedEarthElemental = false;
var defeatedFireElemental = false;
var defeatedWindElemental = false;
var defeatedWaterElemental = false;
var defeatedThaumaturge = false;
var defeatedCerberus = false;
var defeatedOuro = false;
var defeatedBoros = false;

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
	BattlePower = 0;
	
	BattlePower += Page.totalArmyPower();
	BattlePower += Squire.totalArmyPower();
	BattlePower += Knight.totalArmyPower();
	BattlePower += Paladin.totalArmyPower();
	BattlePower += Shade.totalArmyPower();
	BattlePower += Aspect.totalArmyPower();
	BattlePower += Angel.totalArmyPower();
	
	document.getElementById("BattlePower").innerHTML = fnum(BattlePower);
	document.getElementById("BattlePower2").innerHTML = BattlePower;
};

function calculateSpiritPower(){
	SpiritPower = 0;
	
	SpiritPower += Paladin.totalSpiritPower();
	SpiritPower += Shade.totalSpiritPower();
	SpiritPower += Aspect.totalSpiritPower();
	SpiritPower += Angel.totalSpiritPower();
	document.getElementById("SpiritPower").innerHTML = fnum(SpiritPower);
	document.getElementById("SpiritPower2").innerHTML = SpiritPower;
	
	if (SpiritPower > 0){
		document.getElementById('spiritarmystrdiv').style.display = "block";
	}
};

var Enemy = function(name, description, htmlBoxRef, htmlBarRef, htmlBtnRef, AlertRef, BPReq, SPReq, percentComplete, percentIncrement,speed){
	this.name = name;
	this.description = description;
	this.htmlBoxRef = htmlBoxRef;
	this.htmlBarRef = htmlBarRef;
	this.htmlBtnRef = htmlBtnRef;
	this.AlertRef = AlertRef;
	this.BPReq = BPReq;
	this.SPReq = SPReq;
	this.percentComplete = percentComplete;
	this.percentIncrement = percentIncrement;
	this.speed = speed;
	this.fightable = false;
	var $bar = $(document.getElementById(this.htmlBarRef));
	this.spellBoostPercent;
	this.lossPercentChance;
};

//Fighting enemy function prototype
Enemy.prototype.fight = function(){
	var perComplete = this.percentComplete;
	var perIncrement = this.percentIncrement;
	var alert = this.AlertRef;
	var btn = this.htmlBtnRef;
	var box = this.htmlBoxRef;
	var bar = this.htmlBarRef;
	var EnemyName = this.name;
	var SpirReq = this.SPReq;
	
	var lossPercent = this.lossPercentCalc();
	var battleUnitLost = selectRandomBattleUnit();
	var battleUnitLostNum = 0;
	var ethUnitLost = selectRandomEthUnit();
	var ethUnitLostNum = 0;
	
	if(this.fightable == true){
	inbattle = true;
	curBattling = this.name
	document.getElementById(this.htmlBoxRef).style.display = "block";
	
//	console.log(this.lossPercentCalc()*100 + '%');
//	console.log(battleUnitLost.name);
//	console.log(ethUnitLost.name);
	
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
			
			
			//Unit battle loss
			if(perComplete%25 == 0){
				var unitLost = false;
				if(loseUnit(lossPercent) == true && battleUnitLost.number > 0){
					console.log(battleUnitLost.name + " : " + battleUnitLost.number);
					battleUnitLostNum = battleUnitLostNum + 1;
					battleUnitLost.removeOne();
					statUnitsKilledInBattle += 1;
					statTotalUnitsKilledInBattle += 1;
					document.getElementById('statUnitsKilledInBattle').innerHTML = statUnitsKilledInBattle;
					document.getElementById('statTotalUnitsKilledInBattle').innerHTML = statTotalUnitsKilledInBattle;
					console.log(battleUnitLost.number);
					unitLost = true;
				}
				else{
//					console.log("No Combat unit loss");
				}
				
//				console.log(SpirReq);
				if(loseUnit(lossPercent) == true && SpirReq > 0 && ethUnitLost.number > 0){
					console.log(ethUnitLost.name + " : " + ethUnitLost.number);
					ethUnitLostNum = ethUnitLostNum + 1;
					ethUnitLost.removeOne();
					statUnitsKilledInBattle += 1;
					statTotalUnitsKilledInBattle += 1;
					document.getElementById('statUnitsKilledInBattle').innerHTML = statUnitsKilledInBattle;
					document.getElementById('statTotalUnitsKilledInBattle').innerHTML = statTotalUnitsKilledInBattle;					
					console.log(ethUnitLost.number);
					unitLost = true;					
				}
				else{
//					console.log("No Ethereal unit loss")
				}
				if(unitLost == true){
					loseUnitAlert(EnemyName, battleUnitLost.name, battleUnitLostNum, ethUnitLost.name, ethUnitLostNum);
//					document.getElementById('UnitLossAlert').style.display = "block";
//					scroll(UnitLossAlert,500);				
				}
			}
			
		  if (currWidth >= maxWidth){
			clearInterval(progress);
			$bar.text("Complete!");
			document.getElementById(box).style.display = "none";			//Hides progress bar box
			document.getElementById(btn).innerHTML = EnemyName + " Defeated!";     //Changes button text
			document.getElementById(btn).disabled = true;					//disables the buttons
//			document.getElementById(alert).style.display = "block";			//Displays alert related to this battle
//			scroll(alert,500);
			statEnemiesDefeated += 1;
			statTotalEnemiesDefeated += 1;
			document.getElementById('statEnemiesDefeated').innerHTML = statEnemiesDefeated;
			document.getElementById('statTotalEnemiesDefeated').innerHTML = statTotalEnemiesDefeated;
			inbattle = false;
			setDefeatEvents(EnemyName);
		  } 
			
//			console.log("#" + EnemyName + "Collapse");
			var collapsename = "#" + EnemyName + "Collapse"
			$(collapsename).toggleClass("backgroundRed");
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

Enemy.prototype.lossPercentCalc = function(){ 	//Checks to see percentage of troop loss for the battle (Loss % = 0 at 2x the battle requirement)
	var percent
	var topend = this.BPReq * 2;
	if(BattlePower >= topend){
		return 0;
	}
	else{
		percent = (topend - BattlePower)/BattlePower;
		return percent;
	}
};

function loseUnit(percent){
	if(percent == 0){
		return false;
	}
	else{
		if(Math.floor((Math.random() * 100) + 1) < percent * 100){
			return true;
		}
		else{
			return false;
		}
	}
}

function loseUnitAlert(enemyName, bUnitName, bNumberLost, eUnitName, eNumberLost){
	var loststring = "In your battle with " + enemyName + ", you lose ";
	
	if(bNumberLost > 0){
		loststring = loststring + bNumberLost + " " + bUnitName;
		if(bNumberLost > 1){
			loststring = loststring + "s"
		}
	}
	
	if(eNumberLost > 0){
		if(bNumberLost > 0){
			loststring = loststring + " and ";
		}
		loststring = loststring + eNumberLost + " " + eUnitName;
		if(eNumberLost > 1){
			loststring + "s";
		}
	}	
	loststring = loststring + '!';
	if(bNumberLost > 0 || eNumberLost > 0){
		
		$.notify({
			title: "<img src='images/swords.gif'><strong>Battle! <br/></strong>",
			message: loststring,
			delay: 60000},{
		type: 'danger'
		});			
		
//		document.getElementById('UnitLossAlert').style.display = "block";
//		document.getElementById('unitlossstring').innerHTML = loststring;
	}
//	scroll(UnitLossAlert, 500);
};

function selectRandomBattleUnit(){
	var rand = Math.floor(Math.random()*4) + 1;
	
	switch(rand){
		case 1:
			if(Page.number == 0){
				return selectRandomBattleUnit();
			}
			else{
				return Page;				
			}

		break;
		
		case 2:
			if(Squire.number == 0){
				return selectRandomBattleUnit();
			}
			else{
				return Squire;				
			}
		break;
		
		case 3:
			if(Knight.number == 0){
				return selectRandomBattleUnit();
			}
			else{		
				return Knight;
			}
		break;
		
		case 4:
			if(Paladin.number == 0){
				return selectRandomBattleUnit();
			}
			else{	
				return Paladin;
			}
		break;
	}
}

function selectRandomEthUnit(){
	var rand = Math.floor(Math.random()*3) + 1;
	
	if(Shade.number == 0 && Aspect.number == 0 && Angel.number == 0){
		return Shade;
	}
	
	switch(rand){
		case 1:
			if(Shade.number == 0){
				return selectRandomEthUnit();
			}
			else{
				return Shade;
			}
		break;
		
		case 2:
			if(Aspect.number == 0){
				return selectRandomEthUnit();
			}
			else{
				return Aspect;
			}
		break;
		
		case 3:
			if(Angel.number == 0){
				return selectRandomEthUnit();
			}
			else{
				return Angel;				
			}
		break;
	}	
}

Enemy.prototype.checkFlag = function(){		//Checks to see if battle has been won, if so change button to reflect
	var myButton = this.htmlBtnRef
	switch(this.name){
		case 'Boar':
			if(defeatedBoar == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;
				document.getElementById('boarh4').classList.add('defeatedtitle');
			}
		break;
		
		case 'Goblins':
			if(defeatedGoblins == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;
				document.getElementById('goblinh4').classList.add('defeatedtitle');
			}
						
		break;	
	
		case 'Bandits':
			if(defeatedBandits == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;
				document.getElementById('bandith4').classList.add('defeatedtitle');					
			}
		break;
		
		case 'Hermit':
			if(defeatedHermit == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;
				document.getElementById('hermith4').classList.add('defeatedtitle');	
			}
		break;		
		
		
		case 'Ogre':
			if(defeatedOgre == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;
				document.getElementById('ogreh4').classList.add('defeatedtitle');	
			}
			break;
		
		case 'Hellhounds':
			if(defeatedHhounds == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;
				document.getElementById('hellhoundsh4').classList.add('defeatedtitle');
			}			
		break;
		
		case 'Pixie':
			if(defeatedPixie == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;
				document.getElementById('pixieh4').classList.add('defeatedtitle');
			}			
		break;

		case 'Armor':
			if(defeatedArmor == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;	
				document.getElementById('armorh4').classList.add('defeatedtitle');	
			}			
		break;	
		
		case 'Ooze':
			if(defeatedOoze == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;
				document.getElementById('oozeh4').classList.add('defeatedtitle');	
			}
		break;
		
		case 'Dwarf':
			if(defeatedDwarf == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;
				document.getElementById('dwarfh4').classList.add('defeatedtitle');	
			}		
		break;
		
		case 'Archmage':
			if(defeatedArchmage == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;	
				document.getElementById('archmageh4').classList.add('defeatedtitle');	
			}							
		break;
		
		case 'Succubus':
			if(defeatedSuccubus == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;
				document.getElementById('succubush4').classList.add('defeatedtitle');		
			}							
		break;	
		
		case 'UndeadArmy':
			if(defeatedUArmy == true){
				document.getElementById(myButton).innerHTML = "Undead Army" + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;	
				document.getElementById('uarmyh4').classList.add('defeatedtitle');	
			}							
		break;		

		case 'Necromancer':
			if(defeatedNecromancer == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;	
				document.getElementById('necromancerh4').classList.add('defeatedtitle');
			}							
		break;

		case 'Earth Elemental':
			if(defeatedEarthElemental == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;	
				document.getElementById('earthelementalh4').classList.add('defeatedtitle');
			}			
		break;
		
		case 'Fire Elemental':
			if(defeatedFireElemental == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;	
				document.getElementById('fireelementalh4').classList.add('defeatedtitle');
			}			
		break;

		case 'Wind Elemental':
			if(defeatedWindElemental == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;	
				document.getElementById('windelementalh4').classList.add('defeatedtitle');
			}			
		break;

		case 'Water Elemental':
			if(defeatedWaterElemental == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;	
				document.getElementById('waterelementalh4').classList.add('defeatedtitle');
			}			
		break;

		case 'Thaumaturge':
			if(defeatedThaumaturge == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;	
				document.getElementById('thaumaturgeh4').classList.add('defeatedtitle');
			}			
		break;	

		case 'Cerberus':
			if(defeatedCerberus == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;	
				document.getElementById('cerberush4').classList.add('defeatedtitle');
			}			
		break;

		case 'Ouro':
			if(defeatedOuro == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;	
				document.getElementById('ouroh4').classList.add('defeatedtitle');
			}			
		break;	

		case 'Boros':
			if(defeatedBoros == true){
				document.getElementById(myButton).innerHTML = this.name + " Defeated!";     //Changes button text
				document.getElementById(myButton).disabled = true;	
				document.getElementById('borosh4').classList.add('defeatedtitle');
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
//	eval("var " + this.AlertRef );
	switch(name){
		
		case 'Boar':
			defeatedBoar = true;
			gold = gold + 100;
			document.getElementById("gold").innerHTML = gold;
			this.AlertRef = $.notify({
				title: "<strong>New!</strong>",
				message: "You defeat the wild boar with ease! You realize that it somehow came into possession of  <img src = 'images/money_goldsmall.png' Title='Gold'>100... You send one of your pages to retrieve it from the boar's defeated body. ",
				},{
				type: 'success',
				delay: 300000
			});	
			
		break; 
		case 'Goblins':
			defeatedGoblins = true;
			gold = gold + 2000;
			document.getElementById("gold").innerHTML = gold;
			this.AlertRef = $.notify({
				title: "<strong>New!</strong>",
				message: "You chase the defeated horde of goblins back to their mound. They put up a last ditch effort, but your forces make quick work out of them. Inside their mound you find a stash of <img src = 'images/money_goldsmall.png' Title='Gold'>2000! ",
				},{
				type: 'success',
				delay: 300000
			});			
		break;	
	
		case 'Bandits':
			defeatedBandits = true;
			document.getElementById('FaithStructuresTab').style.display = "block";
			gold = gold + Math.floor(goldStolen/2);
			this.AlertRef = $.notify({
				title: "<strong>New!</strong>",
				message: "You successfully chase out the bandits raiding your village. While rifling through the leader's belongings, you find plans for an elaborate  <a href='javascript: alertOpenStructuresPage(); this.AlertRef.close();' class='alert-link'>church</a>. These bandits sure do have funny taste in loot. In a corner of the camp, you also find a portion of the gold that they have stolen from you.",
				},{
			delay: 300000,
			type: 'success'
			});				
			
		break;
		
		case 'Hermit':
			defeatedHermit = true;
			document.getElementById('gatherPaper').style.display = "block";
			document.getElementById('paperdiv').style.display = "block";
			document.getElementById('PaperMillTab').style.display = "block";

			this.AlertRef = $.notify({
				title: "<strong>New!</strong>",
				message: "As your troops put the hermit out of her misery, you get a chance to take a look inside her hovel. A small stack of paper sits in the tray of an metal mechanism - more paper is scattered on the nearby desk, on which she has been been scrawling things that are completely illegible to you. You study her tools and are able to figure out how to <a href='javascript: alertOpenStructuresPage(); this.AlertRef.close();' class='alert-link'>make your own paper</a>.",
				},{
			delay: 300000,
			type: 'success'
			});					
			
		break;		
		
		case 'Ogre':
			document.getElementById('soulsdiv').style.display = "block";			
			document.getElementById('PaladinTab').style.display = "block";
			document.getElementById('PaladinUpgradeTab').style.display = "block"; //Until a drop unlocks paladin weapon upgrade		
//			document.getElementById('FaithStructuresTab').style.display = "block";
			defeatedOgre = true;
			this.AlertRef = $.notify({
				title: "<strong>New!</strong>",
				message: "As the ogre flails around in his death throes, something falls from his loincloth and hits the floor. It's a grimy tome on how to train  <a href='javascript: alertOpenBarracksPage(); this.AlertRef.close();' class='alert-link'>Paladins!</a> It smells just like the ogre did, but at least it's useful.",	
				},{
			delay: 300000,
			type: 'success'
			});				
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

			this.AlertRef = $.notify({
				title: "<strong>New!</strong>",
				message: "After the hellhounds explode in a cloud of blood and fire, you sift through their charred remains. You discover a grotesquely carved collar, from which dangles a skull-shaped tag. On back side  When you arrive at the marked destination on the map, you realize there is a almost <a href='javascript: alertOpenEtherealPage(); this.AlertRef.close();' class='alert-link'>otherworldly tear</a> floating in front of you.",	
				},{
			delay: 300000,
			type: 'success'
			});					
			
			setTimeout(function() { triggerOoze(); }, 30000);	
			defeatedHhounds = true;
		break;

		case 'Ooze':
			document.getElementById('tomeUnlock').style.display = "block";
//			document.getElementById('tomeUnlockAlert').style.display = "block";
			document.getElementById('BatDwarf').style.display = "block";
			defeatedOoze = true;

			this.AlertRef = $.notify({
				title: "<strong>New!</strong>",
				message: "With an ominous blurp, whatever was animating the ooze comes to a slurpy halt. Although the ore that it has absorbed is now useless, you come to realize that that vast quantity of ooze now own is great for gluing together your paper to make books! Maybe <a href='javascript: alertOpenChurchPage(); this.AlertRef.close();' class='alert-link'>a pious and studious person</a> knows what to do with these...",	
				},{
			delay: 300000,
			type: 'success'
			});					
			
		break;	
		
		case 'Dwarf':
			document.getElementById('Relics').style.display = "block";
			document.getElementById('RelicsMenu').style.display = "block";
			defeatedDwarf = true;	

			this.AlertRef = $.notify({
				title: "<strong>New!</strong>",
				message: "The dwarf coughs and the ire fades from his eyes. After a few moments gathering his composure, the dwarf offers to use his skills and tools to <a href='javascript: alertOpenRelicPage(); this.AlertRef.close();' class='alert-link'>identify relics</a> for you.",			
				},{
			delay: 300000,
			type: 'success'
			});					
		break;
		
		case 'Pixie':
			defeatedPixie = true;
			document.getElementById('ArcaneSpritesTab').style.display = "block";
			
			this.AlertRef = $.notify({
				title: "<strong>New!</strong>",
				//"The pixie dissolves into a pile of glittering dust. While staring at the pyramid shaped remains of the pixie, you notice a shimmering arcane sprite come out of hiding. She thanks you for freeing them from the tyranny of the malicious pixie, and tells you the secret to <a href='alertOpenTowerPage();' class='alert-link'>summoning arcane sprites</a>.",		
				message: "The pixie dissolves into a pile of glittering dust. While staring at the pyramid shaped remains of the pixie, you notice a shimmering arcane sprite come out of hiding. She thanks you for freeing them from the tyranny of the malicious pixie, and tells you the secret to summoning arcane sprites.",			
				},{
			delay: 300000,
			type: 'success'
			});				
		break;	

		case 'Armor':
			document.getElementById('AspectofJustice').style.display = "block";
			defeatedArmor = true;

			this.AlertRef = $.notify({
				title: "<strong>New!</strong>",
				message: "The armor lurches to an abrupt halt, and the glowing eyes fade. Abruptly, the armor drops to the floor with a clatter. One of your more curious shades floats into the armor pieces, levitating them around the room. It gives you a new idea on how to make your shades <a href='javascript: alertOpenEtherealPage(); this.AlertRef.close();' class='alert-link'>sturdier and battle ready.</a>",			
				},{
			delay: 300000,
			type: 'success'
			});					
			
		break;			
		
		case 'Archmage':
			document.getElementById('buildTowerTab').style.display = "block";
			defeatedArchmage = true;
				
			this.AlertRef = $.notify({
				title: "<strong>New!</strong>",
				message: "Your forces corner the Archmage. He has run out of mana but still tries to curse you with what little power he has anyway. A few feeble sparks sputter from his fingertips, but nothing happens. One of your paladins has been studying purification techniques, and performs the ritual on the Archmage. After a few minutes, the Archmage's complexion takes on a healthier glow, and he awakens. He thanks you for removing him from the control of The Evil One, and offers to join your forces. The Archmage suggests you build him a <a href='javascript: alertOpenStructuresPage(); this.AlertRef.close();' class='alert-link'>tower</a> where he can channel his energies.",			
				},{
			delay: 300000,
			type: 'success'
			});					
			
			setTimeout(function() { triggerSuccubus(); }, 30000);
		break;
		
		case 'Succubus':
			defeatedSuccubus = true;
			document.getElementById('RelicPedestalTab').style.display = "block";
			this.AlertRef = $.notify({
				title: "<strong>New!</strong>",
				message: "Even in death, the succubus jiggles in a most appealing manner, but that doesn't stop you from ending her reign of seductive terror. Your paladins attempt to purify her as they did with the Archmage, causing her to writhe around in pain. Her wings transition from leathery to feathery, and her horns recede into her head. It turns out the succubus was actually an angel! The injuries she has sustained in her battle with you are fatal, and none of your people are able to close the angel grievous wounds. She feebly beckons for you to come closer, and when you do, she presses an ancient necklace into your hand. '... please defeat Him...', she whispers. Her body fades and dissolves into a million tiny glittering lights that float gently up into the sky. Her demise only deepens your resolve to defeat The Evil One. Your priests take the necklace and place it <a href='javascript: alertOpenChurchPage(); this.AlertRef.close();' class='alert-link'>on a pedestal</a> in the church.",						
				},{
			delay: 300000,
			type: 'success'
			});	
			
		break;
		
		case 'UndeadArmy':
			defeatedUArmy = true;
			UARevivedCount = UARevivedCount + 1;
			var defeatMessage
				switch(UARevivedCount){
					case 1:
						defeatMessage = "The zombie army is chopped into arms, legs, torsos, and other various pieces by your army. " +
						"You figure that they won't be able to cause any further harm in that shape and have your army bury the pieces that they can find. " +
						"Everyone returns home to take a bath to get rid of the ungodly stench caused by the ichor that has splattered all over."
						setTimeout(function() { necroReviveUA(); }, 60000);
					break;
					
					case 2:
						defeatMessage = "The zombie army is chopped into finer pieces than before." +
						"You figure that they won't be able to cause any further harm in that shape and have your army bury the pieces that they can find. " +
						"Everyone returns home to take a bath to get rid of the ungodly stench caused by the ichor that has splattered all over."
						setTimeout(function() { necroReviveUA(); }, 120000);
					break;
					
					case 3:
						defeatMessage = "You realize that fighting the undead army is basically pointless, as they keep coming back. "+
						"You have one of your paladins whom is more attuned to magic tracking seek out the source. It turns out there's a necromancer hiding in a cave you " +
						"never noticed before! Clearly he was sent to harass you by The Evil One."
						
						setTimeout(function() { necroReviveUA(); }, 180000);
						document.getElementById("BatNecromancer").style.display = "block";
						showBattle('Necromancer');
					break;
					
					default:
						defeatMessage =  "You realize that fighting the undead army is basically pointless, as they keep coming back. "+
						"You have one of your paladins whom is more attuned to magic tracking seek out the source. It turns out there's a necromancer hiding in a cave you " +
						"never noticed before! Clearly he was sent to harass you by The Evil One."
						
						setTimeout(function() { necroReviveUA(); }, 180000);
						document.getElementById("BatNecromancer").style.display = "block";
						showBattle('Necromancer');					
				}
				
			this.AlertRef = $.notify({
				title: "<strong>New!</strong>",
				message: defeatMessage,
				},{
			delay: 300000,
			type: 'success'
			});					
		break;
		
		case 'Necromancer':
			defeatedNecromancer = true;
			document.getElementById('BatEarthElemental').style.display = "block";
			document.getElementById('BatFireElemental').style.display = "block";	
			document.getElementById('BatWindElemental').style.display = "block";
			document.getElementById('BatWaterElemental').style.display = "block";	
//			document.getElementById('BatThaumaturge').style.display = "block";
			
			this.AlertRef = $.notify({
				title: "<strong>New!</strong>",
				message: "Blah blah blah necromancer dies! You notice strange fluxuations in the surroundings.... The earth shakes, wind howls, water boils, fire blazes almost out of control. You can feel there is something terribly wrong.	",
				},{
			delay: 300000,
			type: 'success'
			});						
		break;		

		case 'Earth Elemental':
			if(boughtEarthPendant == false){
				this.AlertRef = $.notify({
					title: "<strong>New!</strong>",
					message: "Your troops fight valiantly! The earth elemental loses cohesion and collapses into a pile of boulders and dust. Just as you and your troops are about to leave, ominous rumbling comes from the pile, and you watch in dismay as the earth elemental reforms itself. There must be a way to stop this!",
					},{
				delay: 300000,
				type: 'danger'
				});
				ThaumaturgeRevive(ElementalEarth);		
			}
			else{
				defeatedEarthElemental = true;
				this.AlertRef = $.notify({
					title: "<strong>New!</strong>",
					message: "The earth elemental loses cohesion once more! The earth pendant you had made from ancient relics emits a pulsating light, and you can tell whatever primal magic that was animating the elemental is drawn into the pendant!",
					},{
				delay: 300000,
				type: 'success'
				});	
				if(checkDefeatedAllElementals() == true){
					document.getElementById('BatThaumaturge').style.display = "block";
				}			
			}
		break;

		case 'Fire Elemental':
			if(boughtFirePendant == false){
				this.AlertRef = $.notify({
					title: "<strong>New!</strong>",
					message: "Your troops fight valiantly! You watch as the fire elemental powers diminish, its form changing from a bright, hot blue to a barely flickering reddish flicker. Just as you and your troops are about to leave, a blazing flash of heat can be felt on your backs. The fire elemental reforms itself once more! There must be a way to stop this!",
					},{
				delay: 300000,
				type: 'danger'
				});
				ThaumaturgeRevive(ElementalFire);		
			}
			else{
				defeatedFireElemental = true;
				this.AlertRef = $.notify({
					title: "<strong>New!</strong>",
					message: "The fire elemental burns to a sizzling halt! The fire pendant you had made from ancient relics emits a pulsating light, and you can tell whatever primal magic that was animating the elemental is drawn into the pendant!",
					},{
				delay: 300000,
				type: 'success'
				});	
				if(checkDefeatedAllElementals() == true){
					document.getElementById('BatThaumaturge').style.display = "block";
				}			
			}			
		break;	

		case 'Wind Elemental':
			if(boughtWindPendant == false){
				this.AlertRef = $.notify({
					title: "<strong>New!</strong>",
					message: "Your troops fight valiantly! The wind elemental form becomes more and more nebulous, until all that remains is a vaguely irritated puff of wind. Just as you and your troops are about to leave, the wind picks back up and nearly knocks you onto your knees. You watch in dismay as the wind elemental reforms! There must be a way to stop this!",
					},{
				delay: 300000,
				type: 'danger'
				});
				ThaumaturgeRevive(ElementalWind);		
			}
			else{
				defeatedWindElemental = true;
				this.AlertRef = $.notify({
					title: "<strong>New!</strong>",
					message: "The wind elemental dissipates! The wind pendant you had made from ancient relics emits a pulsating light, and you can tell whatever primal magic that was animating the elemental is drawn into the pendant!",
					},{
				delay: 300000,
				type: 'success'
				});	
				if(checkDefeatedAllElementals() == true){
					document.getElementById('BatThaumaturge').style.display = "block";
				}			
			}
		break;	

		case 'Water Elemental':
			if(boughtWaterPendant == false){
				this.AlertRef = $.notify({
					title: "<strong>New!</strong>",
					message: "Your troops fight valiantly! The water elemental sloshes to a stop and its form becomes more and more amorphous, and suddenly there is a very wet and small lake where the elemental was. Just as you and your troops are about to leave, you are are drenched with a torrent of water! You watch in dismay as the water elemental reforms! There must be a way to stop this!",
					},{
				delay: 300000,
				type: 'danger'
				});
				ThaumaturgeRevive(ElementalWater);		
			}
			else{
				defeatedWaterElemental = true;
				this.AlertRef = $.notify({
					title: "<strong>New!</strong>",
					message: "The water elemental collapses into a puddle! The water pendant you had made from ancient relics emits a pulsating light, and you can tell whatever primal magic that was animating the elemental is drawn into the pendant!",
					},{
				delay: 300000,
				type: 'success'
				});	
				if(checkDefeatedAllElementals() == true){
					document.getElementById('BatThaumaturge').style.display = "block";
				}			
			}
		break;			
	
		case 'Thaumaturge':
			defeatedThaumaturge = true;
			this.AlertRef = $.notify({
				title: "<strong>New!</strong>",
				message: "Thaumaturge Defeat Message",
				},{
			delay: 300000,
			type: 'success'
			});				
			
		break;

		case 'Cerberus':
			defeatedCerberus = true;
			this.AlertRef = $.notify({
				title: "<strong>New!</strong>",
				message: "Cerberus Defeat Message",
				},{
			delay: 300000,
			type: 'success'
			});				
			
		break;	

		case 'Ouro':
			defeatedOuro = true;
			this.AlertRef = $.notify({
				title: "<strong>New!</strong>",
				message: "Ouro Defeat Message",
				},{
			delay: 300000,
			type: 'success'
			});					
			
		break;			
		
		case 'Boros':
			defeatedBoros = true;
			this.AlertRef = $.notify({
				title: "<strong>New!</strong>",
				message: "Boros Defeat Message",
				},{
			delay: 300000,
			type: 'success'
			});					
			
		break;			
		
		default:
	}	
};

function raidBattleCheck(name){
	if(name == curBattling && inbattle == true){
		return true;
	}
	else{
		return false;
	}
}

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
		case 'Boar':
			$("#BoarCollapse").collapse('show');
		break;			
		
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
		
		case 'Dwarf':
			$("#DwarfCollapse").collapse('show');
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

		case 'EarthElmental':
			$("#EarthElementalCollapse").collapse('show');
		break;			

		case 'FireElmental':
			$("#FireElementalCollapse").collapse('show');
		break;		

		case 'WindElmental':
			$("#WindElementalCollapse").collapse('show');
		break;		

		case 'WaterElmental':
			$("#WaterElementalCollapse").collapse('show');
		break;		

		case 'Thaumaturge':
			$("#ThaumaturgeCollapse").collapse('show');
		break;

		case 'Cerberus':
			$("#CerberusCollapse").collapse('show');
		break;	

		case 'Ouro':
			$("#OuroCollapse").collapse('show');
		break;

		case 'Boros':
			$("#BorosCollapse").collapse('show');
		break;		
		
		default:
	}	
}

function showUndefeatedBattles(){
	if(defeatedBoar == false){
		showBattle('Boar');
		scroll('BatBoar', 500);		
	}
	
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
	
	if(defeatedDwarf == false){
		showBattle('Dwarf');
		scroll('BatDwarf', 500);		
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

	if(defeatedEarthElemental == false){
		showBattle('EarthElmental');
		scroll('BatEarthElemental', 500);
	}		

	if(defeatedFireElemental == false){
		showBattle('FireElmental');
		scroll('BatFireElemental', 500);
	}	

	if(defeatedWindElemental == false){
		showBattle('WindElmental');
		scroll('BatWindElemental', 500);
	}	

	if(defeatedWaterElemental == false){
		showBattle('WaterElmental');
		scroll('BatWaterElemental', 500);
	}	

	if(defeatedThaumaturge == false){
		showBattle('Thaumaturge');
		scroll('BatThaumaturge', 500);
	}

	if(defeatedCerberus == false){
		showBattle('Cerberus');
		scroll('BatCerberus', 500);
	}	

	if(defeatedOuro == false){
		showBattle('Ouro');
		scroll('BatOuro', 500);
	}	

	if(defeatedBoros == false){
		showBattle('Boros');
		scroll('BatBoros', 500);
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
		case 'Boar':
			Boar.fight();
		break;
		
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
		
		case 'Dwarf':
			Dwarf.fight();
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
		
		case 'Earth Elemental':
			ElementalEarth.fight();
		break;
		
		case 'Fire Elemental':
			ElementalFire.fight();
		break;

		case 'Wind Elemental':
			ElementalWind.fight();
		break;

		case 'Water Elemental':
			ElementalWater.fight();
		break;		
		
		case 'Thaumaturge':
			Thaumaturge.fight();
		break;	

		case 'Cerberus':
			Cerberus.fight();
		break;

		case 'Ouro':
			Ouro.fight();
		break;	

		case 'Boros':
			Boros.fight();
		break;			
		
		default:
	}
};


//function(name, description, htmlBoxRef, htmlBarRef, htmlBtnRef, AlertRef, BPReq, SPReq, percentComplete, percentIncrement,speed)
var boarDesc = "A wild boar.";
var Boar = new Enemy('Boar', boarDesc, 'BatBoarProgBarBox', 'BatBoarProgBar', 'btnBatBoar','boarDefeatAlert',25,0,0,10,500);
setEnemyDescription(Boar, 'btnDescBoar');

var goblinsDesc = "Concerned with the security of your land, your spymaster has made a list of enemies spotted by your scouts. <br><br> The list begins with a den of greedy goblins in the nearby oak grove.<br><br>Though they have not made any aggressive moves toward your people and your holdings, these capricious hoarders of all things shiny remain a threat.";
var Goblins = new Enemy('Goblins', goblinsDesc, 'BatGoblinsProgBarBox', 'BatGoblinsProgBar', 'btnBatGoblins','goblinDefeatAlert',75,0,0,10,500);
setEnemyDescription(Goblins, 'btnDescGoblins');

var banditsDesc = "Scouts have reported sightings of a large group of marauders camped out on the plains. <br><br> Outfitted in leather armor and wielding iron weapons, these bandits roam the outskirts of your town and periodically pilfer from your peasants.  <br><br> You should probably stop them."
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
				if(raidBattleCheck('Bandits') == false){
					justStolen =  Math.ceil(gold*1/5);
					goldStolen = goldStolen + justStolen;
					statTotalGoldStolen += justStolen;
					gold = gold - justStolen;
					document.getElementById("gold").innerHTML = fnum(gold);
					document.getElementById("goldStolen").innerHTML = fnum(goldStolen);
//					document.getElementById("justStolen").innerHTML = fnum(justStolen);
					document.getElementById("statTotalGoldStolen").innerHTML = fnum(statTotalGoldStolen);
//					document.getElementById("banditLootAlert").style.display = "block";
					var string = "Bandits come and raid " + justStolen + " gold from your gold supply! Maybe you should try <a href='javascript: alertOpenBattlePage();' class='alert-link'>getting rid</a> of them?"
					
					if (justStolen > 0){
						$.notify({
							title: "<img src='images/swords.gif'><strong>Battle! <br/></strong>",
							message: string,
							delay: 60000},{
						type: 'danger'
						});							
					}
				}
				banditLoot();
/* 				//Dismisses Raid Alert
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
				//End Dismisses Raid Alert */
			}
		  }
		}, 1000);				
	};
};

setTimeout(function() { banditLoot(); }, 90000);//Triggers bandit looting

var hermitDesc = "Your people have been warned away from the swampy western woods where the mists blanket everything except for the lone hovel at the center. <br><br> Its single occupant can be seen chopping wood and collecting wild plants from time to time, often singing to herself into a garbled, eldritch language. <br><br> Her age hides the true extent of her skills - she keeps visitors away with an array of throwing knives, all launched with terrifyingly great accuracy.";
var Hermit = new Enemy('Hermit', hermitDesc, 'BatHermitProgBarBox', 'BatHermitProgBar', 'btnBatHermit','paperMillAlert',250,0,0,2,500);
setEnemyDescription(Hermit, 'btnDescHermit');

var ogreDesc = "Some of the peasants have reported missing livestock - cattle, pigs, geese and even chickens. At the same time, your villagers have been complaining of a spectacularly foul smell drifting in with the eastern wind. <br><br> Your scouts track down the nauseating fumes to a dark cave in the cliffs where they find a large and particularly odorous ogre munching on YOUR livestock. <br><br> Take it out before it eats more of your livestock or decides to pass more wind in your direction.";
var Ogre = new Enemy("Ogre", ogreDesc, 'BatOgreProgBarBox','BatOgreProgBar','btnBatOgre','unlockPaladinsAlert',500,0,0,1,500);
setEnemyDescription(Ogre, 'btnDescOgre');

var hellhoundsDesc = "Your hunters come across signs of a large pack of canine-like creatures wandering the plains. <br><br> Nightmarish howls can be heard day and night, frightening the livestock and putting your people on edge. <br><br> The most experienced of your hunters finally witnesses a portal rip open one night, sulfurous smoke billowing forth from the dark red maw and spitting out wicked hounds of enormous size that glow like the embers of smoldering lava. <br><br>  The pack will harass your defences and occasionally kill some of your peasants and miners.";
var Hellhounds = new Enemy("Hellhounds", hellhoundsDesc, 'BatHhoundProgBarBox','BatHhoundProgBar','btnBatHellhound','openEtherealAlert',2000,0,0,1,1000);
setEnemyDescription(Hellhounds, 'btnDescHellhounds');


function triggerHellhound(){
//	document.getElementById('hellhoundUnlockAlert').style.display = "block";
	$.notify({
		title: "<strong>Oh No! </strong>",
		message: " Your presence has not gone unnoticed - <a href='javascript: toggle('hellhoundUnlockAlert');CollapseAll();toggle('Battle')' class='alert-link'>hellhounds</a> have been summoned by the Evil One's command to attack you.",
		delay: 60000},{
	type: 'danger'
	});	

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
			if(defeatedHhounds == false && raidBattleCheck('Hellhounds') == false){	
				hellhoundCull();
				hellHoundRaid();
				
/* 				//Dismisses Raid Alert
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
				//End Dismisses Raid Alert */
				
			}
		  }
		}, 1000);				
	};	
}

//Hellhounds killing peasants or Miners
function hellhoundCull(){
	var flipCoin = Math.floor(Math.random()*10+1);    //Determining which unit gets killed
	var loststring
	
		if(flipCoin%2 == 0){
			typeKilled = "peasants";
//			document.getElementById("typeKilled").innerHTML = typeKilled;
			justKilled = Math.floor(Peasant.number / 10);
			Peasant.number -= justKilled;
//			document.getElementById("justKilled").innerHTML = justKilled;
			peasantsKilled += justKilled;
			statTotalPeasantsKilled += justKilled;
			document.getElementById("peasants").innerHTML = Peasant.number;
//			document.getElementById('hellHoundAttackAlert').style.display = "block"
			document.getElementById("peasantsKilled").innerHTML = peasantsKilled;
			document.getElementById("peasantsKilled2").innerHTML = peasantsKilled;
			document.getElementById("statTotalPeasantsKilled").innerHTML = statTotalPeasantsKilled;
			loststring = "The Evil One's hellhounds break through your defenses and kill " + justKilled + " of your "  + typeKilled + ". Build up your strength and <a href='javascript: alertOpenBattlePage();' class='alert-link'>fight</a> them off!"
		}
		else{
			typeKilled = "miners";
//			document.getElementById("typeKilled").innerHTML = typeKilled;
			justKilled = Math.floor(Miner.number / 10);
			Miner.number -= justKilled;
//			document.getElementById("justKilled").innerHTML = justKilled;
			minersKilled += justKilled;
			statTotalMinersKilled += justKilled;
			document.getElementById("miners").innerHTML = Miner.number;
//			document.getElementById('hellHoundAttackAlert').style.display = "block"
			document.getElementById("minersKilled").innerHTML = minersKilled;
			document.getElementById("minersKilled2").innerHTML = minersKilled;
			document.getElementById("statTotalMinersKilled").innerHTML = statTotalMinersKilled;
			loststring = "The Evil One's hellhounds break through your defenses and kill " + justKilled + " of your "  + typeKilled + ". Build up your strength and <a href='javascript: alertOpenBattlePage();' class='alert-link'>fight</a> them off!"
		}
		
		$.notify({
			title: "<strong>Oh No! </strong>",
			message: loststring,
			delay: 60000},{
		type: 'danger'
		});			
		
		recalculateCosts();
};

var cerberusDesc = "Your hunters come across signs of a large pack of canine-like creatures wandering the plains. <br><br> Nightmarish howls can be heard day and night, frightening the livestock and putting your people on edge. <br><br> The most experienced of your hunters finally witnesses a portal rip open one night, sulfurous smoke billowing forth from the dark red maw and spitting out wicked hounds of enormous size that glow like the embers of smoldering lava. <br><br>  The pack will harass your defences and occasionally kill some of your peasants and miners.";
var Cerberus = new Enemy("Cerberus", cerberusDesc, 'BatCerberusProgBarBox','BatCerberusProgBar','btnBatCerberus','CerberusDefeatAlert',2000,0,0,1,1000);
setEnemyDescription(Cerberus, 'btnDescCerberus');


var pixieDesc = "Research turns up notes about a trickster that delights in playing with mortals. <br><br> One ancient scroll describes the creature as possessing an deceptively innocent appearance, a small and spritely winged form dressed in the earhtly browns and bright greens of the forest designed to lure in unsuspecting humans. <br><br> Written in the margins of the scroll is a warning to the reader to beware of the creature's cunningness.";
var Pixie = new Enemy("Pixie", pixieDesc, 'BatPixieProgBarBox','BatPixieProgBar','btnBatPixie','PixieDefeatAlert',3500,100,0,1,1000);
setEnemyDescription(Pixie, 'btnDescPixie');

var armorDesc = "The region has been inhabited for a very long time, resulting in many remnants from previous civilizations.<br><br> The surprisingly intact ancient ruins of one such civilization stands out on the southern horizon. <br><br> Your night patrol spots movement in the ruin's shadows and upon closer inspection, discovers an empty set of armor of blackened steel engraved with mysterious runes. It floats mid-air with deadly grace, making threatening gestures from afar.";
var Armor = new Enemy("Armor", armorDesc, 'BatArmorProgBarBox','BatArmorProgBar','btnBatArmor','unlockAspectofJustice',4000,250,0,1,1000);
setEnemyDescription(Armor, 'btnDescArmor');

var oozeDesc = "Your mine tunnels intersect a long and winding cave system where slimy and moist sounds echo throughout the night. <br><br> Exploring the cavern, you discover an undulating translucent blob oozing slowly over the iron and silver deposits. <br><br> The ooze appears to be consuming the deposits as ore fragments are being rapidly absorbed into its metallic copper surface. <br><br> Conventional weapons slide right through the gelatinous creature - you need to find some other means of defeating it. "
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
			if(defeatedOoze == false && raidBattleCheck('Ooze') == false){	
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
		ironAbsorbed += Math.floor(iron/5);
		statTotalIronStolen += Math.floor(iron/5);
		absorbedAmount = Math.floor(iron/5);
		iron -= Math.floor(iron/5);
		document.getElementById('iron').innerHTML = fnum(iron);
		document.getElementById('ironAbsorbed').innerHTML = fnum(ironAbsorbed);
		document.getElementById('ironAbsorbed2').innerHTML = fnum(ironAbsorbed);
		document.getElementById('statTotalIronStolen').innerHTML = fnum(statTotalIronStolen);
	}
	else{
		absorbedType = "silver";
		silverAbsorbed += Math.floor(silver/5);
		statTotalSilverStolen += Math.floor(silver/5);
		absorbedAmount = Math.floor(silver/5);
		silver -= Math.floor(silver/5);
		document.getElementById('silver').innerHTML = fnum(silver);
		document.getElementById('silverAbsorbed').innerHTML = fnum(silverAbsorbed);
		document.getElementById('silverAbsorbed2').innerHTML = fnum(silverAbsorbed);
		document.getElementById('statTotalSilverStolen').innerHTML = fnum(statTotalSilverStolen);
	}
//	document.getElementById('absorbedAmount').innerHTML = fnum(absorbedAmount);
//	document.getElementById('absorbedType').innerHTML = absorbedType;
//	document.getElementById('OozeAttackAlert').style.display = "block"
	document.getElementById('BatOoze').style.display = "block";

	var loststring = "A nasty ooze burbles up from inside of your mine and engulfs " + absorbedAmount + " of your " + absorbedType + "! It's going to be a <a href='javascript: alertOpenBattlePage();' class='alert-link'>sticky fight</a>, but if you don't get rid of it it will absorb all of your minerals."
	$.notify({
		title: "<strong>Oh No! </strong>",
		message: loststring,
		},{delay: 60000},{
	type: 'danger'
	});			
	
/* 	//Dismisses Raid Alert
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
	//End Dismisses Raid Alert	 */
};

var dwarfDesc = "In one of the side channels of your mine that was previously blocked off by the gooey ooze you discover an ancient looking abode. <br><br> Inside the carved dwelling is a malevolent looking dwarf that cusses and spits at you and your troops when you get close to him. <br><br> From what you can see of his dwelling, you spy many delicate looking instruments which you presume are used for identification and categorizing. ";
var Dwarf = new Enemy("Dwarf", dwarfDesc, 'BatDwarfProgBarBox','BatDwarfProgBar','btnBatDwarf','DwarfDefeatAlert',17500,650,0,1,2000);
setEnemyDescription(Dwarf, 'btnDescDwarf');

var archmageDesc = "A crumbling tower springs up overnight, constructed at the will of some unknown force. <br><br> The tower's only inhabitant can be frequently seen practicing magic, its dark robes whipping up with the force of the spells. The gold and silver symbols embroidered into the robes indicate this is no ordinary mage but rather an Archmage, a caster whose many years of study and experience have bestowed upon him/her great skill and power. <br><br> Your scholars warn you that physical power alone will not net you victory - you must acquire those skilled in the spiritual arts in order to face this foe and succeed. ";
var Archmage = new Enemy("Archmage", archmageDesc, 'BatMageProgBarBox','BatMageProgBar','btnBatMage','unlockWizardTowerAlert',20000,750,0,1,2000);
setEnemyDescription(Archmage, 'btnDescMage');

var succubusDesc = "The unknown force has also deposited temptation at your doorstep in the form of one...very shapely demon. <br><br> The magical powers it commands makes it difficult to resist its will as somehow its androgynous appearance lures in both men and women alike. <br><br> The fact that what it wears barely covers its...uh, more luscious bits...well, let's stop right there, shall we? ";
var Succubus = new Enemy("Succubus", succubusDesc, 'BatSuccubusProgBarBox','BatSuccubusProgBar','btnBatSuccubus','SuccubusDefeatAlert',35000,2000,0,1,3000);
setEnemyDescription(Succubus, 'btnDescSuccubus');

function triggerSuccubus(){
//	document.getElementById('EvilOneIreAlert').style.display = "block";
	$.notify({
		title: "<strong>Oh No! </strong>",
		message: "Having defeated one of The Evil One's valued lieutenants, you realize that things are going to heat up from here. Your intuition is confirmed when a winged demon flies into your kingdom and issues a dire warning letting you know that The Evil. One going to destroy you and is sending more of his lieutenants your way.",
		},
	{delay: 60000,
	type: 'danger'
	});	
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
			if(defeatedSuccubus == false && raidBattleCheck('Succubus') == false){
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
	
	highestTier.number -= 1;
	previousTier.number += 1;
	unitsSeduced += 1;
	statTotalUnitsSeduced += 1;
	
	document.getElementById(highestTier.htmlNumRef).innerHTML = highestTier.number;
	document.getElementById(previousTier.htmlNumRef).innerHTML = previousTier.number;		
//	document.getElementById('seducedUnitType').innerHTML = highestTier.name;
//	document.getElementById('previousUnitType').innerHTML = previousTier.name;
	document.getElementById('unitsSeduced').innerHTML = unitsSeduced;
	document.getElementById('unitsSeduced2').innerHTML = unitsSeduced;
	document.getElementById('statTotalUnitsSeduced').innerHTML = statTotalUnitsSeduced;
//	document.getElementById('SuccubusAttackAlert').style.display = "block"
	
	var loststring = "The Evil One's paramour, the Succubus magically appears in the cover of the night... she seduces one of your " + highestTier.name + "s! They are returned the next day but cannot function as their previous role and have to be retrained from a " + previousTier.name + ". You better get <a href='javascript: alertOpenBattlePage();' class='alert-link'>get rid</a> of her before she decimates your entire army."

	$.notify({
		title: "<strong>Oh No! </strong>",
		message: loststring,
		},{
	delay: 60000,
	type: 'danger'
	});		
	
/* 	//Dismisses Raid Alert
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
	//End Dismisses Raid Alert */
}

var undeadArmyDesc = "Your patrols are returning with reports of unearthly moaning and groaning beyond the borders of your kingdom. <br><br> The sound are accompanied by the echo of footsteps in the distance as well as the stench of decaying flesh. <br> As if the ragged decomposed beings weren't frightening enough, a majority of the walking dead bear weapons and armor in relatively good shape. <br><br> You may need to bring spiritual forces to combat this unnatural army. ";
var UndeadArmy = new Enemy("UndeadArmy", undeadArmyDesc, 'BatUArmyProgBarBox','BatUArmyProgBar','btnBatUArmy','UArmyDefeatAlert',40000,3000,0,1,3000);
setEnemyDescription(UndeadArmy, 'btnDescUArmy');

var necroDesc = "A master of unholy magic, this wizard is quite adept at bringing corpses back to life. You really, really hope he's not into necrophilia.";
var Necromancer = new Enemy("Necromancer", necroDesc, 'BatNecroProgBarBox','BatNecroProgBar','btnBatNecromancer','NecroDefeatAlert',52500,6000,0,1,4000);
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
//		document.getElementById('UArmyReviveAlert').style.display = "block";
//		scroll('UArmyReviveAlert',500);

	$.notify({
		title: "<strong>Huh?! </strong>",
		message: "The moaning returns! While you are in the middle of ordering a scout to check the location you buried the undead army, a lookout comes running into your quarters tells you that the undead army has risen and is marching on your kingdom <a href='javascript: alertOpenBattlePage(); class='alert-link'>again!</a>",
		},{
	delay: 60000,
	type: 'danger'
	});	

	}
}

var elementalEarthDesc = "";
var ElementalEarth = new Enemy("Earth Elemental", ElementalEarth, 'BatEarthElementalProgBarBox','BatEarthElementalProgBar','btnBatEarthElemental','EarthElementalDefeatAlert',55000,6500,0,1,4000);
setEnemyDescription(ElementalEarth, 'btnDescEarthElemental');

var elementalFireDesc = "";
var ElementalFire = new Enemy("Fire Elemental", ElementalFire, 'BatFireElementalProgBarBox','BatFireElementalProgBar','btnBatFireElemental','FireElementalDefeatAlert',55000,6500,0,1,4000);
setEnemyDescription(ElementalFire, 'btnDescFireElemental');

var elementalWindDesc = "";
var ElementalWind = new Enemy("Wind Elemental", ElementalWind, 'BatWindElementalProgBarBox','BatWindElementalProgBar','btnBatWindElemental','WindElementalDefeatAlert',55000,6500,0,1,4000);
setEnemyDescription(ElementalWind, 'btnDescWindElemental');

var elementalWaterDesc = "";
var ElementalWater = new Enemy("Water Elemental", ElementalWater, 'BatWaterElementalProgBarBox','BatWaterElementalProgBar','btnBatWaterElemental','WaterElementalDefeatAlert',6500,6000,0,1,4000);
setEnemyDescription(ElementalWater, 'btnDescWaterElemental');

function checkDefeatedAllElementals(){
	if(defeatedEarthElemental == true && defeatedFireElemental == true  && defeatedWindElemental == true  && defeatedWaterElemental == true ){		

			this.AlertRef = $.notify({
				title: "<strong>New!</strong>",
				message: "Having defeated the primal elementals, the magic user summoning them finally appears! He seems quite adept at controlling the elements... He could wreck some serious havoc on your kingdom if you don't <a href='javascript: alertOpenBattlePage();' class='alert-link'>get rid of him</a> quickly!",
				},{
			delay: 300000,
			type: 'warning'
			});		
		return true;
	}
	else{
		return false;
	}
}

function ThaumaturgeRevive(elemental){
		document.getElementById(elemental.htmlBtnRef).innerHTML = "Battle Again!";
		document.getElementById(elemental.htmlBoxRef).style.display = "block";
		$bar = $(document.getElementById(elemental.htmlBarRef));		
		$bar.width(0 +'%');
		$bar.attr('aria-valuenow',0);
		$bar.text(0+'%');	
		document.getElementById(elemental.htmlBoxRef).style.display = "none";
}

var ThaumaturgeDesc = "";
var Thaumaturge = new Enemy("Thaumaturge", Thaumaturge, 'BatThaumaturgeProgBarBox','BatThaumaturgeProgBar','btnBatThaumaturge','ThaumaturgeDefeatAlert',60000,8000,0,1,4000);
setEnemyDescription(Thaumaturge, 'btnDescThaumaturge');

var OuroDesc = "";
var Ouro = new Enemy("Ouro", Ouro, 'BatOuroProgBarBox','BatOuroProgBar','btnBatOuro','OuroDefeatAlert',52500,6000,0,1,4000);
setEnemyDescription(Ouro, 'btnDescOuro');

var borosDesc = "";
var Boros = new Enemy("Boros", Boros, 'BatBorosProgBarBox','BatBorosProgBar','btnBatBoros','BorosDefeatAlert',52500,6000,0,1,4000);
setEnemyDescription(Boros, 'btnDescBoros');

function checkBattleButtons(){
	//Changes status of Battle Buttons
	Boar.canFight();
	
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
	
	//Dwarf Button
	Dwarf.canFight();
	
	//Archmage Button
	Archmage.canFight();

	//Succubus Button
	Succubus.canFight();
	
	//Undead Army Button
	UndeadArmy.canFight();
	
	//Necromancer Button
	Necromancer.canFight();
	
	//Earth Elemental Button
	ElementalEarth.canFight();
	
	//Fire Elemental Button
	ElementalFire.canFight();
	
	//Wind Elemental Button
	ElementalWind.canFight();
	
	//Water Elemental Button
	ElementalWater.canFight();	
	
	//Thaumaturge Button
	Thaumaturge.canFight();	
	
	//Cerberus Button
	Cerberus.canFight();
	
	//Ouro Button
	Ouro.canFight();

	//Cerberus Button
	Boros.canFight();	
};

window.setInterval(function(){					//Calculates Battle Power 
	calculateBattlePower();
	calculateSpiritPower();
}, 100);


