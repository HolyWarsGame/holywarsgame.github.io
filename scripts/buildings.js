//Building Script for HW//

//Building variables//
var taverns = 0;


//Prototype for buildings 
var Building = function(name, htmlBuyBtn, htmlGoldCost, htmlWoodCost, htmlIronCost, htmlSilverCost, htmlFaithCost, htmlSoulCost, goldCost, woodCost, ironCost, silverCost, faithCost, soulCost, description, costAdj, flag){
	this.name = name;
	this.htmlBuyBtn = htmlBuyBtn;
	this.htmlGoldCost = htmlGoldCost;
	this.htmlWoodCost = htmlWoodCost;
	this.htmlIronCost = htmlIronCost;
	this.htmlSilverCost = htmlSilverCost;
	this.htmlFaithCost = htmlFaithCost;
	this.htmlSoulCost = htmlSoulCost;
//	this.htmlTomeCost = htmlTomeCost;
//	this.htmlManaCost = htmlManaCost;
	this.goldCost = goldCost;
	this.woodCost = woodCost;
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
	
	if(gold >= this.goldCost && wood >= this.woodCost && iron >= this.ironCost && silver >= this.silverCost && faith >= this.faithCost && souls >= this.soulCost){
		document.getElementById(myButton).disabled = false;
		this.checkBtnFlag();
		this.CostsToBlack();
		return true;
	}
	else{
		document.getElementById(myButton).disabled = true;
		this.checkBtnFlag();
			if(gold < this.goldCost && this.htmlGoldCost != 'none'){
				document.getElementById(this.htmlGoldCost).style.color = "red";
			}
			if(wood < this.woodCost && this.htmlWoodCost != 'none'){
				document.getElementById(this.htmlWoodCost).style.color = "red";
			}			
			if(iron < this.ironCost && this.htmlIronCost != 'none'){
				document.getElementById(this.htmlIronCost).style.color = "red";
			}
			if(silver < this.silverCost && this.htmlSilverCost != 'none'){
				document.getElementById(this.htmlSilverCost).style.color = "red";
			}
			if(faith < this.faithCost && this.htmlFaithCost != 'none'){
				document.getElementById(this.htmlFaithCost).style.color = "red";
			}
			if(souls < this.soulCost && this.htmlSoulCost != 'none'){
				document.getElementById(this.htmlSoulCost).style.color = "red";
			}	
		return false;
	}
	
}

Building.prototype.CostsToBlack = function(){
	if(this.htmlGoldCost != 'none'){document.getElementById(this.htmlGoldCost).style.color = "black";}
	if(this.htmlWoodCost != 'none'){document.getElementById(this.htmlWoodCost).style.color = "black";}
	if(this.htmlIronCost != 'none'){document.getElementById(this.htmlIronCost).style.color = "black";}
	if(this.htmlSilverCost != 'none'){document.getElementById(this.htmlSilverCost).style.color = "black";}
	if(this.htmlFaithCost != 'none'){document.getElementById(this.htmlFaithCost).style.color = "black";}
	if(this.htmlSoulCost != 'none'){document.getElementById(this.htmlSoulCost).style.color = "black";}
}

