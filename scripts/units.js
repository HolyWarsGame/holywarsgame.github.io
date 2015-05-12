//HW Units

var Unit = function(name, htmlNumRef, htmlNextGoldCost, htmlNextIronCost, htmlNextSilverCost, htmlNextFaithCost, htmlNextSoulCost, htmlNextTomeCost, htmlNextManaCost, htmlBuyBtn, 
					goldCost, ironCost, silverCost, faithCost, soulCost, tomeCost, manaCost, costMult, description, costAdj, hasReqUnit, reqUnit, htmlReqUnit){
	this.name = name;
	this.htmlNumRef = htmlNumRef;
	this.htmlNextGoldCost = htmlNextGoldCost;
	this.htmlNextIronCost = htmlNextIronCost;
	this.htmlNextSilverCost = htmlNextSilverCost;
	this.htmlNextFaithCost = htmlNextFaithCost;
	this.htmlNextSoulCost = htmlNextSoulCost;
	this.htmlNextTomeCost = htmlNextTomeCost;
	this.htmlNextManaCost = htmlNextManaCost;
	this.htmlReqUnit = htmlReqUnit;
	this.htmlBuyBtn = htmlBuyBtn;
	this.goldCost = goldCost;
	this.ironCost = ironCost;
	this.silverCost = silverCost;
	this.faithCost = faithCost;
	this.soulCost = soulCost;
	this.tomeCost = tomeCost;
	this.manaCost = manaCost;
	this.costMult = costMult;
	this.description = description;
	this.goldClickVal = 0;
	this.woodClickVal = 0;
	this.ironClickVal = 0;
	this.coalClickVal = 0;
	this.silverClickVal = 0;
	this.faithClickVal = 0;
	this.soulsClickVal = 0;
	this.tomeClickVal = 0;
	this.manaClickVal = 0;
	this.armyPower = 0;
	this.spiritPower = 0;
	this.curGoldCost = 0;
	this.curIronCost = 0;
	this.curSilverCost = 0;	
	this.curFaithCost = 0;
	this.curSoulCost = 0;
	this.curTomeCost = 0;
	this.curManaCost = 0;
	this.nextGoldCost = 0;
	this.nextIronCost = 0;
	this.nextSilverCost = 0;
	this.nextFaithCost = 0;
	this.nextSoulCost = 0;
	this.nextTomeCost = 0;
	this.nextManaCost = 0;
	this.number = 0;
	this.costAdj = costAdj;	
	this.hasReqUnit = hasReqUnit;
	this.reqUnit = reqUnit;
	this.onQuest = 0;
};


Unit.prototype.buyOne = function(){
	this.curGoldCost =  Math.floor(this.goldCost * Math.pow(this.costMult,this.number-this.costAdj+this.onQuest));
	this.curIronCost =  Math.floor(this.ironCost * Math.pow(this.costMult,this.number+this.onQuest));
	this.curSilverCost =  Math.floor(this.silverCost * Math.pow(this.costMult,this.number+this.onQuest));
	this.curFaithCost =  Math.floor(this.faithCost * Math.pow(this.costMult,this.number+this.onQuest));
	this.curSoulCost =  Math.floor(this.soulCost * Math.pow(this.costMult,this.number+this.onQuest));
	this.curTomeCost =  Math.floor(this.tomeCost * Math.pow(this.costMult,this.number+this.onQuest));
	this.curManaCost = Math.floor(this.manaCost * Math.pow(this.costMult,this.number+this.onQuest));
	
	if(this.hasReqUnit === false || (this.hasReqUnit === true && this.reqUnit.number > 0)){

		if(gold >= this.curGoldCost && iron >= this.curIronCost && silver >= this.curSilverCost && faith >= this.curFaithCost && souls >= this.curSoulCost && tomes >= this.tomeCost && mana >= this.manaCost){    //checks that the player can afford the Unit
			this.number += 1;                                  							 	  //increases number of Unit
			gold -= this.curGoldCost;                     										      //removes the gold spent
			iron -= this.curIronCost;                                                                   //removes the iron spent
			silver -= this.curSilverCost;                                                             //removes the silver spent
			faith -= this.curFaithCost;                                                                //removes the faith spent
			souls -= this.curSoulCost;                                                                 //removes the souls spent
			tomes -= this.curTomeCost; 																  //removes the tomes spent
			mana -= this.curManaCost;
			document.getElementById(this.htmlNumRef).innerHTML = this.number;  							      //updates the number of Unit for the user
			document.getElementById('gold').innerHTML = fnum(gold);  										          //updates the number of gold for the user
			document.getElementById('iron').innerHTML = fnum(iron);  										          //updates the number of iron for the user
			document.getElementById('silver').innerHTML = fnum(silver);  										       //updates the number of silver for the user
			document.getElementById('faith').innerHTML = fnum(faith);  										      //updates the number of faith for the user
			document.getElementById('souls').innerHTML = fnum(souls);  										      //updates the number of souls for the user
			document.getElementById('tomes').innerHTML = fnum(tomes);  										      //updates the number of tomes for the user
			document.getElementById('mana').innerHTML = fnum(mana);  										      //updates the mana for the user
			if(this.hasReqUnit === true){
				this.reqUnit.removeOne();
			}
			this.nextGoldCost = Math.floor(this.goldCost * Math.pow(this.costMult,this.number-this.costAdj+this.onQuest));         //works out the cost of the next Unit
			document.getElementById(this.htmlNextGoldCost).innerHTML = fnum(this.nextGoldCost);  						      //updates the Unit cost for the user
			
			if(this.htmlNextIronCost != 'none'){
				this.nextIronCost = Math.floor(this.ironCost * Math.pow(this.costMult,this.number+this.onQuest));                      //works out the iron cost of the next Unit
				document.getElementById(this.htmlNextIronCost).innerHTML = fnum(this.nextIronCost);  						      //updates the Unit iron cost for the user
			}
			
			if(this.htmlNextSilverCost != 'none'){
				this.nextSilverCost = Math.floor(this.silverCost * Math.pow(this.costMult,this.number+this.onQuest));                    //works out the silver cost of the next Unit	
				document.getElementById(this.htmlNextSilverCost).innerHTML = fnum(this.nextSilverCost);  						      //updates the Unit silver cost for the user
			}
			
			if(this.htmlNextFaithCost != 'none'){
				this.nextFaithCost = Math.floor(this.faithCost * Math.pow(this.costMult,this.number+this.onQuest));                      //works out the faith cost of the next Unit
				document.getElementById(this.htmlNextFaithCost).innerHTML = fnum(this.nextFaithCost);  						      //updates the Unit faith cost for the user	
			}	

			if(this.htmlNextSoulCost != 'none'){
				this.nextSoulCost = Math.floor(this.soulCost * Math.pow(this.costMult,this.number+this.onQuest));                       //works out the Soul cost of the next Unit
				document.getElementById(this.htmlNextSoulCost).innerHTML = fnum(this.nextSoulCost);  						      //updates the Unit Soul cost for the user
			}

			if(this.htmlNextTomeCost != 'none'){
				this.nextTomeCost = Math.floor(this.tomeCost * Math.pow(this.costMult,this.number+this.onQuest));                       //works out the Tome cost of the next Unit
				document.getElementById(this.htmlNextTomeCost).innerHTML = fnum(this.nextTomeCost);  						      //updates the Unit Tome cost for the user
			}	

			if(this.htmlNextManaCost != 'none'){
				this.nextManaCost = Math.floor(this.manaCost * Math.pow(this.costMult,this.number+this.onQuest));                       //works out the Mana cost of the next Unit
				document.getElementById(this.htmlNextManaCost).innerHTML = fnum(this.nextManaCost);  						      //updates the Unit Mana cost for the user
			}				

			updateStatistic(this.name, 1);
		}
	}
	QuestCheckUnitOptions(); //Update quest selections (disable unit selection if 0, enable if > 0)
};

