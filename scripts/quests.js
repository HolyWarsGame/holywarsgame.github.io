//HW Quests
var inQuest = false;
var curQuestType = "";
var UnitOnQuest = "";
var NumUnitOnQuest = 0;
var questPercent = 0;
var spellBoostPercent;
var QuestDuration = 0;
var loadedQuest = false;

$('#unitSelectPicker').selectpicker({
	 style: 'btn-info'
});

$('#questSelectPicker').selectpicker({
	 style: 'btn-info'
});
 
 
$("input[name='QuestUnitNumSelect']").TouchSpin({
  prefix: 'Send',
  verticalbuttons: true,
  booster: true,
  min: 0,
  max: 10000
});


var Quest = function(name, description, htmlBoxRef, htmlBarRef, htmlBtnRef, htmlAlertRef, percentComplete, percentIncrement,speed){
	this.name = name;
	this.description = description;
	this.htmlBoxRef = htmlBoxRef;
	this.htmlBarRef = htmlBarRef;
	this.htmlBtnRef = htmlBtnRef;
	this.htmlAlertRef = htmlAlertRef;
	this.percentComplete = percentComplete;
	this.percentIncrement = percentIncrement;
	this.speed = speed;
	this.questSpellBoostPercent = 0;
	var $bar = $(document.getElementById(this.htmlBarRef));
};

