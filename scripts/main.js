//Main Script for HW //

//Currency Variables//
var gold = 0;
var wood = 0;
var iron = 0;
var coal = 0;
var steel = 0;
var silver = 0;
var faith = 0;
var souls = 0;
var mana = 0;
var paper = 0;
var tomes = 0;

//Statistic Variables//
var goldpersec = 0;
var woodpersec = 0;
var faithpersec = 0;
var ironpersec = 0;
var coalpersec = 0;
var silverpersec = 0;
var soulspersec = 0;
var manapersec = 0;
var paperpersec = 0;
var tomepersec = 0;
var faithDonated = 0;
var totalTimePlayed = 0;
var tTPinHHMMSS = 0;

//Unit Variables//
var tavernpeasants = 0;			//Tavern generated peasants
var tavernminers = 0;			//Tavern generated miners
var tavernlumberjacks = 0;      //Tavern generated Lumberjacks


//Status Variables//
var pGoldUpgrade = false;		//Peasant - Collection rate upgrade
var pGoldClickUpgrade = false;	//Peasant - Gold clicking upgrade
var pGoldClickUpgrade2 = false;	//Peasant - Gold clicking upgrade
var pGoldClickUpgrade3 = false; 
var lwoodUpgrade = false;		//Ljack - Collection rate upgrade
var lwoodClickUpgrade = false;  //LJack - Wood click rate upgrade 
var mPanningUpgrade = false;	//Miner - Gold Panning upgrade
var mSilverUpgrade = false;		//Miner - Silver Mining upgrade
var acFaithUpgrade = false; 	//Acolyte - Faith collection rate upgrade
var prFaithUpgrade = false;     //Priest - Faith collection rate upgrade
var paladinWepUpgrade = false;  //Paladin - Weapon Upgrade
var paladinWepUpgrade2 = false; //Paladin - Weapon Upgrade 2
var bishopUpgr1 = false;		//Bishop - faith collection rate upgrade
var shadeUpgr1 = false;			//Shade - Upgrade
var angelUpgr1 = false;			//Angel - Upgrade via Paladins
var tavernUpgrade = false;		//Tavern - Miner Upgrade
var tavernUpgrade2 = false;		//Tavern - Lumberjack Upgrade
var cathUpgrade = false;		//Church - Upgrade to tavern

var squiresUnlocked = false;	//Page - Squire Tier unlock
var knightsUnlocked = false;    //Squire - Page Tier unlock
var angelsUnlocked = false;

var lumbermillOpened = false;
var minesOpened = false;
var churchOpened = false;
var tomesUnlocked = false;
var coalUnlocked = false;
var PmillEffUpgr = false;		//Paper mill efficiency upgrade cost
var PmillEffUpgr2 = false;
var PmillEffUpgr3 = false;
var PmillClickUpgr = false;		//Paper mill - Click multiplier
var barracksOpened = false;
var commandPostOpened = false;
var forgeOpened = false;
var unlockedQuesting = false;
var towerUnlocked = false;
var towerBuilt = false;

//Etc Variables//
var lastPage;
var TruncateNumber = 'standard';
var KingdomName = "";
var DayNight = 'Day';
var offwhite = '#DBDBDB';
var lackResourceColor = 'red';
var haveResourceColor = 'black';
var gameVer = '0.7.2';
var gameSaveVer;

