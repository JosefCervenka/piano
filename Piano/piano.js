// var c = document.getElementById("c");
// var d = document.getElementById("d");
// var e = document.getElementById("e");
// var f = document.getElementById("f");
// var g = document.getElementById("g");
// var a = document.getElementById("a");
// var h = document.getElementById("h");


function playWhite(p1, audio){
    console.log("play")
    var c = document.getElementById(p1);
    c.style.backgroundColor = "#A9A9A9";
    
    audio.play();
}
function mouseUpWhite(p1) {     
    console.log("mouseUp")
    var cm = document.getElementById(p1);
    cm.style.backgroundColor = "#FFFFFF";
}

function playBlack(p1, audio){
    console.log("play")
    var c = document.getElementById(p1);
    c.style.backgroundColor = "#151515";
    
    audio.play();
}
function mouseUpBlack(p1) {     
    console.log("mouseUp")
    var cm = document.getElementById(p1);
    cm.style.backgroundColor = "black";
}
