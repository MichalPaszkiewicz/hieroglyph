var getChar = function(character){
    for(var i = 0; i < alphabet.length; i++){
        if(alphabet[i].char == character){
            return alphabet[i];
        }
    }
}

var getCharByName = function(name){
    for(var i = 0; i < alphabet.length; i++){
        if(alphabet[i].name == name){
            return alphabet[i];
        }
    }
}

var getCharByPic = function(pic){
    for(var i = 0; i < alphabet.length; i++){
        if(alphabet[i].pic == pic){
            return alphabet[i];
        }
    }
}

function runUniliteralTest(){
    var testPage = getCleanTestPage();
    var allowedUniliterals = getStatus().uniliterals;

    var itemToTest = Math.floor(Math.random() * allowedUniliterals);

    var testText = document.createElement("h2");
    testText.className = "testText";
    testText.textContent = "which letter does this symbol represent?";
    testPage.appendChild(testText);

    var testChar = document.createElement("span");
    testChar.className = "testPic";

    var char = alphabet[itemToTest];
    var imgs = char.pic.split(" ");

    loopThroughImgsAndAddTo(imgs, testChar);

    testPage.appendChild(testChar);

    var correctItem = alphabet[itemToTest];
    var otherItems = alphabet.filter(function(item){ return item.name != correctItem.name; })
    var incorrect3 = selectRandom3(otherItems);
    var latestItem = alphabet[allowedUniliterals - 1];

    incorrect3.push(correctItem);
    var allItems = shuffle(incorrect3);

    for(var i = 0; i < allItems.length; i++){
        var button = document.createElement("button");
        button.setAttribute("isCorrect", allItems[i].name == correctItem.name);
        button.setAttribute("isLatestItem", allItems[i].pic == latestItem.pic);
        button.onclick = function(e){
            var target = e.target;
            var isCorrect = JSON.parse(target.getAttribute("isCorrect"));
            var isLatestItem = JSON.parse(target.getAttribute("isLatestItem"));
            if(isCorrect){
                if(isLatestItem || (allowedUniliterals >= alphabet.length)){
                    increaseDifficulty();
                }
                main();
                return;
            }
            else{
                target.style.background = "red";
            }
        }
        button.textContent = allItems[i].name + " (" + allItems[i].char + ")" ;
        testPage.appendChild(button);
    }
}

function introduceUniliteral(){
	var introPage = getCleanIntroPage();
	var status = getStatus();
	
	var introText = document.createElement("h2");
	introText.className = "testText";
    	introText.textContent = "memorise this character:";
    	introPage.appendChild(introText);
    	
    	var testChar = document.createElement("span");
    	testChar.className = "testPic";

    	var char = alphabet[status.uniliterals - 1];
    	var imgs = char.pic.split(" ");

        loopThroughImgsAndAddTo(imgs, testChar);

    	introPage.appendChild(testChar);
    	
    	var info = document.createElement("div");
    	info.textContent = char.name + " (" + char.char + ")";
    	introPage.appendChild(info);
    	
    	var closeButton = document.createElement("button");
    	closeButton.textContent = "ok!"
    	closeButton.onclick = function(){
    		introPage.style.zIndex = 50;
    	}
    	introPage.appendChild(closeButton);
    	
    	introPage.style.zIndex = 200;
}