Building.prototype.checkBtnFlag = function(){
		var myButton = this.htmlBuyBtn;
//		console.log(this.flag)
 			switch(this.flag){
				case "lumbermillOpened":
					if(lumbermillOpened){
						document.getElementById(myButton).innerHTML = "Lumbermill Built";
						document.getElementById(myButton).style.background='darkblue';
						document.getElementById(myButton).disabled = true;
					}
				break;				
				
				case "minesOpened":
					if(minesOpened == true){
						document.getElementById(myButton).innerHTML = "Mines Opened";
						document.getElementById(myButton).disabled = true;
						document.getElementById(myButton).style.background='darkblue';
					}
				break; 
				case "barracksOpened":
					if(barracksOpened == true){
						document.getElementById(myButton).innerHTML = "Barracks Built";	
						document.getElementById(myButton).disabled = true;	
						document.getElementById(myButton).style.background='darkblue';
					}
				break;

				case "commandPostOpened":
					if(commandPostOpened == true){
						document.getElementById(myButton).innerHTML = "Command Post Built";	
						document.getElementById(myButton).disabled = true;	
						document.getElementById(myButton).style.background='darkblue';
					}
				break;

				case "forgeOpened":
					if(forgeOpened == true){
						document.getElementById(myButton).innerHTML = "Forge Built";	
						document.getElementById(myButton).disabled = true;	
						document.getElementById(myButton).style.background='darkblue';
					}
				break;				
				
				case "churchOpened":
					if(churchOpened == true){
						document.getElementById(myButton).innerHTML = "Church Built";
						document.getElementById(myButton).disabled = true;	
						document.getElementById(myButton).style.background='darkblue';						
					}
					return false;
				break;
				case "towerBuilt":
					if(towerBuilt == true){
						document.getElementById(myButton).innerHTML = "Tower Built";
						document.getElementById(myButton).disabled = true;	
						document.getElementById(myButton).style.background='darkblue';
					}
				default:
					return false;
			}
};

Building.prototype.buy = function(){

		if(this.canBuy() == true ){    //checks that the player can afford the Building
			this.number +=  1;                                  							 	  //increases number of Unit
			gold -= this.goldCost;                     										          //removes the gold spent
			wood -= this.woodCost;                                                                      //removes the wood spent
			iron -= this.ironCost;																	  //removes the iron spent
			silver -= this.silverCost;                                                                //removes the silver spent
			faith -= this.faithCost;																	  //removes the faith spent
			souls -= this.soulCost;																	  //removes the souls spent
			document.getElementById('gold').innerHTML = fnum(gold);  										          //updates the number of gold for the user
			document.getElementById('wood').innerHTML = fnum(wood);  										          //updates the number of wood for the user
			document.getElementById('iron').innerHTML = fnum(iron);  										          //updates the number of iron for the user
			document.getElementById('silver').innerHTML = fnum(silver);  										          //updates the number of iron for the user
			document.getElementById('faith').innerHTML = fnum(faith);  										          //updates the number of faith for the user
			document.getElementById('souls').innerHTML = fnum(souls);  										          //updates the number of souls for the user
			

 			switch(this.flag){
				case "lumbermillOpened":
					lumbermillOpened = true;
					document.getElementById('WoodcuttingTab').style.display = "block";
//					document.getElementById('openMillAlert').style.display = "block";	
					$.notify({
						title: "<strong>New!</strong> ",
						message: "You can now <a href='javascript: alertOpenProductionPage();' class='alert-link'>hire lumberjacks</a> to cut down trees for you!"
					});
 					
				break;				
				case "minesOpened":
					minesOpened = true;
					document.getElementById('irondiv').style.display = "block";
					document.getElementById('Mining').style.display = "block";
//					document.getElementById('openMineAlert').style.display = "block";	
					var minesOpenedAlert;
					minesOpenedAlert = $.notify({
						title: "<strong>New!</strong> ",
						message: "You can now <a href='javascript: alertOpenProductionPage();' class='alert-link'>hire miners</a> to mine minerals for you!"
					});		  
				
				break; 
				case "barracksOpened":
					barracksOpened = true;
					document.getElementById('BarracksMenu').style.display = "block";
//					document.getElementById('openBarracksAlert').style.display = "block";
					document.getElementById('armystrdiv').style.display = "block";
					var barracksOpenedAlert;
					barracksOpenedAlert = $.notify({
						title: "<strong>New!</strong> ",
						message: "You can now <a href='javascript: alertOpenBarracksPage(); ' class='alert-link'>train</a> units to fight against the Evil One and his minions."
					});		

				break;
				
				case "commandPostOpened":
					commandPostOpened = true;
//					document.getElementById('openCommandPostAlert').style.display = "block";
					document.getElementById('CommandPost').style.display = "block";	
					document.getElementById('CommandPostDiv').style.display = "block";
					document.getElementById('CommandMenu').style.display = "block";
					var commandPostOpenedAlert;
					commandPostOpenedAlert = $.notify({
						title: "<strong>New!</strong> ",
						message: "You can now <a href='javascript: alertOpenCommandPostPage();' class='alert-link'>upgrade</a> your own abilities and plan in the comfort of your new Command Post!"
					});						
				break;
				
				case "forgeOpened":
					forgeOpened = true;
					document.getElementById('gathersteel').style.display = "block";
					document.getElementById('steeldiv').style.display = "block";
					var forgeOpenedAlert;
					forgeOpenedAlert = $.notify({
						title: "<strong>New!</strong> ",
						message: "You can now create steel by combining iron and coal!"
					});						
				break;
			
				case "churchOpened":
					churchOpened = true;
					document.getElementById('faithdiv').style.display = "block";
					document.getElementById('FaithMenu').style.display = "block";
//					document.getElementById('openCathAlert').style.display = "block";
					var churchOpenedAlert;
					churchOpenedAlert = $.notify({
						title: "<strong>New!</strong> ",
						message: "The faithful flock to your beautiful <a href='javascript: alertOpenChurchPage();' class='alert-link'>church</a>.  "
					});	
				break;
				case "towerBuilt":
					towerBuilt = true;
					document.getElementById('Magic').style.display = "block";
					document.getElementById('manadiv').style.display = "block";
					document.getElementById('TowerMenu').style.display = "block";
//					document.getElementById('builtTowerAlert').style.display = "block";
					var towerBuiltAlert;
					towerBuiltAlert = $.notify({
						title: "<strong>New!</strong> ",
						message: "Using massive amounts of resources, you build the Archmage the <a href='javascript: alertOpenTowerPage();' class='alert-link'>tower</a> where he can cast magic to help your forces."
					});	
				default:
			}
		}
}

