//HW Units

var Unit = function(name, htmlNumRef, htmlNextCostRef, htmlBuyBtn, goldCost, ironCost, faithCost, soulCost,costMult,description, costAdj, hasReqUnit, reqUnit){
	this.name = name;
	this.htmlNumRef = htmlNumRef;
	this.htmlNextCostRef = htmlNextCostRef;
	this.htmlBuyBtn = htmlBuyBtn;
	this.goldCost = goldCost;
	this.ironCost = ironCost;
	this.faithCost = faithCost;
	this.soulCost = soulCost;
	this.costMult = costMult;
	this.description = description;
	this.curCost = 0;
	this.nextCost = 0;
	this.number = 0;
	this.costAdj = costAdj;	
	this.hasReqUnit = hasReqUnit;
	this.reqUnit = reqUnit;
};

Unit.prototype.returnGoldCost = function(){
	return this.goldCost;
}
Unit.prototype.returnIronCost = function(){
	return this.ironCost;
}
Unit.prototype.returnSoulCost = function(){
	return this.soulCost;
}
Unit.prototype.returnCostMult = function(){
	return this.costMult;
}

Unit.prototype.returnDescription = function(){
	return this.description;
}
Unit.prototype.returnNumber = function(){
	return this.number;
}

Unit.prototype.buyOne = function(){
	this.curCost =  Math.floor(this.goldCost * Math.pow(this.costMult,this.number-this.costAdj));
	if(this.hasReqUnit == false || (this.hasReqUnit == true && this.reqUnit.returnNumber() > 0)){
		if(gold >= this.curCost && iron >= this.ironCost && faith >= this.faithCost && souls >= this.soulCost ){    //checks that the player can afford the Unit
			this.number = this.number + 1;                                  							 	  //increases number of Unit
			gold = gold - this.curCost;                     										          //removes the gold spent
			iron = iron - this.ironCost;
			faith = faith - this.faithCost;
			souls = souls - this.soulCost;
			document.getElementById(this.htmlNumRef).innerHTML = this.number;  							      //updates the number of Unit for the user
			document.getElementById('gold').innerHTML = gold;  										          //updates the number of gold for the user
			document.getElementById('iron').innerHTML = iron;  										          //updates the number of gold for the user
			document.getElementById('faith').innerHTML = faith;  										          //updates the number of gold for the user
			document.getElementById('souls').innerHTML = souls;  										          //updates the number of gold for the user
			if(this.hasReqUnit == true){
				this.reqUnit.removeOne();
			}
		};
	}
	this.nextCost = Math.floor(this.goldCost * Math.pow(this.costMult,this.number-this.costAdj));         //works out the cost of the next Unit
    document.getElementById(this.htmlNextCostRef).innerHTML = this.nextCost;  						      //updates the Unit cost for the user
};

Unit.prototype.removeOne = function(){
	this.number = this.number - 1;																	  //subtracts a unit from count
	document.getElementById(this.htmlNumRef).innerHTML = this.number;  							      //updates the number of Unit for the user
	this.recalcCost();
}

Unit.prototype.recalcCost = function(){
	this.nextCost = Math.floor(this.goldCost * Math.pow(this.costMult,this.number-this.costAdj));         //works out the cost of the next Unit
    document.getElementById(this.htmlNextCostRef).innerHTML = this.nextCost; 
 		
};

Unit.prototype.canBuy = function(){
	btn = this.htmlBuyBtn
	this.curCost =  Math.floor(this.goldCost * Math.pow(this.costMult,this.number-this.costAdj));
	if(this.hasReqUnit == false || (this.hasReqUnit == true && this.reqUnit.number > 0)){
		if(gold >= this.curCost && iron >= this.ironCost && faith >= this.faithCost && souls >= this.soulCost ){    //checks that the player can afford the Unit
			document.getElementById(btn).disabled = false;					//enables the buy button
		}
		else{
			document.getElementById(btn).disabled = true;					//disables the buy button
		}
	}
	else{
		document.getElementById(btn).disabled = true;					//disables the buy button
	}
};

function setDescription(Unit, element){
	var popover = document.getElementById(element);
	popover.setAttribute("data-content", Unit.description);		
};


var peasDesc = "A lowly denizen of your realm. They are adept at farming and scrounging for gold but completely useless at fighting. <br> Generates 1 gold per second"
var Peasant = new Unit("Peasant",'peasants','PeasantCost','btnbuyPeasant',50,0,0,0,1.25, peasDesc, tavernpeasants,false,"none");
setDescription(Peasant, 'BtnPeasantDesc');

var minerDesc = "These hard-working mine excavate minerals from the mine you have built. They bring canaries in with them to warn them of disasters. Also as lunch. <br> Generates 1 iron per second"
var Miner = new Unit("Miner",'miners','MinerCost','btnbuyMiner',250,0,0,0,1.25, minerDesc, tavernminers, false, "none")
setDescription(Miner, 'BtnMinerDesc');

var pageDesc = "Young men in training to become knights. Not too great with weapons yet, but they're learning.  <br> Provides 10 army strength"
var Page = new Unit("Page",'personPage','PageCost','btnBuyPage',500,100,0,0,1.1, pageDesc, 0, false, "none");
setDescription(Page, 'BtnPageDesc');

var squireDesc = "Pages that have gained enough experience are promoted to Squires. They are semi-capable warriors. Provides 50 army strength."
var Squire = new Unit("Squire",'squires','SquireCost','btnBuySquire',1200,250,0,0,1.1, squireDesc, 0, true, Page);	
setDescription(Squire, 'BtnSquireDesc');

var knightDesc = "Squires whom have passed the test of courage, honor, and battle prowess are promoted to knights. Provides 150 army strength."
var Knight = new Unit("Knight",'knights','KnightCost','btnBuyKnight',3000,350,0,0,1.25, knightDesc, 0, true, Squire);	
setDescription(Knight, 'BtnKnightDesc');

var paladinDesc = "Holy warriors that channel their faith into their weapons. They are quite adept at slaying monsters, both magical and not. Paladins go out into the field, slaying minions of The Evil One. <br>Provides 1 soul per second.<br> Provides 500 army strength.<br>Provides 10 spiritual strength"
var Paladin = new Unit("Paladin",'paladins','PaladinCost','btnBuyPaladin',10000,500,100,0,1.1, paladinDesc, 0, true, Knight);		
setDescription(Paladin, 'BtnPaladinDesc')

var priestDesc = "Men of the cloth. Their piety helps them channel the holy energy from the universe.  <br> Generates 0.1 faith per second"
var Priest = new Unit("Priest",'priests','PriestCost','btnbuyPriest',1000,0,0,0,1.1, priestDesc, 0, false, null);	
setDescription(Priest, 'BtnPriestDesc');