function clickThing(number, type)
{
	if(number > 0){
		switch(type){
			case "gold":
				gold += number;
				statGoldCollected += number;
				statTotalGoldCollected += number;
				achieveCheckGold();
				
				document.getElementById("gold").innerHTML = fnum(gold);	
				document.getElementById("statgoldcollected").innerHTML = fnum(statGoldCollected);
				document.getElementById("stattotalgoldcollected").innerHTML = fnum(statTotalGoldCollected);
				
				break;
				
			case "goldMouse":
				if(pGoldClickUpgrade === true){
					number *= 2;
				}
				if(pGoldClickUpgrade2 === true){
					number *= 5;
				}
				if(pGoldClickUpgrade3 === true){
					number += goldpersec*0.1;
				}
				gold += number;
				gold = Math.round(gold*100)/100;
				statSelfGoldCollected += number;
				statTotalSelfGoldCollected += number;
				statTotalGoldCollected += number;
				achieveCheckGold();

				document.getElementById("gold").innerHTML = fnum(gold);
				document.getElementById("statselfgoldcollected").innerHTML = fnum(statSelfGoldCollected);
				document.getElementById("stattotalselfgoldcollected").innerHTML = fnum(statTotalSelfGoldCollected);
				document.getElementById("stattotalgoldcollected").innerHTML = fnum(statTotalGoldCollected);
				document.getElementById('clickmoney').setAttribute('title', "Click to gather gold yourself - " + fnum(number) + " gold gained per click.");
				break;

			case "wood":
				wood += number;
				statWoodCollected += number;
				statTotalWoodCollected += number;
				
				document.getElementById("wood").innerHTML = fnum(wood);
				document.getElementById("statWoodCollected").innerHTML = fnum(statWoodCollected);
				document.getElementById("statTotalWoodCollected").innerHTML = fnum(statTotalWoodCollected);		
				break;	

			case "woodMouse":
				if(lwoodClickUpgrade === true){
					number *= 5;
				}
				wood = wood + number;
				statWoodCollected += number;
				statSelfWoodCollected += number;
				statTotalWoodCollected += number;
				statTotalSelfWoodCollected += number;
				
				document.getElementById("wood").innerHTML = fnum(wood);
				document.getElementById("statWoodCollected").innerHTML = fnum(statWoodCollected);		
				document.getElementById("statSelfWoodCollected").innerHTML = fnum(statSelfWoodCollected);		
				document.getElementById("statTotalWoodCollected").innerHTML = fnum(statTotalWoodCollected);		
				document.getElementById("statTotalSelfWoodCollected").innerHTML = fnum(statTotalSelfWoodCollected);	
				document.getElementById('clickwood').setAttribute('title', "Click to gather wood yourself - " + fnum(number) + " wood gained per click.");			
				break;

			case "paper":
				if(wood >= 50*number){
				paper += number;
				statPaperCrafted += number;
				statTotalPaperCrafted += number;
				wood -= number * 50;
				document.getElementById("paper").innerHTML = fnum(paper);
				document.getElementById("statPaperCrafted").innerHTML = fnum(statPaperCrafted);
				document.getElementById("statTotalPaperCrafted").innerHTML = fnum(statTotalPaperCrafted);
				document.getElementById("wood").innerHTML = fnum(wood);
				}
				break;				
				
			case "paperMouse":
				var numMade = 1;
				if(PmillClickUpgr === true){
					numMade = 10;
				}
				if(PmillEffUpgr === true){
						if(wood >= 50*0.6*number*numMade){
						paper += number*numMade;
						statPaperCrafted += number*numMade;
						statTotalPaperCrafted += number*numMade;
						statSelfPaperCrafted += number*numMade;
						statTotalSelfPaperCrafted += number*numMade;
						wood -= number * 50*0.6*numMade;
						document.getElementById("paper").innerHTML = fnum(paper);
						document.getElementById("statPaperCrafted").innerHTML = fnum(statPaperCrafted);
						document.getElementById("statTotalPaperCrafted").innerHTML = fnum(statTotalPaperCrafted);
						document.getElementById("statSelfPaperCrafted").innerHTML = fnum(statSelfPaperCrafted);
						document.getElementById("statTotalSelfPaperCrafted").innerHTML = fnum(statTotalSelfPaperCrafted);
						document.getElementById("wood").innerHTML = fnum(wood);
					}
				}
				else{
					if(wood >= 50*number*numMade){
						paper += number*numMade;
						statPaperCrafted += number*numMade;
						statTotalPaperCrafted += number*numMade;
						statSelfPaperCrafted += number*numMade;
						statTotalSelfPaperCrafted += number*numMade;
						wood -= number * 50*numMade;
						document.getElementById("paper").innerHTML = fnum(paper);
						document.getElementById("statPaperCrafted").innerHTML = fnum(statPaperCrafted);
						document.getElementById("statTotalPaperCrafted").innerHTML = fnum(statTotalPaperCrafted);
						document.getElementById("statSelfPaperCrafted").innerHTML = fnum(statSelfPaperCrafted);
						document.getElementById("statTotalSelfPaperCrafted").innerHTML = fnum(statTotalSelfPaperCrafted);					
						document.getElementById("wood").innerHTML = fnum(wood);
					}
				}
				break;	

			case "tome":
				if(paper >= 2000*number && faith >= 100*number){
					tomes +=  number;
					paper -=  number * 2000;
					faith -=  number * 100;
					document.getElementById("paper").innerHTML = fnum(paper);
					document.getElementById("faith").innerHTML = fnum(faith);
					document.getElementById("tomes").innerHTML = fnum(tomes);
				}
				break;	

			case "tomeMouse":
				if(paper >= 2000*number && faith >= 100*number){
					tomes += number;
					paper -= number * 2000;
					faith -= number * 100;
					document.getElementById("paper").innerHTML = fnum(paper);
					document.getElementById("faith").innerHTML = fnum(faith);
					document.getElementById("tomes").innerHTML = fnum(tomes);
				}
				break;				
				
			case "iron":
				iron += number;
				statIronCollected += number;
				statTotalIronCollected += number;
				document.getElementById("iron").innerHTML = fnum(iron);
				document.getElementById("statIronCollected").innerHTML = fnum(statIronCollected);
				document.getElementById("statTotalIronCollected").innerHTML = fnum(statTotalIronCollected);
				break;
			
			case "coal":
				coal += number;
				coal = Math.round(coal*100)/100;
				statCoalCollected += number;
				statCoalCollected = Math.round(statCoalCollected*100)/100;
				statTotalCoalCollected += number;
				statTotalCoalCollected = Math.round(statTotalCoalCollected*100)/100;
				document.getElementById("coal").innerHTML = fnum(coal);
				document.getElementById("statCoalCollected").innerHTML = fnum(statCoalCollected);
				document.getElementById("statTotalCoalCollected").innerHTML = fnum(statTotalCoalCollected);
				break;

			case "steel":
				steel += number;
				steel = Math.round(steel*100)/100;
				statSteelCollected += number;
				statTotalSteelCollected += number;
				document.getElementById("steel").innerHTML = fnum(steel);
				document.getElementById("statSteelCollected").innerHTML = fnum(statSteelCollected);
				document.getElementById("statTotalSteelCollected").innerHTML = fnum(statTotalSteelCollected);
				break;	

			case "steelMouse":
				if(iron >= number*100 && coal >= number*10){
					steel += number;
					steel = Math.round(steel*100)/100;
					coal -= number*10;
					statSteelCollected += number;
					statTotalSteelCollected += number;				
					document.getElementById("iron").innerHTML = fnum(iron);
					document.getElementById("coal").innerHTML = fnum(coal);
					document.getElementById("steel").innerHTML = fnum(steel);
					document.getElementById("statSteelCollected").innerHTML = fnum(statSteelCollected);
					document.getElementById("statTotalSteelCollected").innerHTML = fnum(statTotalSteelCollected);				
				}


				break;			
			
			case "silver":
				silver += number;
				silver = Math.round(silver*100)/100;
				statSilverCollected += number;
				statTotalSilverCollected += number;
				document.getElementById("silver").innerHTML = fnum(silver);
				document.getElementById("statSilverCollected").innerHTML = fnum(statSilverCollected);
				document.getElementById("statTotalSilverCollected").innerHTML = fnum(statTotalSilverCollected);
				break;		
				
			case "faith":
				faith += number;
				faith = Math.round(faith*100)/100;
				statFaithCollected += number;
				statTotalFaithCollected += number;
				faith = faith.toFixedDown(2);
				document.getElementById("faith").innerHTML = fnum(faith);
				document.getElementById("statFaithCollected").innerHTML = fnum(statFaithCollected.toFixedDown(2));	
				document.getElementById("statTotalFaithCollected").innerHTML = fnum(statTotalFaithCollected.toFixedDown(2));				
				break;
			
			case "peasant":
				Peasant.number += number;
				document.getElementById("peasants").innerHTML = Peasant.number;
				break;

			case "miner":
				Miner.number += number;
				document.getElementById("miners").innerHTML = Miner.number;	
				break;

			case "lumberjack":
				Lumberjack.number += number;
				document.getElementById("lumberjacks").innerHTML = Lumberjack.number;	
				break;				
			
			case "souls":
				souls += number;
				statSoulsCollected += number;
				statTotalSoulsCollected += number;
				document.getElementById("souls").innerHTML = fnum(souls);
				document.getElementById("statSoulsCollected").innerHTML = fnum(statSoulsCollected);
				document.getElementById("statTotalSoulsCollected").innerHTML = fnum(statTotalSoulsCollected);
				break;
				
			case "mana":
				mana += number;
				mana = Math.round(mana*100)/100;
				statManaGained += number;
				statTotalManaGained += number;
				document.getElementById("mana").innerHTML = fnum((Math.round( mana * 10) / 10).toFixedDown(1));
				document.getElementById("statManaGained").innerHTML = fnum(statManaGained.toFixedDown(1));		
				document.getElementById("statTotalManaGained").innerHTML = fnum(statTotalManaGained.toFixedDown(1));		
				break;
			default:
		}
	}
}