var MultBuilding = function(name, htmlNumRef, htmlNextGoldCost, htmlNextWoodCost, htmlNextIronCost, htmlNextSilverCost, htmlNextFaithCost, htmlNextSoulCost, htmlNextTomeCost, htmlBuyBtn, 
					goldCost, woodCost, ironCost, silverCost, faithCost, soulCost, tomeCost, costMult,description, costAdj, hasReqUnit, reqUnit){
	this.name = name;
	this.htmlNumRef = htmlNumRef;	
	this.htmlNextGoldCost = htmlNextGoldCost;
	this.htmlNextWoodCost = htmlNextWoodCost;
	this.htmlNextIronCost = htmlNextIronCost;
	this.htmlNextSilverCost = htmlNextSilverCost;
	this.htmlNextFaithCost = htmlNextFaithCost;
	this.htmlNextSoulCost = htmlNextSoulCost;
	this.htmlNextTomeCost = htmlNextTomeCost;
	this.htmlBuyBtn = htmlBuyBtn;
	this.goldCost = goldCost;
	this.woodCost = woodCost;
	this.ironCost = ironCost;
	this.silverCost = silverCost;
	this.faithCost = faithCost;
	this.soulCost = soulCost;
	this.tomeCost = tomeCost;
	this.curGoldCost = 0;
	this.curWoodCost = 0;
	this.curIronCost = 0;
	this.curSilverCost = 0;	
	this.curFaithCost = 0;
	this.curSoulCost = 0;
	this.curTomeCost = 0;
	this.nextGoldCost = 0;
	this.nextWoodCost = 0;
	this.nextIronCost = 0;
	this.nextSilverCost = 0;
	this.nextFaithCost = 0;
	this.nextSoulCost = 0;	
	this.nextTomeCost = 0;
	this.description = description;
	this.costAdj = costAdj;	
	this.costMult = costMult;
	this.hasReqUnit = hasReqUnit;
	this.reqUnit = reqUnit;
	this.number = 0;	
};

