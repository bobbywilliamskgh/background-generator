var css = document.querySelector("h3");
var inputColor1 = document.querySelector(".color1");
var inputColor2 = document.querySelector(".color2");
var gradient = document.getElementById("gradient");
var randomColor = document.querySelector(".random-color");

function setGradient() {
    console.log(inputColor1.value);
    gradient.style.background = "linear-gradient(to right, " + inputColor1.value + " , " + inputColor2.value + ")";
    css.textContent = gradient.style.background + ";";
}

function getRandomColor() {
    var x = Math.round(0xffffff * Math.random()).toString(16);
    var y = (6 - x.length);
    var z ="000000";
    var z1 = z.substring(0, y);
    var color = "#" + z1 + x;
    return color;
}

function setRandomColor() {
    inputColor1.value = getRandomColor();
    inputColor2.value = getRandomColor();
    setGradient(); 
}

setGradient();

inputColor1.addEventListener("input", setGradient);

inputColor2.addEventListener("input", setGradient);

randomColor.addEventListener("click", setRandomColor);