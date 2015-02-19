//Save and Loading Script for HW //

	function saveCookie(){
		//Currency variables
		$.cookie("gold",gold,{expires:365});
		$.cookie("faith",faith,{expires:365});
		$.cookie("souls",souls,{expires:365});
		$.cookie("iron",iron,{expires:365});
		//Unit variables
		$.cookie("peasants",peasants,{expires:365});
		$.cookie("miners",miners,{expires:365});
		$.cookie("personPage",personPage,{expires:365});
		$.cookie("tavernpeasants",tavernpeasants,{expires:365});
		$.cookie("taverns",taverns,{expires:365});
		$.cookie("priests",priests,{expires:365});
		$.cookie("paladins",paladins,{expires:365});
		//Building flags
		$.cookie("minesOpened",minesOpened,{expires:365});
		$.cookie("cathedralOpened",cathedralOpened,{expires:365});
		$.cookie("barracksOpened",barracksOpened,{expires:365});
		//Battle flags
		$.cookie("defeatedOgre",defeatedOgre,{expires:365});
		
		document.getElementById('saveAlert').style.display = "block";
		var clearSave = setInterval(function() {
		  var ticker = 0     	  
		  //update the progress
		  //$bar.width(percentComplete +'%');
		  //	$bar.attr('aria-valuenow',percentComplete);
		  //	$bar.text(percentComplete+'%');
			ticker = ticker + 1;   
			
		  //clear timer when max is reach
		  if (ticker == 5){
			clearInterval(clearSave);
			if(document.getElementById('saveAlert').style.display == "block"){
				document.getElementById("saveAlert").style.display = "none";
			}	
		  }
		}, 1000);			
	};
	
	function deleteCookie(){
		var cookies = $.cookie();
		for(var cookie in cookies) {
		   $.removeCookie(cookie);
		}
		console.log("Your cookies have been cleared.")
	};
	
	function loadCookie(){
	//	console.debug($.cookie("gold"));
		if($.cookie("gold") != null){
			gold = parseInt($.cookie("gold"));
			document.getElementById("gold").innerHTML = gold;
		}
		if($.cookie("faith") != null){
			faith = parseInt($.cookie("faith"));
			document.getElementById("faith").innerHTML = faith;
		}			
		if($.cookie("souls") != null){
			souls = parseInt($.cookie("souls"));
			document.getElementById("souls").innerHTML = souls;
		}		
		if($.cookie("iron") != null){
			iron = parseInt($.cookie("iron"));
			document.getElementById("iron").innerHTML = iron;
		}			
		if($.cookie("peasants") != null){
			peasants = parseInt($.cookie("peasants"));
			document.getElementById("peasants").innerHTML = peasants;
		}	
		if($.cookie("miners") != null){
			miners = parseInt($.cookie("miners"));
			document.getElementById("miners").innerHTML = miners;
		}
		if($.cookie("personPage") != null){
			personPage = parseInt($.cookie("personPage"));
			document.getElementById("personPage").innerHTML = personPage;
		}			
		if($.cookie("minesOpened") != null){
			var myBool = ($.cookie("minesOpened") == "true")
			if(myBool == true){
				minesOpened = true
				document.getElementById("Mining").style.display = "block";
			}
		}			
		if($.cookie("tavernpeasants") != null){
			tavernpeasants = parseInt($.cookie("tavernpeasants"));
			document.getElementById("tavernpeasants").innerHTML = tavernpeasants;
		}					
		if($.cookie("taverns") != null){
			taverns = parseInt($.cookie("taverns"));
			document.getElementById("taverns").innerHTML = taverns;
		}
		if($.cookie("barracksOpened") != null){
			var myBool = ($.cookie("barracksOpened") == "true")
			if(myBool == true){
				barracksOpened = true
				document.getElementById('Barracks').style.display = "block";
				document.getElementById('BarracksMenu').style.display = "block";
			}
		}			
		if($.cookie("cathedralOpened") != null){
			var myBool = ($.cookie("cathedralOpened") == "true")
			if(myBool == true){
				cathedralOpened = true
				document.getElementById('Cathedral').style.display = "block";
				document.getElementById('FaithMenu').style.display = "block";
			}
		}		
		if($.cookie("priests") != null){
			priests = parseInt($.cookie("priests"));
			document.getElementById("priests").innerHTML = priests;
		}			
		if($.cookie("paladins") != null){
			paladins = parseInt($.cookie("paladins"));
			document.getElementById("paladins").innerHTML = paladins;
		}
		
		if($.cookie("defeatedOgre") != null){
			var myBool = ($.cookie("defeatedOgre") == "true")
			if(myBool == true){
				defeatedOgre = true;
				document.getElementById('PaladinTab').style.display = "block";
				document.getElementById('PaladinWeaponTab').style.display = "block";   //Until a drop unlocks paladin weapon upgrade
				document.getElementById('BatOgreProgBarBox').style.display = "none";
				document.getElementById("btnBatOgre").disabled = true;
				document.getElementById("btnBatOgre").innerHTML = "Ogre Defeated!";
			}
		}	
		
		console.log("Your cookies have been loaded.")
	};
	
	function hardReset(){
	//set all variables to zero, delete cookies
	var answer
		answer = confirm("Are you sure you want to hard reset? You will LOSE ALL YOUR DATA!");
		if(answer == true){
			deleteCookie();
			location.reload(false);
		}
	};
	
window.setInterval(function(){					//Autosaves every minute
	saveCookie();
}, 60000);


			