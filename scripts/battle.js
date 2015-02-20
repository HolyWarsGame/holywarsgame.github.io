//Battle script for HW//

//Battle variables needed to be saved//
var defeatedBandits = false;
var defeatedOgre = false;
var defeatedHhounds = false;
var goldStolen = 0;
var justStolen = 0;
var typeKilled = "none"	//HHound statistic
var justKilled = 0;		//HHound statistic
var peasantsKilled = 0; //HHound statistic
var minersKilled = 0;

var Raidtime = 0;
var BattlePower = 0;

function calculateBattlePower(){
	BattlePower =  (personPage * 10) + (squires*50) + (paladins * 500) * (1.5*(weapons+1));
	document.getElementById("BattlePower").innerHTML = BattlePower;
	document.getElementById("BattlePower2").innerHTML = BattlePower;
};

function banditLoot(){
	if(defeatedBandits == false){
		var raidtime = Math.floor((Math.random() * 90) + 30); ;
//		console.log("Raidtime in: " + raidtime)
		var ticker = raidtime;
		
		var raid = setInterval(function() {
			ticker = ticker - 1;  
//			console.log(ticker);
		  if (ticker == 0){
			clearInterval(raid);
			if(defeatedBandits == false){
				justStolen =  Math.ceil(gold*1/3);
				goldStolen = goldStolen + justStolen;
				gold = gold - justStolen;
				document.getElementById("goldStolen").innerHTML = goldStolen;
				document.getElementById("justStolen").innerHTML = justStolen;
				document.getElementById("banditLootAlert").style.display = "block";
				banditLoot();
				//Dismisses Raid Alert
				var ticker2 = 0 ;
				var clearLootAlert = setInterval(function() {
					ticker2 = ticker2 + 1;   
						if (ticker2 == 20){
							clearInterval(clearLootAlert);
							if(document.getElementById('banditLootAlert').style.display == "block"){
							document.getElementById("banditLootAlert").style.display = "none";
						}	
					}
				}, 1000);	
				//End Dismisses Raid Alert
			}
		  }
		}, 1000);				
	};
};

setTimeout(function() { banditLoot(); }, 30000);//Triggers bandit looting

function battleBandits(){
	if(BattlePower >= 100){
		var percentComplete = 0;
		document.getElementById('BatBanditsProgBarBox').style.display = "block";	  
		var $bar = $(document.getElementById('BatBanditsProgBar'));
		var progress = setInterval(function() {
		  
		  var currWidth = parseInt($bar.attr('aria-valuenow'));
		  var maxWidth = parseInt($bar.attr('aria-valuemax'));
			  
		  //update the progress
			$bar.width(percentComplete +'%');
			$bar.attr('aria-valuenow',percentComplete);
			$bar.text(percentComplete+'%');
			percentComplete = percentComplete + 5;   
			
		  //clear timer when max is reach
		  if (currWidth >= maxWidth){
			clearInterval(progress);
			$bar.text("Complete!");
			document.getElementById('unlockCathAlert').style.display = "block";
			document.getElementById('FaithStructuresTab').style.display = "block";
			document.getElementById('BatBanditsProgBarBox').style.display = "none";
			document.getElementById("btnBatBandits").innerHTML = "Bandits Defeated!";
			document.getElementById("btnBatBandits").disabled = true;
			defeatedBandits = true;
		  } 
		}, 500);
	}
	else{
//		alert("Your army is not strong enough to fight this enemy!");
	}
	
};

function battleOgre(){
	if(BattlePower >= 500){	
		var percentComplete = 0;
		document.getElementById('BatOgreProgBarBox').style.display = "block";	  
		
		var $bar = $(document.getElementById('BatOgreProgBar'));
		var progress = setInterval(function() {
		  
		  var currWidth = parseInt($bar.attr('aria-valuenow'));
		  var maxWidth = parseInt($bar.attr('aria-valuemax'));
			  
		  //update the progress
			$bar.width(percentComplete +'%');
			$bar.attr('aria-valuenow',percentComplete);
			$bar.text(percentComplete+'%');
			percentComplete = percentComplete + 1;   
			
		  //clear timer when max is reach
		  if (currWidth >= maxWidth){
			clearInterval(progress);
			$bar.text("Complete!");
			document.getElementById('unlockPaladinsAlert').style.display = "block";
			document.getElementById('soulsdiv').style.display = "block";			
			document.getElementById('PaladinTab').style.display = "block";
			document.getElementById('PaladinUpgradeTab').style.display = "block"; //Until a drop unlocks paladin weapon upgrade
			document.getElementById('BatOgreProgBarBox').style.display = "none";
			document.getElementById("btnBatOgre").disabled = true;
			document.getElementById("btnBatOgre").innerHTML = "Ogre Defeated!";
			defeatedOgre = true;
			setTimeout(function() { triggerHellhound(); }, 30000);
		  }
		  
		}, 500);
	}
	else{
//		alert("Your army is not strong enough to fight this enemy!");		
	};
};

