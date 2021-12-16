// shop.js


var additem = document.getElementById('addtocart1');
// add a listener for add to cart if such a product1 is pressed
additem.addEventListener("click", addToCart1);

var additem = document.getElementById('addtocart2');
// add a listener for add to cart if such a product1 is pressed
additem.addEventListener("click", addToCart1);

var additem = document.getElementById('addtocart3');
// add a listener for add to cart if such a product1 is pressed
additem.addEventListener("click", addToCart1);

var additem = document.getElementById('addtocart4');
// add a listener for add to cart if such a product1 is pressed
additem.addEventListener("click", addToCart1);

function addToCart1() {
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
}

function addToCart2() {
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
}

function addToCart3() {
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
}

function addToCart4() {
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
}
