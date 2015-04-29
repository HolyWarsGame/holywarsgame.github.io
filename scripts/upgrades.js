//HW Upgrade//


var Upgrade = function(name, goldCost, htmlGoldCost, woodCost, htmlWoodCost, ironCost, htmlIronCost, 
					   coalCost, htmlCoalCost, steelCost, htmlSteelCost, silverCost, htmlSilverCost, faithCost, htmlFaithCost, 
					   soulCost, htmlSoulCost, paperCost, htmlPaperCost, tomeCost, htmlTomeCost, manaCost, htmlManaCost, buyBtnRef){
	this.name = name;
	this.goldCost = goldCost;
	this.htmlGoldCost = htmlGoldCost;
	this.woodCost = woodCost;
	this.htmlWoodCost = htmlWoodCost;
	this.ironCost = ironCost;
	this.htmlIronCost = htmlIronCost;
	this.coalCost = coalCost;
	this.htmlCoalCost = htmlCoalCost;
	this.steelCost = steelCost;
	this.htmlSteelCost = htmlSteelCost;
	this.silverCost = silverCost;
	this.htmlSilverCost = htmlSilverCost;
	this.faithCost = faithCost;
	this.htmlFaithCost = htmlFaithCost;
	this.soulCost = soulCost;
	this.htmlSoulCost = htmlSoulCost;
	this.paperCost = paperCost;
	this.htmlPaperCost = htmlPaperCost;
	this.tomeCost = tomeCost;
	this.htmlTomeCost = htmlTomeCost;
	this.manaCost = manaCost;
	this.htmlManaCost = htmlManaCost;
	this.buyBtnRef = buyBtnRef;
	this.hasReqUnit = false;
	this.reqUnit = 'none';
	this.numReqUnit = 0;
	this.htmlReqUnit = 'none';
	this.reqArmyPower = 0;
	this.htmlReqArmyPower = 'none'
}


Upgrade.prototype.checkFlag = function(){
	switch(this.name){
		case 'peasantUpgrade1':
			return pGoldUpgrade;
		break;		
		
		case 'clickGoldUpgrade':
			return pGoldClickUpgrade;
		break;

		case 'clickGoldUpgrade2':
			return pGoldClickUpgrade2;
		break;	

		case 'clickGoldUpgrade3':
			return pGoldClickUpgrade3;
		break;			
		
		case 'ljackUpgrade1':
			return lwoodUpgrade;
		break;	

		case 'ljackUpgrade2':
			return lwoodClickUpgrade;
		break;		

		case 'minerUpgrade1':
			return mPanningUpgrade;
		break;
		
		case 'minerUpgrade2':
			return mSilverUpgrade;
		break;		
		
		case 'acolyteUpgrade1':
			return acFaithUpgrade;
		break;
		
		case 'priestUpgrade1':
			return prFaithUpgrade;
		break;
		
		case 'tomeUnlock':
			return tomesUnlocked;
		break;
		
		
		case 'bishopUpgrade1':
			return bishopUpgr1;
		break;
		
		case 'pageUpgrade1':
			return squiresUnlocked;
		break;
		
		case 'squireUpgrade1':
			return knightsUnlocked;
		break;
		
		case 'paladinUpgrade1':
			return paladinWepUpgrade;
		break;
		
		case 'paladinUpgrade2':
			return paladinWepUpgrade2;
		break;				
		
		case 'shadeUpgrade1':
			return shadeUpgr1;
		break;	

		case 'angelUpgrade1':
			return angelUpgr1;
		break;
		
		case 'pmillEffUpgrade':
			return PmillEffUpgr;
		break;
		
		case 'pmillEffUpgrade2':
			return PmillEffUpgr2;
		break;	

		case 'pmillClickUpgrade':
			return PmillClickUpgr;
		break;
		
		case 'unlockQuesting':
			return unlockedQuesting;
		break;
		
		case 'upgradeTavern':
			return tavernUpgrade;
		break;
		
		case 'upgradeTavern2':
			return tavernUpgrade2;
		break;		
		
		case 'upgradeChurch':
			return cathUpgrade;
		break;
		
		default:
		break;
	}
};

Upgrade.prototype.enableFlag = function(){
	this.purchasedButton();
	switch(this.name){
		case 'peasantUpgrade1':
			pGoldUpgrade = true;
			Peasant.goldClickVal += 1;
		break;
		
		case 'clickGoldUpgrade':
			pGoldClickUpgrade = true;
		break;
		
		case 'clickGoldUpgrade2':
			pGoldClickUpgrade2 = true;
		break;	

		case 'clickGoldUpgrade3':
			pGoldClickUpgrade3 = true;
		break;		
		
		case 'ljackUpgrade1':
			lwoodUpgrade = true;
		break;					
		
		case 'ljackUpgrade2':
			lwoodClickUpgrade = true;
		break;	
		
		case 'minerUpgrade1':
			mPanningUpgrade = true;
		break;	

		case 'minerUpgrade2':
			mSilverUpgrade = true;
			document.getElementById('silverdiv').style.display = "block";
			$("#SecondaryResources").collapse('show');			 
		break;			
		
		case 'acolyteUpgrade1':
			acFaithUpgrade = true;
		break;		
		
		case 'priestUpgrade1':
			prFaithUpgrade = true;
		break;		
		
		case 'tomeUnlock':
			tomesUnlocked = true;
			document.getElementById('tomediv').style.display = "block";
			document.getElementById('createTome').style.display = "block";			
		break;	

		case 'bishopUpgrade1':
			bishopUpgr1 = true;
		break;		
		
		case 'pageUpgrade1':
			squiresUnlocked = true;
			document.getElementById('SquireTab').style.display = "block";
		break;		
		
		case 'squireUpgrade1':
			knightsUnlocked = true;
			document.getElementById('KnightTab').style.display = "block";
		break;
		
		case 'paladinUpgrade1':
			paladinWepUpgrade = true;
			setSpiritPower(Paladin,10);			
		break;	

		case 'paladinUpgrade2':
			paladinWepUpgrade2 = true;
			if(paladinWepUpgrade == true){
				setSpiritPower(Paladin,100);
			}
			else{
				setSpiritPower(Paladin,50);
			}
		break;
		
		case 'shadeUpgrade1':
			shadeUpgr1 = true;
			setArmyPower(Shade,10);
			setSpiritPower(Shade,20);
		break;		

		case 'angelUpgrade1':
			angelUpgr1 = true;
		break;		

		case 'pmillEffUpgrade':
			PmillEffUpgr = true;
		break;		
		
		case 'pmillEffUpgrade2':
			PmillEffUpgr2 = true;
		break;
		
		case 'pmillClickUpgrade':
			PmillClickUpgr = true;
		break;
		
		case 'unlockQuesting':
			document.getElementById('QuestMenu').style.display = "block";
			document.getElementById('Quests').style.display = "block";
			document.getElementById("navKingdomName").click();
			unlockedQuesting = true;		
		break;
		
		case 'upgradeTavern':
			tavernUpgrade = true;
		break;

		case 'upgradeTavern2':
			tavernUpgrade2  = true;
		break;

		case 'upgradeChurch':
			cathUpgrade = true;
			document.getElementById('faithBuildingTitle').innerHTML = 'Cathedral';
			document.getElementById('FaithMenu').innerHTML = 'Cathedral';
		break;		
		
		default:
		break;
	}	
}

