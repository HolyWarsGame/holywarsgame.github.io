//Battle script for HW//
var BattlePower = 0;

function calculateBattlePower(){
	BattlePower = BattlePower + personPage * 10;
	BattlePower = BattlePower + paladins * 1000;
};

function battleOgre(number){
	var percentComplete = 0;
	document.getElementById('BatOgreProgBarBox').style.display = "block";	
	var progressBar = document.getElementById('BatOgreProgBar');

	// var go = setInterval(function() {
		// if ( percentComplete == 100) {
			// clearInterval(go);
			// progressBar.style.display = "none";
		// } else {
			// percentComplete = percentComplete + 1;
		// }
		// progressBar.setAttribute("aria-valuenow", percentComplete);
		// console.log(progressBar.get);
		// progressBar.style.width= percentComplete+'%'+';';
	// }, 500);
	$('.progress-bar').each(function() {
  
  	var $bar = $(this);
    var progress = setInterval(function() {
      
      var currWidth = parseInt($bar.attr('aria-valuenow'));
      var maxWidth = parseInt($bar.attr('aria-valuemax'));
      
	  //update the progress
        $bar.width(currWidth+'%');
        $bar.attr('aria-valuenow',currWidth+10);
      
      //clear timer when max is reach
      if (currWidth >= maxWidth){
        clearInterval(progress);
      }
      
    }, 500);
  
	});
};

//function incrementProgBar(elem, percentComplete){
//	document.getElementById(elem).setAttribute("aria-valuenow", percentComplete);
//};


