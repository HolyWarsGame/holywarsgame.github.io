var manaCap = 2000;

var Spell = function(name, description, htmlBoxRef, htmlBarRef, htmlBtnRef, htmlAlertRef, goldCost, woodCost, ironCost, silverCost, faithCost, soulCost, manaCost){
	this.name = name;
	this.description = description;
	this.htmlBoxRef = htmlBoxRef;
	this.htmlBarRef = htmlBarRef;
	this.htmlBtnRef = htmlBtnRef;
	this.htmlAlertRef = htmlAlertRef;
	this.goldCost = goldCost;
	this.woodCost = woodCost;
	this.ironCost = ironCost;
	this.silverCost = silverCost;
	this.faithCost = faithCost;
	this.soulCost = soulCost;
	this.manaCost = manaCost;
};


Spell.prototype.cast = function(){
		gold = gold - this.goldCost;                     										      //removes the gold spent
		wood = wood - this.woodCost;
		iron = iron - this.ironCost;                                                                   //removes the iron spent
		silver = silver - this.silverCost;                                                             //removes the silver spent
		faith = faith - this.faithCost;                                                                //removes the faith spent
		souls = souls - this.soulCost;                                                                 //removes the souls spent
		mana = mana - this.manaCost;                                                                  //removes the souls spent
		document.getElementById(this.htmlNumRef).innerHTML = this.number;  							      //updates the number of Unit for the user
		document.getElementById('gold').innerHTML = gold;  										          //updates the number of gold for the user
		document.getElementById('iron').innerHTML = iron;  										          //updates the number of iron for the user
		document.getElementById('silver').innerHTML = iron;  										       //updates the number of silver for the user
		document.getElementById('faith').innerHTML = faith;  										      //updates the number of faith for the user
		document.getElementById('souls').innerHTML = souls;  										      //updates the number of souls for the user
		document.getElementById('mana').innerHTML = mana;  										      //updates the number of souls for the user
	
	alert(this.name + " spell cast!");
}

Spell.prototype.canCast = function(){
	var btn = this.htmlBtnRef;
	
	if(gold >= this.goldCost && iron >= this.ironCost && silver >= this.silverCost && faith >= this.faithCost && souls >= this.soulCost && mana >= this.manaCost){     //checks that the player can afford the spell
		document.getElementById(btn).disabled = false;					//enables the buy button
	}
	else{
		document.getElementById(btn).disabled = true;					//disables the buy button
	}
};

function setSpellDescription(Spell, element){
	var popover = document.getElementById(element);
	popover.setAttribute("data-content", Spell.description);		
};


var fastForwardDesc = "The archmage casts a spell that warps your kingdom 15 minutes into the future. Unfortunately, the spell isn't strong enough to keep your taverns working for the duration of the spell.";
var FastForward = new Spell("FastForward", fastForwardDesc, 0, 0, 'btnSpellFF', 'Alert', 0, 0, 0, 0, 0, 0, 1000);
setSpellDescription(FastForward, 'BtnSpellFFDesc');

FastForward.cast = function(){
	var timemultiplier = 15; //15 Minutes
	var goldGained = 0;
	var woodGained = 0;
	var ironGained = 0;
	var silverGained = 0;
	var faithGained = 0;
	var soulsGained = 0;
	
	goldGained = timemultiplier*60*goldpersec;
	gold = gold + goldGained;
	document.getElementById('gold').innerHTML = gold;  										          //updates the number of gold for the user	

	woodGained = timemultiplier*60*woodpersec;
	wood = wood + woodGained;
	document.getElementById('wood').innerHTML = wood;  										          //updates the number of wood for the user	

	ironGained = timemultiplier*60*ironpersec;
	iron = iron + ironGained;
	document.getElementById('iron').innerHTML = iron;  										          //updates the number of iron for the user	

	silverGained = timemultiplier*60*silverpersec;
	silver = silver + silverGained;
	document.getElementById('silver').innerHTML = silver;  										          //updates the number of gold for the user	

	faithGained = timemultiplier*60*faithpersec;
	faith = faith + faithGained;
	document.getElementById('faith').innerHTML = faith;  										          //updates the number of faith for the user	

	soulsGained = timemultiplier*60*soulspersec;
	souls = souls + soulsGained;
	document.getElementById('souls').innerHTML = souls;  										          //updates the number of souls for the user		
	
	
	mana = mana - this.manaCost;                                                                  //removes the souls spent	
	document.getElementById('mana').innerHTML = mana;  										      //updates the number of souls for the user
	
	
	alert(this.name + " spell cast!\n\nYou gain " + goldGained + " gold. \nYou gain " + woodGained + 
				     " wood.\nYou gain " + ironGained + " iron.\nYou gain " + silverGained + " silver.\nYou gain " + faithGained + " faith.\nYou gain " + soulsGained + " souls.");
}

function checkSpellButtons(){
	FastForward.canCast();
};

window.setInterval(function(){                                 
	document.getElementById("manaCap").innerHTML = manaCap;	
	
	var percentFull = ((mana/manaCap)*100).toFixedDown(1);
	
	var $bar = $(document.getElementById('manaprogbar'));
		$bar.width(percentFull +'%');
		$bar.attr('aria-valuenow',percentFull);
		$bar.text(percentFull + '%' + " mana");
	
	var currWidth = parseInt($bar.attr('aria-valuenow'));
    var maxWidth = parseInt($bar.attr('aria-valuemax'));
	if (currWidth >= maxWidth){
		$bar.text("Mana Full!");
	}
	
/*			
			//update the progress
			$bar.width(perComplete +'%');
			$bar.attr('aria-valuenow',perComplete);
			$bar.text(perComplete+'%');
			perComplete = perComplete + perIncrement;
			
		  if (currWidth >= maxWidth){
			$bar.text("Complete!");
			document.getElementById(alert).style.display = "block";			//Displays alert related to this battle
			document.getElementById(box).style.display = "none";			//Hides progress bar box
			document.getElementById(btn).innerHTML = EnemyName + " Defeated!";     //Changes button text
			document.getElementById(btn).disabled = true;					//disables the buttons
			inbattle = false;
			
			setDefeatEvents(EnemyName);
		  } 		
*/
	
	
},100);

