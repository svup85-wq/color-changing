
let bgColor = "yellow";
let fontColor = "black";

function setBg(color) {
    bgColor = color;
}

function setFontColor(color) {
    fontColor = color;
}

function applyChanges() {

    let box = document.getElementById("textBox");

    let font = document.getElementById("fontFamily").value;

    box.style.backgroundColor = bgColor;

    box.style.color = fontColor;

    box.style.fontFamily = font;
}