Unit.prototype.removeOne = function(){
	this.number -= 1;																	  //subtracts a unit from count
	document.getElementById(this.htmlNumRef).innerHTML = this.number;  							      //updates the number of Unit for the user
	this.recalcCost();
};

Unit.prototype.recalcCost = function(){
	this.curGoldCost = Math.floor(this.goldCost * Math.pow(this.costMult,this.number-this.costAdj+this.onQuest));         //works out the cost of the next Unit
	document.getElementById(this.htmlNextGoldCost).innerHTML = fnum(this.curGoldCost);  						      //updates the Unit cost for the user
	
	if(this.htmlNextIronCost != 'none'){
		this.curIronCost = Math.floor(this.ironCost * Math.pow(this.costMult,this.number+this.onQuest));                      //works out the iron cost of the next Unit
		document.getElementById(this.htmlNextIronCost).innerHTML = fnum(this.curIronCost);  						      //updates the Unit iron cost for the user
	}
	
	if(this.htmlNextSilverCost != 'none'){
		this.curSilverCost = Math.floor(this.silverCost * Math.pow(this.costMult,this.number+this.onQuest));                    //works out the silver cost of the next Unit	
		document.getElementById(this.htmlNextSilverCost).innerHTML = fnum(this.curSilverCost);  						      //updates the Unit silver cost for the user
	}
	
	if(this.htmlNextFaithCost != 'none'){
		this.curFaithCost = Math.floor(this.faithCost * Math.pow(this.costMult,this.number+this.onQuest));                      //works out the faith cost of the next Unit
		document.getElementById(this.htmlNextFaithCost).innerHTML = fnum(this.curFaithCost);  						      //updates the Unit faith cost for the user	
	}	

	if(this.htmlNextSoulCost != 'none'){
		this.curSoulCost = Math.floor(this.soulCost * Math.pow(this.costMult,this.number+this.onQuest));                       //works out the Soul cost of the next Unit
		document.getElementById(this.htmlNextSoulCost).innerHTML = fnum(this.curSoulCost);  						      //updates the Unit Soul cost for the user
	}	

	if(this.htmlNextTomeCost != 'none'){
		this.curTomeCost = Math.floor(this.tomeCost * Math.pow(this.costMult,this.number+this.onQuest));                       //works out the Tome cost of the next Unit
		document.getElementById(this.htmlNextTomeCost).innerHTML = fnum(this.curTomeCost);  					   //updates the Unit Tome cost for the user
	}	

	if(this.htmlNextManaCost != 'none'){
		this.curManaCost = Math.floor(this.manaCost * Math.pow(this.costMult,this.number+this.onQuest));                       //works out the Mana cost of the next Unit
		document.getElementById(this.htmlNextManaCost).innerHTML = fnum(this.curManaCost);  					   //updates the Unit Mana cost for the user
	}	
};

Unit.prototype.canBuy = function(){
	this.recalcCost();
	btn = this.htmlBuyBtn;
		if(this.checkReqUnit() * gold >= this.curGoldCost && iron >= this.curIronCost && silver >= this.curSilverCost && faith >= this.curFaithCost && souls >= this.curSoulCost && tomes >= this.curTomeCost && mana >= this.curManaCost ){     //checks that the player can afford the Unit
 			document.getElementById(btn).disabled = false;					//enables the buy button
			this.CostsToBlack();
			return true;
		}
		else{
			document.getElementById(btn).disabled = true;					//disables the buy button
			if(gold < this.curGoldCost && this.htmlNextGoldCost != 'none'){
				document.getElementById(this.htmlNextGoldCost).style.color = lackResourceColor;
			}
			if(iron < this.curIronCost && this.htmlNextIronCost != 'none'){
				document.getElementById(this.htmlNextIronCost).style.color = lackResourceColor;
			}
			if(silver < this.curSilverCost && this.htmlNextSilverCost != 'none'){
				document.getElementById(this.htmlNextSilverCost).style.color = lackResourceColor;
			}
			if(faith < this.curFaithCost && this.htmlNextFaithCost != 'none'){
				document.getElementById(this.htmlNextFaithCost).style.color = lackResourceColor;
			}
			if(souls < this.curSoulCost && this.htmlNextSoulCost != 'none'){
				document.getElementById(this.htmlNextSoulCost).style.color = lackResourceColor;
			}
			if(tomes < this.curTomeCost && this.htmlNextTomeCost != 'none'){
				document.getElementById(this.htmlNextTomeCost).style.color = lackResourceColor;

			}
			if(mana < this.curManaCost && this.htmlNextManaCost != 'none'){
				document.getElementById(this.htmlNextManaCost).style.color = lackResourceColor;
			}
			return false;
		}
		
};

