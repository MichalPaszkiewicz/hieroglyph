


function drawChart(){


    var mainDiv = document.getElementById("main");
    for(var i = 0; i < alphabet.length; i++){
        var row = document.createElement("div");
        row.className = "row";
        
        var span = document.createElement("span");
        span.textContent = alphabet[i].name;
        row.appendChild(span);
        
        var imgs = alphabet[i].pic.split(" ");
        for(var j = 0; j < imgs.length; j++){
            var img = document.createElement("img");
            var link = "hieroglyphs/" + imgs[j] + ".png";
            img.src = link;
            img.title = link;
            row.appendChild(img);
        }
        
        mainDiv.appendChild(row);
    }

    for(var i = 0; i < multiliteralSigns.length; i++){
        var row = document.createElement("div");
        row.className = "row";

        var span = document.createElement("span");
        span.textContent = multiliteralSigns[i].chars;
        row.appendChild(span);

        var imgs = multiliteralSigns[i].pic.split(" ");
        for(var j = 0; j < imgs.length; j++){
            var img = document.createElement("img");
            var link = "hieroglyphs/" + imgs[j] + ".png";
            img.src = link;
            img.title = link;
            row.appendChild(img);
        }

        var span = document.createElement("span");
        row.appendChild(span);

        for(var j = 0; j < multiliteralSigns[i].chars.length; j++){
            var char = getChar(multiliteralSigns[i].chars[j]);
            var imgs = char.pic.split(" ");

            for(var k = 0; k < imgs.length; k++){
                var img = document.createElement("img");
                var link = "hieroglyphs/" + imgs[k] + ".png";
                img.src = link;
                img.title = link;
                row.appendChild(img);
            }
        }

        mainDiv.appendChild(row);
    } 
    
}

drawChart();