Upgrade.prototype.purchasedButton = function(){ 
	var previousString = document.getElementById(this.buyBtnRef).innerHTML;
	document.getElementById(this.buyBtnRef).innerHTML = previousString + ' Purchased';
	document.getElementById(this.buyBtnRef).disabled = true;	
}

Upgrade.prototype.canBuy = function(){								//Checks to see if all costs are met
	if(this.checkFlag() == true){									//Upgrade already purchased
		   document.getElementById(this.buyBtnRef).disabled = true;	
		   document.getElementById(this.buyBtnRef).style.background='darkblue';	
		   return false;		
	}
	else if(this.costTest(this.goldCost, gold, this.htmlGoldCost) *
	   this.costTest(this.woodCost, wood, this.htmlWoodCost) *
	   this.costTest(this.ironCost, iron, this.htmlIronCost) *
	   this.costTest(this.coalCost, coal, this.htmlCoalCost) *
	   this.costTest(this.steelCost, steel, this.htmlSteelCost) *
	   this.costTest(this.silverCost, silver, this.htmlSilverCost) *
	   this.costTest(this.faithCost, faith, this.htmlFaithCost) *
	   this.costTest(this.soulCost, souls, this.htmlSoulCost) *
	   this.costTest(this.paperCost, paper, this.htmlPaperCost) *
	   this.costTest(this.tomeCost, tomes, this.htmlTomeCost) *
	   this.costTest(this.manaCost, mana, this.htmlManaCost) *
	   this.costTest(this.reqArmyPower, BattlePower, this.htmlReqArmyPower) *
	   this.unitCostTest()
	   ){
		   document.getElementById(this.buyBtnRef).disabled = false;			//Enables button if costs are met
		   return true;
	   }
	else{
		   document.getElementById(this.buyBtnRef).disabled = true;				//Costs are not met, button disabled
		   return false;
	}
}

Upgrade.prototype.buyUpgrade = function(){
	if(this.canBuy() == true){
		gold -= this.goldCost;
		wood -= this.woodCost;
		iron -= this.ironCost;
		coal -= this.coalCost;
		steel -= this.steelCost;
		silver -= this.silverCost;
		faith -= this.faithCost;
		souls -= this.soulCost;
		paper -= this.paperCost;
		tomes -= this.tomeCost;
		mana -= this.manaCost;
		
		if(this.hasReqUnit == true){
			this.reqUnit.number -= this.numReqUnit;
			document.getElementById(this.reqUnit.htmlNumRef).innerHTML = fnum(this.reqUnit.number);  				//Updates number of units spent for the user
		}
		
		document.getElementById('gold').innerHTML = fnum(gold);  										          //updates the number of gold for the user
		document.getElementById('wood').innerHTML = fnum(wood);  										          //updates the number of wood for the user
		document.getElementById('iron').innerHTML = fnum(iron);  										          //updates the number of iron for the user
		document.getElementById('coal').innerHTML = fnum(coal);  										          //updates the number of coal for the user		
		document.getElementById('steel').innerHTML = fnum(steel);  										          //updates the number of steel for the user	
		document.getElementById('silver').innerHTML = fnum(silver);  										       //updates the number of silver for the user
		document.getElementById('faith').innerHTML = fnum(faith);  										      //updates the number of faith for the user
		document.getElementById('souls').innerHTML = fnum(souls);  										      //updates the number of souls for the user
		document.getElementById('paper').innerHTML = fnum(paper);  										      //updates the number of paper for the user
		document.getElementById('tomes').innerHTML = fnum(tomes);  										      //updates the number of tomes for the user
		document.getElementById('mana').innerHTML = fnum(mana);  										      //updates the mana for the user		
		this.enableFlag();
	}
}

Upgrade.prototype.costTest= function(cost, type, htmlRef){							//Checks the specified resource
	if(cost == '0')
	{
		return true;
	}	
	else{
		if(this.checkFlag() == true){
			document.getElementById(htmlRef).style.color = "black";	//If cost is defined and not met, cost is changed to black 			
			return true;			
		}
		else if(type >= cost){
			document.getElementById(htmlRef).style.color = "black";	//If cost is defined and not met, cost is changed to black 			
			return true;
		}
		else if(type < cost){
			document.getElementById(htmlRef).style.color = "red";	//If cost is defined and met, cost is changed to red		
			return false;
		}		
	}

}

Upgrade.prototype.unitCostTest = function(){
	if(this.hasReqUnit == false){
		return true;
	}
	else if(this.hasReqUnit == true && this.reqUnit.number >= this.numReqUnit){
		document.getElementById(this.htmlReqUnit).style.color = "black";	//If cost is defined and met, cost is changed to black	
		return true;
	}
	else if(this.hasReqUnit == true && this.reqUnit.number < this.numReqUnit){
		document.getElementById(this.htmlReqUnit).style.color = "red";	//If cost is defined and not met, cost is changed to red
		return false;		
	}
}