function renameKingdom(){
//	KingdomName = prompt("Name your kingdom", "");
	
		bootbox.prompt({
		  title: "Name your Kingdom",
		  value: KingdomName,
		  callback: function(result) {
			if (result === "") {
				document.getElementById("KingdomName").innerHTML = "Kingdom";
			} else {
				KingdomName = result;
				document.getElementById("navKingdomName").innerHTML = KingdomName;
				document.title = "Holy Wars - " + KingdomName;
			}
		  }
		});
}

function checkKingdomName(){
	if (KingdomName === ""){
		renameKingdom();
	}
}

function debugCurrency(){
	gold += 1000000;
	wood += 10000;
	iron += 10000;	
	silver += 10000;
	faith += 10000;
	souls += 10000;
	mana += 100000;
	paper += 3000;
	tomes += 1000;
}

function addFaithToRelic(number){
	
//	console.log(number);
	if(number > faith){
		alert("You don't have enough faith for that.");
	}
	else{
		faith -= number;
		faithDonated += number;
		document.getElementById('faithDonated').innerHTML = fnum(faithDonated);
		document.getElementById('faith').innerHTML = fnum(faith);

		var description;
		
		if(faithDonated < 250000){
			description = "The necklace from the succubus/angel sits quietly on a black marble pedestal. There must be something more to it.";
		}
		else if(faithDonated > 250000){
			description = "The necklace begins to glow slightly, and you swear you can hear a humming noise emanating from deep within.";

			$.notify({
				title: "<strong>New!</strong>",
				message: description
				},{
			delay: 900000
			});	
		}
		else if(faithDonate > 400000){
			description = "The glowing from the necklace intensifies, and now there is a slight shimmering around the surface! Just a little more, something is about to happen!";
			document.getElementById('RelicAlmostAlert').style.display = "block";
		}
		var popover = document.getElementById('BtnRelicDesc');
		popover.setAttribute("data-content", description);
				
	}
	
	if(faithDonated >= 500000){
		document.getElementById("Etherealtitle").innerHTML = "Ethereal Rip & Angelic Gates";
		document.getElementById('RelicPedestalTab').style.display = "none";
//		document.getElementById('AngelUnlockAlert').style.display = "block";
		document.getElementById('AngelTab').style.display = "block";
		angelsUnlocked = true;
		var AngelUnlockAlert = $.notify({
			title: "<strong>New!</strong>",
			message: "The necklace is overflowing with the faith! It starts to vibrate violently, and you decide the most prudent thing to do is to take it outside. Just as you step foot outside the Church doors, flies out of your hands and hovers before you. You can literally feel the hum of power as the necklace emits a brilliant beam of light that shoots into the heavens. You watch as the skies are turned a vibrant gold.. all of the faith that was used to empower the necklace opens up a <a href='javascript: alertOpenEtherealPage(); AngelUnlockAlert.close();' class='alert-link'>divine gate</a>. The gate is directly above your Church, but you swear you can see winged beings flapping just beyond the shimmering portal."	
			},{
		delay: 900000,
		type: 'success'
		});			
	}
}


