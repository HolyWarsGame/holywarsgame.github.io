//Save and Loading Script for HW //

	function saveCookie(){
		if(typeof(Storage) !== "undefined"){
		//Currency variables
		localStorage.setItem("gold",gold);
		localStorage.setItem("iron",iron);
		localStorage.setItem("silver",silver);			
		localStorage.setItem("faith",faith);
		localStorage.setItem("souls",souls);
		localStorage.setItem("mana",mana);
		localStorage.setItem("goldStolen",goldStolen);
		localStorage.setItem("totalTimePlayed",totalTimePlayed);
		
		//Unit variables
 		localStorage.setItem("peasants",Peasant.number);
		localStorage.setItem("miners",Miner.number);
		localStorage.setItem("personPage",Page.number);
		localStorage.setItem("squires",Squire.number);
		localStorage.setItem("knights",Knight.number);
		localStorage.setItem("tavernpeasants",tavernpeasants);
		localStorage.setItem("tavernminers",tavernminers);
		localStorage.setItem("taverns", Tavern.number);
		localStorage.setItem("acolytes",Acolyte.number);
		localStorage.setItem("priests",Priest.number);
		localStorage.setItem("paladins",Paladin.number); 	
		
		//Building flags
		localStorage.setItem("minesOpened",minesOpened);
		localStorage.setItem("cathedralOpened",cathedralOpened);
		localStorage.setItem("barracksOpened",barracksOpened);
		localStorage.setItem("towerUnlocked",towerUnlocked);
		localStorage.setItem("towerBuilt",towerBuilt);
		
		//Battle flags
		localStorage.setItem("defeatedGoblins",defeatedGoblins);
		localStorage.setItem("defeatedBandits",defeatedBandits);
		localStorage.setItem("defeatedOgre",defeatedOgre); 
		localStorage.setItem("defeatedHhounds",defeatedHhounds);
		localStorage.setItem("defeatedArchmage",defeatedArchmage);
		localStorage.setItem("peasantsKilled",peasantsKilled);
		localStorage.setItem("minersKilled", minersKilled);
		
		//Upgradeflags
		localStorage.setItem("pGoldClickUpgrade",pGoldClickUpgrade);
		localStorage.setItem("mPanningUpgrade",mPanningUpgrade);
		localStorage.setItem("mSilverUpgrade",mSilverUpgrade);
		localStorage.setItem("squiresUnlocked",squiresUnlocked);
		localStorage.setItem("knightsUnlocked",knightsUnlocked);
		localStorage.setItem("paladinWepUpgrade",paladinWepUpgrade);
		localStorage.setItem("tavernUpgrade",tavernUpgrade);
		
		//MiscFlags
		localStorage.setItem("lastPage",lastPage);
		
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
	}
	else{
		alert("Sorry! Your web browser does not support local saving. Please try a newer version of your browser.")
	}
};
	
	function deleteCookie(){
		localStorage.clear();
		console.log("Your cookies have been cleared.")
	};
	
	function loadCookie(){
	//	console.debug($.cookie("gold"));
		if(localStorage.gold != null){
			gold = parseInt(localStorage.gold);
			document.getElementById("gold").innerHTML = gold;
		}
		
		if(localStorage.goldStolen != null){
			goldStolen = parseInt(localStorage.goldStolen);
			document.getElementById("goldStolen").innerHTML = goldStolen;
		}
		
		if(localStorage.iron != null){
			iron = parseInt(localStorage.iron);
			document.getElementById("iron").innerHTML = iron;
		}

		if(localStorage.silver != null){
			silver = parseInt(localStorage.silver);
			document.getElementById("silver").innerHTML = silver;
		}		
		
		if(localStorage.faith != null){
			faith = parseInt(localStorage.faith);
			document.getElementById("faith").innerHTML = faith;
		}			
		if(localStorage.souls != null){
			souls = parseInt(localStorage.souls);
			document.getElementById("souls").innerHTML = souls;
		}		

		if(localStorage.mana != null){
			mana = parseInt(localStorage.mana);
			document.getElementById("mana").innerHTML = mana;
		}		
		if(localStorage.totalTimePlayed != null){
			totalTimePlayed = parseInt(localStorage.totalTimePlayed);
		}
		
		if(localStorage.peasants != null){
			Peasant.number = parseInt(localStorage.peasants);
			document.getElementById("peasants").innerHTML = Peasant.number;
		}	
		if(localStorage.miners != null){
			Miner.number = parseInt(localStorage.miners);
			document.getElementById("miners").innerHTML = Miner.number;
		}
		if(localStorage.personPage != null){
			Page.number = parseInt(localStorage.personPage);
			document.getElementById("personPage").innerHTML = Page.number;
		}
		if(localStorage.squires != null){
			Squire.number = parseInt(localStorage.squires);
			document.getElementById("squires").innerHTML = Squire.number;
		}
		if(localStorage.knights != null){
			Knight.number = parseInt(localStorage.knights);
			document.getElementById("knights").innerHTML = Knight.number;
		}			
		if(localStorage.minesOpened != null){
			var myBool = localStorage.minesOpened == "true"
			if(myBool == true){
				minesOpened = true
				document.getElementById('irondiv').style.display = "block";
				document.getElementById("Mining").style.display = "block";
			}
		}			
		if(localStorage.tavernpeasants != null){
			tavernpeasants = parseInt(localStorage.tavernpeasants);
			document.getElementById("tavernpeasants").innerHTML = tavernpeasants;
			document.getElementById("peasants").innerHTML = Peasant.number;
		}		

		if(localStorage.tavernminers != null){
			tavernminers = parseInt(localStorage.tavernminers);
			document.getElementById("tavernminers").innerHTML = tavernminers;
			document.getElementById("miners").innerHTML = Miner.number;
		}			
		
		if(localStorage.taverns != null){
			Tavern.number = parseInt(localStorage.taverns);
			document.getElementById("taverns").innerHTML = Tavern.number;
		}
		
		if(localStorage.barracksOpened != null){
			var myBool = localStorage.barracksOpened == "true"
			if(myBool == true){
				barracksOpened = true
				document.getElementById('Barracks').style.display = "block";
				document.getElementById('BarracksMenu').style.display = "block";
				document.getElementById('armystrdiv').style.display = "block";
			}
		}			
		
		if(localStorage.cathedralOpened != null){
			var myBool = (localStorage.cathedralOpened == "true")
			if(myBool == true){
				cathedralOpened = true
				document.getElementById('Cathedral').style.display = "block";
				document.getElementById('FaithMenu').style.display = "block";
				document.getElementById('faithdiv').style.display = "block";
			}
		}

		if(localStorage.towerUnlocked != null){
			var myBool = (localStorage.towerUnlocked == "true")
			if(myBool == true){
				towerUnlocked = true
				document.getElementById('buildTowerTab').style.display = "block";
			}
		}

		if(localStorage.towerBuilt != null){
			var myBool = (localStorage.towerBuilt == "true")
			if(myBool == true){
				towerBuilt = true
				document.getElementById('Magic').style.display = "block";
				document.getElementById('manadiv').style.display = "block";
				document.getElementById('TowerMenu').style.display = "block";
			}
		}	

		if(localStorage.acolytes != null){
			 Acolyte.number = parseInt(localStorage.acolytes);
			document.getElementById("acolytes").innerHTML = Acolyte.number;
		}			
		
		if(localStorage.priests != null){
			 Priest.number = parseInt(localStorage.priests);
			document.getElementById("priests").innerHTML = Priest.number;
		}	
		
		if(localStorage.paladins != null){
			Paladin.number = parseInt(localStorage.paladins);
			document.getElementById("paladins").innerHTML = Paladin.number;
		}
		
		if(localStorage.pGoldClickUpgrade != null){
			var myBool = (localStorage.pGoldClickUpgrade == "true")
			if(myBool == true){
				pGoldClickUpgrade = true;
				document.getElementById("clickGoldUpgrade").disabled = true;
			}
		}

		if(localStorage.mSilverUpgrade != null){
			var myBool = (localStorage.mSilverUpgrade == "true")
			if(myBool == true){
				mSilverUpgrade = true;
				document.getElementById('silverdiv').style.display = "block";
			}
		}		
		
		if(localStorage.mPanningUpgrade != null){
			var myBool = (localStorage.mPanningUpgrade == "true")
			if(myBool == true){
				mPanningUpgrade = true;
				document.getElementById("btnminerUpgrade1").disabled = true;
			}
		}
		
		if(localStorage.paladinWepUpgrade != null){
			var myBool = (localStorage.paladinWepUpgrade == "true")
			if(myBool == true){
				paladinWepUpgrade = true;
				document.getElementById("paladinUpgrade1").disabled = true;
			}
		}		

		if(localStorage.tavernUpgrade != null){
			var myBool = (localStorage.tavernUpgrade == "true")
			if(myBool == true){
				tavernUpgrade = true;
				document.getElementById("btnUpgradeTavern").disabled = true;
			}
		}		
		
		if(localStorage.squiresUnlocked != null){
			var myBool = (localStorage.squiresUnlocked == "true")
			if(myBool == true){
				squiresUnlocked = true;
				document.getElementById("btnPageUpgrade1").disabled = true;
				document.getElementById('SquireTab').style.display = "block";
			}
		}	
		
		if(localStorage.knightsUnlocked != null){
			var myBool = (localStorage.knightsUnlocked == "true")
			if(myBool == true){
				knightsUnlocked = true;
				document.getElementById("btnSquireUpgrade1").disabled = true;
				document.getElementById('KnightTab').style.display = "block";
			}
		}	
		
		if(localStorage.defeatedGoblins != null){
			var myBool = (localStorage.defeatedGoblins == "true")
			if(myBool == true){
				defeatedGoblins = true;
				document.getElementById('BatGoblinsProgBarBox').style.display = "none";			
				document.getElementById("btnBatGoblins").innerHTML = "Goblins Defeated!";
				document.getElementById("btnBatGoblins").disabled = true;
				defeatedGoblins = true;
			}
		}
			
		if(localStorage.defeatedBandits != null){
			var myBool = (localStorage.defeatedBandits == "true")
			if(myBool == true){
				defeatedBandits = true;
				document.getElementById('BatBanditsProgBarBox').style.display = "none";
				document.getElementById('FaithStructuresTab').style.display = "block";				
				document.getElementById("btnBatBandits").innerHTML = "Bandits Defeated!";
				document.getElementById("btnBatBandits").disabled = true;
				defeatedBandits = true;
			}
		}				
		
		if(localStorage.defeatedOgre != null){
			var myBool = (localStorage.defeatedOgre == "true")
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

		if(localStorage.defeatedHhounds != null){
			var myBool = (localStorage.defeatedHhounds == "true")
				if(myBool == true){
					defeatedHhounds = true;
					document.getElementById('Ethereal').style.display = "block";
					document.getElementById('EtherealMenu').style.display = "block";
					document.getElementById('BatHhoundProgBarBox').style.display = "none";
					document.getElementById("btnBatHellhound").disabled = true;
					document.getElementById("btnBatHellhound").innerHTML = "Hellhounds Defeated!";
					defeatedHhounds = true;
				}
				else if(defeatedOgre == true){
					setTimeout(function() { hellHoundRaid(); }, 30000);			//killed ogre but haven't defeated hhounds yet, start raids again
				}
		};
		
		if(localStorage.defeatedArchmage != null){
			var myBool = (localStorage.defeatedArchmage == "true")
				if(myBool == true){
					document.getElementById('buildTowerTab').style.display = "block";
					document.getElementById('BatMageProgBarBox').style.display = "none";
					document.getElementById("btnBatMage").disabled = true;
					document.getElementById("btnBatMage").innerHTML = "Archmage Defeated!";					
					defeatedArchmage = true;
				}
		};		
		
		if(localStorage.peasantsKilled != null){
			peasantsKilled = parseInt(localStorage.peasantsKilled);
			document.getElementById("peasantsKilled").innerHTML = peasantsKilled;
		}			

		if(localStorage.minersKilled != null){
			minersKilled = parseInt(localStorage.minersKilled);
			document.getElementById("minersKilled").innerHTML = peasantsKilled;
		}			
		
		if(localStorage.lastPage != null){
			lastPage = localStorage.lastPage;
		}
		else{
			lastPage = 'Production';
		}
		recalculateCosts();
		
		if(window.localStorage.length != 0){
			console.log("Save loaded.")
			document.getElementById('loadAlert').style.display = "block";  //Displays saved alert
			
			//Dismisses Save Alert
			var ticker = 0 ;
			var clearSave = setInterval(function() {
				ticker = ticker + 1;   
			  if (ticker == 3){
				clearInterval(clearSave);
				if(document.getElementById('loadAlert').style.display == "block"){
					document.getElementById("loadAlert").style.display = "none";
				}	
			  }
			}, 1000);	
			//End Dismisses Save Alert			
		}
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
			