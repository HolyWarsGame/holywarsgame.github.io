//HW Units

var Unit = function(name, htmlNumRef, htmlNextGoldCost, htmlNextIronCost, htmlNextSilverCost, htmlNextFaithCost, htmlNextSoulCost, htmlBuyBtn, 
					goldCost, ironCost, silverCost, faithCost, soulCost, costMult,description, costAdj, hasReqUnit, reqUnit){
	this.name = name;
	this.htmlNumRef = htmlNumRef;
	this.htmlNextGoldCost = htmlNextGoldCost;
	this.htmlNextIronCost = htmlNextIronCost;
	this.htmlNextSilverCost = htmlNextSilverCost;
	this.htmlNextFaithCost = htmlNextFaithCost;
	this.htmlNextSoulCost = htmlNextSoulCost;
	this.htmlBuyBtn = htmlBuyBtn;
	this.goldCost = goldCost;
	this.ironCost = ironCost;
	this.silverCost = silverCost;
	this.faithCost = faithCost;
	this.soulCost = soulCost;
	this.costMult = costMult;
	this.description = description;
	this.curGoldCost = 0;
	this.curIronCost = 0;
	this.curSilverCost = 0;	
	this.curFaithCost = 0;
	this.curSoulCost = 0;
	this.nextGoldCost = 0;
	this.nextIronCost = 0;
	this.nextSilverCost = 0;
	this.nextFaithCost = 0;
	this.nextSoulCost = 0;
	this.number = 0;
	this.costAdj = costAdj;	
	this.hasReqUnit = hasReqUnit;
	this.reqUnit = reqUnit;
};


