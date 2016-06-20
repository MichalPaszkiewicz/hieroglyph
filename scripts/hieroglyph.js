function main(){

    var status = getStatus();

    if(status.uniliterals == 0){
        increaseDifficulty();
    }

    if(status.uniliterals < alphabet.length || status.practiceuniliterals < alphabet.length){
        runUniliteralTest();
        return;
    }
    
    if(status.biliterals == 0){
    	increaseDifficulty();
    }

    if(status.biliterals < biliteralSigns.length){
        runBiliteralTest();
        return;
    }

    if(status.biliteralReverses == 0){
        increaseDifficulty();
    }

    if(status.biliteralReverses < biliteralSigns.length){
        runBiliteralReverseTest();
        return;
    }

}

function getCleanTestPage(){
    var main = document.getElementById("main");
    var testPage = document.getElementById("test");
    if(!testPage){
       testPage = document.createElement("div");
       testPage.id = "test";
       main.appendChild(testPage);
    }
    testPage.innerHTML = "";
    return testPage;
}

function getCleanIntroPage(){
	var main = document.getElementById("main");
	var introPage = document.getElementById("intro");
	if(!introPage){
		introPage = document.createElement("div");
		introPage.id = "intro";
		main.appendChild(introPage);
	}
	introPage.innerHTML = "";
	return introPage;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function selectRandom3(array){
    var shuffledArray = shuffle(array);
    
    return shuffledArray.slice(0,3);
}

function increaseDifficulty(){

    var status = getStatus();

    if(status.uniliterals < alphabet.length){
        status.uniliterals++;
        localStorage.setItem("uniliterals", status.uniliterals);
        introduceUniliteral();
        return;
    }

    if(status.practiceuniliterals < alphabet.length){
        status.practiceuniliterals++;
        localStorage.setItem("practiceuniliterals", status.practiceuniliterals);
        return;
    }
    
    if(status.biliterals < biliteralSigns.length){
        status.biliterals++; 
        localStorage.setItem("biliterals", status.biliterals);
        introduceBiliteral(status.biliterals);
        return;
    }

    if(status.biliteralReverses < biliteralSigns.length){
        status.biliteralReverses++;
        localStorage.setItem("biliteralReverses", status.biliteralReverses);
        introduceBiliteral(status.biliteralReverses);
        return;
    }

}

function getStatus(){
    
    var status = {
        uniliterals: ~~localStorage.getItem("uniliterals"),
        practiceuniliterals: ~~localStorage.getItem("practiceuniliterals"),
        biliterals: ~~localStorage.getItem("biliterals"),
        biliteralReverses: ~~localStorage.getItem("biliteralReverses")
    };

    return status;
}

function reset(){
    localStorage.setItem("uniliterals",0);
    localStorage.setItem("practiceuniliterals",0);
    localStorage.setItem("biliterals",0);
    localStorage.setItem("biliteralReverses",0);

    var alertsDiv = document.getElementById("alerts");
    alertsDiv.textContent = "data has been reset - things should be a bit easier now!";
}
