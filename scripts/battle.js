//Battle script for HW//

//Battle variables needed to be saved//
var defeatedBandits = false;
var defeatedOgre = false;

var BattlePower = 0;

function calculateBattlePower(){
	BattlePower =  (personPage * 10) + (paladins * 1000) * (1.5*(weapons+1));
	document.getElementById("BattlePower").innerHTML = BattlePower;
};

function battleBandits(){
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
		document.getElementById('BatBanditProgBarBox').style.display = "none";
		document.getElementById("btnBatBandits").disabled = true;
		document.getElementById("btnBatBandits").innerHTML = "Bandits Defeated!";
		defeatedBandits = true;
      }
      
    }, 500);
};

function battleOgre(){
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
		document.getElementById('PaladinTab').style.display = "block";
		document.getElementById('PaladinWeaponTab').style.display = "block"; //Until a drop unlocks paladin weapon upgrade
		document.getElementById('BatOgreProgBarBox').style.display = "none";
		document.getElementById("btnBatOgre").disabled = true;
		document.getElementById("btnBatOgre").innerHTML = "Ogre Defeated!";
		defeatedOgre = true;
      }
      
    }, 500);
};

window.setInterval(function(){					//Enables/disables buttons 
	calculateBattlePower();
}, 100);


