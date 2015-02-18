var taverns = 0;
function buyTavern(){
	var TavernCost = Math.floor(1000 * Math.pow(1.5,taverns));
		if(gold >= TavernCost){
			taverns = taverns + 1;
			gold = gold - TavernCost;
			document.getElementById('taverns').innerHTML = taverns;
			document.getElementById('gold').innerHTML = gold;
		};
		var nextTavernCost = Math.floor(1000 * Math.pow(1.5, taverns));
		document.getElementById('TavernCost').innerHTML = nextTavernCost;
};



window.setInterval(function(){

	peasantClick(taverns);
	tavernpeasants = tavernpeasants + taverns;

}, 10000);