Quest.prototype.startQuest = function(resource){    //Generic Resource quest
	var perComplete = this.percentComplete;
	var perIncrement = this.percentIncrement;
	var alert = this.htmlAlertRef;
	var btn = this.htmlBtnRef;
	var box = this.htmlBoxRef;
	var qbar = this.htmlBarRef;
	var QuestName = this.name;
	var resourceEarned = 0;
		
	inQuest = true;
	curQuestType = this.name;

	UnitOnQuest = $('#unitSelectPicker').selectpicker('val');
	NumUnitOnQuest = $('#QuestUnitNumSelect').val();
	if(loadedQuest === false){
		if(holdUnitforQuest() === false)
		{
			console.log('Bad quest selection.');
			return;
		}			
	}	
	document.getElementById(this.htmlBoxRef).style.display = "block";	
	$qbar = $(document.getElementById(this.htmlBarRef));
		
	document.getElementById(btn).disabled = true;					//disables the buttons
	document.getElementById(btn).innerHTML = QuestName + " in progress!";     //Changes button text
	document.getElementById('questSelectPicker').disabled = true;  //disables picker
	document.getElementById('unitSelectPicker').disabled = true;   //disables picker
	document.getElementById('QuestUnitNumSelect').disabled = true;		//disables number select	
	
	
	var progress = setInterval(function() {
	qcurrWidth = parseInt(this.$qbar.attr('aria-valuenow'));
	qmaxWidth = parseInt(this.$qbar.attr('aria-valuemax'));	
	QuestDuration += 1;
	
		//update the progress
		$qbar.width(perComplete +'%');
		$qbar.attr('aria-valuenow',perComplete);
		$qbar.text(perComplete+'%');
		perComplete = perComplete + perIncrement;
		this.percentComplete = perComplete;
		questPercent = perComplete;

		//update the progress
		if(this.questSpellBoostPercent > 0){
			perComplete += parseInt(questSpellBoostPercent);
			questSpellBoostPercent = 0;
			if(perComplete > 100){
				perComplete = 100;
			}
		}

		if(perComplete%25 === 0 && resource == 'relics'){
			if(rollForFragment() === true){
				resourceEarned += 1;
			}
		}			
		
	  if (qcurrWidth >= qmaxWidth){
		clearInterval(progress);
		$qbar.text("Complete!");
		document.getElementById(box).style.display = "none";			//Hides progress bar box
		document.getElementById(btn).innerHTML = "Send";                 //Changes button text
		document.getElementById(btn).disabled = false;					//enables the buttons
		document.getElementById('questSelectPicker').disabled = false;  //enables picker
		document.getElementById('unitSelectPicker').disabled = false;   //enables picker
		document.getElementById('QuestUnitNumSelect').disabled = false;		//enables number select

		returnUnitfromQuest();
		inQuest = false;
		$qbar.width(0 +'%');
		$qbar.attr('aria-valuenow',0);
		$qbar.text(0+'%');
		$('.selectpicker').selectpicker('refresh');
		
		var finishString;

		if(resource != 'relics'){
			resourceEarned = questCalcReward(resource, UnitOnQuest);
			resourceEarned = Math.round(resourceEarned*100)/100;			
		}

		switch(resource){
			case 'gold':
//				 resourceEarned = QuestDuration*goldpersec;
				 console.log(QuestDuration + " seconds * " + goldpersec + " = " + resourceEarned);
				 gold += resourceEarned;
				 statGoldCollected += resourceEarned;
				 statTotalGoldCollected += resourceEarned;
				 document.getElementById('gold').innerHTML = fnum(gold);
				 document.getElementById('stattotalgoldcollected').innerHTML = fnum(statTotalGoldCollected);
				 document.getElementById('statgoldcollected').innerHTML = fnum(statGoldCollected);
				 finishString = "<br/>Your units return from helping out the people in your kingdom! They bring back <img src = 'images/money_goldsmall.png' title ='Gold' >" + fnum(resourceEarned) + " gold to add to your coffers.";
			break;
			
			case 'wood':
//				 resourceEarned = QuestDuration*woodpersec;
				 console.log(QuestDuration + " seconds * " + woodpersec + " = " + resourceEarned);
				 wood += resourceEarned;
				 statWoodCollected += resourceEarned;
				 statTotalWoodCollected += resourceEarned;
				 document.getElementById('wood').innerHTML = fnum(wood);
				 document.getElementById('statWoodCollected').innerHTML = fnum(statWoodCollected);
				 document.getElementById('statTotalWoodCollected').innerHTML = fnum(statTotalWoodCollected);
				 finishString = "<br/>Your units return from vanquishing a bunch of angry treants! They bring back <img src = 'images/woodsmall.png' title = 'Wood'>" + fnum(resourceEarned) + " wood to add to your collection.";	 
			break;
			
			case 'iron':
//				 resourceEarned = QuestDuration*ironpersec;
				 console.log(QuestDuration + " seconds * " + ironpersec + " = " + resourceEarned);
				 iron += resourceEarned;
				 statIronCollected += resourceEarned;
				 statTotalIronCollected += resourceEarned;
				 document.getElementById('iron').innerHTML = fnum(iron);
				 document.getElementById('statIronCollected').innerHTML = fnum(statIronCollected);
				 document.getElementById('statTotalIronCollected').innerHTML = fnum(statTotalIronCollected);				 
				 finishString = "<br />Your units return from vanquishing a bunch of sturdy animated iron golems! It wasn't easy, but they bring back <img src = 'images/ironsmall.png' title='Iron'>" + fnum(resourceEarned) + " iron to add to your collection.";		 
			break;

			case 'silver':
//				 resourceEarned = QuestDuration*silverpersec;
				 console.log(QuestDuration + " seconds * " + silverpersec + " = " + resourceEarned);
				 silver += resourceEarned;
				 statSilverCollected += resourceEarned;
				 statTotalSilverCollected += resourceEarned;
				 document.getElementById('silver').innerHTML = fnum(silver);
				 document.getElementById('statSilverCollected').innerHTML = fnum(statSilverCollected);
				 document.getElementById('statTotalSilverCollected').innerHTML = fnum(statTotalSilverCollected);					 
				 finishString = "<br />Your units successfully help the the friendly sprites living in your mines. As a token of their gratitude, they send you <img src = 'images/silverOresmall.png' title='Silver'>" + fnum(resourceEarned) + " silver to add to your collection.";
				 if(coalUnlocked === false){
					 coalUnlocked = true;
					 document.getElementById('coaldiv').style.display = "block";
					 document.getElementById('CoalMining').style.display = "block";
					 $.notify({
						title: "<strong>Success! </strong>",
						message: "The sprites whom eternally greatful for your assistance show you how to find coal in your mines! You can now <a href='javascript: alertOpenProductionPage();' class='alert-link'>specialize</a> your miners!",
						delay: 25000},{
					type: 'success'
					});
				 }					 
			break;

			case 'souls':
//				 resourceEarned = QuestDuration*soulspersec;
				 console.log(QuestDuration + " seconds * " + soulspersec + " = " + resourceEarned);
				 souls += resourceEarned;
				 statSoulsCollected += resourceEarned;
				 statTotalSoulsCollected += resourceEarned;
				 document.getElementById('souls').innerHTML = fnum(souls);
				 document.getElementById('statSoulsCollected').innerHTML = fnum(statSoulsCollected);
				 document.getElementById('statTotalSoulsCollected').innerHTML = fnum(statTotalSoulsCollected);				 
				 finishString = "<br />Your units successfully help the the defeat some lesser demons plaguing the countryside. When they die, your troops are able to collect <img src = 'images/soulssmall.png' title='Souls'>" + fnum(resourceEarned) + " souls.";		
			break;

			case 'relics':
			console.log('relics ' + resourceEarned);
				if(resourceEarned === 0){
					finishString = "<br /> Your paladins are unsuccessful at locating any relic fragments. Perhaps you should send more Paladins to cover more area?";
				}
				else{
					finishString = "<br /> Your paladins have located " + resourceEarned + " relic fragments total on their quest!";
				}
			break;			
		}
		
		$.notify({
			title: "<strong>Quest Finished! </strong>",
			message: finishString,
			delay: 25000},{
		type: 'success'
		});	
		checkQuestGoButton();
	  } 
	}, this.speed);
	return true;
};