function triggerHellhound(){
	document.getElementById('hellhoundUnlockAlert').style.display = "block";
	document.getElementById('BatHellhound').style.display = "block";
	hellHoundRaid();
}

function hellHoundRaid(){
	if(defeatedHhounds == false){
		var raidtime = Math.floor((Math.random() * 90) + 45); ;
		console.log("Raidtime in: " + raidtime)
		var ticker = raidtime;
		
		var raid = setInterval(function() {
			ticker = ticker - 1;  
			console.log(ticker);
		  if (ticker == 0){
			clearInterval(raid);
			if(defeatedHhounds == false){
				hellhoundCull();
				hellHoundRaid();
				//Dismisses Raid Alert
				var ticker2 = 0 ;
				var clearAttackAlert = setInterval(function() {
					ticker2 = ticker2 + 1;   
						if (ticker2 == 20){
							clearInterval(clearAttackAlert);
							if(document.getElementById('hellHoundAttackAlert').style.display == "block"){
							document.getElementById("hellHoundAttackAlert").style.display = "none";
						}	
					}
				}, 1000);	
				//End Dismisses Raid Alert
			}
		  }
		}, 1000);				
	};	
}

function hellhoundCull(){
	var flipCoin = Math.floor(Math.random()*10+1);    //Determining which unit gets killed
		if(flipCoin%2 == 0){
			typeKilled = "peasants";
			document.getElementById("typeKilled").innerHTML = typeKilled;
			justKilled = Math.floor(peasants / 10);
			peasants = peasants - justKilled;
			document.getElementById("justKilled").innerHTML = justKilled;
			peasantsKilled = peasantsKilled + justKilled;
			document.getElementById("peasants").innerHTML = peasants;
			document.getElementById('hellHoundAttackAlert').style.display = "block"
		}
		else{
			typeKilled = "miners";
			document.getElementById("typeKilled").innerHTML = typeKilled;
			justKilled = Math.floor(miners / 10);
			miners = miners - justKilled;
			document.getElementById("justKilled").innerHTML = justKilled;
			minersKilled = minersKilled + justKilled;
			document.getElementById("miners").innerHTML = miners;
			document.getElementById('hellHoundAttackAlert').style.display = "block"
		}
		recalculateCosts();
};

function battleHellhound(){
	if(BattlePower >= 200){	
		var percentComplete = 0;
		document.getElementById('BatHhoundProgBarBox').style.display = "block";	  
		
		var $bar = $(document.getElementById('BatHhoundProgBar'));
		var progress = setInterval(function() {
		  
		  var currWidth = parseInt($bar.attr('aria-valuenow'));
		  var maxWidth = parseInt($bar.attr('aria-valuemax'));
			  
		  //update the progress
			$bar.width(percentComplete +'%');
			$bar.attr('aria-valuenow',percentComplete);
			$bar.text(percentComplete+'%');
			percentComplete = percentComplete + 1;   
			
		  //clear timer when max is reach
		  if (currWidth >= maxWidth){
			clearInterval(progress);
			$bar.text("Complete!");
			document.getElementById('Ethereal').style.display = "block";
			document.getElementById('BatHhoundProgBarBox').style.display = "none";
			document.getElementById("btnBatHellhound").disabled = true;
			document.getElementById("btnBatHellhound").innerHTML = "Hellhounds Defeated!";
			defeatedHhounds = true;
		  } 
		}, 1000);
	}
	else{
//		alert("Your army is not strong enough to fight this enemy!");		
	};
};

window.setInterval(function(){					//Calculates Battle Power 
	calculateBattlePower();
}, 100);