function recalculateCosts(){
	Peasant.costAdj = tavernpeasants;
	Peasant.recalcCost();
	Miner.costAdj = tavernminers;
	Miner.recalcCost();
	Priest.recalcCost();
	Scribe.recalcCost();
	Page.recalcCost();
	Squire.recalcCost();
	Knight.recalcCost();
	Paladin.recalcCost();
	Shade.recalcCost();
	Aspect.recalcCost();
	Angel.recalcCost();
}

function UpdateButtons() {

	//Upgrade Buttons//

	//Peasant Upgrade gold collection Peasant Power
	peasantUpgrade1.canBuy();
				/* 	if(pGoldUpgrade == true || (gold < 2000)){
						document.getElementById("btnPeasantUpgrade1").disabled = true;
					}
					else{
						document.getElementById("btnPeasantUpgrade1").disabled = false;
					}	 */
	
 	//Mouse click upgrade
	clickGoldUpgrade.canBuy();
				/*	if(pGoldClickUpgrade == true || (gold < 1500)){
						document.getElementById("clickGoldUpgrade").disabled = true;
					}
					else{
						document.getElementById("clickGoldUpgrade").disabled = false;
					}*/	
	
	//Mouse gold click upgrade 2
	clickGoldUpgrade2.canBuy();
				/*	if(pGoldClickUpgrade2 == true || (gold < 25000)){
						document.getElementById("clickGoldUpgrade2").disabled = true;
					}
					else{
						document.getElementById("clickGoldUpgrade2").disabled = false;
					}*/

	//Mouse gold click upgrade 3
	clickGoldUpgrade3.canBuy();
	
	
	//Lumberjack upgrade collection
	ljackUpgrade1.canBuy();
				/* 	if(lwoodUpgrade == true || (gold < 2500 || iron < 1500)){
						document.getElementById("btnljackUpgrade1").disabled = true;
					}
					else{
						document.getElementById("btnljackUpgrade1").disabled = false;
					}	 */
	//Lumberjack upgrade wood click
	ljackUpgrade2.canBuy();
				/* 	if(lwoodClickUpgrade == true || (gold < 25000 || iron < 20000 || silver < 15000 || souls < 5000 || Shade.number < 5)){
						document.getElementById("btnljackUpgrade2").disabled = true;
					}
					else{
						document.getElementById("btnljackUpgrade2").disabled = false;
					} */
	
	//Miner upgrade panning 
	minerUpgrade1.canBuy();
				/* 	if(mPanningUpgrade == true || (gold < 3500 || iron < 1000)){
						document.getElementById("btnminerUpgrade1").disabled = true;
					}
					else{
						document.getElementById("btnminerUpgrade1").disabled = false;
					}	 */
	
	//Miner upgrade silver 
	minerUpgrade2.canBuy();
				/* 	if(mSilverUpgrade == true || (gold < 7500 || iron < 2500)){
						document.getElementById("btnminerUpgrade2").disabled = true;
					}
					else{
						document.getElementById("btnminerUpgrade2").disabled = false;
					}	 */	
	
	//Acolyte faith upgrade
	acolyteUpgrade1.canBuy();
	
	//Priest faith upgrade
	priestUpgrade1.canBuy();
	
				/* 	if(prFaithUpgrade == true || (gold < 7000 || wood < 5000 || faith < 500)){
						document.getElementById("btnPriestUpgrade1").disabled = true;
					}
					else{
						document.getElementById("btnPriestUpgrade1").disabled = false;
					} */
										
	
	//Tomes button
	tomeUnlock.canBuy();
				/* 	if(tomesUnlocked == true || (gold < 12000 || paper < 2000 || faith < 1000)){
						document.getElementById("btnTomeUnlock").disabled = true;	
					}
					else{
						document.getElementById("btnTomeUnlock").disabled = false;	
					} */
	
	//Bishop faith rate upgrade
	bishopUpgrade1.canBuy();
	
	//Unlock Squire Button
	pageUpgrade1.canBuy();
				/* 	if(squiresUnlocked == true || (BattlePower < 120|| gold < 4000)){	
						document.getElementById("btnPageUpgrade1").disabled = true;
					}
					else{
						document.getElementById("btnPageUpgrade1").disabled = false;
					}	 */
	
	//Unlock Knight Button
	squireUpgrade1.canBuy();
				/* 	if(knightsUnlocked == true || (BattlePower < 500|| gold < 8000)){	
						document.getElementById("btnSquireUpgrade1").disabled = true;
					}
					else{
						document.getElementById("btnSquireUpgrade1").disabled = false;
					}	 */	

	//Paladin upgrade weapon
	paladinUpgrade1.canBuy();
				/* 	if(paladinWepUpgrade == true || (gold < 20000 || iron < 5000 || faith < 2500)){
						document.getElementById("paladinUpgrade1").disabled = true;
					}
					else{
						document.getElementById("paladinUpgrade1").disabled = false;
					} */
	//Paladin upgrade weapon 2
	paladinUpgrade2.canBuy();
	
	//Shade upgrade 1
	shadeUpgrade1.canBuy();
	
	//Angel Upgrade 1 
	angelUpgrade1.canBuy();

	//Paper mill efficiency upgrade
	pmillEffUpgrade.canBuy();
					/* 	if(PmillEffUpgr == true || (gold < 50000 || wood < 25000 || iron < 35000)){
							document.getElementById("btnPmillEffUpgrade").disabled = true;
						}
						else{
							document.getElementById("btnPmillEffUpgrade").disabled = false;
						}	 */
	
	//Paper mill efficiency upgrade 2
	pmillEffUpgrade2.canBuy();
					/* 	if(PmillEffUpgr2 == true || (gold < 1000000 || wood < 1000000 || iron < 1000000 || souls < 50000)){
							document.getElementById("btnPmillEffUpgrade2").disabled = true;
						}
						else{
							document.getElementById("btnPmillEffUpgrade2").disabled = false;
						} */

	//Paper mill efficiency upgrade 3
	pmillEffUpgrade3.canBuy();

	//Paper mill click upgrade
	pmillClickUpgrade.canBuy();
	
	//Quest Upgrade button
	unlockQuesting.canBuy();
	
	//Upgrade church to cathedral
	upgradeChurch.canBuy();
	
	//End of Upgrade Buttons//
	
	//Changes status of Unit buttons
	checkUnitButtons();
	
	//Changes status of building buttons
	checkBuildingButtons();	
	
	//Changes status of battle buttons
	checkBattleButtons();	
	
	//Changes status of Spell buttons
	checkSpellButtons();
	
//	checkQuestGoButton();
	checkQuestGoButton();

	//Check Relic Buttons
	if(defeatedDwarf === true){
		updateRelicButtons();		
	}

	//
	DNfontColorCheck();

}


