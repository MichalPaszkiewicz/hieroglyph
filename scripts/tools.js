function loopThroughImgsAndAddTo(imgs, thingToAddTo){
    for(var k = 0; k < imgs.length; k++){
    	var img = document.createElement("img");
    	var link = "hieroglyphs/" + imgs[k] + ".png";
    	img.src = link;
    	img.title = link;
    	thingToAddTo.appendChild(img);
    }
}