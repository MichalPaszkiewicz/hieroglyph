var fs = require("fs");

var allPaths = fs.readdirSync("./hieroglyphs");
var svgPaths = allPaths.filter(function(p){
    return p.indexOf(".svg") != -1;
});

for(var i = 0; i < svgPaths.length; i++){
    fs.unlinkSync("./hieroglyphs/" + svgPaths[i]);        
}