var alphabet = [
    {char:"A",name:"aleph",pic:"G1"},
    {char:"i",name:"yod",pic:"M17"},
    {char:"y",name:"y",pic:"M17 M17"},
    {char:"a",name:"ayin",pic:"D36"},
    {char:"w",name:"w",pic:"G43"},
    {char:"b",name:"b",pic:"D58"},
    {char:"p",name:"p",pic:"Q3"},
    {char:"f",name:"f",pic:"I9"},
    {char:"m",name:"m",pic:"G17"},
    {char:"n",name:"n",pic:"N35"},
    {char:"r",name:"r",pic:"D21"},
    {char:"h",name:"h",pic:"O4"},
    {char:"H",name:"dotted h",pic:"V28"},
    {char:"x",name:"third h",pic:"Aa1"},
    {char:"X",name:"fourth h",pic:"F32"},
    {char:"z",name:"z or first s",pic:"O34"},
    {char:"s",name:"s or second s",pic:"S29"},
    {char:"S",name:"shin",pic:"N37"},
    {char:"q",name:"q",pic:"N29"},
    {char:"k",name:"k",pic:"V31"},
    {char:"g",name:"g",pic:"W12"},
    {char:"t",name:"t",pic:"X1"},
    {char:"T",name:"second t",pic:"V13"},
    {char:"d",name:"d",pic:"D46"},
    {char:"D",name:"second d",pic:"I10"}
];

