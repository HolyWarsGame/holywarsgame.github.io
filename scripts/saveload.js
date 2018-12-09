//Save and Loading Script for HW //
	var saveTime;
	var myBool;
	
	function save(key, value){
		if(value !== value){		//Best way to check for NaN atm
			console.log(key + ' is NaN, setting value to 0.');
			eval(key + ' = 0');
			localStorage.setItem(key, 0);
		}
		else{
			localStorage.setItem(key, value);			
		}
		
	}

	function saveCookie(){
		if(typeof(Storage) !== "undefined"){
		saveTime = Date.now();
		save("saveTime", saveTime);
		
		//Currency variables
		save("gold",gold);
		save("wood", wood);
		save("paper", paper);
		save("iron", iron);
		save("coal", coal);
		save("steel", steel);
		save("silver", silver);			
		save("faith", faith);
		save("souls", souls);
		save("tomes", tomes);
		save("mana", mana);
		save("goldStolen", goldStolen);
		save("totalTimePlayed", totalTimePlayed);
		
		//Unit variables
 		save("peasants",Peasant.number - tavernpeasants);
		save("lumberjacks", Lumberjack.number - tavernlumberjacks);
		save("miners",Miner.number - tavernminers);
		save("coalminers", CoalMiner.number);
		save("personPage",Page.number);
		save("squires",Squire.number);
		save("knights",Knight.number);
		save("acolytes",Acolyte.number);
		save("priests",Priest.number);
		save("scribes", Scribe.number);
		save("bishops", Bishop.number);
		save("paladins",Paladin.number); 
		save("shades", Shade.number);
		save("aspects", Aspect.number);
		save("angels", Angel.number);
		save("sprites", Sprite.number);
		
		//Building Variables
		save("taverns", Tavern.number);
		save("tavernpeasants",tavernpeasants);
		save("tavernminers",tavernminers);
		save("tavernlumberjacks",tavernlumberjacks);
		save("papermills", PaperMill.number);
		save("papermillstatus", PaperMill.status);
		save("papermillnumon",PaperMill.numberOn);
		save("arcanelibrary", ArcaneLibrary.number);
		
		//Building flags
		save("lumbermillOpened",lumbermillOpened);
		save("minesOpened",minesOpened);
		save("churchOpened",churchOpened);
		save("barracksOpened",barracksOpened);
		save("commandPostOpened",commandPostOpened);
		save("unlockedQuesting",unlockedQuesting);
		save("towerUnlocked",towerUnlocked);
		save("towerBuilt",towerBuilt);
		save("forgeOpened",forgeOpened);
		save("coalUnlocked",coalUnlocked);
		save("cathUpgrade", cathUpgrade);
		
		//Battle flags
		save("defeatedBoar", defeatedBoar);
		save("defeatedGoblins",defeatedGoblins);
		save("defeatedBandits",defeatedBandits);
		save("defeatedHermit",defeatedHermit);
		save("defeatedOgre",defeatedOgre); 
		save("defeatedHellhounds",defeatedHellhounds);
		save("defeatedPixie",defeatedPixie);
		save("defeatedArmor",defeatedArmor);
		save("defeatedOoze",defeatedOoze);	
		save("defeatedDwarf",defeatedDwarf);
		save("defeatedArchmage",defeatedArchmage);
		save("defeatedSuccubus",defeatedSuccubus);
		save("defeatedUArmy", defeatedUArmy);
		save("defeatedNecromancer", defeatedNecromancer);
		save("defeatedEarthElemental",defeatedEarthElemental);
		save("defeatedFireElemental",defeatedFireElemental);		
		save("defeatedWaterElemental",defeatedWaterElemental);
		save("defeatedWindElemental",defeatedWindElemental);
		save("defeatedThaumaturge",defeatedThaumaturge);
		save("defeatedCerberus",defeatedCerberus);
		save("defeatedOuro",defeatedOuro);
		save("defeatedBoros",defeatedBoros);
		save("peasantsKilled",peasantsKilled);
		save("minersKilled", minersKilled);
		save("ironAbsorbed",ironAbsorbed);
		save("silverAbsorbed",silverAbsorbed);
		save("unitsSeduced", unitsSeduced);
		save("UARevivedCount",UARevivedCount);
		save("inbattle",inbattle);
		save("curBattling",curBattling);
		save("battlePercent", battlePercent);
		
		//Upgradeflags
		save("pGoldUpgrade",pGoldUpgrade);
		save("pGoldClickUpgrade",pGoldClickUpgrade);
		save("pGoldClickUpgrade2",pGoldClickUpgrade2);
		save("pGoldClickUpgrade3",pGoldClickUpgrade3);
		save("lwoodUpgrade",lwoodUpgrade);
		save("lwoodClickUpgrade",lwoodClickUpgrade);
		save("mPanningUpgrade",mPanningUpgrade);
		save("mSilverUpgrade",mSilverUpgrade);
		save("acFaithUpgrade",acFaithUpgrade);
		save("prFaithUpgrade",prFaithUpgrade);
		save("squiresUnlocked",squiresUnlocked);
		save("knightsUnlocked",knightsUnlocked);
		save("angelsUnlocked", angelsUnlocked);
		save("tomesUnlocked",tomesUnlocked);
		save("PmillEffUpgr", PmillEffUpgr);
		save("PmillEffUpgr2",PmillEffUpgr2);
		save("PmillEffUpgr3",PmillEffUpgr3);
		save("PmillClickUpgr",PmillClickUpgr);
		save("bishopUpgr1", bishopUpgr1);
		save("paladinWepUpgrade",paladinWepUpgrade);
		save("paladinWepUpgrade2",paladinWepUpgrade2);
		save("shadeUpgr1", shadeUpgr1);
		save("angelUpgr1", angelUpgr1);
		save("tavernUpgrade",tavernUpgrade);
		save("tavernUpgrade2", tavernUpgrade2);

		//Quest Variables
		save("inQuest", inQuest);
		save("curQuestType", curQuestType);
		save("UnitOnQuest", UnitOnQuest);
		save("NumUnitOnQuest", NumUnitOnQuest);
		save("questPercent",questPercent);
		save("relicFragment",relicFragment);
		save("QuestDuration",QuestDuration);
		
		//Relic Flags
		save("boughtEarthPendant",boughtEarthPendant);
		save("boughtFirePendant",boughtFirePendant);
		save("boughtWindPendant",boughtWindPendant);
		save("boughtWaterPendant",boughtWaterPendant);
		
		//MiscFlags
		save("faithDonated", faithDonated);
		save("lastPage", lastPage);
		save("DayNight", DayNight);
		save("KingdomName", KingdomName);
		save("gameSaveVer", gameVer);

		//Statistic/Lifetime Variables
		save("statResetted", statResetted);
		
		save("timesClicked",timesClicked);
		
		save("statGoldCollected", statGoldCollected);
		save("statTotalGoldCollected", statTotalGoldCollected);
		save("statSelfGoldCollected", statSelfGoldCollected);
		save("statTotalSelfGoldCollected", statTotalSelfGoldCollected);

		save("statWoodCollected", statWoodCollected);
		save("statSelfWoodCollected", statSelfWoodCollected);
		save("statTotalWoodCollected", statTotalWoodCollected);
		save("statTotalSelfWoodCollected", statTotalSelfWoodCollected);
		
		save("statIronCollected", statIronCollected);
		save("statTotalIronCollected", statTotalIronCollected);
		
		save("statCoalCollected", statCoalCollected);
		save("statTotalCoalCollected", statTotalCoalCollected);		

		save("statSteelCollected", statSteelCollected);
		save("statTotalSteelCollected", statTotalSteelCollected);				
		
		save("statSilverCollected", statSilverCollected);
		save("statTotalSilverCollected", statTotalSilverCollected);

		save("statPaperCrafted", statPaperCrafted);
		save("statSelfPaperCrafted", statSelfPaperCrafted);
		save("statTotalPaperCrafted", statTotalPaperCrafted);
		save("statTotalSelfPaperCrafted", statTotalSelfPaperCrafted);
		
		save("statTomesCrafted", statTomesCrafted);
		save("statSelfTomesCrafted", statSelfTomesCrafted);
		save("statTotalTomesCrafted", statTotalTomesCrafted);
		
		save("statFaithCollected",statFaithCollected);
		save("statTotalFaithCollected",statTotalFaithCollected);

		save("statSoulsCollected",statSoulsCollected);
		save("statTotalSoulsCollected",statTotalSoulsCollected);
		
		save("statPeasantsHired", statPeasantsHired);
		save("statSelfPeasantsHired", statSelfPeasantsHired);
		save("statTotalSelfPeasantsHired", statTotalSelfPeasantsHired);
		save("statTavernPeasantsHired", statTavernPeasantsHired);
		save("statTotalTavernPeasantsHired", statTotalTavernPeasantsHired);
		save("statTotalPeasantsHired", statTotalPeasantsHired);

		save("statMinersHired", statMinersHired);
		save("statSelfMinersHired", statSelfMinersHired);
		save("statTotalSelfMinersHired", statTotalSelfMinersHired);
		save("statTavernMinersHired", statTavernMinersHired);
		save("statTotalTavernMinersHired", statTotalTavernMinersHired);
		save("statTotalMinersHired", statTotalMinersHired);
		
		save("statCoalMinersHired", statCoalMinersHired);
		save("statTotalCoalMinersHired", statTotalCoalMinersHired);	
		
		save("statLumberjacksHired", statLumberjacksHired);
		save("statSelfLumberjacksHired", statSelfLumberjacksHired);
		save("statTotalSelfMinersHired", statTotalSelfMinersHired);
		save("statTavernLumberjacksHired", statTavernLumberjacksHired);
		save("statTotalTavernLumberjacksHired", statTotalTavernLumberjacksHired);
		save("statTotalLumberjacksHired", statTotalLumberjacksHired);		

		save("statTavernsBuilt", statTavernsBuilt);
		save("statPaperMillsBuilt", statPaperMillsBuilt);

		save("statAcolytesRecruited", statAcolytesRecruited);
		save("statTotalAcolytesRecruited", statTotalAcolytesRecruited);

		save("statPriestsTrained", statPriestsTrained);
		save("statTotalPriestsTrained", statTotalPriestsTrained);

		save("statBishopsTrained", statBishopsTrained);
		save("statTotalBishopsTrained", statTotalBishopsTrained);

		save("statPagesTrained", statPagesTrained);
		save("statTotalPagesTrained", statTotalPagesTrained);

		save("statSquiresTrained", statSquiresTrained);
		save("statTotalSquiresTrained", statTotalSquiresTrained);

		save("statKnightsTrained", statKnightsTrained);
		save("statTotalKnightsTrained", statTotalKnightsTrained);

		save("statPaladinsTrained", statPaladinsTrained);
		save("statTotalPaladinsTrained", statTotalPaladinsTrained);

		save("statShadesSummoned", statShadesSummoned);
		save("statTotalShadesSummoned", statTotalShadesSummoned);

		save("statAspectsTrained", statAspectsTrained);
		save("statTotalAspectsTrained", statTotalAspectsTrained);

		save("statAngelsSummoned", statAngelsSummoned);
		save("statTotalAngelsSummoned", statTotalAngelsSummoned);

		save("statTotalEnemiesDefeated",statTotalEnemiesDefeated);
		save("statEnemiesDefeated",statEnemiesDefeated);

		save("statTotalGoldStolen",statTotalGoldStolen);

		save("statTotalPeasantsKilled",statTotalPeasantsKilled);
		save("statTotalMinersKilled",statTotalMinersKilled);

		save("statTotalIronStolen",statTotalIronStolen);
		save("statTotalSilverStolen",statTotalSilverStolen);
		
		save("statTotalUnitsSeduced",statTotalUnitsSeduced);
		
		save("statUnitsKilledInBattle",statUnitsKilledInBattle);
		save("statTotalUnitsKilledInBattle",statTotalUnitsKilledInBattle);
	
		save("statManaGained", statManaGained);
		save("statTotalManaGained", statTotalManaGained);
		save("statManaUsed", statManaUsed);
		save("statTotalManaUsed", statManaUsed);

		save("statCastedFireBall", statCastedFireBall);
		save("statTotalCastedFireBall", statTotalCastedFireBall);

		save("statCastedTimeSkip", statCastedTimeSkip);
		save("statTotalCastedTimeSkip", statTotalCastedTimeSkip);		
		
		//Achievements
		save("ach1kClicks",ach1kClicks);
		save("ach10kClicks",ach10kClicks);
		save("ach100kClicks",ach100kClicks);
		save("ach1MClicks",ach1MClicks);
		save("ach1BClicks",ach1BClicks);
		save("ach1kGold",ach1kGold);
		save("ach100kGold",ach100kGold);
		save("ach1MGold",ach1MGold);
		save("ach1BGold",ach1BGold);
		save("ach1TGold",ach1TGold);	
			
		
		var notify = $.notify({
			icon: 'glyphicon glyphicon-floppy-disk',
			message: '<strong>Saving</strong> Do not close this page...'},{
			type: 'success',
			allow_dismiss: false,
			showProgressbar: true,
			delay: 1500
		});

		setTimeout(function() {
			notify.update('message', '<strong>Saving</strong>  Saving your progress.');
		}, 1000);

		
	}
	else{
		alert("Sorry! Your web browser does not support local saving. Please try a newer version of your browser.");
	}
}
	
	function deleteCookie(){
		localStorage.clear();
		console.log("Your cookies have been cleared.");
	}
	
	function loadCookie(){
		if(window.localStorage.length !== 0){		
			if(localStorage.saveTime !== null){
				saveTime = localStorage.saveTime;
	//			console.log(Math.floor((Date.now()-saveTime)/1000));
			}	
			
			if(localStorage.gold !== null){
				gold = parseInt(localStorage.gold);
				document.getElementById("gold").innerHTML = fnum(gold);
			}
			
			if(localStorage.goldStolen !== null){
				goldStolen = parseInt(localStorage.goldStolen);
				document.getElementById("goldStolen").innerHTML = goldStolen;
			}
			
			if(localStorage.wood !== null){
				wood = parseInt(localStorage.wood);
				document.getElementById("wood").innerHTML = fnum(wood);
			}	

			if(localStorage.paper !== null){
				paper = parseInt(localStorage.paper);
				document.getElementById("paper").innerHTML = fnum(paper);
			}			
			
			if(localStorage.iron !== null){
				iron = parseInt(localStorage.iron);
				document.getElementById("iron").innerHTML = fnum(iron);
			}
			
			if(localStorage.coal !== null){
				coal = parseInt(localStorage.coal);
				document.getElementById("coal").innerHTML = fnum(coal);
			}	

			if(localStorage.steel !== null){
				steel = parseInt(localStorage.steel);
				document.getElementById("steel").innerHTML = fnum(steel);
			}				

			if(localStorage.silver !== null){
				silver = parseInt(localStorage.silver);
				document.getElementById("silver").innerHTML = fnum(silver);
			}		
			
			if(localStorage.faith !== null){
				faith = parseInt(localStorage.faith);
				document.getElementById("faith").innerHTML = fnum(faith);
			}			
			if(localStorage.souls !== null){
				souls = parseInt(localStorage.souls);
				document.getElementById("souls").innerHTML = fnum(souls);
			}		
			if(localStorage.tomes !== null){
				tomes = parseInt(localStorage.tomes);
				document.getElementById("tomes").innerHTML = fnum(tomes);
			}	
			if(localStorage.mana !== null){
				mana = parseInt(localStorage.mana);
				document.getElementById("mana").innerHTML = fnum(mana);
			}		
			if(localStorage.totalTimePlayed !== null){
				totalTimePlayed = parseInt(localStorage.totalTimePlayed);
			}
			
			if(localStorage.peasants !== null){
				Peasant.number = parseInt(localStorage.peasants);
				document.getElementById("peasants").innerHTML = Peasant.number;
			}
			if(localStorage.lumberjacks !== null){
				Lumberjack.number = parseInt(localStorage.lumberjacks);
				document.getElementById("lumberjacks").innerHTML = Lumberjack.number;
			}			
			if(localStorage.miners !== null){
				Miner.number = parseInt(localStorage.miners);
				document.getElementById("miners").innerHTML = Miner.number;
			}
			
			if(localStorage.coalminers !== null){
				CoalMiner.number = parseInt(localStorage.coalminers);
				document.getElementById("coalminers").innerHTML = CoalMiner.number;
			}		
			
			if(localStorage.personPage !== null){
				Page.number = parseInt(localStorage.personPage);
				document.getElementById("personPage").innerHTML = Page.number;
			}
			if(localStorage.squires !== null){
				Squire.number = parseInt(localStorage.squires);
				document.getElementById("squires").innerHTML = Squire.number;
			}
			if(localStorage.knights !== null){
				Knight.number = parseInt(localStorage.knights);
				document.getElementById("knights").innerHTML = Knight.number;
			}
			if(localStorage.lumbermillOpened !== null){
				myBool = localStorage.lumbermillOpened == "true";
				if(myBool === true){
					lumbermillOpened = true;
					document.getElementById('WoodcuttingTab').style.display = "block";
				}
			}	

			if(localStorage.minesOpened !== null){
				myBool = localStorage.minesOpened == "true";
				if(myBool === true){
					minesOpened = true;
					document.getElementById('irondiv').style.display = "block";
					document.getElementById("Mining").style.display = "block";
					document.getElementById('OpenBarracksTab').style.display = "block";
					document.getElementById('OpenCommandPostTab').style.display = "block";
					document.getElementById('buildForgeTab').style.display = "block";					
				}
			}		

			if(localStorage.tavernpeasants !== null){
				tavernpeasants = parseInt(localStorage.tavernpeasants);
				Peasant.number = Peasant.number + tavernpeasants;
				document.getElementById("tavernpeasants").innerHTML = tavernpeasants;
				document.getElementById("peasants").innerHTML = Peasant.number;
			}		

			if(localStorage.tavernminers !== null){
				tavernminers = parseInt(localStorage.tavernminers);
				Miner.number = Miner.number + tavernminers;
				document.getElementById("tavernminers").innerHTML = tavernminers;
				document.getElementById("miners").innerHTML = Miner.number;
			}			
			if(localStorage.tavernlumberjacks !== null){
				tavernlumberjacks = parseInt(localStorage.tavernlumberjacks);
				Lumberjack.number = Lumberjack.number + tavernlumberjacks;
				document.getElementById("tavernlumberjacks").innerHTML = tavernlumberjacks;
				document.getElementById("lumberjacks").innerHTML = Lumberjack.number;
			}		
			if(localStorage.taverns !== null){
				Tavern.number = parseInt(localStorage.taverns);
				document.getElementById("taverns").innerHTML = Tavern.number;
			}
			
			if(localStorage.papermills !== null){
				PaperMill.number = parseInt(localStorage.papermills);
				document.getElementById("papermills").innerHTML = PaperMill.number;
				if(localStorage.papermillstatus !== null){
					PaperMill.status = localStorage.papermillstatus;
				}
				if(localStorage.papermillnumon !== null){
					PaperMill.numberOn = parseInt(localStorage.papermillnumon);
				}
			}
			
			if(localStorage.arcanelibrary !== null){
				ArcaneLibrary.number = parseInt(localStorage.arcanelibrary);
				document.getElementById("ArcaneLibrary").innerHTML = ArcaneLibrary.number;
			}		
			
			if(localStorage.barracksOpened !== null){
				myBool = localStorage.barracksOpened == "true";
				if(myBool === true){
					barracksOpened = true;
					document.getElementById('Barracks').style.display = "block";
					document.getElementById('BarracksMenu').style.display = "block";
					document.getElementById('armystrdiv').style.display = "block";
				}
			}		

			if(localStorage.commandPostOpened !== null){
				myBool = localStorage.commandPostOpened == "true";
				if(myBool === true){
					commandPostOpened = true;
					document.getElementById('CommandMenu').style.display = "block";
					document.getElementById('CommandPost').style.display = "block";
					document.getElementById('CommandPostDiv').style.display = "block";
				}
			}	
			
			if(localStorage.unlockedQuesting !== null){
				myBool = localStorage.unlockedQuesting == "true";
				if(myBool === true){
					unlockedQuesting = true;
					unlockQuesting.enableFlag();
					checkQuestGoButton();
				}
			}			
			
			if(localStorage.churchOpened !== null){
				myBool = (localStorage.churchOpened == "true");
				if(myBool === true){
					churchOpened = true;
					document.getElementById('Church').style.display = "block";
					document.getElementById('FaithMenu').style.display = "block";
					document.getElementById('faithdiv').style.display = "block";
				}
			}
			
			if(localStorage.cathUpgrade !== null){
				myBool = (localStorage.cathUpgrade == "true");
				if(myBool === true){
					cathUpgrade = true;
					upgradeChurch.enableFlag();
				}
			}		
			

			if(localStorage.towerUnlocked !== null){
				myBool = (localStorage.towerUnlocked == "true");
				if(myBool === true){
					towerUnlocked = true;
					document.getElementById('buildTowerTab').style.display = "block";
				}
			}

			if(localStorage.towerBuilt !== null){
				myBool = (localStorage.towerBuilt == "true");
				if(myBool === true){
					towerBuilt = true;
					document.getElementById('Magic').style.display = "block";
					document.getElementById('manadiv').style.display = "block";
					document.getElementById('TowerMenu').style.display = "block";
				}
			}	

			if(localStorage.forgeOpened !== null){
				myBool = (localStorage.forgeOpened == "true");
				if(myBool === true){
					forgeOpened = true;
					document.getElementById('gathersteel').style.display = "block";
					document.getElementById('steeldiv').style.display = "block";
				}
			}	
			if(localStorage.coalUnlocked !== null){
				myBool = (localStorage.coalUnlocked == "true");
				if(myBool === true){
					coalUnlocked = true;
					document.getElementById('coaldiv').style.display = "block";
					document.getElementById('CoalMining').style.display = "block";
				}
			}			
			if(localStorage.acolytes !== null){
				 Acolyte.number = parseInt(localStorage.acolytes);
				document.getElementById("acolytes").innerHTML = Acolyte.number;
			}			
			
			if(localStorage.priests !== null){
				 Priest.number = parseInt(localStorage.priests);
				document.getElementById("priests").innerHTML = Priest.number;
			}

			if(localStorage.scribes !== null){
				 Scribe.number = parseInt(localStorage.scribes);
				document.getElementById("scribes").innerHTML = Scribe.number;
			}		

			if(localStorage.bishops !== null){
				 Bishop.number = parseInt(localStorage.bishops);
				document.getElementById("bishops").innerHTML = Bishop.number;
			}			
			
			if(localStorage.paladins !== null){
				Paladin.number = parseInt(localStorage.paladins);
				document.getElementById("paladins").innerHTML = Paladin.number;
			}

			if(localStorage.shades !== null){
				Shade.number = parseInt(localStorage.shades);
				document.getElementById("shades").innerHTML = Shade.number;
			}

			if(localStorage.aspects !== null){
				Aspect.number = parseInt(localStorage.aspects);
				document.getElementById("aspects").innerHTML = Aspect.number;
			}

			if(localStorage.angels !== null){
				Angel.number = parseInt(localStorage.angels);
				document.getElementById("angels").innerHTML = Angel.number;
			}

			if(localStorage.sprites !== null){
				Sprite.number = parseInt(localStorage.sprites);
				document.getElementById("sprites").innerHTML = Sprite.number;
			}		
			
			if(localStorage.pGoldUpgrade !== null){
				myBool = (localStorage.pGoldUpgrade == "true");
				if(myBool === true){
					pGoldUpgrade = true;
					peasantUpgrade1.enableFlag();
				}
			}
			
			if(localStorage.pGoldClickUpgrade !== null){
				myBool = (localStorage.pGoldClickUpgrade == "true");
				if(myBool === true){
					pGoldClickUpgrade = true;
					clickGoldUpgrade.enableFlag();
				}
			}

			if(localStorage.pGoldClickUpgrade2 !== null){
				myBool = (localStorage.pGoldClickUpgrade2 == "true");
				if(myBool === true){
					pGoldClickUpgrade2 = true;
					clickGoldUpgrade2.enableFlag();
				}
			}	
			if(localStorage.pGoldClickUpgrade3 !== null){
				myBool = (localStorage.pGoldClickUpgrade3 == "true");
				if(myBool === true){
					pGoldClickUpgrade3 = true;
					clickGoldUpgrade3.enableFlag();
				}
			}		
			if(localStorage.lwoodUpgrade !== null){
				myBool = (localStorage.lwoodUpgrade == "true");
				if(myBool === true){
					lwoodUpgrade = true;
					ljackUpgrade1.enableFlag();
				}
			}				
			
			if(localStorage.lwoodClickUpgrade !== null){
				myBool = (localStorage.lwoodClickUpgrade == "true");
				if(myBool === true){
					lwoodClickUpgrade = true;
					ljackUpgrade2.enableFlag();
				}
			}
			
			
			if(localStorage.mSilverUpgrade !== null){
				myBool = (localStorage.mSilverUpgrade == "true");
				if(myBool === true){
					mSilverUpgrade = true;
					minerUpgrade2.enableFlag();				
				}
			}		
			
			if(localStorage.mPanningUpgrade !== null){
				myBool = (localStorage.mPanningUpgrade == "true");
				if(myBool === true){
					mPanningUpgrade = true;
					minerUpgrade1.enableFlag();
				}
			}
			
			if(localStorage.acFaithUpgrade !== null){
				myBool = (localStorage.acFaithUpgrade == "true");
				if(myBool === true){
					acFaithUpgrade = true;
					acolyteUpgrade1.enableFlag();
				}
			}	
			if(localStorage.prFaithUpgrade !== null){
				myBool = (localStorage.prFaithUpgrade == "true");
				if(myBool === true){
					prFaithUpgrade = true;
					priestUpgrade1.enableFlag();
				}
			}		
			if(localStorage.tomesUnlocked !== null){
				myBool = (localStorage.tomesUnlocked == "true");
				if(myBool === true){
					tomesUnlocked = true;
					tomeUnlock.enableFlag();
				}
			}	
			
			if(localStorage.PmillEffUpgr !== null){
				myBool = (localStorage.PmillEffUpgr == "true");
				if(myBool === true){
					PmillEffUpgr = true;
					pmillEffUpgrade.enableFlag();
				}
			}	
			if(localStorage.PmillEffUpgr2 !== null){
				myBool = (localStorage.PmillEffUpgr2 == "true");
				if(myBool === true){
					PmillEffUpgr2 = true;
					pmillEffUpgrade2.enableFlag();
				}
			}

			if(localStorage.PmillEffUpgr3 !== null){
				myBool = (localStorage.PmillEffUpgr3 == "true");
				if(myBool === true){
					PmillEffUpgr3 = true;
					pmillEffUpgrade3.enableFlag();
				}
			}	

			if(localStorage.PmillClickUpgr !== null){
				myBool = (localStorage.PmillClickUpgr == "true");
				if(myBool === true){
					PmillClickUpgr = true;
					pmillClickUpgrade.enableFlag();
				}
			}			
			if(localStorage.paladinWepUpgrade !== null){
				myBool = (localStorage.paladinWepUpgrade == "true");
				if(myBool === true){
					paladinWepUpgrade = true;
					paladinUpgrade1.enableFlag();
				}
			}

			if(localStorage.paladinWepUpgrade2 !== null){
				myBool = (localStorage.paladinWepUpgrade2 == "true");
				if(myBool === true){
					paladinWepUpgrade2 = true;
					paladinUpgrade2.enableFlag();
				}
			}			
			
			if(localStorage.bishopUpgr1!== null){
				myBool = (localStorage.bishopUpgr1 == "true");
				if(myBool === true){
					bishopUpgr1 = true;
					bishopUpgrade1.enableFlag();
				}
			}	

			if(localStorage.squiresUnlocked !== null){
				myBool = (localStorage.squiresUnlocked == "true");
				if(myBool === true){
					squiresUnlocked = true;
					pageUpgrade1.enableFlag();
				}
			}	
			
			if(localStorage.knightsUnlocked !== null){
				myBool = (localStorage.knightsUnlocked == "true");
				if(myBool === true){
					knightsUnlocked = true;
					squireUpgrade1.enableFlag();
				}
			}	
			
			if(localStorage.shadeUpgr1 !== null){
				myBool = (localStorage.shadeUpgr1 == "true");
				if(myBool === true){
					shadeUpgr1 = true;
					shadeUpgrade1.enableFlag();
				}
			}	
			if(localStorage.angelUpgr1 !== null){
				myBool = (localStorage.angelUpgr1 == "true");
				if(myBool === true){
					angelUpgr1 = true;
					angelUpgrade1.enableFlag();
				}
			}			
			if(localStorage.tavernUpgrade !== null){
				myBool = (localStorage.tavernUpgrade == "true");
				if(myBool === true){
					tavernUpgrade = true;
					upgradeTavern.enableFlag();
				}
			}
			if(localStorage.tavernUpgrade2 !== null){
				myBool = (localStorage.tavernUpgrade2 == "true");
				if(myBool === true){
					tavernUpgrade2 = true;
					upgradeTavern2.enableFlag();
				}
			}			

			
			if(localStorage.angelsUnlocked !== null){
				myBool = (localStorage.angelsUnlocked == "true");
				if(myBool === true){
					angelsUnlocked = true;
				document.getElementById('RelicPedestalTab').style.display = "none";
				document.getElementById('AngelTab').style.display = "block";	
				document.getElementById("Etherealtitle").innerHTML = "Ethereal Rip & Angelic Gates";
				}
			}			
			
			
			if(localStorage.defeatedBoar !== null){
				myBool = (localStorage.defeatedBoar == "true");
				if(myBool === true){
					defeatedBoar = true;
					document.getElementById('boarh4').classList.add('defeatedtitle');	
				}
			}		
			if(localStorage.defeatedGoblins !== null){
				myBool = (localStorage.defeatedGoblins == "true");
				if(myBool === true){
					defeatedGoblins = true;
					document.getElementById('BatGoblinsProgBarBox').style.display = "none";			
					document.getElementById("btnBatGoblins").innerHTML = "Goblins Defeated!";
					document.getElementById("btnBatGoblins").disabled = true;
					document.getElementById('goblinh4').classList.add('defeatedtitle');		
					defeatedGoblins = true;
				}
			}
				
			if(localStorage.defeatedBandits !== null){
				myBool = (localStorage.defeatedBandits == "true");
				if(myBool === true){
					defeatedBandits = true;
					document.getElementById('BatBanditsProgBarBox').style.display = "none";
					document.getElementById('FaithStructuresTab').style.display = "block";				
					document.getElementById("btnBatBandits").innerHTML = "Bandits Defeated!";
					document.getElementById("btnBatBandits").disabled = true;
					document.getElementById('bandith4').classList.add('defeatedtitle');					
					defeatedBandits = true;
				}
			}

			if(localStorage.defeatedHermit !== null){
				myBool = (localStorage.defeatedHermit == "true");
				if(myBool === true){
					defeatedHermit = true;
					document.getElementById('BatHermitProgBarBox').style.display = "none";
					document.getElementById('PaperMillTab').style.display = "block";
					document.getElementById('gatherPaper').style.display = "block";
					document.getElementById('paperdiv').style.display = "block";
					document.getElementById("btnBatHermit").innerHTML = "Bandits Defeated!";
					document.getElementById("btnBatHermit").disabled = true;
					document.getElementById('hermith4').classList.add('defeatedtitle');	
					defeatedBandits = true;
				}
			}				
			
			if(localStorage.defeatedOgre !== null){
				myBool = (localStorage.defeatedOgre == "true");
				if(myBool === true){
					defeatedOgre = true;
					document.getElementById('soulsdiv').style.display = "block";
					document.getElementById('PaladinTab').style.display = "block";
					document.getElementById('BatOgreProgBarBox').style.display = "none";
					document.getElementById("btnBatOgre").disabled = true;
					document.getElementById("btnBatOgre").innerHTML = "Ogre Defeated!";
					document.getElementById('BatHellhound').style.display = "block";
					document.getElementById('ogreh4').classList.add('defeatedtitle');	
				}
			}
			if(localStorage.defeatedHellhounds !== null){
				myBool = (localStorage.defeatedHellhounds == "true");
					if(myBool === true){
						defeatedHellhounds = true;
						document.getElementById('Ethereal').style.display = "block";
						document.getElementById('EtherealMenu').style.display = "block";
						document.getElementById('SpiritualStrength').style.display = "block";
						document.getElementById('BatPixie').style.display = "block";
						document.getElementById('BatArmor').style.display = "block";
						document.getElementById('BatOoze').style.display = "block";
						document.getElementById('BatHhoundProgBarBox').style.display = "none";
						document.getElementById("btnBatHellhound").disabled = true;
						document.getElementById("btnBatHellhound").innerHTML = "Hellhounds Defeated!";
						document.getElementById('hellhoundsh4').classList.add('defeatedtitle');	
						defeatedHellhounds = true;
					}
					else if(defeatedOgre === true){
						setTimeout(function() { Hellhounds.raid(); }, 30000);			//killed ogre but haven't defeated hhounds yet, start raids again
					}
			}

			if(localStorage.defeatedPixie !== null){
				myBool = (localStorage.defeatedPixie == "true");
					if(myBool === true){
						document.getElementById('pixieh4').classList.add('defeatedtitle');
						document.getElementById('ArcaneSpritesTab').style.display = "block";
						defeatedPixie = true;
					}
			}
			
			if(localStorage.defeatedArmor !== null){
				myBool = (localStorage.defeatedArmor == "true");
					if(myBool === true){
						defeatedArmor = true;
						document.getElementById('armorh4').classList.add('defeatedtitle');	
						document.getElementById('AspectofJustice').style.display = "block";
					}
			}

			if(localStorage.defeatedOoze !== null){
				myBool = (localStorage.defeatedOoze == "true");
					if(myBool === true){
						defeatedOoze = true;
						document.getElementById('BatOoze').style.display = "block";
						document.getElementById('BatDwarf').style.display = "block";
						document.getElementById('oozeh4').classList.add('defeatedtitle');	
						document.getElementById('tomeUnlock').style.display = "block";
					}
					else if(defeatedHellhounds === true && myBool === false){
						setTimeout(function() { triggerOoze(); }, 60000);				//restarts ooze raids after defeating hhounds
					}
			}	

			if(localStorage.defeatedDwarf !== null){
				myBool = (localStorage.defeatedDwarf == "true");
					if(myBool === true){
						defeatedDwarf = true;
						document.getElementById('BatDwarf').style.display = "block";
						document.getElementById('Relics').style.display = "block";
						document.getElementById('RelicsMenu').style.display = "block";
						document.getElementById('dwarfh4').classList.add('defeatedtitle');		
					}
			}		
								
			if(localStorage.defeatedArchmage !== null){
				myBool = (localStorage.defeatedArchmage == "true");
					if(myBool === true){
						document.getElementById('buildTowerTab').style.display = "block";
						document.getElementById('BatMageProgBarBox').style.display = "none";
						document.getElementById("btnBatMage").disabled = true;
						document.getElementById("btnBatMage").innerHTML = "Archmage Defeated!";
						document.getElementById('BatSuccubus').style.display = "block";
						document.getElementById('BatUndeadArmy').style.display = "block";
						document.getElementById('archmageh4').classList.add('defeatedtitle');	
						defeatedArchmage = true;
						setTimeout(function() { Succubus.raid(); }, 30000);			//defeated archmage but haven't defeated succubus yet, start raids again
					}
			}	
			if(localStorage.defeatedSuccubus !== null){
				myBool = (localStorage.defeatedSuccubus == "true");
					if(myBool === true){
						document.getElementById('BatSuccubus').style.display = "block";
						document.getElementById('btnBatSuccubus').innerHTML = this.name + " Defeated!"; 
						document.getElementById("btnBatSuccubus").disabled = true;
						document.getElementById('RelicPedestalTab').style.display = "block";
						document.getElementById('succubush4').classList.add('defeatedtitle');	
						defeatedSuccubus = true;
					}
			}
			
			if(localStorage.defeatedUArmy !== null){
				myBool = (localStorage.defeatedUArmy == "true");
					if(myBool === true){
						defeatedUArmy = true;
						document.getElementById('uarmyh4').classList.add('defeatedtitle');	
					}
			}
			
			if(localStorage.UARevivedCount !== null){
				UARevivedCount = parseInt(localStorage.UARevivedCount);
				if(UARevivedCount < 3){
					setTimeout(function() { necroReviveUA(); }, 20000);
				}
				else if( UARevivedCount >= 3){
					document.getElementById("BatNecromancer").style.display = "block";
	//				showBattle('Necromancer');
				}
	//			document.getElementById("UARevivedCount").innerHTML = fnum(UARevivedCount);
			}				
			if(localStorage.defeatedNecromancer !== null){
				myBool = (localStorage.defeatedNecromancer == "true");
					if(myBool === true){
						defeatedNecromancer = true;
						document.getElementById('BatEarthElemental').style.display = "block";
						document.getElementById('BatFireElemental').style.display = "block";	
						document.getElementById('BatWindElemental').style.display = "block";
						document.getElementById('BatWaterElemental').style.display = "block";	
	//					document.getElementById('BatThaumaturge').style.display = "block";
						document.getElementById('necromancerh4').classList.add('defeatedtitle');
						setTimeout(function() { pickElementalRaid(); }, 20000);					
					}
			}
			
			if(localStorage.defeatedEarthElemental !== null){
				myBool = (localStorage.defeatedEarthElemental == "true");
					if(myBool === true){
						defeatedEarthElemental = true;
						document.getElementById('earthelementalh4').classList.add('defeatedtitle');	
						if(checkDefeatedAllElementals() === true){
							document.getElementById('BatThaumaturge').style.display = "block";
						}					
					}
			}

			if(localStorage.defeatedFireElemental !== null){
				myBool = (localStorage.defeatedFireElemental == "true");
					if(myBool === true){
						defeatedFireElemental = true; 
						document.getElementById('fireelementalh4').classList.add('defeatedtitle');	
						if(checkDefeatedAllElementals() === true){
							document.getElementById('BatThaumaturge').style.display = "block";
						}	
					}
			}
			
			if(localStorage.defeatedWindElemental !== null){
				myBool = (localStorage.defeatedWindElemental == "true");
					if(myBool === true){
						defeatedWindElemental = true;
						document.getElementById('windelementalh4').classList.add('defeatedtitle');	
						if(checkDefeatedAllElementals() === true){
							document.getElementById('BatThaumaturge').style.display = "block";
						}						
					}
			}
		
			if(localStorage.defeatedWaterElemental !== null){
				myBool = (localStorage.defeatedWaterElemental == "true");
					if(myBool === true){
						defeatedWaterElemental = true;
						document.getElementById('waterelementalh4').classList.add('defeatedtitle');	
						if(checkDefeatedAllElementals() === true){
							document.getElementById('BatThaumaturge').style.display = "block";
						}						
					}
			}	

			if(localStorage.defeatedThaumaturge !== null){
				myBool = (localStorage.defeatedThaumaturge == "true");
					if(myBool === true){
						defeatedThaumaturge = true;
						document.getElementById('thaumaturgeh4').classList.add('defeatedtitle');	
					}
			}

			if(localStorage.defeatedCerberus !== null){
				myBool = (localStorage.defeatedCerberus == "true");
					if(myBool === true){
						defeatedCerberus = true;
						document.getElementById('cerberush4').classList.add('defeatedtitle');	
					}
			}	
			
			if(localStorage.defeatedOuro !== null){
				myBool = (localStorage.defeatedOuro == "true");
					if(myBool === true){
						defeatedOuro = true;
						document.getElementById('ouroh4').classList.add('defeatedtitle');	
					}
			}
			
			if(localStorage.defeatedBoros !== null){
				myBool = (localStorage.defeatedBoros == "true");
					if(myBool === true){
						defeatedBoros = true;
						document.getElementById('borosh4').classList.add('defeatedtitle');	
					}
			}	
			
			if(localStorage.peasantsKilled !== null){
				peasantsKilled = parseInt(localStorage.peasantsKilled);
				document.getElementById("peasantsKilled").innerHTML = peasantsKilled;
			}			

			if(localStorage.minersKilled !== null){
				minersKilled = parseInt(localStorage.minersKilled);
				document.getElementById("minersKilled").innerHTML = minersKilled;
			}	
			
			if(localStorage.ironAbsorbed !== null){
				ironAbsorbed = parseInt(localStorage.ironAbsorbed);
				document.getElementById("ironAbsorbed").innerHTML = fnum(ironAbsorbed);
				if(ironAbsorbed > 0 ){
					document.getElementById('BatOoze').style.display = "block";
				}
			}	
			
			if(localStorage.silverAbsorbed !== null){
				silverAbsorbed = parseInt(localStorage.silverAbsorbed);
				document.getElementById("silverAbsorbed").innerHTML = fnum(silverAbsorbed);
				if(silverAbsorbed > 0 ){
					document.getElementById('BatOoze').style.display = "block";
				}
			}			
			if(localStorage.unitsSeduced !== null){
				unitsSeduced = parseInt(localStorage.unitsSeduced);
				document.getElementById("unitsSeduced").innerHTML = fnum(unitsSeduced);
			}		
			
			if(localStorage.inbattle !== null){
				myBool = (localStorage.inbattle == "true");
				if(myBool === true){
	//				inbattle = localStorage.inbattle;
					curBattling = localStorage.curBattling;
					battlePercent = localStorage.battlePercent;
					console.log(curBattling + ": " + battlePercent + "%");
					setTimeout(function() { loadBattle(curBattling, battlePercent); }, 500);
				}
			}
			
			if(localStorage.inQuest !== null){
				myBool = (localStorage.inQuest == "true");
				if(myBool === true){
	//				inbattle = localStorage.inbattle;
					curQuestType = localStorage.curQuestType;
					questPercent = localStorage.questPercent;
					UnitOnQuest = localStorage.UnitOnQuest;	
					NumUnitOnQuest = parseInt(localStorage.NumUnitOnQuest);
					QuestDuration = parseInt(localStorage.QuestDuration);
	//				eval('UnitOnQuest.onQuest = NumUnitOnQuest');
					loadedQuest = true;
					console.log(curQuestType + ": " + questPercent + "%" + UnitOnQuest + " " + NumUnitOnQuest);
					setTimeout(function() { loadQuest(curQuestType, questPercent, UnitOnQuest, NumUnitOnQuest); }, 500);
				}
			}
			
			if(localStorage.relicFragment !== null){
				relicFragment = parseInt(localStorage.relicFragment);
				document.getElementById('relicBadge').innerHTML = relicFragment;
				document.getElementById('relicFragments').innerHTML = relicFragment;
			}	

			if(localStorage.boughtEarthPendant !== null){
				myBool = (localStorage.boughtEarthPendant == "true");
				if(myBool === true){
					boughtEarthPendant = true;
					EarthPendant.purchased = true;
				}
			}

			if(localStorage.boughtFirePendant !== null){
				myBool = (localStorage.boughtFirePendant == "true");
				if(myBool === true){
					boughtFirePendant = true;
					FirePendant.purchased = true;
				}
			}

			if(localStorage.boughtWindPendant !== null){
				myBool = (localStorage.boughtWindPendant == "true");
				if(myBool === true){
					boughtWindPendant = true;
					WindPendant.purchased = true;
				}
			}		
			
			if(localStorage.boughtWaterPendant !== null){
				myBool = (localStorage.boughtWaterPendant == "true");
				if(myBool === true){
					boughtWaterPendant = true;
					WaterPendant.purchased = true;
				}
			}
			
			if(localStorage.faithDonated !== null){
				faithDonated = parseInt(localStorage.faithDonated);
				document.getElementById("faithDonated").innerHTML = fnum(faithDonated);
				if(faithDonated >= 500000){
					document.getElementById('RelicPedestalTab').style.display = "none";
				}			
			}		
			
			if(localStorage.KingdomName !== null){
				KingdomName = localStorage.KingdomName;
				//document.getElementById("ProductionMenu").innerHTML = KingdomName;
				document.getElementById("navKingdomName").innerHTML = KingdomName;
				document.title = "Holy Wars - " + KingdomName;
			}	

			if(window.localStorage.length !== 0){
				if(localStorage.gameSaveVer !== null){
					gameSaveVer = localStorage.gameSaveVer;
					console.log("Save version: " + gameSaveVer);
					if(gameSaveVer.substring(0,3) < gameVer.substring(0,3) || gameSaveVer === '' || gameSaveVer.isNan()){			//Uses major version as metric for reset
						alert("The game save data you have came from a too old previous version of the game, and in order to get the best experience, a hard reset is in order. Apologies for the inconvenience!");
							deleteCookie();
							location.reload(true);
					}
				}					
			}
		
			
			if(localStorage.lastPage !== null){
				lastPage = localStorage.lastPage;
			}
			
			if(silver !== 0 || paper !== 0 || BattlePower !== 0){
				$("#SecondaryResources").collapse('show');
			}
			else{
				lastPage = 'Production';
			}


			if(localStorage.DayNight !== null){
				DayNight = localStorage.DayNight;
				if(DayNight === 'night'){
					toggleDayNight();
				}
			}
			

			//Statistic Page variables 
				//Clicking Stats
				
			if(localStorage.timesClicked !== null){
				timesClicked = parseInt(localStorage.timesClicked);
				document.getElementById('statTimesClicked').innerHTML = fnum(timesClicked);
			}		
				//Gold Stats
			if(localStorage.statGoldCollected !== null){
				statGoldCollected = parseInt(localStorage.statGoldCollected);
				document.getElementById('statgoldcollected').innerHTML = fnum(statGoldCollected);
			}
			
			if(localStorage.statTotalGoldCollected !== null){
				statTotalGoldCollected = parseInt(localStorage.statTotalGoldCollected);
				document.getElementById('stattotalgoldcollected').innerHTML = fnum(statTotalGoldCollected);
			}

			if(localStorage.statSelfGoldCollected !== null){
				statSelfGoldCollected = parseInt(localStorage.statSelfGoldCollected);
				document.getElementById('statselfgoldcollected').innerHTML = fnum(statSelfGoldCollected);
			}

			if(localStorage.statTotalSelfGoldCollected !== null){
				statTotalSelfGoldCollected = parseInt(localStorage.statTotalSelfGoldCollected);
				document.getElementById('stattotalselfgoldcollected').innerHTML = fnum(statTotalSelfGoldCollected);
			}			
			
				//Wood Stats
			if(localStorage.statWoodCollected !== null){
				statWoodCollected = parseInt(localStorage.statWoodCollected);
				document.getElementById('statWoodCollected').innerHTML = fnum(statWoodCollected);
			}
			
			if(localStorage.statTotalWoodCollected !== null){
				statTotalWoodCollected = parseInt(localStorage.statTotalWoodCollected);
				document.getElementById('statTotalWoodCollected').innerHTML = fnum(statTotalWoodCollected);
			}

			if(localStorage.statSelfWoodCollected !== null){
				statSelfWoodCollected = parseInt(localStorage.statSelfWoodCollected);
				document.getElementById('statSelfWoodCollected').innerHTML = fnum(statSelfWoodCollected);
			}

			if(localStorage.statTotalSelfWoodCollected !== null){
				statTotalSelfWoodCollected = parseInt(localStorage.statTotalSelfWoodCollected);
				document.getElementById('statTotalSelfWoodCollected').innerHTML = fnum(statTotalSelfWoodCollected);
			}	

				//Iron
			if(localStorage.statIronCollected !== null){
				statIronCollected = parseInt(localStorage.statIronCollected);
				document.getElementById('statIronCollected').innerHTML = fnum(statIronCollected);
			}

			if(localStorage.statTotalIronCollected !== null){
				statTotalIronCollected = parseInt(localStorage.statTotalIronCollected);
				document.getElementById('statTotalIronCollected').innerHTML = fnum(statTotalIronCollected);
			}			
			
				//Silver
			if(localStorage.statSilverCollected !== null){
				statSilverCollected = parseInt(localStorage.statSilverCollected);
				document.getElementById('statSilverCollected').innerHTML = fnum(statSilverCollected);
			}

			if(localStorage.statTotalSilverCollected !== null){
				statTotalSilverCollected = parseInt(localStorage.statTotalSilverCollected);
				document.getElementById('statTotalSilverCollected').innerHTML = fnum(statTotalSilverCollected);
			}			
			
				//Paper
			if(localStorage.statPaperCrafted !== null){
				statPaperCrafted = parseInt(localStorage.statPaperCrafted);
				document.getElementById('statPaperCrafted').innerHTML = fnum(statPaperCrafted);
			}
			
			if(localStorage.statTotalPaperCrafted !== null){
				statTotalPaperCrafted = parseInt(localStorage.statTotalPaperCrafted);
				document.getElementById('statTotalPaperCrafted').innerHTML = fnum(statTotalPaperCrafted);
			}

			if(localStorage.statSelfPaperCrafted !== null){
				statSelfPaperCrafted = parseInt(localStorage.statSelfPaperCrafted);
				document.getElementById('statSelfPaperCrafted').innerHTML = fnum(statSelfPaperCrafted);
			}

			if(localStorage.statTotalSelfPaperCrafted !== null){
				statTotalSelfPaperCrafted = parseInt(localStorage.statTotalSelfPaperCrafted);
				document.getElementById('statTotalSelfPaperCrafted').innerHTML = fnum(statTotalSelfPaperCrafted);
			}			
			
				//Faith
			if(localStorage.statFaithCollected !== null){
				statFaithCollected = parseInt(localStorage.statFaithCollected);
				document.getElementById('statFaithCollected').innerHTML = fnum(statFaithCollected);
			}

			if(localStorage.statTotalFaithCollected !== null){
				statTotalFaithCollected = parseInt(localStorage.statTotalFaithCollected);
				document.getElementById('statTotalFaithCollected').innerHTML = fnum(statTotalFaithCollected);
			}
			
				//Souls
				
			if(localStorage.statSoulsCollected !== null){
				statSoulsCollected = parseInt(localStorage.statSoulsCollected);
				document.getElementById('statSoulsCollected').innerHTML = fnum(statSoulsCollected);
			}

			if(localStorage.statTotalSoulsCollected !== null){
				statTotalSoulsCollected = parseInt(localStorage.statTotalSoulsCollected);
				document.getElementById('statTotalSoulsCollected').innerHTML = fnum(statTotalSoulsCollected);
			}			
			
				//Peasants
			if(localStorage.statPeasantsHired !== null){
				statPeasantsHired = parseInt(localStorage.statPeasantsHired);
				document.getElementById('statPeasantsHired').innerHTML = fnum(statPeasantsHired);
			}
			if(localStorage.statSelfPeasantsHired !== null){
				statSelfPeasantsHired = parseInt(localStorage.statSelfPeasantsHired);
				document.getElementById('statSelfPeasantsHired').innerHTML = fnum(statSelfPeasantsHired);
			}
			if(localStorage.statTotalSelfPeasantsHired !== null){
				statTotalSelfPeasantsHired = parseInt(localStorage.statTotalSelfPeasantsHired);
				document.getElementById('statTotalSelfPeasantsHired').innerHTML = fnum(statTotalSelfPeasantsHired);
			}	
			if(localStorage.statTavernPeasantsHired !== null){
				statTavernPeasantsHired = parseInt(localStorage.statTavernPeasantsHired);
				document.getElementById('statTavernPeasantsHired').innerHTML = fnum(statTavernPeasantsHired);
			}	
			if(localStorage.statTotalTavernPeasantsHired !== null){
				statTotalTavernPeasantsHired = parseInt(localStorage.statTotalTavernPeasantsHired);
				document.getElementById('statTotalTavernPeasantsHired').innerHTML = fnum(statTotalTavernPeasantsHired);
			}
			if(localStorage.statTotalPeasantsHired !== null){
				statTotalPeasantsHired = parseInt(localStorage.statTotalPeasantsHired);
				document.getElementById('statTotalPeasantsHired').innerHTML = fnum(statTotalPeasantsHired);
			}				
			
				//Miners
			if(localStorage.statMinersHired !== null){
				statMinersHired = parseInt(localStorage.statMinersHired);
				document.getElementById('statMinersHired').innerHTML = fnum(statMinersHired);
			}
			if(localStorage.statSelfMinersHired !== null){
				statSelfMinersHired = parseInt(localStorage.statSelfMinersHired);
				document.getElementById('statSelfMinersHired').innerHTML = fnum(statSelfMinersHired);
			}
			if(localStorage.statTotalSelfMinersHired !== null){
				statTotalSelfMinersHired = parseInt(localStorage.statTotalSelfMinersHired);
				document.getElementById('statTotalSelfMinersHired').innerHTML = fnum(statTotalSelfMinersHired);
			}	
			if(localStorage.statTavernMinersHired !== null){
				statTavernMinersHired = parseInt(localStorage.statTavernMinersHired);
				document.getElementById('statTavernMinersHired').innerHTML = fnum(statTavernMinersHired);
			}	
			if(localStorage.statTotalTavernMinersHired !== null){
				statTotalTavernMinersHired = parseInt(localStorage.statTotalTavernMinersHired);
				document.getElementById('statTotalTavernMinersHired').innerHTML = fnum(statTotalTavernMinersHired);
			}
			if(localStorage.statTotalMinersHired !== null){
				statTotalMinersHired = parseInt(localStorage.statTotalMinersHired);
				document.getElementById('statTotalMinersHired').innerHTML = fnum(statTotalMinersHired);
			}
				//Coal Miners
				
			if(localStorage.statCoalMinersHired !== null){
				statCoalMinersHired = parseInt(localStorage.statCoalMinersHired);
				document.getElementById('statCoalMinersHired').innerHTML = fnum(statCoalMinersHired);
			}
			if(localStorage.statTotalCoalMinersHired !== null){
				statTotalCoalMinersHired = parseInt(localStorage.statTotalCoalMinersHired);
				document.getElementById('statTotalCoalMinersHired').innerHTML = fnum(statTotalCoalMinersHired);
			}		
			
				//Lumberjacks
			if(localStorage.statLumberjacksHired !== null){
				statLumberjacksHired = parseInt(localStorage.statLumberjacksHired);
				document.getElementById('statLumberjacksHired').innerHTML = fnum(statLumberjacksHired);
			}
			if(localStorage.statSelfLumberjacksHired !== null){
				statSelfLumberjacksHired = parseInt(localStorage.statSelfLumberjacksHired);
				document.getElementById('statSelfLumberjacksHired').innerHTML = fnum(statSelfLumberjacksHired);
			}
			if(localStorage.statTotalSelfLumberjacksHired !== null){
				statTotalSelfLumberjacksHired = parseInt(localStorage.statTotalSelfLumberjacksHired);
				document.getElementById('statTotalSelfLumberjacksHired').innerHTML = fnum(statTotalSelfLumberjacksHired);
			}	
			if(localStorage.statTavernLumberjacksHired !== null){
				statTavernLumberjacksHired = parseInt(localStorage.statTavernLumberjacksHired);
				document.getElementById('statTavernLumberjacksHired').innerHTML = fnum(statTavernLumberjacksHired);
			}	
			if(localStorage.statTotalTavernLumberjacksHired !== null){
				statTotalTavernLumberjacksHired = parseInt(localStorage.statTotalTavernLumberjacksHired);
				document.getElementById('statTotalTavernLumberjacksHired').innerHTML = fnum(statTotalTavernLumberjacksHired);
			}
			if(localStorage.statTotalLumberjacksHired !== null){
				statTotalLumberjacksHired = parseInt(localStorage.statTotalLumberjacksHired);
				document.getElementById('statTotalLumberjacksHired').innerHTML = fnum(statTotalLumberjacksHired);
			}			
			
				//Pages
			if(localStorage.statPagesTrained !== null){
				statPagesTrained = parseInt(localStorage.statPagesTrained);
				document.getElementById('statPagesTrained').innerHTML = fnum(statPagesTrained);
			}
			if(localStorage.statTotalPagesTrained !== null){
				statTotalPagesTrained = parseInt(localStorage.statTotalPagesTrained);
				document.getElementById('statTotalPagesTrained').innerHTML = fnum(statTotalPagesTrained);
			}
			
				//Squires
			if(localStorage.statSquiresTrained !== null){
				statSquiresTrained = parseInt(localStorage.statSquiresTrained);
				document.getElementById('statSquiresTrained').innerHTML = fnum(statSquiresTrained);
			}
			if(localStorage.statTotalSquiresTrained !== null){
				statTotalSquiresTrained = parseInt(localStorage.statTotalSquiresTrained);
				document.getElementById('statTotalSquiresTrained').innerHTML = fnum(statTotalSquiresTrained);
			}
			
				//Knights
			if(localStorage.statKnightsTrained !== null){
				statKnightsTrained = parseInt(localStorage.statKnightsTrained);
				document.getElementById('statKnightsTrained').innerHTML = fnum(statKnightsTrained);
			}
			if(localStorage.statTotalKnightsTrained !== null){
				statTotalKnightsTrained = parseInt(localStorage.statTotalKnightsTrained);
				document.getElementById('statTotalKnightsTrained').innerHTML = fnum(statTotalKnightsTrained);
			}
			
				//Paladins
			if(localStorage.statPaladinsTrained !== null){
				statPaladinsTrained = parseInt(localStorage.statPaladinsTrained);
				document.getElementById('statPaladinsTrained').innerHTML = fnum(statPaladinsTrained);
			}
			if(localStorage.statTotalPaladinsTrained !== null){
				statTotalPaladinsTrained = parseInt(localStorage.statTotalPaladinsTrained);
				document.getElementById('statTotalPaladinsTrained').innerHTML = fnum(statTotalPaladinsTrained);
			}
			
				//Acolytes
			if(localStorage.statAcolytesRecruited !== null){
				statAcolytesRecruited = parseInt(localStorage.statAcolytesRecruited);
				document.getElementById('statAcolytesRecruited').innerHTML = fnum(statAcolytesRecruited);
			}
			if(localStorage.statTotalAcolytesRecruited !== null){
				statTotalAcolytesRecruited = parseInt(localStorage.statTotalAcolytesRecruited);
				document.getElementById('statTotalAcolytesRecruited').innerHTML = fnum(statTotalAcolytesRecruited);
			}

				//Priests
			if(localStorage.statPriestsTrained !== null){
				statPriestsTrained = parseInt(localStorage.statPriestsTrained);
				document.getElementById('statPriestsTrained').innerHTML = fnum(statPriestsTrained);
			}
			if(localStorage.statTotalPriestsTrained !== null){
				statTotalPriestsTrained = parseInt(localStorage.statTotalPriestsTrained);
				document.getElementById('statTotalPriestsTrained').innerHTML = fnum(statTotalPriestsTrained);
			}

				//Bishops
			if(localStorage.statBishopsTrained !== null){
				statBishopsTrained = parseInt(localStorage.statBishopsTrained);
				document.getElementById('statBishopsTrained').innerHTML = fnum(statBishopsTrained);
			}
			if(localStorage.statTotalBishopsTrained !== null){
				statTotalBishopsTrained = parseInt(localStorage.statTotalBishopsTrained);
				document.getElementById('statTotalBishopsTrained').innerHTML = fnum(statTotalBishopsTrained);
			}		
				
				//Shades
			if(localStorage.statShadesSummoned !== null){
				statShadesSummoned = parseInt(localStorage.statShadesSummoned);
				document.getElementById('statShadesSummoned').innerHTML = fnum(statShadesSummoned);
			}
			if(localStorage.statTotalShadesSummoned !== null){
				statTotalShadesSummoned = parseInt(localStorage.statTotalShadesSummoned);
				document.getElementById('statTotalShadesSummoned').innerHTML = fnum(statTotalShadesSummoned);
			}

				//Aspects
			if(localStorage.statAspectsTrained !== null){
				statAspectsTrained = parseInt(localStorage.statAspectsTrained);
				document.getElementById('statAspectsTrained').innerHTML = fnum(statAspectsTrained);
			}
			if(localStorage.statTotalAspectsTrained !== null){
				statTotalAspectsTrained = parseInt(localStorage.statTotalAspectsTrained);
				document.getElementById('statTotalAspectsTrained').innerHTML = fnum(statTotalAspectsTrained);
			}
				
				//Angels
			if(localStorage.statAngelsSummoned !== null){
				statAngelsSummoned = parseInt(localStorage.statAngelsSummoned);
				document.getElementById('statAngelsSummoned').innerHTML = fnum(statAngelsSummoned);
			}
			if(localStorage.statTotalAngelsSummoned !== null){
				statTotalAngelsSummoned = parseInt(localStorage.statTotalAngelsSummoned);
				document.getElementById('statTotalAngelsSummoned').innerHTML = fnum(statTotalAngelsSummoned);
			}
			
				//Battles
			if(localStorage.statTotalEnemiesDefeated !== null){
				statTotalEnemiesDefeated = parseInt(localStorage.statTotalEnemiesDefeated);
				document.getElementById('statTotalEnemiesDefeated').innerHTML = fnum(statTotalEnemiesDefeated);
			}	
			if(localStorage.statEnemiesDefeated !== null){
				statEnemiesDefeated = parseInt(localStorage.statEnemiesDefeated);
				document.getElementById('statEnemiesDefeated').innerHTML = fnum(statEnemiesDefeated);
			}				
			if(localStorage.statTotalGoldStolen !== null){
				statTotalGoldStolen = parseInt(localStorage.statTotalGoldStolen);
				document.getElementById('statTotalGoldStolen').innerHTML = fnum(statTotalGoldStolen);
			}	

			if(localStorage.statTotalPeasantsKilled !== null){
				statTotalPeasantsKilled = parseInt(localStorage.statTotalPeasantsKilled);
				document.getElementById('statTotalPeasantsKilled').innerHTML = fnum(statTotalPeasantsKilled);
			}			
			
			if(localStorage.statTotalMinersKilled !== null){
				statTotalMinersKilled = parseInt(localStorage.statTotalMinersKilled);
				document.getElementById('statTotalMinersKilled').innerHTML = fnum(statTotalMinersKilled);
			}	

			if(localStorage.statTotalIronStolen !== null){
				statTotalIronStolen = parseInt(localStorage.statTotalIronStolen);
				document.getElementById('statTotalIronStolen').innerHTML = fnum(statTotalIronStolen);
			}

			if(localStorage.statTotalSilverStolen !== null){
				statTotalSilverStolen = parseInt(localStorage.statTotalSilverStolen);
				document.getElementById('statTotalSilverStolen').innerHTML = fnum(statTotalSilverStolen);
			}		
			if(localStorage.statTotalUnitsSeduced !== null){
				statTotalUnitsSeduced = parseInt(localStorage.statTotalUnitsSeduced);
				document.getElementById('statTotalUnitsSeduced').innerHTML = fnum(statTotalUnitsSeduced);
			}
			if(localStorage.statUnitsKilledInBattle !== null){
				statUnitsKilledInBattle = parseInt(localStorage.statUnitsKilledInBattle);
				document.getElementById('statUnitsKilledInBattle').innerHTML = fnum(statUnitsKilledInBattle);
			}		
			
			if(localStorage.statTotalUnitsKilledInBattle !== null){
				statTotalUnitsKilledInBattle = parseInt(localStorage.statTotalUnitsKilledInBattle);
				document.getElementById('statTotalUnitsKilledInBattle').innerHTML = fnum(statTotalUnitsKilledInBattle);
			}		
				
				//Magic
			if(localStorage.statManaGained !== null){
				statManaGained = parseInt(localStorage.statManaGained);
				document.getElementById('statManaGained').innerHTML = fnum(statManaGained);
			}
			if(localStorage.statTotalManaGained !== null){
				statTotalManaGained = parseInt(localStorage.statTotalManaGained);
				document.getElementById('statTotalManaGained').innerHTML = fnum(statTotalManaGained);
			}
			if(localStorage.statManaUsed !== null){
				statManaUsed = parseInt(localStorage.statManaUsed);
				document.getElementById('statManaUsed').innerHTML = fnum(statManaUsed);
			}
			if(localStorage.statTotalManaUsed !== null){
				statTotalManaUsed = parseInt(localStorage.statTotalManaUsed);
				document.getElementById('statTotalManaUsed').innerHTML = fnum(statTotalManaUsed);
			}
			if(localStorage.statCastedFireBall !== null){
				statCastedFireBall = parseInt(localStorage.statCastedFireBall);
				document.getElementById('statCastedFireBall').innerHTML = fnum(statCastedFireBall);
			}
			if(localStorage.statCastedTimeSkip !== null){
				statCastedTimeSkip = parseInt(localStorage.statCastedTimeSkip);
				document.getElementById('statCastedTimeSkip').innerHTML = fnum(statCastedTimeSkip);
			}
			if(localStorage.statTotalCastedFireBall !== null){
				statTotalCastedFireBall = parseInt(localStorage.statTotalCastedFireBall);
				document.getElementById('statTotalCastedFireBall').innerHTML = fnum(statTotalCastedFireBall);
			}
			if(localStorage.statTotalCastedTimeSkip !== null){
				statTotalCastedTimeSkip = parseInt(localStorage.statTotalCastedTimeSkip);
				document.getElementById('statTotalCastedTimeSkip').innerHTML = fnum(statTotalCastedTimeSkip);
			}

			//Load Achievements
			if(localStorage.ach1kClicks !== null){
				myBool = (localStorage.ach1kClicks == "true");
				if(myBool === true){
					ach1kClicks = true;
					document.getElementById('Clicked1KTimes').classList.add('achievementearned');
					document.getElementById('Clicked1KTimes').classList.add('achievement');
				}
			}		
			
			if(localStorage.ach10kClicks !== null){
				myBool = (localStorage.ach10kClicks == "true");
				if(myBool === true){
					ach10kClicks = true;
					document.getElementById('Clicked10KTimes').classList.add('achievementearned');
					document.getElementById('Clicked10KTimes').classList.add('achievement');
				}
			}	

			if(localStorage.ach100kClicks !== null){
				myBool = (localStorage.ach100kClicks == "true");
				if(myBool === true){
					ach1kClicks = true;
					document.getElementById('Clicked100KTimes').classList.add('achievementearned');
					document.getElementById('Clicked100KTimes').classList.add('achievement');
				}
			}

			if(localStorage.ach1MClicks !== null){
				myBool = (localStorage.ach1MClicks == "true");
				if(myBool === true){
					ach1MClicks = true;
					document.getElementById('Clicked1MTimes').classList.add('achievementearned');
					document.getElementById('Clicked1MTimes').classList.add('achievement');
				}
			}

			if(localStorage.ach1BClicks !== null){
				myBool = (localStorage.ach1BClicks == "true");
				if(myBool === true){
					ach1BClicks = true;
					document.getElementById('Clicked1BTimes').classList.add('achievementearned');
					document.getElementById('Clicked1BTimes').classList.add('achievement');
				}
			}	

			if(localStorage.ach1kGold !== null){
				myBool = (localStorage.ach1kGold == "true");
				if(myBool === true){
					ach1kGold = true;
					document.getElementById('Collected1KGold').classList.add('achievementearned');
					document.getElementById('Collected1KGold').classList.add('achievement');
				}
			}

			if(localStorage.ach100kGold !== null){
				myBool = (localStorage.ach100kGold == "true");
				if(myBool === true){
					ach100kGold = true;
					document.getElementById('Collected100KGold').classList.add('achievementearned');
					document.getElementById('Collected100KGold').classList.add('achievement');
				}
			}

			if(localStorage.ach1MGold !== null){
				myBool = (localStorage.ach1MGold == "true");
				if(myBool === true){
					ach1MGold = true;
					document.getElementById('Collected1MGold').classList.add('achievementearned');
					document.getElementById('Collected1MGold').classList.add('achievement');
				}
			}

			if(localStorage.ach1BGold !== null){
				myBool = (localStorage.ach1BGold == "true");
				if(myBool === true){
					ach1BGold = true;
					document.getElementById('Collected1BGold').classList.add('achievementearned');
					document.getElementById('Collected1BGold').classList.add('achievement');
				}
			}

			if(localStorage.ach1TGold !== null){
				myBool = (localStorage.ach1TGold == "true");
				if(myBool === true){
					ach1TGold = true;
					document.getElementById('Collected1TGold').classList.add('achievementearned');
					document.getElementById('Collected1TGold').classList.add('achievement');
				}
			}			
			//End Statistics Page variables loaded
			

			document.getElementById('verinfo').innerHTML = "<span class='glyphicon glyphicon-info-sign' aria-hidden='true'></span> Version " + gameVer;

			recalculateCosts();
			QuestCheckUnitOptions();
			

			$.notify({
				icon: 'glyphicon glyphicon-download-alt',
				message: "<strong>Load</strong> Your game save has been loaded.", 
				},{
				type: 'info',
				allow_dismiss: false,
				delay: 2000
			});
		}
		else{
			lastPage = "Production";
			console.log('Starting new game!');
		}
	}
	
	function hardReset(){
	//set all variables to zero, delete cookies
	var answer;
		answer = confirm("Are you sure you want to hard reset? You will LOSE ALL YOUR DATA!");
		if(answer === true){
			deleteCookie();
			location.reload(true);
		}
	}
	
	
