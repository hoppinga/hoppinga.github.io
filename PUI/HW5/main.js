//changes displayed size to Tiny
let sizeButtonTiny= document.getElementById("size-button-tiny");
sizeButtonTiny.onclick = function (e) {
    e.preventDefault();
    console.log(e);
    let sizeText = document.getElementById("size-text");
    sizeText.innerHTML = "Tiny (5-20 lbs)";
};

//changes displayed size to Small
let sizeButtonSmall= document.getElementById("size-button-small");
sizeButtonSmall.onclick = function (e) {
    e.preventDefault();
    console.log(e);
    let sizeText = document.getElementById("size-text");
    sizeText.innerHTML = "Small (20-40 lbs)";
};

//changes displayed size to Med
let sizeButtonMed= document.getElementById("size-button-med");
sizeButtonMed.onclick = function (e) {
    e.preventDefault();
    console.log(e);
    let sizeText = document.getElementById("size-text");
    sizeText.innerHTML = "Med (40-60 lbs)";
};

//changes displayed size to Large
let sizeButtonLarge= document.getElementById("size-button-large");
sizeButtonLarge.onclick = function (e) {
    e.preventDefault();
    console.log(e);
    let sizeText = document.getElementById("size-text");
    sizeText.innerHTML = "Large (60-90 lbs)";
};

//changes displayed color to Strawberry
let colorButtonStrawberry= document.getElementById("color-button-strawberry");
colorButtonStrawberry.onclick = function (e) {
    e.preventDefault();
    console.log(e);
    let colorText = document.getElementById("color-text");
    colorText.innerHTML = "Strawberry";
};

//changes displayed color to Fire Orange
let colorButtonFireOrange= document.getElementById("color-button-fire-orange");
colorButtonFireOrange.onclick = function (e) {
    e.preventDefault();
    console.log(e);
    let colorText = document.getElementById("color-text");
    colorText.innerHTML = "Fire Orange";
};

//changes displayed color to Crazyberry
let colorButtonCrazyberry= document.getElementById("color-button-crazyberry");
colorButtonCrazyberry.onclick = function (e) {
    e.preventDefault();
    console.log(e);
    let colorText = document.getElementById("color-text");
    colorText.innerHTML = "Crazyberry";
};

//changes displayed color to Blackberry
let colorButtonBlackberry= document.getElementById("color-button-blackberry");
colorButtonBlackberry.onclick = function (e) {
    e.preventDefault();
    console.log(e);
    let colorText = document.getElementById("color-text");
    colorText.innerHTML = "Blackberry";
};