window.setInterval(function(){                                 //Update per second counts
    
	goldpersec = Peasant.number*Peasant.goldClickVal + Miner.number*Miner.goldClickVal;
	document.getElementById("golddiv").title = "Gold per second: " + fnum(goldpersec) ; 

	woodpersec = Lumberjack.number*Lumberjack.woodClickVal;
	document.getElementById("wooddiv").title = "Wood per second: " + fnum(woodpersec) ; 	 
	 
	ironpersec = Miner.number;
	document.getElementById("irondiv").title = "Iron per second: " + fnum(ironpersec) ; 	 
	 
	coalpersec = CoalMiner.number*0.1;
	document.getElementById('coaldiv').title = "Coal per second " + fnum(coalpersec.toFixedDown(2)) ;
	 
	
	silverpersec = Miner.number*Miner.silverClickVal;
	document.getElementById("silverdiv").title = "Silver per second: " + fnum(silverpersec) ; 	 	
 
 
	var buildingMult = 1;
	if(cathUpgrade === true){
		buildingMult = 2;
	}
	faithpersec = (Bishop.number*Bishop.faithClickVal + Priest.number*Priest.faithClickVal +  Scribe.number*Scribe.faithClickVal + Acolyte.number*Acolyte.faithClickVal)*buildingMult;
	faithpersec = faithpersec.toFixedDown(2);
    document.getElementById("faithdiv").title = "Faith per second: " + fnum(faithpersec) ; 
	
    soulspersec = Paladin.number*Paladin.soulsClickVal + Aspect.number*Aspect.soulsClickVal + Angel.number*Angel.soulsClickVal;
	document.getElementById("soulsdiv").title = "Souls per second: " + fnum(soulspersec) ; 
	
	var PmillMult = 1.0;
	if(PmillEffUpgr3 === true){
		PmillMult = 1.5;
	}

	if(PmillEffUpgr2 === true){
		paperpersec = PaperMill.number*PmillMult / 5;
		document.getElementById("paperdiv").title = "Paper per 5 seconds: " + fnum(paperpersec * 5) ; 
	}
	else{
		paperpersec = PaperMill.number*PmillMult / 10;
		document.getElementById("paperdiv").title = "Paper per 10 seconds: " + fnum(paperpersec * 10) ; 
	}

	tomepersec = Scribe.number;
	document.getElementById("tomediv").title = "Tome per 10 seconds: " + fnum(tomepersec) ; 
	
	manapersec = 1 + Sprite.number*Sprite.manaClickVal;
	document.getElementById("manadiv").title = "Mana per second: " + fnum(manapersec) ; 	
	
},100);


