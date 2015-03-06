//HW Units

var Unit = function(name, htmlNumRef, htmlNextGoldCost, htmlNextIronCost, htmlNextSilverCost, htmlNextFaithCost, htmlNextSoulCost, htmlNextTomeCost, htmlBuyBtn, 
					goldCost, ironCost, silverCost, faithCost, soulCost, tomeCost, costMult, description, costAdj, hasReqUnit, reqUnit){
	this.name = name;
	this.htmlNumRef = htmlNumRef;
	this.htmlNextGoldCost = htmlNextGoldCost;
	this.htmlNextIronCost = htmlNextIronCost;
	this.htmlNextSilverCost = htmlNextSilverCost;
	this.htmlNextFaithCost = htmlNextFaithCost;
	this.htmlNextSoulCost = htmlNextSoulCost;
	this.htmlNextTomeCost = htmlNextTomeCost;
	this.htmlBuyBtn = htmlBuyBtn;
	this.goldCost = goldCost;
	this.ironCost = ironCost;
	this.silverCost = silverCost;
	this.faithCost = faithCost;
	this.soulCost = soulCost;
	this.tomeCost = tomeCost;
	this.costMult = costMult;
	this.description = description;
	this.curGoldCost = 0;
	this.curIronCost = 0;
	this.curSilverCost = 0;	
	this.curFaithCost = 0;
	this.curSoulCost = 0;
	this.curTomeCost = 0;
	this.nextGoldCost = 0;
	this.nextIronCost = 0;
	this.nextSilverCost = 0;
	this.nextFaithCost = 0;
	this.nextSoulCost = 0;
	this.nextTomeCost = 0;
	this.number = 0;
	this.costAdj = costAdj;	
	this.hasReqUnit = hasReqUnit;
	this.reqUnit = reqUnit;
};


Unit.prototype.buyOne = function(){
	this.curGoldCost =  Math.floor(this.goldCost * Math.pow(this.costMult,this.number-this.costAdj));
	this.curIronCost =  Math.floor(this.ironCost * Math.pow(this.costMult,this.number));
	this.curSilverCost =  Math.floor(this.silverCost * Math.pow(this.costMult,this.number));
	this.curFaithCost =  Math.floor(this.faithCost * Math.pow(this.costMult,this.number));
	this.curSoulCost =  Math.floor(this.soulCost * Math.pow(this.costMult,this.number));
	this.curTomeCost =  Math.floor(this.tomeCost * Math.pow(this.costMult,this.number));
	
	if(this.hasReqUnit == false || (this.hasReqUnit == true && this.reqUnit.number > 0)){
		if(gold >= this.curGoldCost && iron >= this.curIronCost && silver >= this.curSilverCost && faith >= this.curFaithCost && souls >= this.curSoulCost && tomes >= this.tomeCost ){    //checks that the player can afford the Unit
			this.number = this.number + 1;                                  							 	  //increases number of Unit
			gold = gold - this.curGoldCost;                     										      //removes the gold spent
			iron = iron - this.curIronCost;                                                                   //removes the iron spent
			silver = silver - this.curSilverCost;                                                             //removes the silver spent
			faith = faith - this.curFaithCost;                                                                //removes the faith spent
			souls = souls - this.curSoulCost;                                                                 //removes the souls spent
			tomes = tomes - this.curTomeCost; 																  //removes the tomes spent
			document.getElementById(this.htmlNumRef).innerHTML = this.number;  							      //updates the number of Unit for the user
			document.getElementById('gold').innerHTML = fnum(gold);  										          //updates the number of gold for the user
			document.getElementById('iron').innerHTML = fnum(iron);  										          //updates the number of iron for the user
			document.getElementById('silver').innerHTML = fnum(silver);  										       //updates the number of silver for the user
			document.getElementById('faith').innerHTML = fnum(faith);  										      //updates the number of faith for the user
			document.getElementById('souls').innerHTML = fnum(souls);  										      //updates the number of souls for the user
			document.getElementById('tomes').innerHTML = fnum(tomes);  										      //updates the number of tomes for the user
			if(this.hasReqUnit == true){
				this.reqUnit.removeOne();
			}
			this.nextGoldCost = Math.floor(this.goldCost * Math.pow(this.costMult,this.number-this.costAdj));         //works out the cost of the next Unit
			document.getElementById(this.htmlNextGoldCost).innerHTML = fnum(this.nextGoldCost);  						      //updates the Unit cost for the user
			
			if(this.htmlNextIronCost != 'none'){
				this.nextIronCost = Math.floor(this.ironCost * Math.pow(this.costMult,this.number));                      //works out the iron cost of the next Unit
				document.getElementById(this.htmlNextIronCost).innerHTML = fnum(this.nextIronCost);  						      //updates the Unit iron cost for the user
			}
			
			if(this.htmlNextSilverCost != 'none'){
				this.nextSilverCost = Math.floor(this.silverCost * Math.pow(this.costMult,this.number));                    //works out the silver cost of the next Unit	
				document.getElementById(this.htmlNextSilverCost).innerHTML = fnum(this.nextSilverCost);  						      //updates the Unit silver cost for the user
			}
			
			if(this.htmlNextFaithCost != 'none'){
				this.nextFaithCost = Math.floor(this.faithCost * Math.pow(this.costMult,this.number));                      //works out the faith cost of the next Unit
				document.getElementById(this.htmlNextFaithCost).innerHTML = fnum(this.nextFaithCost);  						      //updates the Unit faith cost for the user	
			}	

			if(this.htmlNextSoulCost != 'none'){
				this.nextSoulCost = Math.floor(this.soulCost * Math.pow(this.costMult,this.number));                       //works out the Soul cost of the next Unit
				document.getElementById(this.htmlNextSoulCost).innerHTML = fnum(this.nextSoulCost);  						      //updates the Unit Soul cost for the user
			}

			if(this.htmlNextTomeCost != 'none'){
				this.nextTomeCost = Math.floor(this.tomeCost * Math.pow(this.costMult,this.number));                       //works out the Tome cost of the next Unit
				document.getElementById(this.htmlNextTomeCost).innerHTML = fnum(this.nextTomeCost);  						      //updates the Unit Tome cost for the user
			}				
			
		};
	}
};