MultBuilding.prototype.canBuy = function(){
	var myButton = this.htmlBuyBtn;
	this.recalcCost();
	
	if(this.hasReqUnit == false || (this.hasReqUnit == true && this.reqUnit.returnNumber() > 0)){
		if(gold >= this.curGoldCost && wood >= this.curWoodCost && iron >= this.curIronCost && silver >= this.curSilverCost && faith >= this.curFaithCost && souls >= this.curSoulCost && tomes >= this.curTomeCost ){    //checks that the player can afford the Building
			document.getElementById(myButton).disabled = false;
			this.CostsToBlack();
		}
		else
		{
			document.getElementById(myButton).disabled = true;
			if(gold < this.curGoldCost && this.htmlNextGoldCost != 'none'){
				document.getElementById(this.htmlNextGoldCost).style.color = "red";
			}
			if(wood < this.curWoodCost && this.htmlNextWoodCost != 'none'){
				document.getElementById(this.htmlNextWoodCost).style.color = "red";
			}			
			if(iron < this.curIronCost && this.htmlNextIronCost != 'none'){
				document.getElementById(this.htmlNextIronCost).style.color = "red";
			}
			if(silver < this.curSilverCost && this.htmlNextSilverCost != 'none'){
				document.getElementById(this.htmlNextSilverCost).style.color = "red";
			}
			if(faith < this.curFaithCost && this.htmlNextFaithCost != 'none'){
				document.getElementById(this.htmlNextFaithCost).style.color = "red";
			}
			if(souls < this.curSoulCost && this.htmlNextSoulCost != 'none'){
				document.getElementById(this.htmlNextSoulCost).style.color = "red";
			}
			if(tomes < this.curTomeCost && this.htmlNextTomeCost != 'none'){
				document.getElementById(this.htmlNextTomeCost).style.color = "red";
			}			
		}
	}
	else{
		document.getElementById(myButton).disabled = true;	
	}
}

MultBuilding.prototype.CostsToBlack = function(){
	if(this.htmlNextGoldCost != 'none'){document.getElementById(this.htmlNextGoldCost).style.color = "black";}
	if(this.htmlNextWoodCost != 'none'){document.getElementById(this.htmlNextWoodCost).style.color = "black";}
	if(this.htmlNextIronCost != 'none'){document.getElementById(this.htmlNextIronCost).style.color = "black";}
	if(this.htmlNextSilverCost != 'none'){document.getElementById(this.htmlNextSilverCost).style.color = "black";}
	if(this.htmlNextFaithCost != 'none'){document.getElementById(this.htmlNextFaithCost).style.color = "black";}
	if(this.htmlNextSoulCost != 'none'){document.getElementById(this.htmlNextSoulCost).style.color = "black";}
	if(this.htmlNextTomeCost != 'none'){document.getElementById(this.htmlNextTomeCost).style.color = "black";}
}