function questCalcReward(type, unit){
	var unitPower = 0;
	console.log(unit);
	switch(unit){
		case 'Squire':
			unitPower = 0.05 * NumUnitOnQuest;
		break;

		case 'Knight':
			unitPower = 0.15 * NumUnitOnQuest;
		break;

		case 'Paladin':
			unitPower = 0.35 * NumUnitOnQuest;
		break;
		
	}
	
	switch(type){
		case 'gold':
			console.log(QuestDuration * unitPower * goldpersec);
			return QuestDuration * unitPower * goldpersec;
		break;
		
		case 'wood':
			console.log(QuestDuration * unitPower * woodpersec);
			return QuestDuration * unitPower * woodpersec;
		break;
		
		case 'iron':
			return QuestDuration * unitPower * ironpersec;
		break;
		
		case 'silver':
			return QuestDuration * unitPower * silverpersec;
		break;
		
		case 'souls':
			return QuestDuration * unitPower * soulspersec;
		break;
	}
}

function loadQuest(QuestName, percent, unit, numUnit){
	questSpellBoost(percent);
	document.getElementById('unitSelectPicker').value = unit;		//Type of unit sent
	document.getElementById('QuestUnitNumSelect').value = numUnit;		//Number of units sent
	document.getElementById('questSelectPicker').value = QuestName; //Quest type
	
//	eval(unit + '.number += numUnit');
	eval(unit + '.onQuest = numUnit');
//	document.getElementById(unit.htmlNumRef).innerHTML = unit.number;
	
	$('.selectpicker').selectpicker('refresh');
	
	switch(QuestName){
		case 'Help the People':
			goldQuest.startQuest('gold');
			UnitOnQuest = unit;
		break;	

		case 'Slay Treants':
			woodQuest.startQuest('wood');
			UnitOnQuest = unit;
		break;	

		case 'Slay Iron Golems':
			ironQuest.startQuest('iron');
			UnitOnQuest = unit;
		break;	
		
		case 'Aid the Sprites':
			silverQuest.startQuest('silver');
			UnitOnQuest = unit;
		break;

		case 'Hunt Lesser Demons':
			soulsQuest.startQuest('souls');
			UnitOnQuest = unit;
		break;		
		
		case 'Relic Hunt':
			RelicHunt.startQuest();
			UnitOnQuest = unit;
		break;		
	}
	
}