window.setInterval(function(){					//Autosaves every minute
	saveCookie();
}, 60000);
			
			
function loadScenario(number){
	switch(number){
		case 1:
			gold = 10000;
			wood = 10000;
			iron = 10000;
			Peasant.number = 10;
			Miner.number = 10;
			Lumberjack.number = 10;
			Page.number = 12;
			lumbermillOpened = true;
			barracksOpened = true;
			minesOpened = true;
			saveCookie();
			location.reload(true);
		break;
		
		case 2:
			gold = 100000;
			wood = 100000;
			iron = 100000;
			silver = 100000;
			Peasant.number = 50;
			Miner.number = 50;
			Lumberjack.number = 50;
			Page.number = 20;
			Squire.number = 5;
			
			defeatedGoblins = true;
			defeatedBandits = true;
			
			squiresUnlocked = true;
			lumbermillOpened = true;
			barracksOpened = true;
			minesOpened = true;
			mSilverUpgrade = true;
			mPanningUpgrade = true;	
			saveCookie();
			location.reload(true);			
		break;

		case 3:
			gold = 500000;
			wood = 500000;
			iron = 500000;
			silver = 500000;
			faith = 100;
			Tavern.number = 1;
			Peasant.number = 100;
			Miner.number = 100;
			Lumberjack.number = 100;
			Page.number = 20;
			Squire.number = 15;
			Knight.number = 10;
			Acolyte.number = 10;
			
			defeatedGoblins = true;
			defeatedBandits = true;
			defeatedHermit = true;
			
			squiresUnlocked = true;
			knightsUnlocked = true;
			lumbermillOpened = true;
			barracksOpened = true;
			churchOpened = true;
			minesOpened = true;
			mSilverUpgrade = true;
			mPanningUpgrade = true;
			saveCookie();
			location.reload(true);			
		break;
		
		case 4:
			gold = 700000;
			wood = 700000;
			iron = 700000;
			silver = 700000;
			faith = 1000;
			paper = 100;
			Tavern.number = 2;
			Peasant.number = 150;
			Miner.number = 150;
			Lumberjack.number = 150;
			Page.number = 20;
			Squire.number = 15;
			Knight.number = 10;
			Paladin.number = 5;
			Acolyte.number = 10;
			Priest.number = 5;
			
			defeatedGoblins = true;
			defeatedBandits = true;
			defeatedHermit = true;
			defeatedOgre = true;
			
			squiresUnlocked = true;
			knightsUnlocked = true;
			lumbermillOpened = true;
			barracksOpened = true;
			churchOpened = true;
			minesOpened = true;
			mSilverUpgrade = true;
			mPanningUpgrade = true;
			saveCookie();
			location.reload(true);				
		break;

		case 5:
			gold = 750000;
			wood = 750000;
			iron = 750000;
			silver = 750000;
			faith = 2000;
			paper = 10000;
			Tavern.number = 3;
			Peasant.number = 200;
			Miner.number = 200;
			Lumberjack.number = 200;
			Page.number = 20;
			Squire.number = 15;
			Knight.number = 10;
			Paladin.number = 10;
			Acolyte.number = 25;
			Priest.number = 10;
			Shade.number = 20;
			
			defeatedGoblins = true;
			defeatedBandits = true;
			defeatedHermit = true;
			defeatedOgre = true;
			defeatedHellhounds = true;
			
			squiresUnlocked = true;
			knightsUnlocked = true;
			lumbermillOpened = true;
			barracksOpened = true;
			churchOpened = true;
			minesOpened = true;
			mSilverUpgrade = true;
			mPanningUpgrade = true;
			saveCookie();
			location.reload(true);			
		break;
		
		case 6:
			gold = 1000000;
			wood = 1000000;
			iron = 1000000;
			silver = 1000000;
			faith = 50000;
			paper = 100000;
			mana = 2000;
			Tavern.number = 5;
			Peasant.number = 200;
			Miner.number = 200;
			Lumberjack.number = 200;
			Page.number = 20;
			Squire.number = 15;
			Knight.number = 20;
			Paladin.number = 30;
			Acolyte.number = 25;
			Priest.number = 10;
			Shade.number = 20;
			Aspect.number = 11;
			
			defeatedGoblins = true;
			defeatedBandits = true;
			defeatedHermit = true;
			defeatedOgre = true;
			defeatedHellhounds = true;
			defeatedPixie = true;
			defeatedArmor = true;
			defeatedOoze = true;
			
			squiresUnlocked = true;
			knightsUnlocked = true;
			lumbermillOpened = true;
			barracksOpened = true;
			churchOpened = true;
			minesOpened = true;
			mSilverUpgrade = true;
			mPanningUpgrade = true;
			paladinWepUpgrade = true;
			saveCookie();
			location.reload(true);			
		break;	

		case 7:
			gold = 1000000;
			wood = 1000000;
			iron = 1000000;
			silver = 1000000;
			faith = 50000;
			paper = 100000;
			mana = 2000;
			Tavern.number = 5;
			Peasant.number = 200;
			Miner.number = 200;
			Lumberjack.number = 200;
			Page.number = 20;
			Squire.number = 15;
			Knight.number = 15;
			Paladin.number = 44;
			Acolyte.number = 25;
			Priest.number = 10;
			Shade.number = 30;
			Aspect.number = 26;
			
			defeatedGoblins = true;
			defeatedBandits = true;
			defeatedHermit = true;
			defeatedOgre = true;
			defeatedHellhounds = true;
			defeatedPixie = true;
			defeatedArmor = true;
			defeatedOoze = true;
			
			squiresUnlocked = true;
			knightsUnlocked = true;
			lumbermillOpened = true;
			barracksOpened = true;
			churchOpened = true;
			minesOpened = true;
			mSilverUpgrade = true;
			mPanningUpgrade = true;
			prFaithUpgrade = true;
			paladinWepUpgrade = true;
			tomesUnlocked = true;
			
			saveCookie();
			location.reload(true);			
		break;		
		
		default:
	}
}



