window.onscroll = function(){
    var hideNav = document.querySelector(".navbar")
        if ( window.pageYOffset > 70 ) {
                 hideNav.style.backgroundColor = "white";
       
        } else {
                hideNav.style.backgroundColor = "transparent";

            }
}


var MenuItems = document.getElementById("MenuItems");
   MenuItems.style.maxHeight = "0px";

function HamburgerMenu(){
   if(MenuItems.style.maxHeight == "0px"){
    MenuItems.style.maxHeight = "200px";
   }
   else{
    MenuItems.style.maxHeight = "0px";
   }

}


function ShopNow(){
    var scrollTo = document.querySelector(".categories")
    scrollTo.scrollIntoView({behavior:"smooth"});
}

let counterCartOpen = 0;
var newElem = document.createElement('CartDiv');
newElem.id = "newElemid";
var head = document.querySelector(".header")
head.appendChild(newElem);
ShoppingCart = function(){
    if(newElem.classList.contains("CartDivClass")){
        newElem.classList.add("hide")
        newElem.classList.remove("CartDivClass")
    }else{
        newElem.classList.remove("hide")
        newElem.classList.add("CartDivClass")
    }
    // var bugClass = document.querySelector(".prodCartClass")
    // var parent = bugClass.parentElement;
    // const children = parent.children;
    // for(const child of children){
    //     child.classList.toggle("hide")
    // }
    
}



let cartElements = [];
let cartsum = 0;
let quantity = 0;
let test = 0;
AddToCart = function(esi){
    if(newElem.classList.contains("hide")){
        newElem.classList.remove("hide")
    }

var parent = esi.parentElement;
const children = parent.children
var prodCart = document.createElement("div")

var quantityProd = document.createElement("div")
quantityProd.classList.add("quantityProd")
prodCart.appendChild(quantityProd)
for(const child of children){
    if(child.tagName == "P"){
         const temp = child.innerHTML;
        const temp1 = temp.replace(/\$/g , "");
        cartElements.push(temp1)
        cartsum += (+temp1);
      }
    
}

var current = null;
var cnt = 0;
for (let i = 0; i < cartElements.length; i++) {
    if (cartElements[i] != current) {
        if (cnt > 0) {
            quantityProd.innerHTML = cnt
        }
        current = cartElements[i];
        cnt = 1;
    } else {
        cnt++;
    }
}
if (cnt > 0) {

    quantityProd.innerHTML = cnt
}


newElem.classList.add("CartDivClass")

newElem.appendChild(prodCart)
prodCart.classList.add("prodCartClass")
var elemImg = document.createElement("img");
elemImg.src = parent.children[0].src
prodCart.appendChild(elemImg)

var priceCart = document.createElement("p")
priceCart.innerHTML = parent.children[2].innerHTML

prodCart.append(priceCart)

var totalPrice = document.createElement("div")
var totalPriceInt = document.createElement("h1")
totalPrice.classList.add("TotalPrice")
prodCart.appendChild(totalPrice)
totalPrice.innerHTML = "Total price is: " +  Math.round(cartsum) + "$"


// Notification bar
const notifications = document.querySelector(".notifications")
const toastDetails = {
    timer:5000,
    success:{
        icon:"fa-circle-check",
        text: "Added successfully!"
    },
    error:{
        icon:"fa-circle-xmark",
        text: "Error toast"
    }
}
const removeToast = (toast) =>{
    toast.classList.add("hide");
    if(toast.timeoutId) clearTimeout(toast.timeoutId)
    setTimeout(() => toast.remove(),500);
}
const removeToastX = (x) =>{
    alert(x)
}

const createToast = (id) =>{
    const {icon,text} = toastDetails[id];
    const toast = document.createElement("li");
    toast.className = `toast ${id}`;
    toast.innerHTML = ` <div class="column">
                <i class="fa-solid ${icon}"></i>
                <span>${text}</span>
                
            </div>
            <i class="fa-solid fa-circle-xmark" onclick = "removeToastX(this)"></i>`;
    notifications.appendChild(toast)
    toast.timeoutId = setTimeout(() => removeToast(toast),toastDetails.timer)
}
createToast(esi.id)

console.log("All elements: " + cartElements)
console.log("Sum is: " + cartsum)
}