var peasantUpgrade1 = new Upgrade(
/*Name*/'peasantUpgrade1', 
/*goldCost*/2000, 
/*htmlGoldCost*/'peasantUpgrade1GoldCost',
/*woodCost*/0, 
/*htmlWoodCost*/'none',
/*ironCost*/0, 
/*htmlIronCost*/'none',
/*coalCost*/0, 
/*htmlCoalCost*/'none',
/*steelCost*/0, 
/*htmlSteelCost*/'none',
/*silverCost*/0, 
/*htmlSilverCost*/'none',
/*faithCost*/0, 
/*htmlFaithCost*/'none',
/*soulCost*/0, 
/*htmlSoulCost*/'none',
/*paperCost*/0, 
/*htmlPaperCost*/'none',
/*tomeCost*/0, 
/*htmlTomeCost*/'none',
/*manaCost*/0, 
/*htmlManaCost*/'none',
/*buttonRef*/'btnPeasantUpgrade1'
)
 
 var clickGoldUpgrade = new Upgrade(
/*Name*/'clickGoldUpgrade', 
/*goldCost*/1500, 
/*htmlGoldCost*/'clickGoldUpgradeGoldCost',
/*woodCost*/0, 
/*htmlWoodCost*/'none',
/*ironCost*/0, 
/*htmlIronCost*/'none',
/*coalCost*/0, 
/*htmlCoalCost*/'none',
/*steelCost*/0, 
/*htmlSteelCost*/'none',
/*silverCost*/0, 
/*htmlSilverCost*/'none',
/*faithCost*/0, 
/*htmlFaithCost*/'none',
/*soulCost*/0, 
/*htmlSoulCost*/'none',
/*paperCost*/0, 
/*htmlPaperCost*/'none',
/*tomeCost*/0, 
/*htmlTomeCost*/'none',
/*manaCost*/0, 
/*htmlManaCost*/'none',
/*buttonRef*/'btnclickGoldUpgrade'
)

 var clickGoldUpgrade2 = new Upgrade(
/*Name*/'clickGoldUpgrade2', 
/*goldCost*/25000, 
/*htmlGoldCost*/'clickGoldUpgrade2GoldCost',
/*woodCost*/0, 
/*htmlWoodCost*/'none',
/*ironCost*/0, 
/*htmlIronCost*/'none',
/*coalCost*/0, 
/*htmlCoalCost*/'none',
/*steelCost*/0, 
/*htmlSteelCost*/'none',
/*silverCost*/0, 
/*htmlSilverCost*/'none',
/*faithCost*/0, 
/*htmlFaithCost*/'none',
/*soulCost*/0, 
/*htmlSoulCost*/'none',
/*paperCost*/0, 
/*htmlPaperCost*/'none',
/*tomeCost*/0, 
/*htmlTomeCost*/'none',
/*manaCost*/0, 
/*htmlManaCost*/'none',
/*buttonRef*/'btnclickGoldUpgrade2'
)

 var clickGoldUpgrade3 = new Upgrade(
/*Name*/'clickGoldUpgrade3', 
/*goldCost*/1000000, 
/*htmlGoldCost*/'clickGoldUpgrade3GoldCost',
/*woodCost*/0, 
/*htmlWoodCost*/'none',
/*ironCost*/0, 
/*htmlIronCost*/'none',
/*coalCost*/0, 
/*htmlCoalCost*/'none',
/*steelCost*/0, 
/*htmlSteelCost*/'none',
/*silverCost*/0, 
/*htmlSilverCost*/'none',
/*faithCost*/0, 
/*htmlFaithCost*/'none',
/*soulCost*/0, 
/*htmlSoulCost*/'none',
/*paperCost*/0, 
/*htmlPaperCost*/'none',
/*tomeCost*/0, 
/*htmlTomeCost*/'none',
/*manaCost*/0, 
/*htmlManaCost*/'none',
/*buttonRef*/'btnclickGoldUpgrade3'
)
				 
 var ljackUpgrade1 = new Upgrade(
/*Name*/'ljackUpgrade1', 
/*goldCost*/2500, 
/*htmlGoldCost*/'ljackUpgrade1GoldCost',
/*woodCost*/500, 
/*htmlWoodCost*/'ljackUpgrade1WoldCost',
/*ironCost*/1500, 
/*htmlIronCost*/'ljackUpgrade1IronCost',
/*coalCost*/0, 
/*htmlCoalCost*/'none',
/*steelCost*/0, 
/*htmlSteelCost*/'none',
/*silverCost*/0, 
/*htmlSilverCost*/'none',
/*faithCost*/0, 
/*htmlFaithCost*/'none',
/*soulCost*/0, 
/*htmlSoulCost*/'none',
/*paperCost*/0, 
/*htmlPaperCost*/'none',
/*tomeCost*/0, 
/*htmlTomeCost*/'none',
/*manaCost*/0, 
/*htmlManaCost*/'none',
/*buttonRef*/'btnljackUpgrade1'
)
				
 var ljackUpgrade2 = new Upgrade(
/*Name*/'ljackUpgrade2', 
/*goldCost*/2500, 
/*htmlGoldCost*/'ljackUpgrade2GoldCost',
/*woodCost*/5000, 
/*htmlWoodCost*/'ljackUpgrade2WoldCost',
/*ironCost*/20000, 
/*htmlIronCost*/'ljackUpgrade2IronCost',
/*coalCost*/0, 
/*htmlCoalCost*/'none',
/*steelCost*/0, 
/*htmlSteelCost*/'none',
/*silverCost*/15000, 
/*htmlSilverCost*/'ljackUpgrade2SilverCost',
/*faithCost*/0, 
/*htmlFaithCost*/'none',
/*soulCost*/5000, 
/*htmlSoulCost*/'ljackUpgrade2SoulCost',
/*paperCost*/0, 
/*htmlPaperCost*/'none',
/*tomeCost*/0, 
/*htmlTomeCost*/'none',
/*manaCost*/0, 
/*htmlManaCost*/'none',
/*buttonRef*/'btnljackUpgrade2'
)
ljackUpgrade2.hasReqUnit = true;
ljackUpgrade2.reqUnit = Shade;
ljackUpgrade2.numReqUnit = 5;
ljackUpgrade2.htmlReqUnit = 'ljackUpgrade2UnitCost';

 var minerUpgrade1 = new Upgrade(
/*Name*/'minerUpgrade1', 
/*goldCost*/3500, 
/*htmlGoldCost*/'minerUpgrade1GoldCost',
/*woodCost*/0, 
/*htmlWoodCost*/'none',
/*ironCost*/1000, 
/*htmlIronCost*/'minerUpgrade1IronCost',
/*coalCost*/0, 
/*htmlCoalCost*/'none',
/*steelCost*/0, 
/*htmlSteelCost*/'none',
/*silverCost*/0, 
/*htmlSilverCost*/'none',
/*faithCost*/0, 
/*htmlFaithCost*/'none',
/*soulCost*/0, 
/*htmlSoulCost*/'none',
/*paperCost*/0, 
/*htmlPaperCost*/'none',
/*tomeCost*/0, 
/*htmlTomeCost*/'none',
/*manaCost*/0, 
/*htmlManaCost*/'none',
/*buttonRef*/'btnMinerUpgrade1'
)
				/* function minerUpgradePanning(){
					if(gold >= 3500 && iron >= 1000){
						gold -= 3500;
						iron -= 1000;
						mPanningUpgrade = true;	
						document.getElementById('gold').innerHTML = fnum(gold);
						document.getElementById('iron').innerHTML = fnum(iron);
						document.getElementById("btnminerUpgrade1").disabled = true;
						document.getElementById("btnminerUpgrade1").innerHTML = "Learn Panning Purchased";
					}	
				}; */
				
 var minerUpgrade2 = new Upgrade(
/*Name*/'minerUpgrade2', 
/*goldCost*/7500, 
/*htmlGoldCost*/'minerUpgrade2GoldCost',
/*woodCost*/0, 
/*htmlWoodCost*/'none',
/*ironCost*/2500, 
/*htmlIronCost*/'minerUpgrade2IronCost',
/*coalCost*/0, 
/*htmlCoalCost*/'none',
/*steelCost*/0, 
/*htmlSteelCost*/'none',
/*silverCost*/0, 
/*htmlSilverCost*/'none',
/*faithCost*/0, 
/*htmlFaithCost*/'none',
/*soulCost*/0, 
/*htmlSoulCost*/'none',
/*paperCost*/0, 
/*htmlPaperCost*/'none',
/*tomeCost*/0, 
/*htmlTomeCost*/'none',
/*manaCost*/0, 
/*htmlManaCost*/'none',
/*buttonRef*/'btnMinerUpgrade2'
)
				/* function minerUpgradeSilver(){
					if(gold >= 7500 && iron >= 2500){
						gold -= 7500;
						iron -= 2500;
						mSilverUpgrade = true;	
						document.getElementById('gold').innerHTML = fnum(gold);
						document.getElementById('iron').innerHTML = fnum(iron);
						document.getElementById('silverdiv').style.display = "block";
						$("#SecondaryResources").collapse('show');
						document.getElementById("btnminerUpgrade2").disabled = true;
						document.getElementById("btnminerUpgrade2").innerHTML = "Learned Silver Studies";
					}	
				}; */
				
 var acolyteUpgrade1 = new Upgrade(
/*Name*/'acolyteUpgrade1', 
/*goldCost*/5000, 
/*htmlGoldCost*/'acolyteUpgrade1GoldCost',
/*woodCost*/3000, 
/*htmlWoodCost*/'acolyteUpgrade1WoodCost',
/*ironCost*/0, 
/*htmlIronCost*/'none',
/*coalCost*/0, 
/*htmlCoalCost*/'none',
/*steelCost*/0, 
/*htmlSteelCost*/'none',
/*silverCost*/0, 
/*htmlSilverCost*/'none',
/*faithCost*/250, 
/*htmlFaithCost*/'acolyteUpgrade1FaithCost',
/*soulCost*/0, 
/*htmlSoulCost*/'none',
/*paperCost*/0, 
/*htmlPaperCost*/'none',
/*tomeCost*/0, 
/*htmlTomeCost*/'none',
/*manaCost*/0, 
/*htmlManaCost*/'none',
/*buttonRef*/'btnAcolyteUpgrade1'
)
				/* function acolyteUpgradeCollection(){
					if(gold >= 5000 && wood >= 3000 && faith >= 250){
						gold -= 5000
						wood -= 3000
						faith -= 250
						document.getElementById('gold').innerHTML = fnum(gold);
						document.getElementById('wood').innerHTML = fnum(wood);
						document.getElementById('faith').innerHTML = fnum(faith);
						acFaithUpgrade = true;
						document.getElementById("btnAcolyteUpgrade1").disabled = true;
						document.getElementById("btnAcolyteUpgrade1").innerHTML = "Trainee Vestments Crafted";
					}	
				} */
				
 var priestUpgrade1 = new Upgrade(				
/*Name*/'priestUpgrade1', 
/*goldCost*/7000, 
/*htmlGoldCost*/'priestUpgrade1GoldCost',
/*woodCost*/5000, 
/*htmlWoodCost*/'priestUpgrade1WoodCost',
/*ironCost*/0, 
/*htmlIronCost*/'none',
/*coalCost*/0, 
/*htmlCoalCost*/'none',
/*steelCost*/0, 
/*htmlSteelCost*/'none',
/*silverCost*/0, 
/*htmlSilverCost*/'none',
/*faithCost*/500, 
/*htmlFaithCost*/'priestUpgrade1FaithCost',
/*soulCost*/0, 
/*htmlSoulCost*/'none',
/*paperCost*/0, 
/*htmlPaperCost*/'none',
/*tomeCost*/0, 
/*htmlTomeCost*/'none',
/*manaCost*/0, 
/*htmlManaCost*/'none',
/*buttonRef*/'btnPriestUpgrade1'
)

				/* function priestUpgradeCollection(){
					if(gold >= 7000 && wood >= 5000 && faith >= 500){
						gold -= 7000
						wood -= 5000
						faith -= 500
						document.getElementById('gold').innerHTML = fnum(gold);
						document.getElementById('wood').innerHTML = fnum(wood);
						document.getElementById('faith').innerHTML = fnum(faith);
						prFaithUpgrade = true;
						document.getElementById("btnPriestUpgrade1").disabled = true;
						document.getElementById("btnPriestUpgrade1").innerHTML = "Rosary Beads Crafted";
					}	
				} */
				
 var tomeUnlock = new Upgrade(				
/*Name*/'tomeUnlock', 
/*goldCost*/12000, 
/*htmlGoldCost*/'tomeUnlockGoldCost',
/*woodCost*/0, 
/*htmlWoodCost*/'none',
/*ironCost*/0, 
/*htmlIronCost*/'none',
/*coalCost*/0, 
/*htmlCoalCost*/'none',
/*steelCost*/0, 
/*htmlSteelCost*/'none',
/*silverCost*/0, 
/*htmlSilverCost*/'none',
/*faithCost*/1000, 
/*htmlFaithCost*/'tomeUnlockFaithCost',
/*soulCost*/0, 
/*htmlSoulCost*/'none',
/*paperCost*/2000, 
/*htmlPaperCost*/'tomeUnlockPaperCost',
/*tomeCost*/0, 
/*htmlTomeCost*/'none',
/*manaCost*/0, 
/*htmlManaCost*/'none',
/*buttonRef*/'btnTomeUnlock'
)
				/* function UnlockTomes(){
					if(gold >= 12000 && paper >= 2000 && faith >= 1000){
						gold -= 12000;
						paper -= 2000;
						faith -= 1000;
						tomesUnlocked = true;
						document.getElementById('tomediv').style.display = "block";
						document.getElementById('createTome').style.display = "block";
						document.getElementById("btnTomeUnlock").disabled = true;		
						document.getElementById("btnTomeUnlock").innerHTML = "Scribing Unlocked";
					}
				}		 */		
				