window.setInterval(function(){	

	//Gold generation via peasants etc every second
	clickThing(Peasant.number*Peasant.goldClickVal + Miner.number*Miner.goldClickVal, "gold");

	//Wood Generation via lumberjacks etc every second
	clickThing(Lumberjack.number*Lumberjack.woodClickVal, "wood");	
	
	//Iron Generation via miners etc every second
	clickThing(Miner.number, "iron");

	//Coal Generation via coal miners etc every second
	clickThing(CoalMiner.number*0.1, "coal");
	coal = coal.toFixedDown(2);
	
	//Silver Generation via miners etc every second
	clickThing(Miner.number*Miner.silverClickVal, "silver");
	silver = silver.toFixedDown(2);
	
	 //Faith Generation via priests etc every second
	var buildingMult = 1;
	if(cathUpgrade === true){
		buildingMult = 2;
	}
	 
	clickThing((Bishop.number*Bishop.faithClickVal + Priest.number*Priest.faithClickVal + Scribe.number*Scribe.faithClickVal + Acolyte.number*Acolyte.faithClickVal)*buildingMult, "faith");          
	faith = faith.toFixedDown(2);
	
	//Soul generation via paladins etc every second
	clickThing(Paladin.number*Paladin.soulsClickVal + Aspect.number*Aspect.soulsClickVal + Angel.number*Angel.soulsClickVal,"souls");	

	
	//Mana generation per second
	if(towerBuilt === true){
		if(mana < manaCap){
			clickThing(1 + Sprite.number*Sprite.manaClickVal,"mana");
		}
	}
	updateUnitPopover();
}, 1000);