function btnSendQuest(){			

	 if (checkQuestSelection() === true * $('#unitSelectPicker').selectpicker('val') !== "" * $('#questSelectPicker').selectpicker('val') !== ""){
		 var string = "<br/>You send " + $('#QuestUnitNumSelect').val() + " " + $('#unitSelectPicker').selectpicker('val');
		 if($('#QuestUnitNumSelect').val() > 1){
			 string = string + "s";
		 }
		 string = string + " out on the quest '" + $('#questSelectPicker').selectpicker('val') + "'";

	    function notify(){
			$.notify({
				title: "<strong>Questing! </strong>",
				message: string,
				delay: 10000
			});				
		}
	  
	  
	  switch($('#questSelectPicker').selectpicker('val'))
	  {
		 case 'Help the People':
			console.log('Help the People');
			goldQuest.startQuest('gold');
			notify();
		 break;

		 case 'Slay Treants':
			console.log('Slay Treants');
			woodQuest.startQuest('wood');
			notify();
		 break;
		 
		 case 'Slay Iron Golems':
			console.log('Slay Iron Golems');
			ironQuest.startQuest('iron');
			notify();
		 break;

		 case 'Aid the Sprites':
			console.log('Aid the Sprites');
			silverQuest.startQuest('silver');
			notify();
		 break;	 
		 
		 case 'Hunt Lesser Demons':
			console.log('Hunt Lesser Demons');
			soulsQuest.startQuest('souls');
			notify();
		 break;		 
		 
		 case 'Relic Hunt':
			if($('#unitSelectPicker').selectpicker('val') == 'Paladin' && Paladin.number > 0)
			{
				console.log('Relic Hunt');
				RelicHunt.startQuest('relics');
				notify();
			}
			else{
//				alert("You can only send Paladins relic hunting!");
			}
		 break;
	  }
	 }
}

function checkQuestSelection(){
	if($('.selectpicker').selectpicker('val') == "Paladin"){
		if(Paladin.number < $('#QuestUnitNumSelect').val()){
			alert("You do not have enough Paladins for this!");
			$('#QuestUnitNumSelect').attr('val', Paladin.number);
			return false;
		}
	}
	
	else if ($('.selectpicker').selectpicker('val') == "Knight"){
		if(Knight.number < $('#QuestUnitNumSelect').val()){
			alert("You do not have enough Knights for this!");
			return false;
		}
	}
	else if ($('.selectpicker').selectpicker('val') == "Squire"){
		if(Squire.number < $('#QuestUnitNumSelect').val()){
			alert("You do not have enough Squires for this!");
			return false;
		}
	}
	return true;
}

function checkQuestGoButton(){
	if(inQuest === false){
		if($('#unitSelectPicker').selectpicker('val') === "" || $('#questSelectPicker').selectpicker('val') === "" ||  document.getElementById('QuestUnitNumSelect').value === '0'){
			document.getElementById('btnQuestGo').disabled = true;
		}
		else
		{
			document.getElementById('btnQuestGo').disabled = false;
		}		
	}
	else
	{
		document.getElementById('btnQuestGo').disabled = false;
	}
}

function QuestCheckUnitOptions(){
	if(Paladin.number === 0){
		$('#PaladinOption').prop("disabled", true);
		$('.selectpicker').selectpicker('refresh');
	}
	else{
		$('#PaladinOption').prop("disabled", false);
		$('.selectpicker').selectpicker('refresh');
	}
	
	if(Knight.number === 0){
		$('#KnightOption').prop("disabled", true);
		$('.selectpicker').selectpicker('refresh');
	}
	else{
		$('#KnightOption').prop("disabled", false);
		$('.selectpicker').selectpicker('refresh');
	}
	if(Squire.number === 0){
		$('#SquireOption').prop("disabled", true);
		$('.selectpicker').selectpicker('refresh');
	}
	else{
		$('#SquireOption').prop("disabled", false);
		$('.selectpicker').selectpicker('refresh');
	}	
}

var goldQuestDesc = "";
var goldQuest = new Quest('Help the People', goldQuestDesc, 'QuestProgBarBox', 'QuestProgBar', 'btnQuestGo','goldQuestFinishAlert',0,1,750);

var woodQuestDesc = "";
var woodQuest = new Quest('Slay Treants', woodQuestDesc, 'QuestProgBarBox', 'QuestProgBar', 'btnQuestGo','woodQuestFinishAlert',0,1,750);

var ironQuestDesc = "";
var ironQuest = new Quest('Slay Iron Golems', ironQuestDesc, 'QuestProgBarBox', 'QuestProgBar', 'btnQuestGo','ironQuestFinishAlert',0,1,750);

var silverQuestDesc = "";
var silverQuest = new Quest('Aid the Sprites', silverQuestDesc, 'QuestProgBarBox', 'QuestProgBar', 'btnQuestGo','silverQuestFinishAlert',0,1,750);