var bishopUpgrade1 = new Upgrade(				
/*Name*/'bishopUpgrade1', 
/*goldCost*/1000000, 
/*htmlGoldCost*/'bishopUpgrade1GoldCost',
/*woodCost*/500000, 
/*htmlWoodCost*/'bishopUpgrade1WoodCost',
/*ironCost*/0, 
/*htmlIronCost*/'none',
/*coalCost*/0, 
/*htmlCoalCost*/'none',
/*steelCost*/50, 
/*htmlSteelCost*/'bishopUpgrade1SteelCost',
/*silverCost*/750000, 
/*htmlSilverCost*/'bishopUpgrade1SilverCost',
/*faithCost*/40000, 
/*htmlFaithCost*/'bishopUpgrade1FaithCost',
/*soulCost*/0, 
/*htmlSoulCost*/'none',
/*paperCost*/0, 
/*htmlPaperCost*/'none',
/*tomeCost*/0, 
/*htmlTomeCost*/'none',
/*manaCost*/0, 
/*htmlManaCost*/'none',
/*buttonRef*/'btnBishopUpgrade1'
)				
				/* function BishopUpgradeCollection(){
					if(gold >= 1000000 && wood >= 500000 && silver >= 750000 && faith >= 40000 && steel >= 50){
						gold -= 1000000;
						wood -= 500000;
						silver -= 750000;
						faith -= 40000;
						steel -= 50;
						bishopUpgr1 = true;
						document.getElementById("btnBishopUpgrade1").disabled = true;
						document.getElementById("btnBishopUpgrade1").innerHTML = "Confessionals Purchased";
					}		
				}				
						 */		
						 
