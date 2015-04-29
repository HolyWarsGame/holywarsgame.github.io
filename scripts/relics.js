//HW Relics
var relicFragment = 0;

var boughtWaterPendant = false;
var boughtEarthPendant = false;
var boughtFirePendant = false;
var boughtWindPendant = false;


var Relic = function(name, htmlRelicCost, htmlGoldCost, htmlIronCost, htmlSilverCost, htmlFaithCost, htmlSoulCost, htmlBuyBtn, 
					relicCost, goldCost, ironCost, silverCost, faithCost, soulCost, description){
	this.name = name;
	this.htmlRelicCost = htmlRelicCost;
	this.htmlGoldCost = htmlGoldCost;
	this.htmlIronCost = htmlIronCost;
	this.htmlSilverCost = htmlSilverCost;
	this.htmlFaithCost = htmlFaithCost;
	this.htmlSoulCost = htmlSoulCost;
	this.htmlBuyBtn = htmlBuyBtn;
	this.relicCost = relicCost
	this.goldCost = goldCost;
	this.ironCost = ironCost;
	this.silverCost = silverCost;
	this.faithCost = faithCost;
	this.soulCost = soulCost;
	this.description = description;
	this.purchased = false;
}

Relic.prototype.buy = function(){
	if(this.canBuy() == true){
		relicFragment -= this.relicCost;
		gold -= this.goldCost;
		iron -= this.ironCost;
		silver -= this.silverCost;
		faith -= this.faithCost;
		souls -= this.soulCost;
		document.getElementById('relicFragments').innerHTML = fnum(relicFragment);  										          //updates the number of gold for the user
		document.getElementById('gold').innerHTML = fnum(gold);  										          //updates the number of gold for the user
		document.getElementById('wood').innerHTML = fnum(wood);  										          //updates the number of wood for the user
		document.getElementById('iron').innerHTML = fnum(iron);  										          //updates the number of iron for the user
		document.getElementById('silver').innerHTML = fnum(silver);  										          //updates the number of silver for the user
		document.getElementById('faith').innerHTML = fnum(faith);  										          //updates the number of faith for the user
		document.getElementById('souls').innerHTML = fnum(souls);  										          //updates the number of souls for the user
		document.getElementById('tomes').innerHTML = fnum(tomes);  										          //updates the number of tomes for the user
		this.purchased = true;
		document.getElementById(this.htmlBuyBtn).innerHTML = this.name + " created";
	
		switch(this.name){
			case 'Earth Pendant':
				boughtEarthPendant = true;
			break;
			
			case 'Fire Pendant':
				boughtFirePendant = true;
			break;
			
			case 'Wind Pendant':
				boughtWindPendant = true;
			break;
			
			case 'Water Pendant':
				boughtWaterPendant = true;
			break;		
			
			default:
			break;
		}
	}
	else{
		
	}
};

Relic.prototype.canBuy = function(){
	if(this.purchased == false){
		if(relicFragment < this.relicCost || gold < this.goldCost || iron < this.ironCost || silver < this.silverCost || faith < this.faithCost || souls < this.soulCost){
			this.highlightMissing();
			document.getElementById(this.htmlBuyBtn).disabled = true;
			return false;
		}
		else{
			this.costToBlack();
			document.getElementById(this.htmlBuyBtn).disabled = false;
			return true;
		}		
	}
	else{
		document.getElementById(this.htmlBuyBtn).disabled = true;
		document.getElementById(this.htmlBuyBtn).innerHTML = this.name + " created";
		
		switch(this.name){
			case 'Earth Pendant':
				document.getElementById('relicEarthPendant').classList.remove('relic');
				document.getElementById('relicEarthPendant').classList.add('relicbought');		
			break;
		
			case 'Fire Pendant':
				document.getElementById('relicFirePendant').classList.remove('relic');
				document.getElementById('relicFirePendant').classList.add('relicbought');				
			break;
		
			case 'Wind Pendant':
				document.getElementById('relicWindPendant').classList.remove('relic');
				document.getElementById('relicWindPendant').classList.add('relicbought');				
			break;		
			
			case 'Water Pendant':
				document.getElementById('relicWaterPendant').classList.remove('relic');
				document.getElementById('relicWaterPendant').classList.add('relicbought');				
			break;
			
		}
			
	}

}

Relic.prototype.costToBlack = function(){
	if (this.htmlRelicCost != 'none'){
		document.getElementById(this.htmlRelicCost).style.color = "black";
	}
	if (this.htmlGoldCost != 'none'){
		document.getElementById(this.htmlGoldCost).style.color = "black";
	}
	if (this.htmlIronCost != 'none'){
		document.getElementById(this.htmlIronCost).style.color = "black";
	}
	if (this.htmlSilverCost != 'none'){
		document.getElementById(this.htmlSilverCost).style.color = "black";
	}
	if (this.htmlFaithCost != 'none'){
		document.getElementById(this.htmlFaithCost).style.color = "black";
	}
	if (this.htmlSoulCost != 'none'){
		document.getElementById(this.htmlSoulCost).style.color = "black";
	}	
}

Relic.prototype.highlightMissing = function(){
	if(this.purchased == false){
		if (relicFragment <= this.relicCost && this.htmlRelicCost != 'none'){
			document.getElementById(this.htmlRelicCost).style.color = "red";
		}
		if (gold <= this.goldCost && this.htmlGoldCost != 'none'){
			document.getElementById(this.htmlGoldCost).style.color = "red";
		}
		if (iron <= this.goldCost && this.ironCost != 'none'){
			document.getElementById(this.ironCost).style.color = "red";
		}
		if (silver <= this.goldCost && this.silverCost != 'none'){
			document.getElementById(this.silverCost).style.color = "red";
		}
		if (faith <= this.goldCost && this.faithCost != 'none'){
			document.getElementById(this.faithCost).style.color = "red";
		}
		if (souls <= this.goldCost && this.soulCost != 'none'){
			document.getElementById(this.soulCost).style.color = "red";
		}
	}
}

function updateRelicButtons(){
	
	EarthPendant.canBuy();
	FirePendant.canBuy();
	WindPendant.canBuy();
	WaterPendant.canBuy();
};

var waterPendantDesc = '';
var WaterPendant = new Relic('Water Pendant', 'WaterPendantRelicCost', 'none', 'WaterPendantIronCost', 'WaterPendantSilverCost', 'none', 'none', 'btnRelicWaterPendant', 10, 0, 10000, 10000, 0, 0,'');

var FirePendantDesc = '';
var FirePendant = new Relic('Fire Pendant', 'FirePendantRelicCost', 'none', 'FirePendantIronCost', 'FirePendantSilverCost', 'none', 'none', 'btnRelicFirePendant', 10, 0, 10000, 10000, 0, 0,'');

var windPendantDesc = '';
var WindPendant = new Relic('Wind Pendant', 'WindPendantRelicCost', 'none', 'WindPendantIronCost', 'WindPendantSilverCost', 'none', 'none', 'btnRelicWindPendant', 10, 0, 10000, 10000, 0, 0,'');

var earthPendantDesc = '';
var EarthPendant = new Relic('Earth Pendant', 'EarthPendantRelicCost', 'none', 'EarthPendantIronCost', 'EarthPendantSilverCost', 'none', 'none', 'btnRelicEarthPendant', 10, 0, 10000, 10000, 0, 0,'');
