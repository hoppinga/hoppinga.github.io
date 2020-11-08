//SIZE SELECTION

//only allows one size button to be selected at a time (selected state moves)
const sizeButtons = document.querySelectorAll("[name=size-tiles-dog-harness]");
let selectedButton;
sizeButtons.forEach((sizeTileButton) => {
    sizeTileButton.addEventListener('click', () => {
    if (selectedButton) {
      selectedButton.style.removeProperty('border');
    }
    selectedButton = sizeTileButton;
    sizeTileButton.style.border = 'solid';
    sizeTileButton.style.borderWidth = '1px';
  })
})

//changes displayed size to Tiny
let sizeButtonTiny = document.getElementById("size-button");
document.onload = function() {
    sizeButtonTiny.onclick = function (e) {
        e.preventDefault();
        console.log(e);
        let sizeText = document.getElementById("size-text");
        sizeText.innerHTML = "Tiny (5-20 lbs)";
    }
};

//changes displayed size to Small
let sizeButtonSmall= document.getElementById("size-button-small");
document.onload = function() {
   sizeButtonSmall.onclick = function (e) {
        e.preventDefault();
        console.log(e);
        let sizeText = document.getElementById("size-text");
        sizeText.innerHTML = "Small (20-40 lbs)";
    };
}

//changes displayed size to Med
let sizeButtonMed= document.getElementById("size-button-med");
document.onload = function() {
    sizeButtonMed.onclick = function (e) {
        e.preventDefault();
        console.log(e);
        let sizeText = document.getElementById("size-text");
        sizeText.innerHTML = "Med (40-60 lbs)";
    };
}

//changes displayed size to Large
let sizeButtonLarge= document.getElementById("size-button-large");
document.onload = function() {
    sizeButtonLarge.onclick = function (e) {
        e.preventDefault();
        console.log(e);
        let sizeText = document.getElementById("size-text");
        sizeText.innerHTML = "Large (60-90 lbs)";
    };
}


//COLOR SELECTION

//only allows one color button to be selected at a time (selected state moves)
const colorButtons = document.querySelectorAll("[name=colors-dog-harness]");
let selectedColorButton;
colorButtons.forEach((colorTileButton) => {
    colorTileButton.addEventListener('click', () => {
    if (selectedColorButton) {
      selectedColorButton.style.removeProperty('border');
    }
    selectedColorButton = colorTileButton;
    colorTileButton.style.border = 'solid';
    colorTileButton.style.borderWidth = '1px';
    colorTileButton.style.padding = "10px";
  })
})

//changes displayed color/image to Strawberry
let colorButtonStrawberry= document.getElementById("color-button-strawberry");
document.onload = function() {
    colorButtonStrawberry.onclick = function (e) {
        e.preventDefault();
        console.log(e);
        let colorText = document.getElementById("color-text");
        colorText.innerHTML = "Strawberry";
        let imageSrc = document.getElementById("dog-harness-1-large");
        imageSrc.src = "images/dog-harness-1-large.png"
    };
}

//changes displayed color/image to Fire Orange
let colorButtonFireOrange= document.getElementById("color-button-fire-orange");
document.onload = function() {
    colorButtonFireOrange.onclick = function (e) {
        e.preventDefault();
        console.log(e);
        let colorText = document.getElementById("color-text");
        colorText.innerHTML = "Fire Orange";
        let imageSrc = document.getElementById("dog-harness-1-large");
        imageSrc.src = "images/dog-harness-2-large.png"
    };
}

//changes displayed color/image to Crazyberry
let colorButtonCrazyberry= document.getElementById("color-button-crazyberry");
document.onload = function() {
    colorButtonCrazyberry.onclick = function (e) {
        e.preventDefault();
        console.log(e);
        let colorText = document.getElementById("color-text");
        colorText.innerHTML = "Crazyberry";
        let imageSrc = document.getElementById("dog-harness-1-large");
        imageSrc.src = "images/dog-harness-3-large.png"
    };
}
//changes displayed color/image to Blackberry
let colorButtonBlackberry= document.getElementById("color-button-blackberry");
document.onload = function() { 
    colorButtonBlackberry.onclick = function (e) {
        e.preventDefault();
        console.log(e);
        let colorText = document.getElementById("color-text");
        colorText.innerHTML = "Blackberry";
        let imageSrc = document.getElementById("dog-harness-1-large");
        imageSrc.src = "images/dog-harness-4-large.png"
    };
}

//BAG EDITS AND ADDITIONS