var pageUpgrade1 = new Upgrade(				
/*Name*/'pageUpgrade1', 
/*goldCost*/4000, 
/*htmlGoldCost*/'pageUpgrade1GoldCost',
/*woodCost*/0, 
/*htmlWoodCost*/'none',
/*ironCost*/0, 
/*htmlIronCost*/'none',
/*coalCost*/0, 
/*htmlCoalCost*/'none',
/*steelCost*/0, 
/*htmlSteelCost*/'none',
/*silverCost*/0, 
/*htmlSilverCost*/'none',
/*faithCost*/0, 
/*htmlFaithCost*/'none',
/*soulCost*/0, 
/*htmlSoulCost*/'none',
/*paperCost*/0, 
/*htmlPaperCost*/'none',
/*tomeCost*/0, 
/*htmlTomeCost*/'none',
/*manaCost*/0, 
/*htmlManaCost*/'none',
/*buttonRef*/'btnPageUpgrade1'
)
pageUpgrade1.reqArmyPower = 120;
pageUpgrade1.htmlReqArmyPower = 'pageUpgrade1ArmyPower';	
	
				/* function UnlockSquire(){
					if(gold >= 4000 && BattlePower >= 120){
						gold -= 400;
						document.getElementById('gold').innerHTML = fnum(gold);
						squiresUnlocked = true;
						document.getElementById("btnPageUpgrade1").disabled = true;
						document.getElementById('SquireTab').style.display = "block";
						document.getElementById("btnPageUpgrade1").innerHTML = "Unlocked Squires";
					}
				} */

