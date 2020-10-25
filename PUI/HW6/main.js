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

//changes displayed color/image to Strawberry
let colorButtonStrawberry= document.getElementById("color-button-strawberry");
colorButtonStrawberry.onclick = function (e) {
    e.preventDefault();
    console.log(e);
    let colorText = document.getElementById("color-text");
    colorText.innerHTML = "Strawberry";
    let imageSrc = document.getElementById("dog-harness-1");
    imageSrc.src = "images/dog-harness-1-large.png"
};

//changes displayed color/image to Fire Orange
let colorButtonFireOrange= document.getElementById("color-button-fire-orange");
colorButtonFireOrange.onclick = function (e) {
    e.preventDefault();
    console.log(e);
    let colorText = document.getElementById("color-text");
    colorText.innerHTML = "Fire Orange";
    let imageSrc = document.getElementById("dog-harness-1");
    imageSrc.src = "images/dog-harness-2-large.png"
};

//changes displayed color/image to Crazyberry
let colorButtonCrazyberry= document.getElementById("color-button-crazyberry");
colorButtonCrazyberry.onclick = function (e) {
    e.preventDefault();
    console.log(e);
    let colorText = document.getElementById("color-text");
    colorText.innerHTML = "Crazyberry";
    let imageSrc = document.getElementById("dog-harness-1");
    imageSrc.src = "images/dog-harness-3-large.png"
};

//changes displayed color/image to Blackberry
let colorButtonBlackberry= document.getElementById("color-button-blackberry");
colorButtonBlackberry.onclick = function (e) {
    e.preventDefault();
    console.log(e);
    let colorText = document.getElementById("color-text");
    colorText.innerHTML = "Blackberry";
    let imageSrc = document.getElementById("dog-harness-1");
    imageSrc.src = "images/dog-harness-4-large.png"
};


//creates array to hold bag items
var itemArr = []

//creates item class for products
class Item {

    constructor(name, price, size, color, quantity) {
        this.name = name
        this.price = price
        this.size = size
        this.color = color
        this.quantity = quantity
    }
}

//
function addToBag() {
    // automatically creates array of items with this name
    var sizeName = document.getElementsByName("size-tiles-dog-harness"); 
    var selectedSize;
    //iterates through size tiles to find selected size
    for (var i=0; i<sizeName.length; i++) {
        if(sizeName[i].clicked) {
            selectedSize = sizeName[i].value;
        }
    }

    //iterates through color selector to find selected color
    var colorName = document.getElementsByName("colors-dog-harness");
    var selectedColor;
    for (var i=0; i<colorName.length; i++) {
        if(colorName[i].clicked) {
            selectedColor = colorName[i].value;
        }
    }
    
    //creates new object based on item selection and adds it to the item array
    var product = new Item (selectedSize, selectedColor)
    itemArr.push(product)

    
    console.log(itemArr)
    //calls bag number function to update bag in main nav; see function below
    updateBagNumber(itemArr.length) 
}

//updates displayed number of items in main nav Bag
function updateBagNumber(num) {
    var bagCount = document.getElementById('bagNumber')
    bagCount.innerHTML = num;
}

// local storage

//function goToCheckoutPage() {
   // localStorage.setItem('order', JSON.stringify(productArr))
   // var loadedProductArr = localStorage.getItem('order')
   // var productArrs = JSON.parse(loadedProductArr)
    //At this point, productArr2 is the same as productArr

    //load that new HTML page
    //do stuff with productArr
//}






// document.getElementByName('color') ---> automatically creates array of items that have the name "color" (for example,
// input buttons have 