Unit.prototype.checkReqUnit = function(){
	
		if(this.hasReqUnit === false){
			return true;
		}
		else if(this.hasReqUnit === true && this.reqUnit.number < 1)
		{
			document.getElementById(this.htmlReqUnit).style.color = lackResourceColor;
			return false;
		}
		else if(this.hasReqUnit === true && this.reqUnit.number >= 1)
		{
			document.getElementById(this.htmlReqUnit).style.color = haveResourceColor;
			return true;
		}
};

Unit.prototype.CostsToBlack = function(){
	if(this.htmlNextGoldCost != 'none'){document.getElementById(this.htmlNextGoldCost).style.color = haveResourceColor;}
	if(this.htmlNextIronCost != 'none'){document.getElementById(this.htmlNextIronCost).style.color = haveResourceColor;}
	if(this.htmlNextSilverCost != 'none'){document.getElementById(this.htmlNextSilverCost).style.color = haveResourceColor;}
	if(this.htmlNextFaithCost != 'none'){document.getElementById(this.htmlNextFaithCost).style.color = haveResourceColor;}
	if(this.htmlNextSoulCost != 'none'){document.getElementById(this.htmlNextSoulCost).style.color = haveResourceColor;}
	if(this.htmlNextTomeCost != 'none'){document.getElementById(this.htmlNextTomeCost).style.color = haveResourceColor;}
	if(this.htmlNextManaCost != 'none'){document.getElementById(this.htmlNextManaCost).style.color = haveResourceColor;}
//	if(this.htmlReqUnit != 'none'){document.getElementById(this.htmlReqUnit).style.color = haveResourceColor;}
};

Unit.prototype.totalArmyPower = function(){
	return this.armyPower*this.number;
};

Unit.prototype.totalSpiritPower = function(){
	return this.spiritPower*this.number;
};

function setDescription(Unit, element){
	var popover = document.getElementById(element);
	popover.setAttribute("data-content", Unit.description);		
}

function setArmyPower(Unit, value){
	Unit.armyPower = value;
}

function setSpiritPower(Unit, value){
	Unit.spiritPower = value;
}

function setClickVal(Unit, type, value){
	switch(type)
	{
		case 'gold':
			Unit.goldClickVal = value;
		break;
		
		case 'wood':
			Unit.woodClickVal = value;
		break;
		
		case 'coal':
			Unit.coalClickVal = value;
		break;
		
		case 'iron':
			Unit.ironClickVal = value;
		break;
		
		case 'silver':
			Unit.silverClickVal = value;
		break;
		
		case 'faith':
			Unit.faithClickVal = value;
		break;
		
		case 'tome':
			Unit.tomeClickVal = value;
		break;
		
		case 'souls':
			Unit.soulsClickVal = value;
		break;
		
		case 'mana':
			Unit.manaClickVal = value;
		break;
	}
}

function updateStatistic(name, value){
//	console.log(name);
	switch(name)
	{
		case 'Peasant':
			statPeasantsHired += value;
			statTotalPeasantsHired += value;
			statSelfPeasantsHired += value;
			statTotalSelfPeasantsHired += value;
			document.getElementById('statPeasantsHired').innerHTML = statPeasantsHired;
			document.getElementById('statSelfPeasantsHired').innerHTML = statSelfPeasantsHired;
			document.getElementById('statTotalSelfPeasantsHired').innerHTML = statTotalSelfPeasantsHired;
			document.getElementById('statTotalPeasantsHired').innerHTML = statTotalPeasantsHired;
		break;
		
		case 'Miner':
			statMinersHired += value;
			statSelfMinersHired += value;
			statTotalSelfMinersHired += value;
			statTotalMinersHired += value;
			document.getElementById('statMinersHired').innerHTML = statMinersHired;
			document.getElementById('statSelfMinersHired').innerHTML = statSelfMinersHired;
			document.getElementById('statTotalSelfMinersHired').innerHTML = statTotalSelfMinersHired;
			document.getElementById('statTotalMinersHired').innerHTML = statTotalMinersHired;
		break;
		
		case 'Coal Miner':
			statCoalMinersHired += value;
			statTotalCoalMinersHired += value;
			document.getElementById('statCoalMinersHired').innerHTML = statCoalMinersHired;
			document.getElementById('statTotalCoalMinersHired').innerHTML = statTotalCoalMinersHired;
		break;		
		
		case 'Lumberjack':
			statLumberjacksHired += value;
			statSelfLumberjacksHired += value;
			statTotalSelfLumberjacksHired += value;
			statTotalLumberjacksHired += value;
			document.getElementById('statLumberjacksHired').innerHTML = statLumberjacksHired;
			document.getElementById('statSelfLumberjacksHired').innerHTML = statSelfLumberjacksHired;
			document.getElementById('statTotalSelfLumberjacksHired').innerHTML = statTotalSelfLumberjacksHired;
			document.getElementById('statTotalLumberjacksHired').innerHTML = statTotalLumberjacksHired;			
		break;
		
		case 'Page':
			statPagesTrained += value;
			statTotalPagesTrained += value;
			document.getElementById('statPagesTrained').innerHTML = statPagesTrained;
			document.getElementById('statTotalPagesTrained').innerHTML = statTotalPagesTrained;
		break;
		
		case 'Squire':
			statSquiresTrained += value;
			statTotalSquiresTrained += value;
			document.getElementById('statSquiresTrained').innerHTML = statSquiresTrained;
			document.getElementById('statTotalSquiresTrained').innerHTML = statTotalSquiresTrained;
		break;

		case 'Knight':
			statKnightsTrained += value;
			statTotalKnightsTrained += value;
			document.getElementById('statKnightsTrained').innerHTML = statKnightsTrained;
			document.getElementById('statTotalKnightsTrained').innerHTML = statTotalKnightsTrained;			
		break;	

		case 'Paladin':
			statPaladinsTrained += value;
			statTotalPaladinsTrained += value;
			document.getElementById('statPaladinsTrained').innerHTML = statPaladinsTrained;
			document.getElementById('statTotalPaladinsTrained').innerHTML = statTotalPaladinsTrained;		
		break;

		case 'Acolyte':
			statAcolytesRecruited += value;
			statTotalAcolytesRecruited += value;
			document.getElementById('statAcolytesRecruited').innerHTML = statAcolytesRecruited;
			document.getElementById('statTotalAcolytesRecruited').innerHTML = statTotalAcolytesRecruited;	
		break;

		case 'Priest':
			statPriestsTrained += value;
			statTotalPriestsTrained += value;
			document.getElementById('statPriestsTrained').innerHTML = statPriestsTrained;
			document.getElementById('statTotalPriestsTrained').innerHTML = statTotalPriestsTrained;			
		break;

		case 'Scribe':
			statScribesTrained += value;
			statTotalScribesTrained += value;
			document.getElementById('statScribesTrained').innerHTML = statScribesTrained;
			document.getElementById('statTotalScribesTrained').innerHTML = statTotalScribesTrained;			
		break;		

		case 'Bishop':
			statBishopsTrained += value;
			statTotalBishopsTrained += value;
			document.getElementById('statBishopsTrained').innerHTML = statBishopsTrained;
			document.getElementById('statTotalBishopsTrained').innerHTML = statTotalBishopsTrained;				
		break;

		case 'Shade':
			statShadesSummoned += value;
			statTotalShadesSummoned += value;
			document.getElementById('statShadesSummoned').innerHTML = statShadesSummoned;
			document.getElementById('statTotalShadesSummoned').innerHTML = statTotalShadesSummoned;				
		break;

		case 'AspectofJustice':
			statAspectsTrained += value;
			statTotalAspectsTrained += value;
			document.getElementById('statAspectsTrained').innerHTML = statAspectsTrained;
			document.getElementById('statTotalAspectsTrained').innerHTML = statTotalAspectsTrained;				
		break;	

		case 'Angel':
			statAngelsSummoned += value;
			statTotalAngelsSummoned += value;
			document.getElementById('statAngelsSummoned').innerHTML = statAngelsSummoned;
			document.getElementById('statTotalAngelsSummoned').innerHTML = statTotalAngelsSummoned;				
		break;

		case 'Sprite':
			statSpritesSummoned += value;
			statTotalSpritesSummoned += value;
			document.getElementById('statSpritesSummoned').innerHTML = statSpritesSummoned;
			document.getElementById('statTotalSpritesSummoned').innerHTML = statTotalSpritesSummoned;				
		break;			
		
	}
}