var squireUpgrade1 = new Upgrade(				
/*Name*/'squireUpgrade1', 
/*goldCost*/8000, 
/*htmlGoldCost*/'squireUpgrade1GoldCost',
/*woodCost*/0, 
/*htmlWoodCost*/'none',
/*ironCost*/250, 
/*htmlIronCost*/'squireUpgrade1IronCost',
/*coalCost*/0, 
/*htmlCoalCost*/'none',
/*steelCost*/0, 
/*htmlSteelCost*/'none',
/*silverCost*/0, 
/*htmlSilverCost*/'none',
/*faithCost*/0, 
/*htmlFaithCost*/'none',
/*soulCost*/0, 
/*htmlSoulCost*/'none',
/*paperCost*/0, 
/*htmlPaperCost*/'none',
/*tomeCost*/0, 
/*htmlTomeCost*/'none',
/*manaCost*/0, 
/*htmlManaCost*/'none',
/*buttonRef*/'btnSquireUpgrade1'
)		
squireUpgrade1.reqArmyPower = 500;
squireUpgrade1.htmlReqArmyPower = 'squireUpgrade1ArmyPower';			
				/* function UnlockKnight(){
					if(gold >= 8000 && BattlePower >= 500){
						gold -= 8000;
						document.getElementById('gold').innerHTML = fnum(gold);
						knightsUnlocked = true;
						document.getElementById("btnSquireUpgrade1").disabled = true;
						document.getElementById("btnSquireUpgrade1").innerHTML = "Unlocked Knights";
						document.getElementById('KnightTab').style.display = "block";
					}
				} */