function xor_str(input)
{
	var to_enc = input;

	var xor_key = 6;
	var the_res="";//the result will be here
	for(i=0;i<to_enc.length;++i)
	{
		the_res+=String.fromCharCode(xor_key^to_enc.charCodeAt(i));
	}
	return(the_res);
}

function decrypt_str(input)
{
	var to_dec = input;
	var the_res = "";
	

	var xor_key=6;
	for(i=0;i<to_dec.length;i++)
	{
		the_res+=String.fromCharCode(xor_key^to_dec.charCodeAt(i));
	}
	return the_res;
}


function exportSave(){
var storage = xor_str(JSON.stringify(localStorage));
	bootbox.prompt({
	  title: "Copy and save your export somewhere safe!",
	  value: storage,
	  callback: function(storage) {
		if (storage === "") {
		}
		else {
			 }
	  }
	});		
}


var storage;
function importSave(){
var input = "";

	bootbox.prompt({
	  title: "Paste your savedata here: ",
	  value: input,
	  callback: function(input) {
		if (input === "") {
			alert('invalid save data');
		} else {
			input = decrypt_str(input);
//				for (var name in storage) { localStorage.setItem(name, storage[name] ); }
			eval ('storage = ' + input);
			console.log(storage);
			for (var name in storage) { localStorage.setItem(name, storage[name] ); }
			location.reload(true);
		}
	  }
	});
}