MultBuilding.prototype.recalcCost = function(){
	this.curGoldCost = Math.floor(this.goldCost * Math.pow(this.costMult,this.number-this.costAdj));         //works out the cost of the next Building
	document.getElementById(this.htmlNextGoldCost).innerHTML = fnum(this.curGoldCost);  						      //updates the Building cost for the user

	if(this.htmlNextWoodCost != 'none'){
		this.curWoodCost = Math.floor(this.woodCost * Math.pow(this.costMult,this.number));                      //works out the Wood cost of the next Building
		document.getElementById(this.htmlNextWoodCost).innerHTML = fnum(this.curWoodCost);  						      //updates the Building iron cost for the Building
	}	
	
	if(this.htmlNextIronCost != 'none'){
		this.curIronCost = Math.floor(this.ironCost * Math.pow(this.costMult,this.number));                      //works out the iron cost of the next Building
		document.getElementById(this.htmlNextIronCost).innerHTML = fnum(this.curIronCost);  						      //updates the Building iron cost for the user
	}
	
	if(this.htmlNextSilverCost != 'none'){
		this.curSilverCost = Math.floor(this.silverCost * Math.pow(this.costMult,this.number));                    //works out the silver cost of the next Building	
		document.getElementById(this.htmlNextSilverCost).innerHTML = fnum(this.curSilverCost);  						      //updates the Building silver cost for the user
	}
	
	if(this.htmlNextFaithCost != 'none'){
		this.curFaithCost = Math.floor(this.faithCost * Math.pow(this.costMult,this.number));                      //works out the faith cost of the next Building
		document.getElementById(this.htmlNextFaithCost).innerHTML = fnum(this.curFaithCost);  						      //updates the Building faith cost for the user	
	}	

	if(this.htmlNextSoulCost != 'none'){
		this.curSoulCost = Math.floor(this.soulCost * Math.pow(this.costMult,this.number));                       //works out the Soul cost of the next Building
		document.getElementById(this.htmlNextSoulCost).innerHTML = fnum(this.curSoulCost);  						      //updates the Building Soul cost for the user
	}
	
	if(this.htmlNextTomeCost != 'none'){
		this.curTomeCost = Math.floor(this.tomeCost * Math.pow(this.costMult,this.number));                       //works out the Soul cost of the next Building
		document.getElementById(this.htmlNextTomeCost).innerHTML = fnum(this.curTomeCost);  						      //updates the Building Soul cost for the user
	}		
};

MultBuilding.prototype.buyOne = function(){
	this.curGoldCost =  Math.floor(this.goldCost * Math.pow(this.costMult,this.number-this.costAdj));
	this.curWoodCost =  Math.floor(this.woodCost * Math.pow(this.costMult,this.number));
	this.curIronCost =  Math.floor(this.ironCost * Math.pow(this.costMult,this.number));
	this.curSilverCost =  Math.floor(this.silverCost * Math.pow(this.costMult,this.number));
	this.curFaithCost =  Math.floor(this.faithCost * Math.pow(this.costMult,this.number));
	this.curSoulCost =  Math.floor(this.soulCost * Math.pow(this.costMult,this.number));
	this.curTomeCost =  Math.floor(this.tomeCost * Math.pow(this.costMult,this.number));
	
	if(this.hasReqUnit == false || (this.hasReqUnit == true && this.reqUnit.returnNumber() > 0)){
		if(gold >= this.curGoldCost && wood >= this.curWoodCost && iron >= this.curIronCost && silver >= this.curSilverCost && faith >= this.curFaithCost && souls >= this.curSoulCost && tomes >= this.curTomeCost ){    //checks that the player can afford the Building
			this.number += 1;                                  							 	  //increases number of Building
			gold -= this.curGoldCost;                     										          //removes the gold spent
			wood -= this.curWoodCost;																	  //removes the wood spent
			iron -= this.curIronCost;																	  //removes the iron spent
			silver -= this.curSilverCost;
			faith -= this.curFaithCost;																	  //removes the faith spent
			souls -= this.curSoulCost;																	  //removes the souls spent
			tomes -= this.curTomeCost;
			document.getElementById(this.htmlNumRef).innerHTML = this.number;  							      //updates the number of Buildings for the user
			document.getElementById('gold').innerHTML = fnum(gold);  										          //updates the number of gold for the user
			document.getElementById('wood').innerHTML = fnum(wood);  										          //updates the number of wood for the user
			document.getElementById('iron').innerHTML = fnum(iron);  										          //updates the number of iron for the user
			document.getElementById('silver').innerHTML = fnum(silver);  										          //updates the number of silver for the user
			document.getElementById('faith').innerHTML = fnum(faith);  										          //updates the number of faith for the user
			document.getElementById('souls').innerHTML = fnum(souls);  										          //updates the number of souls for the user
			document.getElementById('tomes').innerHTML = fnum(tomes);  										          //updates the number of tomes for the user
			
			this.nextGoldCost = Math.floor(this.goldCost * Math.pow(this.costMult,this.number-this.costAdj));         //works out the next gold cost of the next Building
			document.getElementById(this.htmlNextGoldCost).innerHTML = fnum(this.nextGoldCost);  						      //updates the Building cost for the user

			if(this.htmlNextWoodCost != 'none'){
				this.nextWoodCost = Math.floor(this.woodCost * Math.pow(this.costMult,this.number));                      //works out the iron cost of the next Building
				document.getElementById(this.htmlNextWoodCost).innerHTML = fnum(this.nextWoodCost);  						      //updates the Building iron cost for the user
			}			
			if(this.htmlNextIronCost != 'none'){
				this.nextIronCost = Math.floor(this.ironCost * Math.pow(this.costMult,this.number));                      //works out the iron cost of the next Building
				document.getElementById(this.htmlNextIronCost).innerHTML = fnum(this.nextIronCost);  						      //updates the Building iron cost for the user
			}
			
			if(this.htmlNextSilverCost != 'none'){
				this.nextSilverCost = Math.floor(this.silverCost * Math.pow(this.costMult,this.number));                    //works out the silver cost of the next Building	
				document.getElementById(this.htmlNextSilverCost).innerHTML = fnum(this.nextSilverCost);  						      //updates the Building silver cost for the user
			}
			
			if(this.htmlNextFaithCost != 'none'){
				this.nextFaithCost = Math.floor(this.faithCost * Math.pow(this.costMult,this.number));                      //works out the faith cost of the next Building
				document.getElementById(this.htmlNextFaithCost).innerHTML = fnum(this.nextFaithCost);  						      //updates the Building faith cost for the user	
			}	

			if(this.htmlNextSoulCost != 'none'){
				this.nextSoulCost = Math.floor(this.soulCost * Math.pow(this.costMult,this.number));                       //works out the Soul cost of the next Building
				document.getElementById(this.htmlNextSoulCost).innerHTML = fnum(this.nextSoulCost);  						      //updates the Building Soul cost for the user
			}	
			if(this.htmlNextTomeCost != 'none'){
				this.nextTomeCost = Math.floor(this.tomeCost * Math.pow(this.costMult,this.number));                       //works out the Soul cost of the next Building
				document.getElementById(this.htmlNextTomeCost).innerHTML = fnum(this.nextTomeCost);  						      //updates the Building Soul cost for the user
			}			
		};
	}
};


