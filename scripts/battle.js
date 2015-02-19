//Battle script for HW//

//Battle variables needed to be saved//
var defeatedOgre = false;

var BattlePower = 0;

function calculateBattlePower(){
	BattlePower =  (personPage * 10) + (paladins * 1000) * (1.5*weapons);
	document.getElementById("BattlePower").innerHTML = BattlePower;
};

function battleOgre(number){
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
		percentComplete = percentComplete + 5;   
		
      //clear timer when max is reach
      if (currWidth >= maxWidth){
        clearInterval(progress);
		$bar.text("Complete!");
		document.getElementById('unlockPaladinsAlert').style.display = "none";
		document.getElementById('PaladinTab').style.display = "block";		
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