Unit.prototype.buyOne = function(){
	this.curGoldCost =  Math.floor(this.goldCost * Math.pow(this.costMult,this.number-this.costAdj));
	this.curIronCost =  Math.floor(this.curIronCost * Math.pow(this.costMult,this.number));
	this.curSilverCost =  Math.floor(this.curSilverCost * Math.pow(this.costMult,this.number));
	this.curFaithCost =  Math.floor(this.curFaithCost * Math.pow(this.costMult,this.number));
	this.curSoulCost =  Math.floor(this.curSoulCost * Math.pow(this.costMult,this.number));
	
	if(this.hasReqUnit == false || (this.hasReqUnit == true && this.reqUnit.number > 0)){
		if(gold >= this.curGoldCost && iron >= this.curIronCost && silver >= this.curSilverCost && faith >= this.curFaithCost && souls >= this.curSoulCost ){    //checks that the player can afford the Unit
			this.number = this.number + 1;                                  							 	  //increases number of Unit
			gold = gold - this.curGoldCost;                     										          //removes the gold spent
			iron = iron - this.curIronCost;
			silver = silver - this.curSilverCost
			faith = faith - this.curFaithCost;
			souls = souls - this.curSoulCost;
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
/*	this.nextGoldCost = Math.floor(this.goldCost * Math.pow(this.costMult,this.number-this.costAdj));         //works out the cost of the next Unit
	this.nextIronCost = Math.floor(this.ironCost * Math.pow(this.costMult,this.number));                      //works out the cost of the next Unit
	this.nextSilverCost = Math.floor(this.silverCost * Math.pow(this.costMult,this.number));                    //works out the cost of the next Unit
	this.nextFaithCost = Math.floor(this.faithCost * Math.pow(this.costMult,this.number));                      //works out the cost of the next Unit
	this.nextSoulCost = Math.floor(this.soulCost * Math.pow(this.costMult,this.number));                       //works out the cost of the next Unit
    document.getElementById(this.htmlNextGoldCost).innerHTML = this.nextGoldCost;  						      //updates the Unit cost for the user
	document.getElementById(this.htmlNextIronCost).innerHTML = this.nextIronCost;  						      //updates the Unit cost for the user
	document.getElementById(this.htmlNextSilverCost).innerHTML = this.nextSilverCost;  						      //updates the Unit cost for the user
	document.getElementById(this.htmlNextFaithCost).innerHTML = this.nextFaithCost;  						      //updates the Unit cost for the user
	document.getElementById(this.htmlNextSoulCost).innerHTML = this.nextSoulCost;  						      //updates the Unit cost for the user*/
	this.recalcCost();
};

Unit.prototype.removeOne = function(){
	this.number = this.number - 1;																	  //subtracts a unit from count
	document.getElementById(this.htmlNumRef).innerHTML = this.number;  							      //updates the number of Unit for the user
	this.recalcCost();
}

Unit.prototype.recalcCost = function(){
	
	this.nextGoldCost = Math.floor(this.goldCost * Math.pow(this.costMult,this.number-this.costAdj));         //works out the cost of the next Unit
	document.getElementById(this.htmlNextGoldCost).innerHTML = this.nextGoldCost;  						      //updates the Unit cost for the user
	this.curGoldCost = this.nextGoldCost;
	
	if(this.htmlNextIronCost != 'none'){
		this.nextIronCost = Math.floor(this.ironCost * Math.pow(this.costMult,this.number));                      //works out the iron cost of the next Unit
		document.getElementById(this.htmlNextIronCost).innerHTML = this.nextIronCost;  						      //updates the Unit iron cost for the user
		this.curIronCost = this.nextIronCost;
	}
	
	if(this.htmlNextSilverCost != 'none'){
		this.nextSilverCost = Math.floor(this.silverCost * Math.pow(this.costMult,this.number));                    //works out the silver cost of the next Unit	
		document.getElementById(this.htmlNextSilverCost).innerHTML = this.nextSilverCost;  						      //updates the Unit silver cost for the user
		this.curSilverCost = this.nextSilverCost
	}
	
	if(this.htmlNextFaithCost != 'none'){
		this.nextFaithCost = Math.floor(this.faithCost * Math.pow(this.costMult,this.number));                      //works out the faith cost of the next Unit
		document.getElementById(this.htmlNextFaithCost).innerHTML = this.nextFaithCost;  						      //updates the Unit faith cost for the user	
		this.curFaithCost = this.nextFaithCost
	}	

	if(this.htmlNextSoulCost != 'none'){
		this.nextSoulCost = Math.floor(this.soulCost * Math.pow(this.costMult,this.number));                       //works out the Soul cost of the next Unit
		document.getElementById(this.htmlNextSoulCost).innerHTML = this.nextSoulCost;  						      //updates the Unit Soul cost for the user
		this.curSoulCost = this.nextSoulCost
	}	


};

Unit.prototype.canBuy = function(){
	
	btn = this.htmlBuyBtn
	
	if(this.hasReqUnit == false || (this.hasReqUnit == true && this.reqUnit.number > 0)){	
		if(gold >= this.curGoldCost && iron >= this.curIronCost && silver >= this.curSilverCost && faith >= this.curFaithCost && souls >= this.curSoulCost ){     //checks that the player can afford the Unit
			document.getElementById(btn).disabled = false;					//enables the buy button
		}
		else{
			document.getElementById(btn).disabled = true;					//disables the buy button
		}
	}
	else{
		document.getElementById(btn).disabled = true;	
	}
};

function setDescription(Unit, element){
	var popover = document.getElementById(element);
	popover.setAttribute("data-content", Unit.description);		
};

//Unit constructor  (name, htmlNumRef, htmlNextGoldCost, htmlNextIronCost, htmlNextSilverCost, htmlNextFaithCost, htmlNextSoulCost, htmlBuyBtn, 
//					goldCost, ironCost, silverCost, faithCost, soulCost, costMult,description, costAdj, hasReqUnit, reqUnit){
var peasDesc = "A lowly denizen of your realm. They are adept at farming and scrounging for gold but completely useless at fighting. <br> Generates 1 gold per second"
var Peasant = new Unit("Peasant",'peasants','PeasantCost','none','none','none','none','btnbuyPeasant',50,0,0,0,0,1.15, peasDesc, tavernpeasants,false,"none");
setDescription(Peasant, 'BtnPeasantDesc');

var minerDesc = "These hard-working mine excavate minerals from the mine you have built. They bring canaries in with them to warn them of disasters. Also as lunch. <br> Generates 1 iron per second"
var Miner = new Unit("Miner",'miners','MinerCost','none','none','none','none','btnbuyMiner',250,0,0,0,0,1.15, minerDesc, tavernminers, false, "none")
setDescription(Miner, 'BtnMinerDesc');

var pageDesc = "Young men in training to become knights. Not too great with weapons yet, but they're learning.  <br> Provides 10 army strength"
var Page = new Unit("Page",'personPage','PageCost','PageIronCost','none','none','none','btnBuyPage',500,100,0,0,0,1.1, pageDesc, 0, false, "none");
setDescription(Page, 'BtnPageDesc');

var squireDesc = "Pages that have gained enough experience are promoted to Squires. They are semi-capable warriors. Provides 50 army strength."
var Squire = new Unit("Squire",'squires','SquireCost','SquireIronCost','none','none','none','btnBuySquire',1200,250,0,0,0,1.1, squireDesc, 0, true, Page);	
setDescription(Squire, 'BtnSquireDesc');

var knightDesc = "Squires whom have passed the test of courage, honor, and battle prowess are promoted to knights. Provides 150 army strength."
var Knight = new Unit("Knight",'knights','KnightCost','KnightIronCost','none','none','none','btnBuyKnight',3000,350,0,0,0,1.25, knightDesc, 0, true, Squire);	
setDescription(Knight, 'BtnKnightDesc');

var paladinDesc = "Holy warriors that channel their faith into their weapons. They are quite adept at slaying monsters, both magical and not. Paladins go out into the field, slaying minions of The Evil One. <br>Provides 1 soul per second.<br> Provides 500 army strength.<br>Provides 5 spiritual strength"
var Paladin = new Unit("Paladin",'paladins','PaladinCost','PaladinIronCost','PaladinSilverCost','PaladinFaithCost','none','btnBuyPaladin',10000,500,100,50,0,1.1, paladinDesc, 0, true, Knight);		
setDescription(Paladin, 'BtnPaladinDesc')

var acolyteDesc = "Trainees in the world of the holy. Over time they may become mighty pillars of Holiness.  <br> Generates 0.1 faith per second"
var Acolyte = new Unit("Acolyte",'acolytes','AcolyteCost','none','none','none','none','btnbuyAcolyte',500,0,0,0,0,1.1, acolyteDesc, 0, false, "none");	
setDescription(Acolyte, 'BtnAcolyteDesc');

var priestDesc = "Men of the cloth. Their piety helps them channel the holy energy from the universe.  <br> Generates 0.5 faith per second"
var Priest = new Unit("Priest",'priests','PriestCost','none','PriestSilverCost','PriestFaithCost','none','btnbuyPriest',1000,0,10,50,0,1.1, priestDesc, 0, true, Acolyte);	
setDescription(Priest, 'BtnPriestDesc');

var shadeDesc = "This spirits are but a barely present in our world, but they are still capable of damaging demonic beings. <br>Provides 5 army strength. <br>Provides 10 spiritual strength."
var Shade = new Unit("Benevolent Shade",'shades','shadeCost','none','shadeSilverCost','none','shadeSoulCost','btnBuyShade',10000,0,250,0,200,1.1, shadeDesc, 0, false, "none");
setDescription(Shade, 'BtnShadeDesc');

var aspectDesc = "These shades are now able to animate armor that you make from silver. They are much more capable of battling demonic beings. <br> Provides 100 army strength. <br>Provides 50 spiritual strength."
var Aspect = new Unit("Aspect of Justice",'apsects','aspectCost','aspectIronCost','aspectSilverCost','none','aspectSoulCost','btnBuyAspect',15000,1000,500,0,500,1.1, aspectDesc, 0, true, Shade);
setDescription(Aspect, 'BtnAspectDesc');

