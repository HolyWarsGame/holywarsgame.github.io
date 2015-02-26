//Building Script for HW//

//Building variables//
var taverns = 0;


//Prototype for buildings 
var Building = function(name, htmlBuyBtn, goldCost, ironCost, silverCost, faithCost, soulCost, description, costAdj, flag){
	this.name = name;
	this.htmlBuyBtn = htmlBuyBtn;
	this.goldCost = goldCost;
	this.ironCost = ironCost;
	this.silverCost = silverCost;
	this.faithCost = faithCost;
	this.soulCost = soulCost;
	this.description = description;
	this.costAdj = costAdj;	
	this.flag = flag;
	buyable = false;
};

Building.prototype.returnName = function(){
	return name;
}

Building.prototype.canBuy = function(){
	var myButton = this.htmlBuyBtn;

	
	if(gold >= this.goldCost && iron >= this.ironCost && silver >= this.silverCost && faith >= this.faithCost && souls >= this.soulCost){
		document.getElementById(myButton).disabled = false;
		this.checkBtnFlag();
		return true;
	}
	else{
		document.getElementById(myButton).disabled = true;
		this.checkBtnFlag();
		return false;
	}
	
}

Building.prototype.checkBtnFlag = function(){
		var myButton = this.htmlBuyBtn;
//		console.log(this.flag)
 			switch(this.flag){
				case "minesOpened":
					if(minesOpened == true){
						document.getElementById(myButton).innerHTML = "Mines Opened";
						document.getElementById(myButton).disabled = true;	
					}
				break; 
				case "barracksOpened":
					if(barracksOpened == true){
						document.getElementById(myButton).innerHTML = "Barracks Opened";	
						document.getElementById(myButton).disabled = true;	
					}
			
				break;
				case "cathedralOpened":
					if(cathedralOpened == true){
						document.getElementById(myButton).innerHTML = "Cathedral Built";
						document.getElementById(myButton).disabled = true;							
					}
					return false;
				break;
				case "towerBuilt":
					if(towerBuilt == true){
						document.getElementById(myButton).innerHTML = "Tower Built";
						document.getElementById(myButton).disabled = true;	
					}
				default:
					return false;
			}
};

Building.prototype.buy = function(){

		if(this.canBuy() == true ){    //checks that the player can afford the Unit
			this.number = this.number + 1;                                  							 	  //increases number of Unit
			gold = gold - this.goldCost;                     										          //removes the gold spent
			iron = iron - this.ironCost;																	  //removes the iron spent
			silver = silver - this.silverCost;                                                                //removes the silver spent
			faith = faith - this.faithCost;																	  //removes the faith spent
			souls = souls - this.soulCost;																	  //removes the souls spent
			document.getElementById('gold').innerHTML = gold;  										          //updates the number of gold for the user
			document.getElementById('iron').innerHTML = iron;  										          //updates the number of gold for the user
			document.getElementById('faith').innerHTML = faith;  										          //updates the number of gold for the user
			document.getElementById('souls').innerHTML = souls;  										          //updates the number of gold for the user
		
 			switch(this.flag){
				case "minesOpened":
					minesOpened = true;
					document.getElementById('irondiv').style.display = "block";
					document.getElementById('Mining').style.display = "block";
					document.getElementById('openMineAlert').style.display = "block";					
				break; 
				case "barracksOpened":
					barracksOpened = true;
					document.getElementById('BarracksMenu').style.display = "block";
					document.getElementById('openBarracksAlert').style.display = "block";
					document.getElementById('armystrdiv').style.display = "block";
				break;
				case "cathedralOpened":
					cathedralOpened = true;
					document.getElementById('faithdiv').style.display = "block";
					document.getElementById('FaithMenu').style.display = "block";
					document.getElementById('openCathAlert').style.display = "block";
				break;
				case "towerBuilt":
					towerBuilt = true;
					document.getElementById('Magic').style.display = "block";
					document.getElementById('manadiv').style.display = "block";
					document.getElementById('TowerMenu').style.display = "block";
					document.getElementById('builtTowerAlert').style.display = "block";					
				default:
			}
		}
}