var soulsQuestDesc = "";
var soulsQuest = new Quest('Hunt Lesser Demons ', soulsQuestDesc, 'QuestProgBarBox', 'QuestProgBar', 'btnQuestGo','soulsQuestFinishAlert',0,1,750);

//var Quest = function(name, description, htmlBoxRef, htmlBarRef, htmlAlertRef, percentComplete, percentIncrement,speed){
var relicHuntDesc = "";
var RelicHunt = new Quest('Relic Hunt', relicHuntDesc, 'QuestProgBarBox', 'QuestProgBar', 'btnQuestGo','goblinDefeatAlert',0,1,750);


/*RelicHunt.startQuest = function(){
		var perComplete = this.percentComplete;
		var perIncrement = this.percentIncrement;
		var alert = this.htmlAlertRef;
		var btn = this.htmlBtnRef;
		var box = this.htmlBoxRef;
		var qbar = this.htmlBarRef;
		var QuestName = this.name;
		var foundRelic = false;
			
		inQuest = true;
		curQuestType = this.name;
		
		NumUnitOnQuest = $('#QuestUnitNumSelect').val();
		UnitOnQuest = $('#unitSelectPicker').selectpicker('val');
		
		if(loadedQuest === false){
			if(holdUnitforQuest() === false)
			{
				console.log('Bad quest selection.');
				return;
			}			
		}
		document.getElementById(this.htmlBoxRef).style.display = "block";	
		$qbar = $(document.getElementById(this.htmlBarRef));
		
		UnitOnQuest = $('#unitSelectPicker').selectpicker('val');
		NumUnitOnQuest = $('#QuestUnitNumSelect').val();		
		var questprogress = setInterval(function() {
		qcurrWidth = parseInt(this.$qbar.attr('aria-valuenow'));
		qmaxWidth = parseInt(this.$qbar.attr('aria-valuemax'));	
				
		//update the progress
		$qbar.width(perComplete +'%');
		$qbar.attr('aria-valuenow',perComplete);
		$qbar.text(perComplete+'%');
		perComplete = perComplete + perIncrement;
		this.percentComplete = perComplete;
		questPercent = perComplete;

		if(perComplete%50 === 0){
			rollForFragment();
		}	
		document.getElementById(btn).disabled = true;					//disables the buttons
		document.getElementById(btn).innerHTML = QuestName + " in progress!";     //Changes button text
		document.getElementById('questSelectPicker').disabled = true;  //disables picker
		document.getElementById('unitSelectPicker').disabled = true;   //disables picker
		document.getElementById('QuestUnitNumSelect').disabled = true;		//disables number select

		//update the progress
		if(this.questSpellBoostPercent > 0){
			perComplete = perComplete + parseInt(questSpellBoostPercent);
			questSpellBoostPercent = 0;
			if(perComplete > 100){
				perComplete = 100;
			}
		}		
		
		if (qcurrWidth >= qmaxWidth){
			clearInterval(questprogress);
			$qbar.text("Complete!");
			document.getElementById(box).style.display = "none";			//Hides progress bar box
			document.getElementById(btn).innerHTML = "Send";                 //Changes button text
			document.getElementById(btn).disabled = false;					//enables the buttons
			document.getElementById('questSelectPicker').disabled = false;  //enables picker
			document.getElementById('unitSelectPicker').disabled = false;   //enables picker
			document.getElementById('QuestUnitNumSelect').disabled = false;		//enables number select
			returnUnitfromQuest();
			inQuest = false;
			
			$qbar.width(0 +'%');
			$qbar.attr('aria-valuenow',0);
			$qbar.text(0+'%');
		} 
	}, this.speed);
	return true;
};*/

function rollForFragment(){
	var unitType = $('#unitSelectPicker').selectpicker('val');
	var numUnits = $('#QuestUnitNumSelect').val();
	var percentFind = 0;
	var multiplier = 1.5;
	var rand = Math.floor(Math.random()*100) + 1;
	switch(unitType){
		case "Paladin":
			for (i = 0; i < numUnits; i++) { 
				percentFind += multiplier;
				multiplier *= 0.975;
			}
		break;
		default:
	}
	console.log(percentFind + '% chance to find a relic fragment');
	if(percentFind >= rand){
		relicFragment += 1;
		document.getElementById('relicBadge').innerHTML = relicFragment;
		document.getElementById('relicFragments').innerHTML = relicFragment;
		
		$.notify({
			title: "<strong>Found! </strong>",
			message: "Your paladins found a relic fragment in their search!",
			delay: 25000},{
		type: 'success'
		});
		return true;
	}
	else{
		console.log("No Relic found");
		return false;
	}
}

