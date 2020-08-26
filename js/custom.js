window.onload = function () {
  
	var secs = 00; 
	var tens = 00; 

	var appendTens = document.getElementById("tens")
	var appendSecs = document.getElementById("secs")
	var appendLapTens = document.getElementById("lapTens")
	var appendLapSecs = document.getElementById("lapSecs")
	var btnStart = document.getElementById('btn-start');
	var btnStop = document.getElementById('btn-stop');
	var btnReset = document.getElementById('btn-reset');
	var btnLap = document.getElementById('btn-lap');
	var stopWatch ;
  
	setTimeout(function(){
		document.getElementById("stopwatch").classList.add('stopWatchTranslate');
		document.getElementById("firstText").classList.add('brandText');
	}, 1000)
	setTimeout(function(){
		document.getElementById("secondText").classList.add('brandText');
	}, 1500)
	setTimeout(function(){
		document.getElementById("thirdText").classList.add('brandText');
	}, 2000)
	

	btnStart.onclick = function() {
	  
	   clearInterval(stopWatch);
	   stopWatch = setInterval(startTimer, 10);
	}
	
	  btnStop.onclick = function() {
		 clearInterval(stopWatch);
	}
	
  
	btnReset.onclick = function() {
	   clearInterval(stopWatch);
	  tens = "00";
	  secs = "00";
	  appendTens.innerHTML = tens;
	  appendSecs.innerHTML = secs;
	}

	btnLap.onclick = function() {
	   appendLapTens.innerHTML = appendTens.innerHTML;
	   appendLapSecs.innerHTML = appendSecs.innerHTML;
	 }
	
	 
	
	function startTimer () {
	  tens++; 
	  
	  if(tens < 9){
		appendTens.innerHTML = "0" + tens;
	  }
	  
	  if (tens > 9){
		appendTens.innerHTML = tens;
		
	  } 
	  
	  if (tens > 99) {
		secs++;
		appendSecs.innerHTML = "0" + secs;
		tens = 0;
		appendTens.innerHTML = "0" + 0;
	  }
	  
	  if (secs > 9){
		appendSecs.innerHTML = secs;
	  }
	
	}
	
  
  }