//creates array to hold bag items
var itemArr = getCart();
var itemArrNew = [];

//checks if there are existing items in local storage and grabs them if so
function getCart(){
    if (!JSON.parse(localStorage.getItem("order"))){
        return [];
    }
    else {
        return JSON.parse(localStorage.getItem("order"));
    }
}

//creates item class for products
class Item {

    constructor(name, price, size, color, img, quantity) {
        this.name = name
        this.price = price
        this.size = size
        this.color = color
        this.quantity = quantity
        this.img = img
    }
}

//adds items to bag when "Add to Bag" button is clicked on product page
function addToBag() {
    var name = document.getElementById("product-name").innerHTML; 
    var price = document.getElementById("item-price").innerHTML;

    // automatically creates array of items with this name
    var sizeName = document.getElementsByName("size-tiles-dog-harness"); 
    //iterates through size tiles to find selected size
    for (var i=0; i<sizeName.length; i++) {
        if(sizeName[i].click) {
            var size = document.getElementById("size-text").innerHTML;
        }
    }

    //iterates through color selector to find selected color and corresponding image
    var colorName = document.getElementsByName("colors-dog-harness");
    for (var i=0; i<colorName.length; i++) {
        if(colorName[i].click) {
            var color = document.getElementById("color-text").innerHTML;
            var img = document.getElementById("dog-harness-1-large").getAttribute("src");
        }
    }

    //creates new object based on item selection and adds it to the item array
    var product = new Item (name, price, size, color, img)

    itemArr.push(product);

    // create item order in local storage
    localStorage.setItem('order', JSON.stringify(itemArr));

    //calls bag number function to update bag in main nav; see function below
    updateBagNumber();
}

//updates displayed number of items in main nav Bag
function updateBagNumber() {
    var arr = JSON.parse(localStorage.getItem('order'));
    let num;
    if (arr == {} || !arr) {
        num = 0;
    }
    else {
        num = arr.length;
    }
    var bagCount = document.getElementById('bagNumber')
    bagCount.innerHTML = num;
}

function goToBag() {
    //grabs folder where HTML pages are stored, replaces with Bag
    window.location.replace('bag.html');
}

function bagLoaded() {
    //retrieves items stored in local storage
    var loadedItemArr = localStorage.getItem('order');
    itemArrNew = JSON.parse(loadedItemArr);
    var listOfItems = document.getElementById('listOfItems');
    
    for(var i=0; i<itemArrNew.length; i++) {
        var item = itemArrNew[i];
        var itemPrice = item.price;
        var itemName = item.name;
        var itemColor = item.color;
        var itemSize = item.size;
        var itemImage = item.img;

        //adds each item in the array to the bag with correct styling
        listOfItems.innerHTML += '<div class="bag-items"><img src="' + itemImage + ' "width="180" alt="Product image">\
        <div class="bag-item-details"><div class="bag-item-details-title">' + itemName + '<span onclick="removeItem(this)">\
        <button class="clear-button"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" \
        xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 \
        12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="black"/></svg></button></span></div\
        </div><div>' + itemColor + '</div><div>' + itemSize + '</div><div class="quantity-selector-price"><select><option value="1">\
        1</option><option value="1">2</option><option value="1">3</option><option value="1">4</option><option value="1">\
        5</option><option value="1">6</option><option value="1">7</option><option value="1">8</option><option value="1">\
        9</option><option value="1">10</option></select><span id="bag-item-price">$' + itemPrice + '</span></div></div></div>'
        

    }
    bagSubtotal();
    updateBagNumber();
}

//updates Bag Subtotal in Order Summary section
function bagSubtotal() {
    var bSubtotal = 0;
    var bagSubtotalUpdate = document.getElementById('bag-subtotal');
    for(var i=0; i<itemArrNew.length; i++) {
        itemPrice = parseInt(itemArrNew[i].price);
        bSubtotal = bSubtotal + itemPrice;
    }
    bagSubtotalUpdate.innerHTML = "$" + bSubtotal;
}

//loops through items in bag and removes selected item
function removeItem(curr) {
    let topDiv = document.getElementById("listOfItems");
    let childList = topDiv.getElementsByClassName("bag-items");
    let finalI = 0;
    for (var i = 0; i < childList.length; i++) {
        if(childList[i]==curr){
            finalI = i;
            break;
        }
    }
    itemArrNew.splice(finalI, 1);
    localStorage.setItem('order', JSON.stringify(itemArrNew));
    curr.parentElement.parentElement.parentElement.remove();
    bagSubtotal();
    updateBagNumber();
}


