//Holy Wars Lifetime Variables
var statResetted = 0;

var statGoldCollected = 0;
var statSelfGoldCollected = 0;
var statTotalSelfGoldCollected = 0;
var statTotalGoldCollected = 0;

var statWoodCollected = 0;
var statSelfWoodCollected = 0;
var statTotalWoodCollected = 0;
var statTotalSelfWoodCollected = 0;

var statIronCollected = 0;
var statTotalIronCollected = 0;

var statCoalCollected = 0;
var statTotalCoalCollected = 0;

var statSteelCollected = 0;
var statTotalSteelCollected = 0;

var statSilverCollected = 0;
var statTotalSilverCollected = 0;

var statPaperCrafted = 0;
var statSelfPaperCrafted = 0;
var statTotalPaperCrafted = 0;
var statTotalSelfPaperCrafted = 0;

var statTomesCrafted = 0;
var statSelfTomesCrafted = 0;
var statTotalTomesCrafted = 0;

var statFaithCollected = 0;
var statTotalFaithCollected = 0;

var statSoulsCollected = 0;
var statTotalSoulsCollected = 0;

var statPeasantsHired = 0;
var statSelfPeasantsHired = 0;
var statTotalSelfPeasantsHired = 0;
var statTavernPeasantsHired = 0;
var statTotalTavernPeasantsHired = 0;
var statTotalPeasantsHired = 0;

var statMinersHired = 0;
var statSelfMinersHired = 0;
var statTotalSelfMinersHired = 0;
var statTavernMinersHired = 0;
var statTotalTavernMinersHired = 0;
var statTotalMinersHired = 0;

var statLumberjacksHired = 0;
var statSelfLumberjacksHired = 0;
var statTotalSelfLumberjacksHired = 0;
var statTavernLumberjacksHired = 0;
var statTotalTavernLumberjacksHired = 0;
var statTotalLumberjacksHired = 0;

var statPagesTrained = 0;
var statTotalPagesTrained = 0;

var statSquiresTrained = 0;
var statTotalSquiresTrained = 0;

var statKnightsTrained = 0;
var statTotalKnightsTrained = 0;

var statPaladinsTrained = 0;
var statTotalPaladinsTrained = 0;

var statAcolytesRecruited = 0;
var statTotalAcolytesRecruited = 0;

var statPriestsTrained = 0;
var statTotalPriestsTrained = 0;

var statBishopsTrained = 0;
var statTotalBishopsTrained = 0;

var statShadesSummoned = 0;
var statTotalShadesSummoned = 0;

var statAspectsTrained = 0;
var statTotalAspectsTrained = 0;

var statAngelsSummoned = 0;
var statTotalAngelsSummoned = 0;

var statSpritesSummoned = 0;
var statTotalSpritesSummoned = 0;

var statTavernsBuilt = 0;
var statPaperMillsBuilt = 0;

//Battle Stats
var statTotalEnemiesDefeated = 0;
var statEnemiesDefeated = 0;
var statUnitsKilledInBattle = 0;
var statTotalUnitsKilledInBattle = 0;
var statTotalGoldStolen = 0;
var statTotalPeasantsKilled = 0;
var statTotalMinersKilled = 0;
var statTotalIronStolen = 0;
var statTotalSilverStolen = 0;
var statTotalUnitsSeduced = 0;

var statManaGained = 0;
var statTotalManaGained = 0;
var statManaUsed = 0;
var statTotalManaUsed = 0;

var statCastedFireBall = 0;
var statTotalCastedFireBall = 0;

var statCastedTimeSkip = 0;
var statTotalCastedTimeSkip = 0;

var timesClicked = 0;


//Achievement//
	//Clicks
var ach1kClicks = false;
var ach10kClicks = false;
var ach100kClicks = false;
var ach1MClicks = false;
var ach1BClicks = false;

	//Gold
var ach1kGold = false;
var ach100kGold = false;
var ach1MGold = false;
var ach1BGold = false;
var ach1TGold = false;