var lumermillDesc = "Constructing a lumber mill allows you to hire lumberjacks and gather wood.";
var Lumbermill = new Building('Lumbermill','btnOpenMill','millGoldCost','millWoodCost','none','none','none','none',750,100,0,0,0,0,lumermillDesc,"none",'lumbermillOpened');


var papermillDesc = "Constructing a paper mill allows you to automatically convert wood into paper. Converts 50 <img src = 'images/woodsmall.png'> to 1 <img src = 'images/parchmentsmall.png'> every 10 seconds";
var PaperMill = new MultBuilding('Papermill','papermills', 'pMillCost', 'pMillWoodCost','pMillIronCost','none','none','none','none','btnbuyPMill',4500,2000,1500,0,0,0,0,1.5,papermillDesc,0,false,0);
setDescription(PaperMill,'BtnPMillDesc')

PaperMill.numberOn = 0;
PaperMill.status = "On"

function PaperMillOnPlus(){
	if(PaperMill.numberOn + 1 <= PaperMill.number){
	PaperMill.numberOn += 1;
	}
}

function PaperMillOnMinus(){
	if(PaperMill.numberOn - 1 >= 0){
	PaperMill.numberOn -= 1;
	}
}

function PaperMillToggle(){
	if( PaperMill.status == "On"){
		PaperMill.status = "Off";
	}
	else{
		PaperMill.status = "On";
	}
}

function PaperMillChangeButton(){
	var buttonText = PaperMill.status + " (" + PaperMill.numberOn + "/" + PaperMill.number + ")";
	document.getElementById('MillOnOff').innerHTML = buttonText;
}