var biliteralSigns = [
    {chars:"Aw",pic:"F40",desc:"spine and spinal cord"},
    {chars:"Ab",pic:"U23",desc:"chisel"},
    {chars:"mr",pic:"U23",desc:"chisel"},
    {chars:"Ax",pic:"G25",desc:"crested ibis"},
    {chars:"Ax",pic:"M15",desc:"clump of papyrus with buds"},
    {chars:"iw",pic:"D54",desc:"walking legs"},
    {chars:"iw",pic:"E9",desc:"newborn bubalis"},
    {chars:"ib",pic:"F34",desc:"heart"},
    {chars:"ib",pic:"E8",desc:"kid"},
    {chars:"im",pic:"Z11",desc:"crossed planks"},
    {chars:"im",pic:"Aa13",desc:"unknown"},
    {chars:"in",pic:"W25",desc:"pot with legs"},
    {chars:"in",pic:"K1",desc:"bulti"},
    {chars:"in",pic:"W24",desc:"pot"},
    {chars:"in",pic:"A27",desc:"man running"},
    {chars:"ir",pic:"D4",desc:"eye"},
    {chars:"ir",pic:"A48",desc:"seated man with knife"},
    {chars:"iz",pic:"M40",desc:"tied bundle of reeds"},
    {chars:"is",pic:"Q1",desc:"seat"},
    {chars:"st",pic:"Q1",desc:"seat"},
    {chars:"is",pic:"F51",desc:"piece of meat"},
    {chars:"ik",pic:"A19",desc:"old, distinguished"},
    {chars:"it",pic:"V15",desc:"hobble with legs"},
    {chars:"iT",pic:"V15",desc:"hobble with legs"},
    {chars:"aA",pic:"O29",desc:"wood column"},
    {chars:"ab",pic:"F16",desc:"horn"},
    {chars:"aH",pic:"T24",desc:"fishing net"},
    {chars:"aq",pic:"G35",desc:"cormorant"},
    {chars:"ad",pic:"V26",desc:"spool with thread"},
    {chars:"aD",pic:"V26",desc:"spool with thread"},
    {chars:"aD",pic:"K3",desc:"mullet"},
    {chars:"wA",pic:"V4",desc:"lasso"},
    {chars:"wa",pic:"T21",desc:"harpoon"},
    {chars:"wp",pic:"F13",desc:"horns"},
    {chars:"wn",pic:"E34",desc:"hare"},
    {chars:"wn",pic:"M42",desc:"rosette"},
    {chars:"wr",pic:"G37",desc:"forktailed swallow"},
    {chars:"wd",pic:"V24",desc:"cord wound on stick"},
    {chars:"wD",pic:"V24",desc:"cord wound on stick"},
    {chars:"bA",pic:"G29",desc:"saddle-billed stork"},
    {chars:"bA",pic:"W10A",desc:"pot"},
    {chars:"bH",pic:"F18",desc:"tusk"},
    {chars:"Hw",pic:"F18",desc:"tusk"},
    {chars:"pA",pic:"G40",desc:"pintail duck flying"},
    {chars:"pA",pic:"G41",desc:"pintail duck landing"},
    {chars:"pH",pic:"F22",desc:"hindquarters of feline"},
    {chars:"pd",pic:"D56",desc:"leg"},
    {chars:"pd",pic:"T9",desc:"bow"},
    {chars:"pD",pic:"T9",desc:"bow"},
    {chars:"mA",pic:"U1",desc:"sickle"},
    {chars:"mi",pic:"W19",desc:"milk jug with handle"},
    {chars:"mi",pic:"D38",desc:"forearm with bread"},
    {chars:"mw",pic:"N35A",desc:"three ripples of water"},
    {chars:"mn",pic:"Y5",desc:"game board and pieces"},
    {chars:"mn",pic:"T1",desc:"macewith flat head"},
    {chars:"mr",pic:"U7",desc:"hoe"},
    {chars:"mr",pic:"N36",desc:"canal"},
    {chars:"mr",pic:"O5",desc:"winding wall"},
    {chars:"nm",pic:"O5",desc:"winding wall"},
    {chars:"mH",pic:"V22",desc:"whip"},
    {chars:"ms",pic:"F31",desc:"three fox skins"},
    {chars:"mt",pic:"D52",desc:"penis"},
    {chars:"mt",pic:"G14",desc:"vulture"},
    {chars:"md",pic:"S43",desc:"staff"},
    {chars:"ni",pic:"D35",desc:"gesture of negation"},
    {chars:"ni",pic:"D41",desc:"forearm with palm down"},
    {chars:"nw",pic:"W24",desc:"pot"},
    {chars:"nw",pic:"U19",desc:"adze"},
    {chars:"nb",pic:"V30",desc:"basket"},
    {chars:"nm",pic:"T34",desc:"butcher knife"},
    {chars:"nn",pic:"M22 M22",desc:"rush"},
    {chars:"nH",pic:"G21",desc:"guinea-fowl"},
    {chars:"ns",pic:"F20",desc:"tongue"},
    {chars:"nD",pic:"Aa27",desc:"spindle"},
    {chars:"rw",pic:"E23",desc:"lion recumbent"},
    {chars:"rs",pic:"T13",desc:"pieces of wood tied"},
    {chars:"hb",pic:"U13",desc:"plow"},
    {chars:"HA",pic:"M16",desc:"clump of papyrus"},
    {chars:"Hp",pic:"Aa5",desc:"part of a ship"},
    {chars:"Hm",pic:"D280A",desc:"pelvis and vulva"},
    {chars:"Hm",pic:"U36",desc:"launderer's club"},
    {chars:"Hn",pic:"M2",desc:"plant"},
    {chars:"Hn",pic:"V36",desc:"receptacle of cloth"},
    {chars:"Hn",pic:"U8",desc:"hoe"},
    {chars:"Hr",pic:"D2",desc:"face"},
    {chars:"Hr",pic:"N31",desc:"path with shrubs"},
    {chars:"Hz",pic:"W14",desc:"water jar"},
    {chars:"Hs",pic:"W14",desc:"water jar"},
    {chars:"HD",pic:"T3",desc:"mace with round head"},
    {chars:"xA",pic:"M12",desc:"lotus (water lily) plant"},
    //{chars:"xA",pic:"L6",desc:"shell"},
    {chars:"xa",pic:"N28",desc:"sun's ray above hill"},
    {chars:"xw",pic:"D43",desc:"forearm with flail"},
    {chars:"xm",pic:"R22",desc:"min emblem"},
    {chars:"xt",pic:"M3",desc:"stick"},
    {chars:"XA",pic:"K4",desc:"oxyrhynchus"},
    {chars:"Xn",pic:"F26",desc:"goatskin"},
    {chars:"Xn",pic:"D33",desc:"arms and oar"},
    {chars:"zA",pic:"G39",desc:"pintail duck"},
    {chars:"gb",pic:"G38",desc:"goose"},
    {chars:"zA",pic:"V16",desc:"hobble for cattle"},
    {chars:"zA",pic:"V17",desc:"rolled up tent"},
    {chars:"zp",pic:"O50",desc:"threshing floor with grain"},
    {chars:"sA",pic:"Aa17",desc:"lid of a chest"},
    {chars:"sw",pic:"M23",desc:"sedge"},
    {chars:"sn",pic:"T22",desc:"arrowhead and spear"},
    {chars:"sk",pic:"V29",desc:"swab"},
    {chars:"st",pic:"F29",desc:"cowskin with arrow"},
    {chars:"sT",pic:"S22",desc:"shoulder knot"},
    {chars:"sD",pic:"Z9",desc:"crossed sticks"},
    {chars:"SA",pic:"M8",desc:"pool with lotuses"},
    {chars:"Sw",pic:"H6",desc:"feather"},
    {chars:"Sm",pic:"N40",desc:"depression with legs"},
    {chars:"Sn",pic:"V7",desc:"cord with ends down"},
    {chars:"Sn",pic:"V1",desc:"coil of rope"},
    {chars:"Ss",pic:"V6",desc:"cord with ends up"},
    {chars:"Sd",pic:"F30",desc:"water-skin"},
    {chars:"qn",pic:"Aa8",desc:"irrigation channel"},
    {chars:"qs",pic:"T19",desc:"bone harpoon head"},
    {chars:"qd",pic:"Aa28",desc:"builder's level"},
    {chars:"kA",pic:"D28",desc:"two arms"},
    {chars:"kp",pic:"R5",desc:"censer"},
    {chars:"km",pic:"I6",desc:"crocodile scales"},
    {chars:"gm",pic:"G28",desc:"black ibis"},
    {chars:"gs",pic:"Aa16",desc:"unknown"},
    {chars:"tA",pic:"U30",desc:"kiln"},
    {chars:"tA",pic:"N16",desc:"strip of land with sand"},
    {chars:"ti",pic:"U33",desc:"pestle"},
    {chars:"tm",pic:"U15",desc:"sled"},
    {chars:"TA",pic:"G47",desc:"duckling"},
    {chars:"di",pic:"D37",desc:"forearm with bread mold"},
    {chars:"di",pic:"X8",desc:"bread mold"},
    {chars:"db",pic:"G22",desc:"hoopoe"},
    {chars:"dp",pic:"D1",desc:"head"},
    {chars:"dp",pic:"T8",desc:"dagger"},
    {chars:"DA",pic:"U28",desc:"fire drill"},
    {chars:"Dw",pic:"N26",desc:"mountain"},
    {chars:"Dr",pic:"M36",desc:"bundle of flax"},
    {chars:"Dd",pic:"R11",desc:"reed column"}
];

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

function main(){
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

    for(var i = 0; i < biliteralSigns.length; i++){
        var row = document.createElement("div");
        row.className = "row";

        var span = document.createElement("span");
        span.textContent = biliteralSigns[i].chars;
        row.appendChild(span);

        var imgs = biliteralSigns[i].pic.split(" ");
        for(var j = 0; j < imgs.length; j++){
            var img = document.createElement("img");
            var link = "hieroglyphs/" + imgs[j] + ".png";
            img.src = link;
            img.title = link;
            row.appendChild(img);
        }

        var span = document.createElement("span");
        row.appendChild(span);

        for(var j = 0; j < biliteralSigns[i].chars.length; j++){
            var char = getChar(biliteralSigns[i].chars[j]);
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

main();
