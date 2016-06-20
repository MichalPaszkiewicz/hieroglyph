function biliteralsThatArentLike(pic){
    var allBiliteralsWithPic = [];

    //biliteralSigns.filter(function(item){ return item.desc != correctItem.desc && item.chars != correctItem.chars; })

    for(var i = 0; i < biliteralSigns.length; i++){
        if(biliteralSigns[i].pic == pic){
            allBiliteralsWithPic.push(biliteralSigns[i]);
        }
    }

    var validIncorrects = [];

    for(var i = 0; i < biliteralSigns.length; i++){
        if(allBiliteralsWithPic.every(function(item){ return item.chars != biliteralSigns[i].chars })){
            validIncorrects.push(biliteralSigns[i]);
        }
    }

    return validIncorrects;
}

function runBiliteralTest(){
    var testPage = getCleantTestPage();
    var allowedBiliterals = getStatus().biliterals;

    var itemToTest = Math.floor(Math.random() * allowedBiliterals);

    var testText = document.createElement("h2");
    testText.className = "testText";
    testText.textContent = "which characters can this symbol represent?";
    testPage.appendChild(testText);

    var testChar = document.createElement("span");
    testChar.className = "testPic";

    var char = biliteralSigns[itemToTest];
    var imgs = char.pic.split(" ");

    loopThroughImgsAndAddTo(imgs, testChar);

    testPage.appendChild(testChar);

    var correctItem = biliteralSigns[itemToTest];
    var otherItems = biliteralsThatArentLike(correctItem.pic);
    var incorrect3 = selectRandom3(otherItems);
    var latestItem = biliteralSigns[allowedBiliterals - 1];

    incorrect3.push(correctItem);
    var allItems = shuffle(incorrect3);

    for(var i = 0; i < allItems.length; i++){
        var button = document.createElement("button");
        button.setAttribute("isCorrect", allItems[i].desc == correctItem.desc);
        button.setAttribute("isLatestItem", (allItems[i].pic == latestItem.pic) && (allItems[i].chars == latestItem.chars));
        button.onclick = function(e){
            var target = e.target;
            if(target.tagName == "IMG" || target.tagName == "SPAN"){
            	target = target.parentElement;
            }
            var isCorrect = JSON.parse(target.getAttribute("isCorrect"));
            var isLatestItem = JSON.parse(target.getAttribute("isLatestItem"));
            if(isCorrect){
                if(isLatestItem){
                    increaseDifficulty();
                }
                main();
                return;
            }
            else{
                target.style.background = "red";
            }
        }
		
		var chars = allItems[i].chars;
		for(var j = 0; j < chars.length; j++){
			var charItem = getChar(chars[j]);
			
			var imgs = charItem.pic.split(" ");
            loopThroughImgsAndAddTo(imgs, button);

		}
        var charSpan = document.createElement("span");
        charSpan.textContent = " (" + allItems[i].chars + ")";
        button.appendChild(charSpan);

        testPage.appendChild(button);
    }
}

function introduceBiliteral(){
	var introPage = getCleanIntroPage();
	var status = getStatus();
	
	var introText = document.createElement("h2");
	introText.className = "testText";
    	introText.textContent = "memorise this biliteral:";
    	introPage.appendChild(introText);
    	
    	var testChar = document.createElement("span");
    	testChar.className = "testPic";

    	var char = biliteralSigns[status.biliterals - 1];
    	var imgs = char.pic.split(" ");

        loopThroughImgsAndAddTo(imgs, testChar);

    	introPage.appendChild(testChar);
    	
    	var info = document.createElement("div");
    	info.textContent = char.desc + " (" + char.chars + ")";
    	introPage.appendChild(info);

        var charDiv = document.createElement("div");
        var chars = char.chars;
		for(var j = 0; j < chars.length; j++){
			var charItem = getChar(chars[j]);
			
			var imgs = charItem.pic.split(" ");
            loopThroughImgsAndAddTo(imgs, charDiv);
		}
    	introPage.appendChild(charDiv);

    	var closeButton = document.createElement("button");
    	closeButton.textContent = "ok!"
    	closeButton.onclick = function(){
    		introPage.style.zIndex = 50;
    	}
    	introPage.appendChild(closeButton);
    	
    	introPage.style.zIndex = 200;
}