function holdUnitforQuest(){
	switch(UnitOnQuest){
		case "Paladin":
			if(Paladin.number < parseInt(NumUnitOnQuest)){
				return false;
			}
			else{
				Paladin.number -= parseInt(NumUnitOnQuest);
				Paladin.onQuest = parseInt(NumUnitOnQuest);
				Paladin.totalArmyPower();
				Paladin.totalSpiritPower();
				document.getElementById('paladins').innerHTML = Paladin.number;
				calculateBattlePower();
				calculateSpiritPower();	
//				console.log("taking paladins");
				return true;				
			}

		break;
		
		case "Knight":
			if(Knight.number < parseInt(NumUnitOnQuest)){
				return false;
			}
			else{
				Knight.number -= parseInt(NumUnitOnQuest);
				Knight.totalArmyPower();
				Knight.onQuest = parseInt(NumUnitOnQuest);
				document.getElementById('knights').innerHTML = Knight.number;	
				calculateBattlePower();
	//			console.log("taking knights");	
			return true;				
			}

		break;
		
		case "Squire":
			if(Squire.number < parseInt(NumUnitOnQuest)){
				return false;
			}
			else{
				Squire.number -= parseInt(NumUnitOnQuest);
				Squire.totalArmyPower();
				Squire.onQuest = parseInt(NumUnitOnQuest);
				document.getElementById('squires').innerHTML = Squire.number;	
				calculateBattlePower();
	//			console.log("taking Squires");	
				return true;				
			}
		break;		
	}
}

function returnUnitfromQuest(){
	switch(UnitOnQuest){
		case "Paladin":
			Paladin.number += parseInt(NumUnitOnQuest);
			Paladin.onQuest = 0;
			Paladin.totalArmyPower();
			Paladin.totalSpiritPower();
			document.getElementById('paladins').innerHTML = Paladin.number;
			calculateBattlePower();
			calculateSpiritPower();
			document.getElementById("BattlePower").innerHTML = fnum(BattlePower);
			document.getElementById("BattlePower2").innerHTML = BattlePower;			
			document.getElementById("SpiritPower").innerHTML = fnum(SpiritPower);
			document.getElementById("SpiritPower2").innerHTML = SpiritPower;
			console.log("returned paladins");
		break;
		
		case "Knight":
			Knight.number += parseInt(NumUnitOnQuest);
			Knight.onQuest = 0;
			Knight.totalArmyPower();
			document.getElementById('knights').innerHTML = Knight.number;	
			calculateBattlePower();
			document.getElementById("BattlePower").innerHTML = fnum(BattlePower);
			document.getElementById("BattlePower2").innerHTML = BattlePower;					
			console.log("returned knights");
		break;
		
		case "Squire":
			Squire.number += parseInt(NumUnitOnQuest);
			Squire.totalArmyPower();
			Squire.onQuest = 0;
			document.getElementById('squires').innerHTML = Squire.number;	
			calculateBattlePower();
			document.getElementById("BattlePower").innerHTML = fnum(BattlePower);
			document.getElementById("BattlePower2").innerHTML = BattlePower;					
			console.log("returned Squires");
		break;		
	}
}


$(function() {
  $('#unitSelectPicker').on('change', function(){
	var newMax;
	checkQuestGoButton();
	switch($('#unitSelectPicker').selectpicker('val')){
		case 'Paladin':
			newMax = Paladin.number;
		break;
		
		case 'Knight':
			newMax = Knight.number;
		break;
		
		case 'Squire':
			newMax = Squire.number;
		break;
		
		default:
			newMax = 50;
	}
	$("input").trigger("touchspin.updatesettings", {max: newMax});
//	console.log(newMax);
	if(newMax < document.getElementById('QuestUnitNumSelect').value){
		document.getElementById('QuestUnitNumSelect').value = 1;
	}
  }); 
});

