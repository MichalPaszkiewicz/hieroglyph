function biliteralReversesThatArentLike(chars){
    var allBiliteralsWithChars = [];

    //biliteralSigns.filter(function(item){ return item.desc != correctItem.desc && item.chars != correctItem.chars; })

    for(var i = 0; i < biliteralSigns.length; i++){
        if(biliteralSigns[i].chars == chars){
            allBiliteralsWithChars.push(biliteralSigns[i]);
        }
    }

    var validIncorrects = [];

    for(var i = 0; i < biliteralSigns.length; i++){
        if(allBiliteralsWithChars.every(function(item){ return item.pic != biliteralSigns[i].pic })){
            validIncorrects.push(biliteralSigns[i]);
        }
    }

    return validIncorrects;
}

function runBiliteralReverseTest(){
    var testPage = getCleanTestPage();
    var allowedBiliterals = getStatus().biliteralReverses;

    var itemToTest = Math.floor(Math.random() * allowedBiliterals);

    var testText = document.createElement("h2");
    testText.className = "testText";
    testText.textContent = "which character can these symbols represent?";
    testPage.appendChild(testText);

    var testChar = document.createElement("span");
    testChar.className = "testPic";

    var char = biliteralSigns[itemToTest];

    for(var i = 0; i < char.chars.length; i++){
        var charItem = getChar(char.chars[i]);

        var imgs = charItem.pic.split(" ");
        loopThroughImgsAndAddTo(imgs, testChar);
    }
    
    var charSpan = document.createElement("span");
    charSpan.textContent = " (" + char.chars + ")";
    testChar.appendChild(charSpan);

    testPage.appendChild(testChar);

    var correctItem = biliteralSigns[itemToTest];
    var otherItems = biliteralReversesThatArentLike(correctItem.chars);
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

        var imgs = allItems[i].pic.split(" ");
        loopThroughImgsAndAddTo(imgs, button);

        testPage.appendChild(button);
    }
}