function MultBuilding(name, htmlNumRef, htmlNextCostRef, htmlBuyBtn, goldCost, ironCost, silverCost,faithCost, soulCost, costMult, description, costAdj, hasReqUnit, reqUnit){
	this.name = name;
	this.htmlNumRef = htmlNumRef;	
	this.htmlNextCostRef = htmlNextCostRef;
	this.htmlBuyBtn = htmlBuyBtn;
	this.goldCost = goldCost;
	this.ironCost = ironCost;
	this.silverCost = silverCost;
	this.faithCost = faithCost;
	this.soulCost = soulCost;
	this.description = description;
	this.costAdj = costAdj;	
	this.costMult = costMult;
	this.hasReqUnit = hasReqUnit;
	this.reqUnit;
	this.curCost = 0;
	this.number = 0;	
};

MultBuilding.prototype.canBuy = function(){
	var myButton = this.htmlBuyBtn;
	
	this.curCost =  Math.floor(this.goldCost * Math.pow(this.costMult,this.number-this.costAdj));
	if(this.hasReqUnit == false || (this.hasReqUnit == true && this.reqUnit.returnNumber() > 0)){
		if(gold >= this.nextCost && iron >= this.ironCost && silver >= this.silverCost && faith >= this.faithCost && souls >= this.soulCost ){    //checks that the player can afford the Building
			document.getElementById(myButton).disabled = false;
		}
		else
		{
			document.getElementById(myButton).disabled = true;
		}
	}
	else{
		document.getElementById(myButton).disabled = true;	
	}
	this.nextCost = Math.floor(this.goldCost * Math.pow(this.costMult,this.number-this.costAdj));         //works out the cost of the next Building
    document.getElementById(this.htmlNextCostRef).innerHTML = this.nextCost;  						      //updates the Building cost for the user	
}

MultBuilding.prototype.buyOne = function(){
	this.curCost =  Math.floor(this.goldCost * Math.pow(this.costMult,this.number-this.costAdj));
	if(this.hasReqUnit == false || (this.hasReqUnit == true && this.reqUnit.returnNumber() > 0)){
		if(gold >= this.curCost && iron >= this.ironCost && faith >= this.faithCost && souls >= this.soulCost ){    //checks that the player can afford the Building
			this.number = this.number + 1;                                  							 	  //increases number of Building
			gold = gold - this.curCost;                     										          //removes the gold spent
			iron = iron - this.ironCost;																	  //removes the iron spent
			faith = faith - this.faithCost;																	  //removes the faith spent
			souls = souls - this.soulCost;																	  //removes the souls spent
			document.getElementById(this.htmlNumRef).innerHTML = this.number;  							      //updates the number of Building for the user
			document.getElementById('gold').innerHTML = gold;  										          //updates the number of gold for the user
			document.getElementById('iron').innerHTML = iron;  										          //updates the number of iron for the user
			document.getElementById('faith').innerHTML = faith;  										          //updates the number of faith for the user
			document.getElementById('souls').innerHTML = souls;  										          //updates the number of souls for the user
//			if(this.hasReqUnit == true){
//				this.reqUnit.removeOne();
//			}
		};
	}
	this.nextCost = Math.floor(this.goldCost * Math.pow(this.costMult,this.number-this.costAdj));         //works out the cost of the next Building
    document.getElementById(this.htmlNextCostRef).innerHTML = this.nextCost;  						      //updates the Building cost for the user
};

var minesDesc = "Opening the mines lets you collect minerals";
var Mines = new Building('Mines','btnOpenMines',1500,0,0,0,0,minesDesc,"none",'minesOpened');


var tavernDesc = "A cozy place where many people gather to drink and celebrate. <br> Recruits 1 peasant every 30 seconds."
var Tavern = new MultBuilding('Tavern','taverns','TavernCost','btnbuyTavern',5000,0,0,0,0,2,tavernDesc,0,false,0);

function upgradeTavern(){
	tavernUpgrade = true;
};

var barracksDesc = ""
var Barracks = new Building('Barracks','btnOpenBarracks',10000,250,0,0,0,barracksDesc,"none",'barracksOpened');

var cathDesc = ""
var Cathedral = new Building('Cathedral','btnOpenCathedral',15000,500,100,0,0,cathDesc,"none",'cathedralOpened');


var towerDesc = ""
var Tower = new Building('Tower','btnOpenTower',1000000,10000,500,1000,0,towerDesc,"none",'towerBuilt');


window.setInterval(function(){					//Tavern unit generation
	clickThing(Tavern.number,"peasant");
	tavernpeasants = tavernpeasants + Tavern.number;
	document.getElementById('tavernpeasants').innerHTML = tavernpeasants;
	
	if(tavernUpgrade == true){
	clickThing(Tavern.number,"miner");
	tavernminers = tavernminers + Tavern.number;
	document.getElementById('tavernminers').innerHTML = tavernminers;	
	}

}, 30000);