Unit.prototype.removeOne = function(){
	this.number = this.number - 1;																	  //subtracts a unit from count
	document.getElementById(this.htmlNumRef).innerHTML = this.number;  							      //updates the number of Unit for the user
	this.recalcCost();
}

Unit.prototype.recalcCost = function(){
	this.curGoldCost = Math.floor(this.goldCost * Math.pow(this.costMult,this.number-this.costAdj));         //works out the cost of the next Unit
	document.getElementById(this.htmlNextGoldCost).innerHTML = fnum(this.curGoldCost);  						      //updates the Unit cost for the user
	
	if(this.htmlNextIronCost != 'none'){
		this.curIronCost = Math.floor(this.ironCost * Math.pow(this.costMult,this.number));                      //works out the iron cost of the next Unit
		document.getElementById(this.htmlNextIronCost).innerHTML = fnum(this.curIronCost);  						      //updates the Unit iron cost for the user
	}
	
	if(this.htmlNextSilverCost != 'none'){
		this.curSilverCost = Math.floor(this.silverCost * Math.pow(this.costMult,this.number));                    //works out the silver cost of the next Unit	
		document.getElementById(this.htmlNextSilverCost).innerHTML = fnum(this.curSilverCost);  						      //updates the Unit silver cost for the user
	}
	
	if(this.htmlNextFaithCost != 'none'){
		this.curFaithCost = Math.floor(this.faithCost * Math.pow(this.costMult,this.number));                      //works out the faith cost of the next Unit
		document.getElementById(this.htmlNextFaithCost).innerHTML = fnum(this.curFaithCost);  						      //updates the Unit faith cost for the user	
	}	

	if(this.htmlNextSoulCost != 'none'){
		this.curSoulCost = Math.floor(this.soulCost * Math.pow(this.costMult,this.number));                       //works out the Soul cost of the next Unit
		document.getElementById(this.htmlNextSoulCost).innerHTML = fnum(this.curSoulCost);  						      //updates the Unit Soul cost for the user
	}	

	if(this.htmlNextTomeCost != 'none'){
		this.curTomeCost = Math.floor(this.tomeCost * Math.pow(this.costMult,this.number));                       //works out the Tome cost of the next Unit
		document.getElementById(this.htmlNextTomeCost).innerHTML = fnum(this.curTomeCost);  					   //updates the Unit Tome cost for the user
	}	

};

