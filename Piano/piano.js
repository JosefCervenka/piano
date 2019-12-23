function playWhite(p1){
    console.log("play")
    var c = document.getElementById(p1);
    c.style.backgroundColor = "#A9A9A9";
    
    

    var Audio = new Audio("A.mp3");
    Audio.play();
}
function mouseUpWhite(p1) {     
    console.log("mouseUp")
    var cm = document.getElementById(p1);
    cm.style.backgroundColor = "#FFFFFF";
}

function playBlack(p1){
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
