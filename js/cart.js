
/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {

 
  loadCart();
  clearCart();
  showCart();

    loadCart();
    clearCart();
    showCart();
 
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {

  document.getElementsByTagName('tr').innerHTML = '';



    document.getElementsByTagName('tr').innerHTML = '';



}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {


Nour
  // TODO: Find the table body
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  let tbody = document.getElementsByTagName('body');
  // TODO: Iterate over the items in the cart

  for (let i = 0; i < cart.items.length; i++) {


    let tr = document.createElement('tr');


    // TODO: Create a TR
    tr.setAttribute('id', i);
    tbody.appendchild(tr);


    // TODO: Create a TD for the delete link, quantity,  and the item

    let removeTd = document.createElement('td');
    tr.appendchild(removeTd);
    removeTd.textContent = 'x';

    let quantityTd = document.createElement('td');
    tr.appendchild(quantityTd);
    quantityTd.textContent = cart.items[i].quantity;


    let itemTd = document.createElement('td');
    tr.appendchild(itemTd);
    itemTd.textContent = cart.items[i].product;



  }

    // TODO: Find the table body
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    let tbody = document.getElementsByTagName('body');
    // TODO: Iterate over the items in the cart

    for (let i = 0; i < cart.items.length; i++) {


        let tr = document.createElement('tr');


        // TODO: Create a TR
        tr.setAttribute('id', i);
        tbody.appendchild(tr);


        // TODO: Create a TD for the delete link, quantity,  and the item

        let removeTd = document.createElement('td');
        tr.appendchild(removeTd);
        removeTd.textContent = 'x';

        let quantityTd = document.createElement('td');
        tr.appendchild(quantityTd);
        quantityTd.textContent = cart.items[i].quantity;

        
        let itemTd = document.createElement('td');
        tr.appendchild(itemTd);
        itemTd.textContent = cart.items[i].product;



    }





}

function removeItemFromCart(event) {

Nour
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item


  if (event.target.textContent === 'x') {
    cart.removeItem(event.target.id);
  }



  // TODO: Save the cart back to local storage
  localStorage.setItem(cart, JSON.stringify(cart.items));

  // TODO: Re-draw the cart table
  renderCart();

    // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item


    if (event.target.textContent === 'x') {
        cart.removeItem(event.target.id);
    }



    // TODO: Save the cart back to local storage
    localStorage.setItem(cart, JSON.stringify(cart.items));

    // TODO: Re-draw the cart table
    renderCart();


}

// This will initialize the page and draw the cart on screen
renderCart();