$(function() {
  $('#questSelectPicker').on('change', function(){
	var questDescription = "";
	checkQuestGoButton();
	switch($('#questSelectPicker').selectpicker('val')){
		case '':
			questDescription = 'Your taskmaster patiently awaits your command.';
			document.getElementById('questDescString').innerHTML = questDescription;
		break;
		
		case 'Relic Hunt':									//Only Paladins or higher can go on Relic Hunts
			$('#KnightOption').prop("disabled", true);
			$('#SquireOption').prop("disabled", true);
			if(Paladin.number < 1){
				$('#PaladinOption').prop("disabled", true);
				$('#unitSelectPicker').selectpicker('val', '');
			}
			else{
				$('#PaladinOption').prop("enabled", true);
				$('#unitSelectPicker').selectpicker('val', 'Paladin');
			}
//			$('#unitSelectPicker').selectpicker('val', 'Paladin');
			QuestCheckUnitOptions();
			$('.selectpicker').selectpicker('refresh');
			questDescription = "Send your units out to look for mysterious relics. <br>Requires Paladins or higher units. <br>Reward: Chance at relics";
			document.getElementById('questDescString').innerHTML = questDescription;
		break;
		
		case 'Hunt Lesser Demons':
			$('#PaladinOption').prop("disabled", false);
			$('#KnightOption').prop("disabled", false);
			$('#SquireOption').prop("disabled", false);
			QuestCheckUnitOptions();
			$('.selectpicker').selectpicker('refresh');
			questDescription = "Send your units out to slay lesser demons attacking the people in " + KingdomName + ". <br>Reward: <img src = 'images/soulssmall.png' title='Souls'>Souls";
			document.getElementById('questDescString').innerHTML = questDescription;			
		break;
		
		case 'Slay Treants':
			$('#PaladinOption').prop("disabled", false);
			$('#KnightOption').prop("disabled", false);
			$('#SquireOption').prop("disabled", false);
			QuestCheckUnitOptions();
			$('.selectpicker').selectpicker('refresh');
			questDescription = "Send your units out to slay treants menacing the lumberjacks in the woods. <br>Reward: <img src = 'images/woodsmall.png' title = 'Wood'> Wood";
			document.getElementById('questDescString').innerHTML = questDescription;			
		break;
		
		case 'Slay Iron Golems':
			$('#PaladinOption').prop("disabled", false);
			$('#KnightOption').prop("disabled", false);
			$('#SquireOption').prop("disabled", false);
			QuestCheckUnitOptions();
			$('.selectpicker').selectpicker('refresh');
			questDescription = "Send your units out to slay the iron golems summoned by the Evil One in your mines. <br>Reward: <img src = 'images/ironsmall.png' title='Iron'>Iron";
			document.getElementById('questDescString').innerHTML = questDescription;			
		break;		
		
		case 'Help the People':
			$('#PaladinOption').prop("disabled", false);
			$('#KnightOption').prop("disabled", false);
			$('#SquireOption').prop("disabled", false);
			QuestCheckUnitOptions();
			$('.selectpicker').selectpicker('refresh');	
			questDescription = "Send your units out to help the people of " + KingdomName + " with generic problems, like little children falling down a well. <br>Reward: <img src = 'images/money_goldsmall.png' title ='Gold'>Gold";
			document.getElementById('questDescString').innerHTML = questDescription;			
		break;

		case 'Aid the Sprites':
			$('#PaladinOption').prop("disabled", false);
			$('#KnightOption').prop("disabled", false);
			$('#SquireOption').prop("disabled", false);
			QuestCheckUnitOptions();
			$('.selectpicker').selectpicker('refresh');	
			questDescription = "Send your units into your mines to help the sprites residing within. <br>Reward: <img src = 'images/silverOresmall.png' title='Silver'>Silver";
			if(coalUnlocked === false){
				questDescription += "<br /><br /> Your taskmaster notes that the sprites in the mines need your help in particular at this moment. <br /> Additional reward: Unlock <img src = 'images/coalsmall.png' title='Coal'>Coal";
			}
			document.getElementById('questDescString').innerHTML = questDescription;			
		break;			
		
		default:
			$('#PaladinOption').prop("disabled", false);
			$('#KnightOption').prop("disabled", false);
			$('#SquireOption').prop("disabled", false);
			$('.selectpicker').selectpicker('refresh');		
	}
  });
});

$('#QuestUnitNumSelect').on('touchspin.on.startspin', function () {checkQuestGoButton();});