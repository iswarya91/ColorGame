var colorBoxList = document.querySelectorAll(".color-box");
var correcrRgbDisplay = document.querySelector(".correct-rgb");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
var resetBtn = document.querySelector("#reset");
var msg =  document.querySelector("#msg");
var numOfColorBox = colorBoxList.length;
var correctColor;
var correctColorBox;

function gameReset() {
    correctColor = getRandomRgbVal();
    correctColorBox = getRandomIntVal(0, numOfColorBox); 
    correcrRgbDisplay.textContent = correctColor;
    for (var i = 0; i < numOfColorBox; i++) {
        if (i === correctColorBox) {
            colorBoxList[i].style.background = correctColor;
        } else {
            colorBoxList[i].style.background = getRandomRgbVal();
        }
    }
    resetBtn.textContent = "New Colors";
    msg.textContent="";
    document.querySelector(".jumbotron").style.background = "";

}

for (var i = 0; i < colorBoxList.length; i++) {
    colorBoxList[i].addEventListener("click", checkColor);
}

gameReset();

function getRandomIntVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomRgbVal() {
    var red = getRandomIntVal(0, 256);
    var green = getRandomIntVal(0, 256);
    var blue = getRandomIntVal(0, 256);
    var rgbColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    return rgbColor;
}


function gameWon() {
    for (var i = 0; i < colorBoxList.length; i++) {
        colorBoxList[i].style.background = correctColor;
        colorBoxList[i].style.visibility = "visible";
    }
    document.querySelector(".jumbotron").style.background = correctColor;
    resetBtn.textContent = "Play Again";
    msg.textContent = "Correct!!!";
}
easyBtn.addEventListener("click", function(){
    document.querySelectorAll(".row")[1].style.display = "none";
    numOfColorBox = 3;
    gameReset();
});

hardBtn.addEventListener("click", function(){
    document.querySelectorAll(".row")[1].style.display = "flex";
    numOfColorBox = 6;
    gameReset();
});

resetBtn.addEventListener("click", function(){
    gameReset();
});

function checkColor() {
    var choosenColor = this.style.background;
    if (choosenColor === correctColor) {
        gameWon();
    } else {
        this.style.visibility = "hidden";
        msg.textContent = "Try Again";
    }
}

for (var i = 0; i < colorBoxList.length; i++) {
    if (i === correctColorBox) {
        colorBoxList[i].style.background = correctColor;
    } else {
        colorBoxList[i].style.background = getRandomRgbVal();
    }
    colorBoxList[i].addEventListener("click", checkColor);
}