//Unit constructor  (name, htmlNumRef, htmlNextGoldCost, htmlNextIronCost, htmlNextSilverCost, htmlNextFaithCost, htmlNextSoulCost, htmlNextTomeCost, htmlBuyBtn, 
//					goldCost, ironCost, silverCost, faithCost, soulCost, tomeCost, manaCost, costMult, description, costAdj, hasReqUnit, reqUnit, htmlReqUnit){
var peasDesc = "A lowly denizen of your realm. They are adept at farming and scrounging for gold but completely useless at fighting.";
var Peasant = new Unit("Peasant",'peasants','PeasantCost','none','none','none','none','none','none','btnbuyPeasant',50,0,0,0,0,0,0,1.1, peasDesc, tavernpeasants,false,"none", "none");

setDescription(Peasant, 'BtnPeasantDesc');
setClickVal(Peasant, 'gold', 1);

var lumberjackDesc = "These brawny men fell trees for you.";
var Lumberjack = new Unit("Lumberjack",'lumberjacks','LumberjackCost','none','none','none','none','none','none','btnbuyLumberjack',150,0,0,0,0,0,0,1.1, lumberjackDesc, tavernlumberjacks, false, "none", "none");
setDescription(Lumberjack, 'BtnLumberjackDesc');
setClickVal(Lumberjack, 'wood', 1);

var minerDesc = "These hard-working mine excavate minerals from the mine you have built. They bring canaries in with them to warn them of disasters. Also as lunch.";
var Miner = new Unit("Miner",'miners','MinerCost','none','none','none','none','none','none','btnbuyMiner',250,0,0,0,0,0,0,1.1, minerDesc, tavernminers, false, "none", "none");
setDescription(Miner, 'BtnMinerDesc');
setClickVal(Miner, 'iron', 1);

var coalMinerDesc = "These miners have specialized in dredging dirty, black fuel from the mines.";
var CoalMiner = new Unit("Coal Miner",'coalminers','CoalMinerCost','CoalMinerIronCost','CoalMinerSilverCost','none','none','none','none','btnbuyCoalMiner',40000,20000,15000,0,0,0,0,1.25, coalMinerDesc, 0, true, Miner, "coalMinerReqUnit");
setDescription(CoalMiner, 'BtnCoalMinerDesc');
setClickVal(CoalMiner, 'coal', 0.1);

var pageDesc = "Young men in training to become knights. Not too great with weapons yet, but they're learning.  <br> Provides  <img src = 'images/armsmall.png'>10 army strength";
var Page = new Unit(
/*Name*/			"Page",
/*htmlNumRef*/		'personPage',
/*htmlNextGoldCost*/'PageCost',
/*htmlNextIronCost*/'PageIronCost',
/*htmlNextSilverCost*/'none',
/*htmlNextFaithCost*/'none',
/*htmlNextSoulCost*/'none',
/*htmlNextTomeCost*/'none',
/*htmlNextManaCost*/'none',
/*htmlBuyBtn*/		'btnBuyPage',
/*goldCost*/		500,
/*ironCost*/		100,
/*silverCost*/		0,
/*faithCost*/		0,
/*soulCost*/		0,
/*tomeCost*/		0,
/*manaCost*/		0,
/*costMult*/		1.1, 
/*description*/		pageDesc, 
/*costAdj*/			0, 
/*hasReqUnit*/		false, 
/*reqUnit*/			"none", 
/*htmlReqUnit*/		"none");