window.setInterval(function(){	
	//Tome generation via scribes every 15 seconds
	clickThing(Scribe.number*Scribe.tomeClickVal,"tome");
}, 15000);



window.setInterval(function(){					//Enables/disables buttons 
	UpdateButtons();
	var nummult = 1;
	var costmult = 1;
	if(PmillClickUpgr === true)
	{
		nummult = 10;
	}
	if(PmillEffUpgr === true){
		costmult = 0.6;
	}
	
	if(wood < 100*nummult*costmult){
		document.getElementById('clickpaper').src = "images/parchmentgrayed.png";
	}
	else{
		document.getElementById('clickpaper').src = "images/parchment.png";
	}	

	
	if(paper < 2000){
		document.getElementById('clicktome').src = "images/booksgrayed.png";
	}
	else{
		document.getElementById('clicktome').src = "images/books.png";
	}	
	
}, 200);

window.setInterval(function(){					//Increases totalTimePlayed by 1 second per second 
	totalTimePlayed = totalTimePlayed + 1;
	tTPinHHMMSS = dhms(totalTimePlayed,"d:h:m:s");
	document.getElementById("tTPinHHMMSS").innerHTML = tTPinHHMMSS;
}, 1000);

Number.prototype.toFixedDown = function(digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        m = this.toString().match(re);
    return m ? parseFloat(m[1]) : this.valueOf();
};

function dhms(s, f) { // seconds, format
  var d=h=m=0;
  switch (true) {
  case (s>86400):
    d=Math.floor(s/86400);
    s-=d*86400;
  case (s>3600):
    h=Math.floor(s/3600);
    s-=h*3600;
  case (s>60):
    m=Math.floor(s/60);
    s-=m*60;
  } 
  if (f !== null) {
    var f = f.replace('dd', (d<10)?"0"+d:d);
    f = f.replace('d', d);
    f = f.replace('hh', (h<10)?"0"+h:h);
    f = f.replace('h', h);
    f = f.replace('mm', (m<10)?"0"+m:m);
    f = f.replace('m', m);
    f = f.replace('ss', (s<10)?"0"+s:s);
    f = f.replace('s', s);
  } 
  else {
    f = d + 'd:' + h + 'h:' + m + 'm:' + s + 's';
  }
  return f;
}

function fnum(x) {
	if(isNaN(x)) return x;
 
	if(TruncateNumber == 'standard'){
		if(x < 9999) {
			return x;
		}
	 
		if( x < 1000000) {
			return (x/1000).toFixed(2) + "K";
		}
		if( x < 10000000) {
			return (x/1000000).toFixed(2) + "M";
		}
	 
		if(x < 1000000000) {
			return (x/1000000).toFixed(2) + "M";
		}
	 
		if(x < 1000000000000) {
			return (x/1000000000).toFixed(2) + "B";
		}
		
		if(x < 1000000000000000) {
			return (x/1000000000000).toFixed(2) + "Qd";
		}	
	 
		if(x < 1000000000000000000) {
			return (x/1000000000000000).toFixed(2) + "Qt";
		}
		if(x < 1000000000000000000000) {
			return (x/1000000000000000000).toFixed(2) + "Sx";
		}
		if(x < 1000000000000000000000000) {
			return (x/1000000000000000000000).toFixed(2) + "Sp";
		}

		if(x < 1000000000000000000000000000) {
			return (x/1000000000000000000000000).toFixed(2) + "Oct";
		}

		if(x < 1000000000000000000000000000000) {
			return (x/1000000000000000000000000000).toFixed(2) + "Non";
		}

		if(x < 1000000000000000000000000000000000) {
			return (x/1000000000000000000000000000000).toFixed(2) + "Dec";
		}

		if(x < 1000000000000000000000000000000000000) {
			return (x/1000000000000000000000000000000000).toFixed(2) + "UnDec";
		}			
	 
		return "1UnDec+";
	}
	else if(TruncateNumber == 'scientific'){
		return x.toExponential(2);
	}
	else
	{
		return x;
	}
}