Unit.prototype.canBuy = function(){
	this.recalcCost();
	btn = this.htmlBuyBtn
	
	if(this.hasReqUnit == false || (this.hasReqUnit == true && this.reqUnit.number > 0)){	
		if(gold >= this.curGoldCost && iron >= this.curIronCost && silver >= this.curSilverCost && faith >= this.curFaithCost && souls >= this.curSoulCost && tomes >= this.curTomeCost){     //checks that the player can afford the Unit
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

//Unit constructor  (name, htmlNumRef, htmlNextGoldCost, htmlNextIronCost, htmlNextSilverCost, htmlNextFaithCost, htmlNextSoulCost, htmlNextTomeCost, htmlBuyBtn, 
//					goldCost, ironCost, silverCost, faithCost, soulCost, tomeCost, costMult,description, costAdj, hasReqUnit, reqUnit){
var peasDesc = "A lowly denizen of your realm. They are adept at farming and scrounging for gold but completely useless at fighting. <br>   Generates 1 <img src='images/money_goldsmall.png'> per second"
var Peasant = new Unit("Peasant",'peasants','PeasantCost','none','none','none','none','none','btnbuyPeasant',50,0,0,0,0,0,1.1, peasDesc, tavernpeasants,false,"none");
setDescription(Peasant, 'BtnPeasantDesc');

var lumberjackDesc = "These brawny men fell trees for you. <br> Generates 1 <img src = 'images/woodsmall.png'> per second"
var Lumberjack = new Unit("Lumberjack",'lumberjacks','LumberjackCost','none','none','none','none','none','btnbuyLumberjack',150,0,0,0,0,0,1.1, lumberjackDesc, tavernlumberjacks, false, "none")
setDescription(Lumberjack, 'BtnLumberjackDesc');

var minerDesc = "These hard-working mine excavate minerals from the mine you have built. They bring canaries in with them to warn them of disasters. Also as lunch. <br> Generates 1 <img src = 'images/ironsmall.png'> per second"
var Miner = new Unit("Miner",'miners','MinerCost','none','none','none','none','none','btnbuyMiner',250,0,0,0,0,0,1.1, minerDesc, tavernminers, false, "none")
setDescription(Miner, 'BtnMinerDesc');

var pageDesc = "Young men in training to become knights. Not too great with weapons yet, but they're learning.  <br> Provides  <img src = 'images/armsmall.png'>10 army strength"
var Page = new Unit("Page",'personPage','PageCost','PageIronCost','none','none','none','none','btnBuyPage',500,100,0,0,0,0,1.1, pageDesc, 0, false, "none");
setDescription(Page, 'BtnPageDesc');

var squireDesc = "Pages that have gained enough experience are promoted to Squires. They are semi-capable warriors. <br> Provides <img src = 'images/armsmall.png'>50 army strength."
var Squire = new Unit("Squire",'squires','SquireCost','SquireIronCost','none','none','none','none','btnBuySquire',1200,250,0,0,0,0,1.15, squireDesc, 0, true, Page);	
setDescription(Squire, 'BtnSquireDesc');

var knightDesc = "Squires whom have passed the test of courage, honor, and battle prowess are promoted to knights. <br> Provides <img src = 'images/armsmall.png'>150 army strength."
var Knight = new Unit("Knight",'knights','KnightCost','KnightIronCost','none','none','none','none','btnBuyKnight',3000,350,0,0,0,0,1.25, knightDesc, 0, true, Squire);	
setDescription(Knight, 'BtnKnightDesc');

var paladinDesc = "Holy warriors that channel their faith into their weapons. They are quite adept at slaying monsters, both magical and not. Paladins go out into the field, slaying minions of The Evil One. <br>Provides 1 <img src = 'images/soulssmall.png'> per second.<br> Provides <img src = 'images/armsmall.png'>500 army strength.<br>Provides <img src = 'images/armsmall.png'>5 spiritual strength"
var Paladin = new Unit("Paladin",'paladins','PaladinCost','PaladinIronCost','PaladinSilverCost','PaladinFaithCost','none','none','btnBuyPaladin',10000,500,100,50,0,0,1.1, paladinDesc, 0, true, Knight);		
setDescription(Paladin, 'BtnPaladinDesc')

var acolyteDesc = "Trainees in the world of the holy. Over time they may become mighty pillars of Holiness.  <br> Generates 0.1 <img src = 'images/faithsmall.png'> per second"
var Acolyte = new Unit("Acolyte",'acolytes','AcolyteCost','none','none','none','none','none','btnbuyAcolyte',500,0,0,0,0,0,1.1, acolyteDesc, 0, false, "none");	
setDescription(Acolyte, 'BtnAcolyteDesc');

var priestDesc = "Men of the cloth. Their piety helps them channel the holy energy from the universe.  <br> Generates 0.5 <img src = 'images/faithsmall.png'> per second"
var Priest = new Unit("Priest",'priests','PriestCost','none','PriestSilverCost','PriestFaithCost','none','none','btnbuyPriest',1000,0,10,50,0,0,1.15, priestDesc, 0, true, Acolyte);	
setDescription(Priest, 'BtnPriestDesc');

var bishopDesc = "  <br> Generates 10 <img src = 'images/faithsmall.png'> per second"
var Bishop = new Unit("Bishop",'bishops','BishopCost','none','BishopSilverCost','BishopFaithCost','none','BishopTomeCost','btnbuyBishop',75000,0,10000,5000,0,10,1.15, bishopDesc, 0, true, Priest);	
setDescription(Bishop, 'BtnBishopDesc');

var shadeDesc = "This spirits are but a barely present in our world, but they are still capable of damaging demonic beings. <br>Provides <img src = 'images/armsmall.png'> 5 army strength. <br>Provides <img src = 'images/armsmall.png'> 10 spiritual strength."
var Shade = new Unit("BenevolentShade",'shades','ShadeCost','none','shadeSilverCost','none','shadeSoulCost','none','btnBuyShade',10000,0,250,0,200,0,1.15, shadeDesc, 0, false, "none");
setDescription(Shade, 'BtnShadeDesc');

var aspectDesc = "These shades are now able to animate armor that you make from silver. They are much more capable of battling demonic beings. <br> Provides <img src = 'images/armsmall.png'> 100 army strength. <br>Provides <img src = 'images/armsmall.png'> 50 spiritual strength.<br> Provides 2 <img src = 'images/soulssmall.png'> per second."
var Aspect = new Unit("AspectofJustice",'aspects','AspectCost','aspectIronCost','aspectSilverCost','none','aspectSoulCost','none','btnBuyAspect',15000,1000,500,0,500,0,1.2, aspectDesc, 0, true, Shade);
setDescription(Aspect, 'BtnAspectDesc');

var angelDesc = "Divine warriors capable of flight summoned down from the heavens. They smell vaguely like freshly baked brownies. <br> Provides <img src = 'images/armsmall.png'> 450 army strength. <br>Provides <img src = 'images/armsmall.png'> 200 spiritual strength.<br> Provides 5 <img src = 'images/soulssmall.png'> per second."
var Angel = new Unit("Angel",'angels','AngelCost','angelIronCost','angelSilverCost','none','angelSoulCost','angelTomeCost','btnBuyAngel',200000,500,2500,0,1500,30,1.15, angelDesc, 0, false, "none");
setDescription(Angel, 'BtnAngelDesc');

function checkUnitButtons(){
	//Unit Buttons //
	//Enable/disables buy peasant button depending on if there is enough currency	
	Peasant.canBuy();

	//Enable/disables buy miner button depending on if there is enough currency
	Lumberjack.canBuy();
	
	//Enable/disables buy miner button depending on if there is enough currency
	Miner.canBuy();

	//Enable/disables buy priest button depending on if there is enough currency
	Acolyte.canBuy();	
	
	//Enable/disables buy priest button depending on if there is enough currency
	Priest.canBuy();
	
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
	
	//Enable/disables buy AofJustice button depending on if there is enough currency
	Angel.canBuy();		
	// End of Unit Buttons//	
};