setDescription(Page, 'BtnPageDesc');
setArmyPower(Page, 10);

var squireDesc = "Pages that have gained enough experience are promoted to Squires. They are semi-capable warriors. <br> Provides <img src = 'images/armsmall.png'>50 army strength.";
//var Squire = new Unit("Squire",'squires','SquireCost','SquireIronCost','none','none','none','none','none','btnBuySquire',1200,250,0,0,0,0,0,1.15, squireDesc, 0, true, Page, 'SquireReqUnit');	
var Squire = new Unit(
/*Name*/			"Squire",
/*htmlNumRef*/		'squires',
/*htmlNextGoldCost*/'SquireCost',
/*htmlNextIronCost*/'SquireIronCost',
/*htmlNextSilverCost*/'none',
/*htmlNextFaithCost*/'none',
/*htmlNextSoulCost*/'none',
/*htmlNextTomeCost*/'none',
/*htmlNextManaCost*/'none',
/*htmlBuyBtn*/		'btnBuySquire',
/*goldCost*/		1200,
/*ironCost*/		250,
/*silverCost*/		0,
/*faithCost*/		0,
/*soulCost*/		0,
/*tomeCost*/		0,
/*manaCost*/		0,
/*costMult*/		1.15, 
/*description*/		squireDesc, 
/*costAdj*/			0, 
/*hasReqUnit*/		true, 
/*reqUnit*/			Page, 
/*htmlReqUnit*/		"SquireReqUnit");
setDescription(Squire, 'BtnSquireDesc');
setArmyPower(Squire, 50);

var knightDesc = "Squires whom have passed the test of courage, honor, and battle prowess are promoted to knights. <br> Provides <img src = 'images/armsmall.png'>150 army strength.";
//var Knight = new Unit("Knight",'knights','KnightCost','KnightIronCost','none','none','none','none','none','btnBuyKnight',3000,350,0,0,0,0,0,1.25, knightDesc, 0, true, Squire, 'KnightReqUnit');	
var Knight = new Unit(
/*Name*/			"Knight",
/*htmlNumRef*/		'knights',
/*htmlNextGoldCost*/'KnightCost',
/*htmlNextIronCost*/'KnightIronCost',
/*htmlNextSilverCost*/'none',
/*htmlNextFaithCost*/'none',
/*htmlNextSoulCost*/'none',
/*htmlNextTomeCost*/'none',
/*htmlNextManaCost*/'none',
/*htmlBuyBtn*/		'btnBuyKnight',
/*goldCost*/		3000,
/*ironCost*/		350,
/*silverCost*/		0,
/*faithCost*/		0,
/*soulCost*/		0,
/*tomeCost*/		0,
/*manaCost*/		0,
/*costMult*/		1.25, 
/*description*/		knightDesc, 
/*costAdj*/			0, 
/*hasReqUnit*/		true, 
/*reqUnit*/			Squire, 
/*htmlReqUnit*/		"KnightReqUnit");
setDescription(Knight, 'BtnKnightDesc');
setArmyPower(Knight, 150);

var paladinDesc = "Holy warriors that channel their faith into their weapons. They are quite adept at slaying monsters, both magical and not. Paladins go out into the field, slaying lesser demons of The Evil One, freeing their souls.";
//var Paladin = new Unit("Paladin",'paladins','PaladinCost','PaladinIronCost','PaladinSilverCost','PaladinFaithCost','none','none','none','btnBuyPaladin',10000,500,100,50,0,0,0,1.1, paladinDesc, 0, true, Knight, 'PaladinReqUnit');		
var Paladin = new Unit(
/*Name*/			"Paladin",
/*htmlNumRef*/		'paladins',
/*htmlNextGoldCost*/'PaladinCost',
/*htmlNextIronCost*/'PaladinIronCost',
/*htmlNextSilverCost*/'PaladinSilverCost',
/*htmlNextFaithCost*/'PaladinFaithCost',
/*htmlNextSoulCost*/'none',
/*htmlNextTomeCost*/'none',
/*htmlNextManaCost*/'none',
/*htmlBuyBtn*/		'btnBuyPaladin',
/*goldCost*/		10000,
/*ironCost*/		500,
/*silverCost*/		100,
/*faithCost*/		50,
/*soulCost*/		0,
/*tomeCost*/		0,
/*manaCost*/		0,
/*costMult*/		1.1, 
/*description*/		paladinDesc, 
/*costAdj*/			0, 
/*hasReqUnit*/		true, 
/*reqUnit*/			Knight, 
/*htmlReqUnit*/		"PaladinReqUnit");
setDescription(Paladin, 'BtnPaladinDesc');
setArmyPower(Paladin, 500);
setSpiritPower(Paladin, 5);
setClickVal(Paladin, 'souls', 1);

Paladin.totalArmyPower = function(){
	if(paladinWepUpgrade === true){
			return this.armyPower*this.number * 2;
	}
	else{
		return this.armyPower*this.number;
	}
};

Paladin.totalSpiritPower = function(){
	if(paladinWepUpgrade === true){
			return this.spiritPower*this.number * 2;
	}
	else{
		return this.spiritPower*this.number;
	}
};

var acolyteDesc = "Trainees in the world of the holy. Over time they may become mighty pillars of Holiness.";
//var Acolyte = new Unit("Acolyte",'acolytes','AcolyteCost','none','none','none','none','none','none','btnbuyAcolyte',500,0,0,0,0,0,0,1.1, acolyteDesc, 0, false, "none", 'none');	
var Acolyte = new Unit(
/*Name*/			"Acolyte",
/*htmlNumRef*/		'acolytes',
/*htmlNextGoldCost*/'AcolyteCost',
/*htmlNextIronCost*/'none',
/*htmlNextSilverCost*/'none',
/*htmlNextFaithCost*/'none',
/*htmlNextSoulCost*/'none',
/*htmlNextTomeCost*/'none',
/*htmlNextManaCost*/'none',
/*htmlBuyBtn*/		'btnbuyAcolyte',
/*goldCost*/		500,
/*ironCost*/		0,
/*silverCost*/		0,
/*faithCost*/		0,
/*soulCost*/		0,
/*tomeCost*/		0,
/*manaCost*/		0,
/*costMult*/		1.1, 
/*description*/		acolyteDesc, 
/*costAdj*/			0, 
/*hasReqUnit*/		false, 
/*reqUnit*/			"none", 
/*htmlReqUnit*/		"none");
setDescription(Acolyte, 'BtnAcolyteDesc');
setClickVal(Acolyte, 'faith', 0.1);