function incTimesClicked(){
	timesClicked += 1;
	document.getElementById('statTimesClicked').innerHTML = timesClicked;
	
	if(timesClicked >= 1000 && ach1kClicks === false){
		ach1kClicks = true;
		document.getElementById('Clicked1KTimes').classList.add('achievementearned');
		document.getElementById('Clicked1KTimes').classList.add('achievement');
		$.notify({
			title: "<strong>Achievement! </strong>",
			message: "You have clicked 1,000 times!",
			delay: 30000},{
		type: 'warning'
		});			
	}
	
	if(timesClicked >= 10000 && ach10kClicks === false){
		ach10kClicks = true;
		document.getElementById('Clicked10KTimes').classList.add('achievementearned');
		document.getElementById('Clicked10KTimes').classList.add('achievement');
		$.notify({
			title: "<strong>Achievement! </strong>",
			message: "You have clicked 10,000 times!",
			delay: 30000},{
		type: 'warning'
		});			
	}	
	
	if(timesClicked >= 100000 && ach100kClicks === false){
		ach100kClicks = true;
		document.getElementById('Clicked100KTimes').classList.add('achievementearned');
		document.getElementById('Clicked100KTimes').classList.add('achievement');
		$.notify({
			title: "<strong>Achievement! </strong>",
			message: "You have clicked 100,000 times!",
			delay: 30000},{
		type: 'warning'
		});			
	}
	
	if(timesClicked >= 1000000 && ach1MClicks === false){
		ach1MClicks = true;
		document.getElementById('Clicked1MTimes').classList.add('achievementearned');
		document.getElementById('Clicked1MTimes').classList.add('achievement');
		$.notify({
			title: "<strong>Achievement! </strong>",
			message: "You have clicked 1,000,000 times!",
			delay: 30000},{
		type: 'warning'
		});			
	}	

	if(timesClicked >= 1000000 && ach1BClicks === false){
		ach1BClicks = true;
		document.getElementById('Clicked1BTimes').classList.add('achievementearned');
		document.getElementById('Clicked1BTimes').classList.add('achievement');
		$.notify({
			title: "<strong>Achievement! </strong>",
			message: "You have clicked 1,000,000,000 times!",
			delay: 30000},{
		type: 'warning'
		});			
	}
}

document.body.addEventListener('click', incTimesClicked, true);

function achieveCheckGold(){
	if(gold >= 1000 && ach1kGold === false){
		ach1kGold = true;
		document.getElementById('Collected1KGold').classList.add('achievementearned');
		document.getElementById('Collected1KGold').classList.add('achievement');
		$.notify({
			title: "<strong>Achievement! </strong>",
			message: "You have gained 1,000 gold!",
			delay: 30000},{
		type: 'warning'
		});			
	}
	if(gold >= 100000 && ach100kGold === false){
		ach100kGold = true;
		document.getElementById('Collected100KGold').classList.add('achievementearned');
		document.getElementById('Collected100KGold').classList.add('achievement');
		$.notify({
			title: "<strong>Achievement! </strong>",
			message: "You have gained 100,000 gold!",
			delay: 30000},{
		type: 'warning'
		});			
	}
	if(gold >= 1000000 && ach1MGold === false){
		ach1MGold = true;
		document.getElementById('Collected1MGold').classList.add('achievementearned');
		document.getElementById('Collected1MGold').classList.add('achievement');
		$.notify({
			title: "<strong>Achievement! </strong>",
			message: "You have gained 1,000,000 gold!",
			delay: 30000},{
		type: 'warning'
		});			
	}
	
	if(gold >= 100000000 && ach1BGold === false){
		ach1BGold = true;
		$.notify({
			title: "<strong>Achievement! </strong>",
			message: "You have gained 1,000,000,000 gold!",
			delay: 30000},{
		type: 'warning'
		});			
	}
	
	if(gold >= 100000000000 && ach1TGold === false){
		ach1TGold = true;
		$.notify({
			title: "<strong>Achievement! </strong>",
			message: "You have gained 1,000,000,000,000 gold!",
			delay: 30000},{
		type: 'warning'
		});			
	}		
}