function toggleTrunc(){
	if(TruncateNumber == 'standard'){
		TruncateNumber = 'scientific';
		document.getElementById('ToggleTrunc').innerHTML = '<span class="glyphicon glyphicon-superscript" aria-hidden="true"></span>Number Format: Scientific';
	}
	else if (TruncateNumber == 'scientific'){
		TruncateNumber = 'off';
		document.getElementById('ToggleTrunc').innerHTML = '<span class="glyphicon glyphicon-superscript" aria-hidden="true"></span>Number Format: Off';
	}
	else{
		TruncateNumber = 'standard';
		document.getElementById('ToggleTrunc').innerHTML = '<span class="glyphicon glyphicon-superscript" aria-hidden="true"></span>Number Format: Standard';
	}
}

function scroll(name, timeout){
	setTimeout(function() { 
	element_to_scroll_to = document.getElementById(name);
	element_to_scroll_to.scrollIntoView();
	 }, timeout);
}


function alertOpenProductionPage(){
	document.getElementById("ProductionMenu").click();
}

function alertOpenCommandPostPage(){
	document.getElementById("CommandMenu").click();
}

function alertOpenBarracksPage(){
	document.getElementById("BarracksMenu").click();
}

function alertOpenChurchPage(){
	document.getElementById("FaithMenu").click();
}

function alertOpenTowerPage(){
	document.getElementById("TowerMenu").click();
}

function alertOpenStructuresPage(){
	document.getElementById("StructureMenu").click();
}

function alertOpenEtherealPage(){
	document.getElementById("EtherealMenu").click();
}

function alertOpenRelicPage(){
	document.getElementById("RelicsMenu").click();
}

function alertOpenBattlePage(){
	document.getElementById("BattleMenu").click();
}

function alertOpenQuestPage(){
	document.getElementById("QuestMenu").click();
}

//Hover effects//
$('#clickmoney').hover(
	   function(){ $(this).addClass('animated infinite pulse'); },
	   function(){ $(this).removeClass('animated infinite pulse'); }
);
$('#clickwood').hover(
	   function(){ $(this).addClass('animated infinite pulse'); },
	   function(){ $(this).removeClass('animated infinite pulse'); }
);
$('#clickpaper').hover(
	   function(){ $(this).addClass('animated infinite pulse'); },
	   function(){ $(this).removeClass('animated infinite pulse'); }
);

$('#clicktome').hover(
	   function(){ $(this).addClass('animated infinite pulse'); },
	   function(){ $(this).removeClass('animated infinite pulse'); }
);
$('#clicksteel').hover(
	   function(){ $(this).addClass('animated infinite pulse'); },
	   function(){ $(this).removeClass('animated infinite pulse'); }
);

//=================================//

function toggleResourcePanel(){
	if($(resourcepanel).hasClass('animated fadeOutRight') === false){
		$(resourcepanel).removeClass('animated fadeInRight');
		$(resourcepanel).addClass('animated fadeOutRight');
		
		setTimeout(function(){document.getElementById('resourcepanel').style.display = 'none'; $(arrowbutton).attr("src", 'images/3dtransparentarrow_long_left.png') }, 450);
	}
	else{
		setTimeout(function(){document.getElementById('resourcepanel').style.display = 'block';$(resourcepanel).addClass('animated fadeInRight'); $(arrowbutton).attr("src", 'images/3dtransparentarrow_long_right.png')}, 50);
		$(resourcepanel).removeClass('animated fadeOutRight' );
	}
}

function toggleDayNight(){
	if($('body').hasClass('night') === false)
	{
		document.body.classList.remove('day');
		document.body.classList.add('night');
		DayNight = 'night'
		document.getElementById('ToggleDN').innerHTML = "<span class='glyphicon glyphicon-adjust' aria-hidden='true'></span>Toggle Day Mode";
	}
	else
	{
		document.getElementById('ToggleDN').innerHTML = "<span class='glyphicon glyphicon-adjust' aria-hidden='true'></span>Toggle Night Mode";
		document.body.classList.remove('night');
		document.body.classList.add('day');	
		DayNight = 'day'		
	}
}

function DNfontColorCheck(){	//Day night font color check
	if(DayNight === 'day'){
		lackResourceColor = 'red';
		haveResourceColor = 'black';
	}
	else if(DayNight === 'night'){
		lackResourceColor = '#990000';
		haveResourceColor = offwhite;
	}
}