var minesDesc = "Opening the mines lets you collect minerals";
var Mines = new Building('Mines','btnOpenMines','minesGoldCost','minesWoodCost','none','none','none','none',1250,200,0,0,0,0,minesDesc,"none",'minesOpened');

var tavernDesc = "A cozy place where many people gather to drink and celebrate. <br> Recruits 1 peasant every 30 seconds."
var Tavern = new MultBuilding('Tavern','taverns','TavernCost','tavernWoodCost', 'tavernIronCost','none','none','none','none','btnbuyTavern',5000,2500,2000,0,0,0,0,2,tavernDesc,0,false,0);

var barracksDesc = ""
var Barracks = new Building('Barracks','btnOpenBarracks','barracksGoldCost', 'barracksWoodCost', 'barracksIronCost','none','none','none',5000,1000,250,0,0,0,barracksDesc,"none",'barracksOpened');

var commandPostDesc = ""
var CommandPost = new Building('Command Post','btnOpenCommandPost','commandPostGoldCost', 'commandPostWoodCost', 'commandPostIronCost','none','none','none',5000,1000,250,0,0,0,commandPostDesc,"none",'commandPostOpened');

var forgeDesc = ""
var Forge = new Building('Forge','btnOpenForge','forgeGoldCost','forgeWoodCost','forgeIronCost','forgeSilverCost','none','none',750000,400000,750000,100000,0,0,forgeDesc,"none",'forgeOpened');

var churchDesc = ""
var Church = new Building('Church','btnOpenChurch','churchGoldCost','churchWoodCost','churchIronCost','churchSilverCost','none','none',15000,2500,500,100,0,0,churchDesc,"none",'churchOpened');


var towerDesc = ""
var Tower = new Building('Tower','btnOpenTower','towerGoldCost','towerWoodCost','towerIronCost','towerSilverCost','towerFaithCost','none',1000000,700000,10000,500,1000,0,towerDesc,"none",'towerBuilt');

var aLibraryDesc = ""
var ArcaneLibrary = new MultBuilding('Arcane Library','ArcaneLibrary','aLibraryCost','aLibraryWoodCost', 'aLibraryIronCost','none','none','none','aLibraryTomeCost','btnbuyALibrary',5000000,3000000,2000000,0,0,0,100,1.5,aLibraryDesc,0,false,0);


function checkBuildingButtons(){
		//Structure Buttons
	//Enable/disables buy tavern button depending on if there is enough currency
	Tavern.canBuy();
	
	//Enable/disables tavern upgrade
	upgradeTavern.canBuy();
				/* 	if(tavernUpgrade == true || gold < 10000 || iron < 5000){
						document.getElementById("btnUpgradeTavern").disabled = true;
					}
					else{
						document.getElementById("btnUpgradeTavern").disabled = false;
					} */

	//Enable/disables tavern upgrade2
	upgradeTavern2.canBuy();
				/* 	if(tavernUpgrade2 == true || gold < 15000 || iron < 7000 || wood < 2500){
						document.getElementById("btnUpgradeTavern2").disabled = true;
					}
					else{
						document.getElementById("btnUpgradeTavern2").disabled = false;
					}	 */

	//Changes status of the building mines button
	Lumbermill.canBuy();

	//Changes status of the building mines button
	PaperMill.canBuy();
	PaperMillChangeButton();
	
	//Changes status of the building mines button
	Mines.canBuy();
	
	//Changes status of the building barracks button
	Barracks.canBuy();
	
	//Changes status of the building command post button
	CommandPost.canBuy();	
	
	//Changes status of the building forge button
	Forge.canBuy();		
	
	//Changes status of the building church button
	Church.canBuy();

	//Changes status of the building tower button
	Tower.canBuy();
	
	//Changes status of the building arcane library button
	ArcaneLibrary.canBuy();	
	//End of Structure Buttons
};

