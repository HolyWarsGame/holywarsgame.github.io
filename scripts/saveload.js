//Save and Loading Script for HW //

	function saveCookie(){
		//Currency variables
		$.cookie("gold",gold,{expires:365});
		$.cookie("faith",faith,{expires:365});
		$.cookie("souls",souls,{expires:365});
		$.cookie("iron",iron,{expires:365});
		$.cookie("goldStolen",goldStolen,{expires:365});
		$.cookie("totalTimePlayed",totalTimePlayed,{expires:365});
		//Unit variables
		$.cookie("peasants",peasants,{expires:365});
		$.cookie("miners",miners,{expires:365});
		$.cookie("personPage",personPage,{expires:365});
		$.cookie("squires",squires,{expires:365});
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
		$.cookie("defeatedBandits",defeatedBandits,{expires:365});
		$.cookie("defeatedHhounds",defeatedHhounds,{expires:365});
		$.cookie("peasantsKilled",peasantsKilled,{expires:365});
		$.cookie("minersKilled", minersKilled,{expires:365});
		//Upgradeflags
		$.cookie("pGoldClickUpgrade",pGoldClickUpgrade,{expires:365});
		$.cookie("mPanningUpgrade",mPanningUpgrade,{expires:365});
		$.cookie("squiresUnlocked",squiresUnlocked,{expires:365});
		//MiscFlags
		$.cookie("lastPage",lastPage,{expires:365});
		
		document.getElementById('saveAlert').style.display = "block";  //Displays saved alert
		
		//Dismisses Save Alert
		var ticker = 0 ;
		var clearSave = setInterval(function() {
			ticker = ticker + 1;   
		  if (ticker == 5){
			clearInterval(clearSave);
			if(document.getElementById('saveAlert').style.display == "block"){
				document.getElementById("saveAlert").style.display = "none";
			}	
		  }
		}, 1000);	
	    //End Dismisses Save Alert
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
		
		if($.cookie("goldStolen") != null){
			goldStolen = parseInt($.cookie("goldStolen"));
			document.getElementById("goldStolen").innerHTML = goldStolen;
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
		if($.cookie("totalTimePlayed") != null){
			totalTimePlayed = parseInt($.cookie("totalTimePlayed"));
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
		if($.cookie("squires") != null){
			squires = parseInt($.cookie("squires"));
			document.getElementById("squires").innerHTML = squires;
		}		
		if($.cookie("minesOpened") != null){
			var myBool = ($.cookie("minesOpened") == "true")
			if(myBool == true){
				minesOpened = true
				document.getElementById('irondiv').style.display = "block";
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
				document.getElementById('armystrdiv').style.display = "block";
			}
		}			
		if($.cookie("cathedralOpened") != null){
			var myBool = ($.cookie("cathedralOpened") == "true")
			if(myBool == true){
				cathedralOpened = true
				document.getElementById('Cathedral').style.display = "block";
				document.getElementById('FaithMenu').style.display = "block";
				document.getElementById('faithdiv').style.display = "block";
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
		
		if($.cookie("pGoldClickUpgrade") != null){
			var myBool = ($.cookie("pGoldClickUpgrade") == "true")
			if(myBool == true){
				pGoldClickUpgrade = true;
				document.getElementById("clickGoldUpgrade").disabled = true;
			}
		}		
		if($.cookie("mPanningUpgrade") != null){
			var myBool = ($.cookie("mPanningUpgrade") == "true")
			if(myBool == true){
				mPanningUpgrade = true;
				document.getElementById("btnminerUpgrade1").disabled = true;
			}
		}
		if($.cookie("squiresUnlocked") != null){
			var myBool = ($.cookie("squiresUnlocked") == "true")
			if(myBool == true){
				squiresUnlocked = true;
				document.getElementById("btnPageUpgrade1").disabled = true;
				document.getElementById('SquireTab').style.display = "block";
			}
		}		
		

		if($.cookie("defeatedBandits") != null){
			var myBool = ($.cookie("defeatedBandits") == "true")
			if(myBool == true){
				defeatedBandits = true;
				document.getElementById('BatBanditsProgBarBox').style.display = "none";
				document.getElementById('FaithStructuresTab').style.display = "block";				
				document.getElementById("btnBatBandits").innerHTML = "Bandits Defeated!";
				document.getElementById("btnBatBandits").disabled = true;
				defeatedBandits = true;
			}
		}			

		if($.cookie("defeatedOgre") != null){
			var myBool = ($.cookie("defeatedOgre") == "true")
			if(myBool == true){
				defeatedOgre = true;
				document.getElementById('soulsdiv').style.display = "block";
				document.getElementById('PaladinTab').style.display = "block";
//				document.getElementById('PaladinWeaponTab').style.display = "block";   //Until a drop unlocks paladin weapon upgrade
				document.getElementById('BatOgreProgBarBox').style.display = "none";
				document.getElementById("btnBatOgre").disabled = true;
				document.getElementById("btnBatOgre").innerHTML = "Ogre Defeated!";
				document.getElementById('BatHellhound').style.display = "block";
			}
		}

		if($.cookie("defeatedHhounds") != null){
			var myBool = ($.cookie("defeatedHhounds") == "true")
				if(myBool == true){
					defeatedHhounds = true;
					document.getElementById('Ethereal').style.display = "block";
					document.getElementById('BatHhoundProgBarBox').style.display = "none";
					document.getElementById("btnBatHellhound").disabled = true;
					document.getElementById("btnBatHellhound").innerHTML = "Hellhounds Defeated!";
					defeatedHhounds = true;
				}
				else if(defeatedOgre == true){
					setTimeout(function() { hellHoundRaid(); }, 30000);			//killed ogre but haven't defeated hhounds yet, start raids again
				}
		};
		
		if($.cookie("peasantsKilled") != null){
			peasantsKilled = parseInt($.cookie("peasantsKilled"));
			document.getElementById("peasantsKilled").innerHTML = peasantsKilled;
		}			

		if($.cookie("minersKilled") != null){
			minersKilled = parseInt($.cookie("minersKilled"));
			document.getElementById("minersKilled").innerHTML = peasantsKilled;
		}			
		
		if($.cookie("lastPage") != null){
			lastPage = $.cookie("lastPage");
		}
		else{
			lastPage = 'Production';
		}
		
		recalculateCosts();
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


			