var paladinUpgrade1 = new Upgrade(				
/*Name*/'paladinUpgrade1', 
/*goldCost*/20000, 
/*htmlGoldCost*/'paladinUpgrade1GoldCost',
/*woodCost*/0, 
/*htmlWoodCost*/'none',
/*ironCost*/5000, 
/*htmlIronCost*/'paladinUpgrade1IronCost',
/*coalCost*/0, 
/*htmlCoalCost*/'none',
/*steelCost*/0, 
/*htmlSteelCost*/'none',
/*silverCost*/0, 
/*htmlSilverCost*/'none',
/*faithCost*/2500, 
/*htmlFaithCost*/'paladinUpgrade1FaithCost',
/*soulCost*/0, 
/*htmlSoulCost*/'none',
/*paperCost*/0, 
/*htmlPaperCost*/'none',
/*tomeCost*/0, 
/*htmlTomeCost*/'none',
/*manaCost*/0, 
/*htmlManaCost*/'none',
/*buttonRef*/'btnPaladinUpgrade1'
)				
				
				/* function paladinUpgradeWeapon(){
					if(gold >= 20000 && iron >= 5000 && faith >=2500){
						gold -= 20000;
						iron -= 5000;
						faith -= 2500;
						document.getElementById('gold').innerHTML = fnum(gold);
						document.getElementById('iron').innerHTML = fnum(iron);
						document.getElementById('faith').innerHTML = fnum(faith);
						paladinWepUpgrade = true;
						setSpiritPower(Paladin,10);
						document.getElementById("paladinUpgrade1").disabled = true;
						document.getElementById("paladinUpgrade1").innerHTML = "Imbue Weapons Purchased";
					}
				}
 */
 var paladinUpgrade2 = new Upgrade(	
 /*Name*/'paladinUpgrade2', 
/*goldCost*/5000000, 
/*htmlGoldCost*/'paladinUpgrade2GoldCost',
/*woodCost*/0, 
/*htmlWoodCost*/'none',
/*ironCost*/1000000, 
/*htmlIronCost*/'paladinUpgrade2IronCost',
/*coalCost*/0, 
/*htmlCoalCost*/'none',
/*steelCost*/500, 
/*htmlSteelCost*/'paladinUpgrade2SteelCost',
/*silverCost*/0, 
/*htmlSilverCost*/'none',
/*faithCost*/2000000, 
/*htmlFaithCost*/'paladinUpgrade2FaithCost',
/*soulCost*/0, 
/*htmlSoulCost*/'none',
/*paperCost*/0, 
/*htmlPaperCost*/'none',
/*tomeCost*/0, 
/*htmlTomeCost*/'none',
/*manaCost*/0, 
/*htmlManaCost*/'none',
/*buttonRef*/'btnPaladinUpgrade2'
)	
				/* function paladinUpgradeWeapon2(){
					if(gold >= 5000000 && iron >= 1000000 && steel >= 3000 && faith >=2000000){
						gold -= 5000000;
						iron -= 1000000;
						steel -= 3000;
						faith -= 2000000;
						document.getElementById('gold').innerHTML = fnum(gold);
						document.getElementById('iron').innerHTML = fnum(iron);
						document.getElementById('steel').innerHTML = fnum(steel);
						document.getElementById('faith').innerHTML = fnum(faith);
						paladinWepUpgrade2 = true;
						if(paladinWepUpgrade == true){
							setSpiritPower(Paladin,100);
						}
						else{
							setSpiritPower(Paladin,50);
						}
						document.getElementById("paladinUpgrade2").disabled = true;
						document.getElementById("paladinUpgrade2").innerHTML = "Reforge Blessed Steel Purchased";
					}	
				} */

 var pmillEffUpgrade = new Upgrade(	
 /*Name*/'pmillEffUpgrade', 
/*goldCost*/50000, 
/*htmlGoldCost*/'pmillEffUpgradeGoldCost',
/*woodCost*/25000, 
/*htmlWoodCost*/'pmillEffUpgradeWoodCost',
/*ironCost*/35000, 
/*htmlIronCost*/'pmillEffUpgradeIronCost',
/*coalCost*/0, 
/*htmlCoalCost*/'none',
/*steelCost*/0, 
/*htmlSteelCost*/'none',
/*silverCost*/0, 
/*htmlSilverCost*/'none',
/*faithCost*/0, 
/*htmlFaithCost*/'none',
/*soulCost*/0, 
/*htmlSoulCost*/'none',
/*paperCost*/0, 
/*htmlPaperCost*/'none',
/*tomeCost*/0, 
/*htmlTomeCost*/'none',
/*manaCost*/0, 
/*htmlManaCost*/'none',
/*buttonRef*/'btnPmillEffUpgrade'
)					
				/* function PmillEffUpgrade(){
					if(gold >= 50000 && wood >= 25000 && iron >= 35000){
						gold -= 50000
						wood -= 25000
						iron -= 35000
						document.getElementById('gold').innerHTML = fnum(gold);
						document.getElementById('wood').innerHTML = fnum(wood);
						document.getElementById('iron').innerHTML = fnum(iron);
						PmillEffUpgr = true;
						document.getElementById("btnPmillEffUpgrade").disabled = true;
						document.getElementById("btnPmillEffUpgrade").innerHTML = "Process Control Purchased";
					}		
				} */

 var pmillEffUpgrade2 = new Upgrade(	
 /*Name*/'pmillEffUpgrade2', 
/*goldCost*/1000000, 
/*htmlGoldCost*/'pmillEffUpgrade2GoldCost',
/*woodCost*/1000000, 
/*htmlWoodCost*/'pmillEffUpgrade2WoodCost',
/*ironCost*/1000000, 
/*htmlIronCost*/'pmillEffUpgrade2IronCost',
/*coalCost*/0, 
/*htmlCoalCost*/'none',
/*steelCost*/0, 
/*htmlSteelCost*/'none',
/*silverCost*/0, 
/*htmlSilverCost*/'none',
/*faithCost*/0, 
/*htmlFaithCost*/'none',
/*soulCost*/50000, 
/*htmlSoulCost*/'pmillEffUpgrade2SoulCost',
/*paperCost*/0, 
/*htmlPaperCost*/'none',
/*tomeCost*/0, 
/*htmlTomeCost*/'none',
/*manaCost*/0, 
/*htmlManaCost*/'none',
/*buttonRef*/'btnPmillEffUpgrade2'
)					
				/* function PmillEffUpgrade2(){
					if(gold >= 1000000 && wood >= 1000000 && iron >= 1000000 && souls >= 50000){
						gold -= 1000000
						wood -= 1000000
						iron -= 1000000
						souls -= 50000;
						document.getElementById('gold').innerHTML = fnum(gold);
						document.getElementById('wood').innerHTML = fnum(wood);
						document.getElementById('iron').innerHTML = fnum(iron);
						document.getElementById('souls').innerHTML = fnum(souls);
						PmillEffUpgr2 = true;
						document.getElementById("btnPmillEffUpgrade2").disabled = true;
						document.getElementById("btnPmillEffUpgrade2").innerHTML = "Total Overhaul Purchased";
					}		
				} */
 var pmillClickUpgrade = new Upgrade(	
 /*Name*/'pmillClickUpgrade', 
/*goldCost*/1200000, 
/*htmlGoldCost*/'pmillClickUpgradeGoldCost',
/*woodCost*/1500000, 
/*htmlWoodCost*/'pmillClickUpgradeWoodCost',
/*ironCost*/1200000, 
/*htmlIronCost*/'pmillClickUpgradeIronCost',
/*coalCost*/0, 
/*htmlCoalCost*/'none',
/*steelCost*/0, 
/*htmlSteelCost*/'none',
/*silverCost*/0, 
/*htmlSilverCost*/'none',
/*faithCost*/0, 
/*htmlFaithCost*/'none',
/*soulCost*/50000, 
/*htmlSoulCost*/'pmillClickUpgradeSoulCost',
/*paperCost*/0, 
/*htmlPaperCost*/'none',
/*tomeCost*/0, 
/*htmlTomeCost*/'none',
/*manaCost*/0, 
/*htmlManaCost*/'none',
/*buttonRef*/'btnPmillClickUpgrade'
)				
				
				/* function PmillClickUpgrade(){
					if(gold >= 1200000 && wood >= 1500000 && iron >= 1200000 && souls >= 50000){
						gold -= 1200000
						wood -= 1500000
						iron -= 1200000
						souls -= 50000;
						document.getElementById('gold').innerHTML = fnum(gold);
						document.getElementById('wood').innerHTML = fnum(wood);
						document.getElementById('iron').innerHTML = fnum(iron);
						document.getElementById('souls').innerHTML = fnum(souls);
						PmillClickUpgr = true;
						document.getElementById("btnPmillClickUpgrade").disabled = true;
						document.getElementById("btnPmillClickUpgrade").innerHTML = "Production Oversight Purchased";
					}		
				} */
				
 var unlockQuesting = new Upgrade(	
 /*Name*/'unlockQuesting', 
/*goldCost*/10000, 
/*htmlGoldCost*/'unlockQuestingGoldCost',
/*woodCost*/0, 
/*htmlWoodCost*/'none',
/*ironCost*/0, 
/*htmlIronCost*/'none',
/*coalCost*/0, 
/*htmlCoalCost*/'none',
/*steelCost*/0, 
/*htmlSteelCost*/'none',
/*silverCost*/0, 
/*htmlSilverCost*/'none',
/*faithCost*/0, 
/*htmlFaithCost*/'none',
/*soulCost*/0, 
/*htmlSoulCost*/'none',
/*paperCost*/0, 
/*htmlPaperCost*/'none',
/*tomeCost*/0, 
/*htmlTomeCost*/'none',
/*manaCost*/0, 
/*htmlManaCost*/'none',
/*buttonRef*/'btnUnlockQuesting'
)				
		
				/* function unlockQuesting(){
					if(gold >= 10000){
						gold -= 10000;
						document.getElementById('gold').innerHTML = fnum(gold);
						document.getElementById('QuestMenu').style.display = "block";
						document.getElementById('Quests').style.display = "block";
						document.getElementById("navKingdomName").click();
						document.getElementById("btnUnlockQuest").disabled = true;
						document.getElementById("btnUnlockQuest").innerHTML = "Taskmaster Hired - Questing available";		
						unlockedQuesting = true;
						$.notify({
							title: "<strong>New! </strong>",
							message: "You are now employing a taskmaster whom helps you coordinate your troops and handle <a href='javascript: alertOpenQuestPage();' class='alert-link'>requests.</a>",
							},{
						delay: 900000
						});			
					}
				} */