var priestDesc = "Men of the cloth. Their piety helps them channel the holy energy from the universe. They have duties ranging from teaching the acolytes to writing down of knowledge of the Order in <img src = 'images/bookssmall.png' Title='Tomes'>tomes.";
//var Priest = new Unit("Priest",'priests','PriestCost','none','PriestSilverCost','PriestFaithCost','none','none','none','btnbuyPriest',1000,0,10,50,0,0,0,1.15, priestDesc, 0, true, Acolyte, 'PriestReqUnit');	
var Priest = new Unit(
/*Name*/			"Priest",
/*htmlNumRef*/		'priests',
/*htmlNextGoldCost*/'PriestCost',
/*htmlNextIronCost*/'none',
/*htmlNextSilverCost*/'PriestSilverCost',
/*htmlNextFaithCost*/'PriestFaithCost',
/*htmlNextSoulCost*/'none',
/*htmlNextTomeCost*/'none',
/*htmlNextManaCost*/'none',
/*htmlBuyBtn*/		'btnbuyPriest',
/*goldCost*/		1000,
/*ironCost*/		0,
/*silverCost*/		10,
/*faithCost*/		50,
/*soulCost*/		0,
/*tomeCost*/		0,
/*manaCost*/		0,
/*costMult*/		1.15, 
/*description*/		priestDesc, 
/*costAdj*/			0, 
/*hasReqUnit*/		true, 
/*reqUnit*/			Acolyte, 
/*htmlReqUnit*/		"PriestReqUnit");
setDescription(Priest, 'BtnPriestDesc');
setClickVal(Priest, 'faith', 0.5);

var scribeDesc = "Scribes are Priests that have been specialized into into storing knowledge into tomes. Due to their focused duties, they produce less faith.";
var Scribe = new Unit(
/*Name*/			"Scribe",
/*htmlNumRef*/		'scribes',
/*htmlNextGoldCost*/'ScribeCost',
/*htmlNextIronCost*/'none',
/*htmlNextSilverCost*/'ScribeSilverCost',
/*htmlNextFaithCost*/'ScribeFaithCost',
/*htmlNextSoulCost*/'none',
/*htmlNextTomeCost*/'ScribeTomeCost',
/*htmlNextManaCost*/'none',
/*htmlBuyBtn*/		'btnbuyScribe',
/*goldCost*/		75000,
/*ironCost*/		0,
/*silverCost*/		10000,
/*faithCost*/		50000,
/*soulCost*/		0,
/*tomeCost*/		1,
/*manaCost*/		0,
/*costMult*/		1.2, 
/*description*/		scribeDesc, 
/*costAdj*/			0, 
/*hasReqUnit*/		true, 
/*reqUnit*/			Priest, 
/*htmlReqUnit*/		"ScribeReqUnit");
setDescription(Priest, 'BtnScribeDesc');
setClickVal(Scribe, 'faith', 0.25);
setClickVal(Scribe, 'tome', 1);

var bishopDesc = "  ";
//var Bishop = new Unit("Bishop",'bishops','BishopCost','none','BishopSilverCost','BishopFaithCost','none','BishopTomeCost','none','btnbuyBishop',75000,0,10000,5000,0,10,0,1.15, bishopDesc, 0, true, Priest, 'BishopReqUnit');	
var Bishop = new Unit(
/*Name*/			"Bishop",
/*htmlNumRef*/		'bishops',
/*htmlNextGoldCost*/'BishopCost',
/*htmlNextIronCost*/'none',
/*htmlNextSilverCost*/'BishopSilverCost',
/*htmlNextFaithCost*/'BishopFaithCost',
/*htmlNextSoulCost*/'none',
/*htmlNextTomeCost*/'BishopTomeCost',
/*htmlNextManaCost*/'none',
/*htmlBuyBtn*/		'btnbuyBishop',
/*goldCost*/		75000,
/*ironCost*/		0,
/*silverCost*/		10000,
/*faithCost*/		5000,
/*soulCost*/		0,
/*tomeCost*/		10,
/*manaCost*/		0,
/*costMult*/		1.15, 
/*description*/		bishopDesc, 
/*costAdj*/			0, 
/*hasReqUnit*/		true, 
/*reqUnit*/			Priest, 
/*htmlReqUnit*/		"BishopReqUnit");
setDescription(Priest, 'BtnPriestDesc');
setDescription(Bishop, 'BtnBishopDesc');
setClickVal(Bishop, 'faith', 10);

var shadeDesc = "This spirits are but a barely present in our world, but they are still capable of damaging demonic beings.";
//var Shade = new Unit("Shade",'shades','ShadeCost','none','shadeSilverCost','none','shadeSoulCost','none','none','btnBuyShade',10000,0,250,0,200,0,0,1.15, shadeDesc, 0, false, "none", 'none');
var Shade = new Unit(
/*Name*/			"Shade",
/*htmlNumRef*/		'shades',
/*htmlNextGoldCost*/'ShadeCost',
/*htmlNextIronCost*/'none',
/*htmlNextSilverCost*/'shadeSilverCost',
/*htmlNextFaithCost*/'none',
/*htmlNextSoulCost*/'shadeSoulCost',
/*htmlNextTomeCost*/'none',
/*htmlNextManaCost*/'none',
/*htmlBuyBtn*/		'btnBuyShade',
/*goldCost*/		10000,
/*ironCost*/		0,
/*silverCost*/		250,
/*faithCost*/		0,
/*soulCost*/		200,
/*tomeCost*/		0,
/*manaCost*/		0,
/*costMult*/		1.15, 
/*description*/		shadeDesc, 
/*costAdj*/			0, 
/*hasReqUnit*/		false, 
/*reqUnit*/			'none', 
/*htmlReqUnit*/		'none');
setDescription(Shade, 'BtnShadeDesc');
setArmyPower(Shade, 5);
setSpiritPower(Shade, 10);

