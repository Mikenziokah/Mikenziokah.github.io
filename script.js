const cartItems = [];
const cartTotalElement = document.getElementById('cart-total');

function addToCart(itemName, itemPrice) {
  const newItem = { name: itemName, price: itemPrice };
  cartItems.push(newItem);
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  let total = 0;
  for (const item of cartItems) {
    total += item.price;
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(listItem);
  }
  cartTotalElement.textContent = `Total: $${total}`;
}

function closeCart() {
  const cart = document.getElementById('cart');
  cart.style.display = 'none';
}
function callSupport() {
    alert('Calling support...');  // Simulate a call by displaying an alert
  }
