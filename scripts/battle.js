//Battle script for HW//
var BattlePower = 0;

function calculateBattlePower(){
	BattlePower = BattlePower + personPage * 10;
	BattlePower = BattlePower + paladins * 1000;
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
		percentComplete = percentComplete + 1;   
		
      //clear timer when max is reach
      if (currWidth >= maxWidth){
        clearInterval(progress);
		$bar.text("Complete!");
		document.getElementById("btnBatOgre").disabled = false;
		document.getElementById("btnBatOgre").innerHTML = "Ogre Defeated!";
      }
      
    }, 500);
  

};

//function incrementProgBar(elem, percentComplete){
//	document.getElementById(elem).setAttribute("aria-valuenow", percentComplete);
//};