var aspectDesc = "You are able to improve your shades by providing them a more concrete anchor into the physical realm in the form of suit of armor made from blessed silver. Once bound to this armor, they are much more capable of battling demonic beings.";
//var Aspect = new Unit("AspectofJustice",'aspects','AspectCost','aspectIronCost','aspectSilverCost','none','aspectSoulCost','none','none','btnBuyAspect',15000,1000,500,0,500,0,0,1.2, aspectDesc, 0, true, Shade, 'AspectReqUnit');
var Aspect = new Unit(
/*Name*/			"AspectofJustice",
/*htmlNumRef*/		'aspects',
/*htmlNextGoldCost*/'AspectCost',
/*htmlNextIronCost*/'aspectIronCost',
/*htmlNextSilverCost*/'aspectSilverCost',
/*htmlNextFaithCost*/'none',
/*htmlNextSoulCost*/'aspectSoulCost',
/*htmlNextTomeCost*/'none',
/*htmlNextManaCost*/'none',
/*htmlBuyBtn*/		'btnBuyAspect',
/*goldCost*/		15000,
/*ironCost*/		1000,
/*silverCost*/		500,
/*faithCost*/		0,
/*soulCost*/		500,
/*tomeCost*/		0,
/*manaCost*/		0,
/*costMult*/		1.2, 
/*description*/		aspectDesc, 
/*costAdj*/			0, 
/*hasReqUnit*/		true, 
/*reqUnit*/			Shade, 
/*htmlReqUnit*/		"AspectReqUnit");
setDescription(Aspect, 'BtnAspectDesc');
setArmyPower(Aspect, 100);
setSpiritPower(Aspect, 50);
setClickVal(Aspect, 'souls', 2);

var angelDesc = "Divine warriors capable of flight summoned down from the heavens. They smell vaguely like freshly baked brownies.";
//var Angel = new Unit("Angel",'angels','AngelCost','angelIronCost','angelSilverCost','angelFaithCost','angelSoulCost','angelTomeCost','none','btnBuyAngel',200000,500,2500,25000,1500,20,0,1.15, angelDesc, 0, false, "none", 'none');
var Angel = new Unit(
/*Name*/			"Angel",
/*htmlNumRef*/		'angels',
/*htmlNextGoldCost*/'AngelCost',
/*htmlNextIronCost*/'angelIronCost',
/*htmlNextSilverCost*/'angelSilverCost',
/*htmlNextFaithCost*/'angelFaithCost',
/*htmlNextSoulCost*/'angelSoulCost',
/*htmlNextTomeCost*/'angelTomeCost',
/*htmlNextManaCost*/'none',
/*htmlBuyBtn*/		'btnBuyAngel',
/*goldCost*/		200000,
/*ironCost*/		500,
/*silverCost*/		2500,
/*faithCost*/		25000,
/*soulCost*/		1500,
/*tomeCost*/		20,
/*manaCost*/		0,
/*costMult*/		1.15, 
/*description*/		angelDesc, 
/*costAdj*/			0, 
/*hasReqUnit*/		false, 
/*reqUnit*/			"none", 
/*htmlReqUnit*/		"none");
setDescription(Angel, 'BtnAngelDesc');
setArmyPower(Angel, 450);
setSpiritPower(Angel, 200);
setClickVal(Angel, 'souls', 5);

Angel.totalSpiritPower = function(){
	if(angelUpgr1 === true){
			return this.spiritPower*this.number + 5*Paladin.number;
	}
	else{
		return this.spiritPower*this.number;
	}
};

var spriteDesc = "These petite, fairy-like creatures are intensely attracted to the arcane aura emanating from your tower. Just being around them makes your mind sharpen to the arcane energies of the universe.";
//var Sprite = new Unit("Sprite",'sprites','SpriteCost','none','spriteSilverCost','spriteFaithCost','spriteSoulCost','spriteTomeCost', 'spriteManaCost','btnBuySprite',750000,500000,2500,50000,2000,25,2000,1.5, spriteDesc, 0, false, "none", 'none');
var Sprite = new Unit(
/*Name*/			"Sprite",
/*htmlNumRef*/		'sprites',
/*htmlNextGoldCost*/'SpriteCost',
/*htmlNextIronCost*/'none',
/*htmlNextSilverCost*/'spriteSilverCost',
/*htmlNextFaithCost*/'spriteFaithCost',
/*htmlNextSoulCost*/'spriteSoulCost',
/*htmlNextTomeCost*/'spriteTomeCost',
/*htmlNextManaCost*/'spriteManaCost',
/*htmlBuyBtn*/		'btnBuySprite',
/*goldCost*/		750000,
/*ironCost*/		0,
/*silverCost*/		2500,
/*faithCost*/		50000,
/*soulCost*/		2000,
/*tomeCost*/		25,
/*manaCost*/		2000,
/*costMult*/		1.5, 
/*description*/		spriteDesc, 
/*costAdj*/			0, 
/*hasReqUnit*/		false, 
/*reqUnit*/			"none", 
/*htmlReqUnit*/		"none");
setDescription(Sprite, 'BtnSpritesDesc');
setClickVal(Sprite, 'mana', 0.1);