window.setInterval(function(){					//Tavern unit generation
	clickThing(Tavern.number,"peasant");
	tavernpeasants += Tavern.number;
	statTavernPeasantsHired += Tavern.number;
	statTotalTavernPeasantsHired += Tavern.number;
	statPeasantsHired += Tavern.number;
	statTotalPeasantsHired += Tavern.number;
	document.getElementById('tavernpeasants').innerHTML = tavernpeasants;
	document.getElementById('statTavernPeasantsHired').innerHTML = statTavernPeasantsHired;
	document.getElementById('statTotalTavernPeasantsHired').innerHTML = statTotalTavernPeasantsHired;
	document.getElementById('statPeasantsHired').innerHTML = statPeasantsHired;
	document.getElementById('statTotalPeasantsHired').innerHTML = statTotalPeasantsHired;
	
	Peasant.costAdj = tavernpeasants;
	Peasant.recalcCost();
	
	if(tavernUpgrade == true){
		clickThing(Tavern.number,"miner");
		tavernminers += Tavern.number;
		statTavernMinersHired += Tavern.number;
		statTotalTavernMinersHired += Tavern.number;
		statMinersHired += Tavern.number;
		statTotalMinersHired += Tavern.number;			
		document.getElementById('tavernminers').innerHTML = tavernminers;
		document.getElementById('statTavernMinersHired').innerHTML = statTavernMinersHired;
		document.getElementById('statTotalTavernMinersHired').innerHTML = statTotalTavernMinersHired;
		document.getElementById('statMinersHired').innerHTML = statMinersHired;
		document.getElementById('statTotalMinersHired').innerHTML = statTotalMinersHired;
		Miner.costAdj = tavernminers;
		Miner.recalcCost();	
	}
	
	if(tavernUpgrade2 == true){
		clickThing(Tavern.number,"lumberjack");
		tavernlumberjacks += Tavern.number;
		statTavernLumberjacksHired += Tavern.number;
		statTotalTavernLumberjacksHired += Tavern.number;
		statLumberjacksHired += Tavern.number;
		statTotalLumberjacksHired += Tavern.number;			
		document.getElementById('tavernlumberjacks').innerHTML = tavernlumberjacks;
		document.getElementById('statTavernLumberjacksHired').innerHTML = statTavernLumberjacksHired;
		document.getElementById('statTotalTavernLumberjacksHired').innerHTML = statTotalTavernLumberjacksHired;
		document.getElementById('statLumberjacksHired').innerHTML = statLumberjacksHired;
		document.getElementById('statTotalLumberjacksHired').innerHTML = statTotalLumberjacksHired;
		Lumberjack.costAdj = tavernlumberjacks;
		Lumberjack.recalcCost();	
	}	

}, 30000);


interval = 5000; // initial condition
var run = setInterval(request , interval); // start setInterval as "run"

    function request() { 

        console.log(interval); // firebug or chrome log
        clearInterval(run); // stop the setInterval()

         // dynamically change the run interval
        if(interval>200 ){
          interval *= 0.8;
        }else{
          interval *= 1.2;
        }

        run = setInterval(request, interval); // start the setInterval()
    }

var PMillTime = 10000;
var Pmillticker = setInterval(request, PMillTime);

function request(){
	clearInterval(Pmillticker);
	if(PmillEffUpgr2 == true){
		PMillTime = 5000;
	}
	else{
		PMillTime = 10000;
	}
	
	if(PmillEffUpgr == true){
		if(PaperMill.status == "On" && wood >= PaperMill.numberOn*50*0.6){
			clickThing(PaperMill.numberOn,"paper");		
		}
		else if(wood < PaperMill.numberOn*30*0.6){
			PaperMill.status = "Off"
		}		
	}
	else{
		if(PaperMill.status == "On" && wood >= PaperMill.numberOn*50){
			clickThing(PaperMill.numberOn,"paper");		
		}
		else if(wood < PaperMill.numberOn*50){
			PaperMill.status = "Off"
		}
	}	
	
	Pmillticker = setInterval(request, PMillTime);
}
 