var shadeUpgrade1 = new Upgrade(
/*Name*/'shadeUpgrade1', 
/*goldCost*/75000, 
/*htmlGoldCost*/'shadeUpgrade1GoldCost',
/*woodCost*/0, 
/*htmlWoodCost*/'none',
/*ironCost*/0, 
/*htmlIronCost*/'none',
/*coalCost*/0, 
/*htmlCoalCost*/'none',
/*steelCost*/0, 
/*htmlSteelCost*/'none',
/*silverCost*/30000, 
/*htmlSilverCost*/'shadeUpgrade1SilverCost',
/*faithCost*/30000, 
/*htmlFaithCost*/'shadeUpgrade1FaithCost',
/*soulCost*/0, 
/*htmlSoulCost*/'none',
/*paperCost*/0, 
/*htmlPaperCost*/'none',
/*tomeCost*/20, 
/*htmlTomeCost*/'shadeUpgrade1TomeCost',
/*manaCost*/0, 
/*htmlManaCost*/'none',
/*buttonRef*/'btnShadeUpgrade1'
)
 

				/* function shadeUpgrade1(){
					if(gold >= 75000 && silver >= 30000 && faith >= 30000 && tomes >= 20){
						gold -= 75000;
						silver -= 30000;
						faith -= 30000;
						tomes -= 20;
						shadeUpgr1 = true;
						setArmyPower(Shade,10);
						setSpiritPower(Shade,20);
						document.getElementById("btnShadeUpgrade1").disabled = true;
						document.getElementById("btnShadeUpgrade1").innerHTML = "Blessed Silver Runes Purchased";
					}
				} */

var angelUpgrade1 = new Upgrade(
/*Name*/'angelUpgrade1', 
/*goldCost*/3000000, 
/*htmlGoldCost*/'angelUpgrade1GoldCost',
/*woodCost*/0, 
/*htmlWoodCost*/'none',
/*ironCost*/0, 
/*htmlIronCost*/'none',
/*coalCost*/0, 
/*htmlCoalCost*/'none',
/*steelCost*/0, 
/*htmlSteelCost*/'none',
/*silverCost*/1500000, 
/*htmlSilverCost*/'angelUpgrade1SilverCost',
/*faithCost*/1000000, 
/*htmlFaithCost*/'angelUpgrade1FaithCost',
/*soulCost*/0, 
/*htmlSoulCost*/'none',
/*paperCost*/0, 
/*htmlPaperCost*/'none',
/*tomeCost*/50, 
/*htmlTomeCost*/'angelUpgrade1TomeCost',
/*manaCost*/0, 
/*htmlManaCost*/'none',
/*buttonRef*/'btnAngelUpgrade1'
)				
				
				/* function buyAngelUpgrade1(){
					if(gold >= 3000000 && silver >= 1500000 && faith >= 1000000 && tomes >= 50){
						gold -= 3000000;
						silver -= 1500000;
						faith -= 1000000;
						tomes -= 50;
						angelUpgr1 = true;
						document.getElementById("btnAngelUpgrade1").disabled = true;
						document.getElementById("btnAngelUpgrade1").innerHTML = "Concentrated Piety Purchased";
					}	
				} */


 var upgradeTavern = new Upgrade(	
 /*Name*/'upgradeTavern', 
/*goldCost*/10000, 
/*htmlGoldCost*/'upgradeTavernGoldCost',
/*woodCost*/0, 
/*htmlWoodCost*/'none',
/*ironCost*/5000, 
/*htmlIronCost*/'upgradeTavernIronCost',
/*coalCost*/0, 
/*htmlCoalCost*/'none',
/*steelCost*/0, 
/*htmlSteelCost*/'none',
/*silverCost*/0, 
/*htmlSilverCost*/'none',
/*faithCost*/0, 
/*htmlFaithCost*/'none',
/*soulCost*/0, 
/*htmlSoulCost*/'none',
/*paperCost*/0, 
/*htmlPaperCost*/'none',
/*tomeCost*/0, 
/*htmlTomeCost*/'none',
/*manaCost*/0, 
/*htmlManaCost*/'none',
/*buttonRef*/'btnUpgradeTavern'
)	

 var upgradeTavern2 = new Upgrade(	
 /*Name*/'upgradeTavern2', 
/*goldCost*/10000, 
/*htmlGoldCost*/'upgradeTavern2GoldCost',
/*woodCost*/5000, 
/*htmlWoodCost*/'upgradeTavern2WoodCost',
/*ironCost*/7000, 
/*htmlIronCost*/'upgradeTavern2IronCost',
/*coalCost*/0, 
/*htmlCoalCost*/'none',
/*steelCost*/0, 
/*htmlSteelCost*/'none',
/*silverCost*/0, 
/*htmlSilverCost*/'none',
/*faithCost*/0, 
/*htmlFaithCost*/'none',
/*soulCost*/0, 
/*htmlSoulCost*/'none',
/*paperCost*/0, 
/*htmlPaperCost*/'none',
/*tomeCost*/0, 
/*htmlTomeCost*/'none',
/*manaCost*/0, 
/*htmlManaCost*/'none',
/*buttonRef*/'btnUpgradeTavern2'
)

 var upgradeChurch = new Upgrade(	
 /*Name*/'upgradeChurch', 
/*goldCost*/10000000, 
/*htmlGoldCost*/'upgradeChurchGoldCost',
/*woodCost*/5000000, 
/*htmlWoodCost*/'upgradeChurchWoodCost',
/*ironCost*/0, 
/*htmlIronCost*/'none',
/*coalCost*/0, 
/*htmlCoalCost*/'none',
/*steelCost*/2000, 
/*htmlSteelCost*/'upgradeChurchSteelCost',
/*silverCost*/0, 
/*htmlSilverCost*/'none',
/*faithCost*/500000, 
/*htmlFaithCost*/'upgradeChurchFaithCost',
/*soulCost*/0, 
/*htmlSoulCost*/'none',
/*paperCost*/0, 
/*htmlPaperCost*/'none',
/*tomeCost*/0, 
/*htmlTomeCost*/'none',
/*manaCost*/0, 
/*htmlManaCost*/'none',
/*buttonRef*/'btnUpgradeToCathedral'
)
	