function checkUnitButtons(){
	//Unit Buttons //
	//Enable/disables buy peasant button depending on if there is enough currency	
	Peasant.canBuy();

	//Enable/disables buy miner button depending on if there is enough currency
	Lumberjack.canBuy();
	
	//Enable/disables buy miner button depending on if there is enough currency
	Miner.canBuy();
	
	//Enable/disables buy coal miner button depending on if there is enough currency
	CoalMiner.canBuy();	

	//Enable/disables buy priest button depending on if there is enough currency
	Acolyte.canBuy();	
	
	//Enable/disables buy priest button depending on if there is enough currency
	Priest.canBuy();

	//Enable/disables buy scribe button depending on if there is enough currency
	Scribe.canBuy();	
	
	//Enable/disables buy priest button depending on if there is enough currency
	Bishop.canBuy();	

	//Enable/disables buy page button depending on if there is enough currency
	Page.canBuy();	

	//Enable/disables buy squire button depending on if there is enough currency
	Squire.canBuy();	
	
	//Enable/disables buy squire button depending on if there is enough currency
	Knight.canBuy();	
	
	//Enable/disables buy paladin button depending on if there is enough currency
	Paladin.canBuy();
	
	//Enable/disables buy Shade button depending on if there is enough currency
	Shade.canBuy();
	
	//Enable/disables buy AofJustice button depending on if there is enough currency
	Aspect.canBuy();	
	
	//Enable/disables buy Angel button depending on if there is enough currency
	Angel.canBuy();		
	
	//Enable/disables buy Sprites button depending on if there is enough currency
	Sprite.canBuy();	
	
	// End of Unit Buttons//	
}

function updateUnitPopover(){
	
	//Peasant
	Peasant.description = peasDesc + "<br> Generates " + Peasant.goldClickVal + "<img src='images/money_goldsmall.png'> per second";
	setDescription(Peasant, 'BtnPeasantDesc');
	
	//Lumberjack
	Lumberjack.description = lumberjackDesc + "<br> Generates " + Lumberjack.woodClickVal + "<img src = 'images/woodsmall.png'> per second";
	setDescription(Lumberjack, 'BtnLumberjackDesc');
	
	//Miner
	var tempMinerDesc = minerDesc;
	tempMinerDesc = tempMinerDesc + "<br> Generates " + Miner.ironClickVal + "<img src='images/ironsmall.png'> per second";
	if(mPanningUpgrade === true){
		tempMinerDesc = tempMinerDesc + "<br> Generates " + Miner.goldClickVal + "<img src='images/money_goldsmall.png'> per second";
	}
	if(mSilverUpgrade === true){
		tempMinerDesc = tempMinerDesc + "<br> Generates " + Miner.silverClickVal + "<img src = 'images/silverOresmall.png'> per second";
	}
	Miner.description = tempMinerDesc;
	setDescription(Miner, 'BtnMinerDesc');
	
	
	//CoalMiner
	CoalMiner.description = coalMinerDesc + "<br> Generates " + CoalMiner.coalClickVal + "<img src = 'images/coalsmall.png'> per second";
	setDescription(CoalMiner, 'BtnCoalMinerDesc');
	
//	setDescription(Page, 'BtnPageDesc');
//	setDescription(Squire, 'BtnSquireDesc');
//	setDescription(Knight, 'BtnKnightDesc');

	//Paladin
	Paladin.description = paladinDesc + "<br> Provides <img src = 'images/armsmall.png'> " + Paladin.armyPower + " army strength. <br>Provides <img src = 'images/armsmall.png'> " + Paladin.spiritPower + " spiritual strength. <br>Generates " + Paladin.soulsClickVal + " <img src = 'images/soulssmall.png'> per second.";
	setDescription(Paladin, 'BtnPaladinDesc');
	
	//Acolyte
	Acolyte.description = acolyteDesc + "<br> Generates "+ Acolyte.faithClickVal +" <img src = 'images/faithsmall.png'> per second";
	setDescription(Acolyte, 'BtnAcolyteDesc');
	
	//Priest
	Priest.description = priestDesc + "<br>Generates " + Priest.faithClickVal + " <img src = 'images/faithsmall.png'> per second";
	setDescription(Priest, 'BtnPriestDesc');
	
	//Scribe
	Scribe.description = scribeDesc + "<br>Generates " + Scribe.faithClickVal + " <img src = 'images/faithsmall.png'> per second <br> Creates <img src = 'images/bookssmall.png' Title='Tomes'>" + Scribe.tomeClickVal + " every 15 seconds.";
	setDescription(Scribe, 'BtnScribeDesc');

	//Bishop
	Bishop.description = bishopDesc + "<br> Generates " + Bishop.faithClickVal + " <img src = 'images/faithsmall.png'> per second";
	setDescription(Bishop, 'BtnBishopDesc');
	
	//Shade
	Shade.description = shadeDesc + "<br>Provides <img src = 'images/armsmall.png'>" + Shade.armyPower + " army strength. <br> Provides <img src = 'images/armsmall.png'>" + Shade.spiritPower + " spiritual strength." ;
	setDescription(Shade, 'BtnShadeDesc');
	
	//Aspect
	Aspect.description = aspectDesc + "<br> Provides <img src = 'images/armsmall.png'> " + Aspect.armyPower + " army strength. <br>Provides <img src = 'images/armsmall.png'>" + Aspect.spiritPower +
							" spiritual strength.<br> Generates " + Aspect.soulsClickVal + " <img src = 'images/soulssmall.png'> per second.";
	setDescription(Aspect, 'BtnAspectDesc');
	
	//Angel
	if(angelUpgr1 === true){
	Angel.description = angelDesc + "<br> Provides <img src = 'images/armsmall.png'> " + Angel.armyPower + " army strength. <br>Provides <img src = 'images/armsmall.png'> " +
						(Angel.spiritPower + 5*Paladin.number) + " spiritual strength.<br>Generates " + Angel.soulsClickVal + " <img src = 'images/soulssmall.png'> per second.";
	}
	else{
	Angel.description = angelDesc + "<br> Provides <img src = 'images/armsmall.png'> " + Angel.armyPower + " army strength. <br>Provides <img src = 'images/armsmall.png'> " +
						Angel.spiritPower + " spiritual strength.<br>Generates " + Angel.soulsClickVal + " <img src = 'images/soulssmall.png'> per second.";		
	}
	setDescription(Angel, 'BtnAngelDesc'); 
	
	//Sprite
	Sprite.description = spriteDesc + "<br> Generates " + Sprite.manaClickVal + " <img src = 'images/manasmall.png'> per second.";
	setDescription(Sprite, 'BtnSpritesDesc'); 
}