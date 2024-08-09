const cart = [];
const cartItems = document.getElementById('cartItems');
const totalPrice = document.getElementById('totalPrice');
const openCartButton = document.getElementById('openCart');
const closeCartButton = document.getElementById('closeCart');
const checkoutButton = document.getElementById('checkoutButton');
const closeCheckoutButton = document.getElementById('closeCheckout');
const orderForm = document.getElementById('orderForm');
const searchBar = document.getElementById('searchBar');
const products = document.querySelectorAll('.product');

searchBar.addEventListener('keyup', function() {
    const searchText = searchBar.value.toLowerCase();
    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchText)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
});

document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentNode.querySelector('h3').textContent;
        const productPrice = parseInt(this.parentNode.querySelector('p').textContent.replace('السعر: ', '').replace(' جنيه', ''));

        const existingProduct = cart.find(item => item.name === productName);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({ name: productName, price: productPrice, quantity: 1 });
        }
        updateCart();
    });
});

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} x${item.quantity} - ${item.price * item.quantity} جنيه`;
        cartItems.appendChild(li);
        total += item.price * item.quantity;
    });
    totalPrice.textContent = total;
}

openCartButton.addEventListener('click', function() {
    document.getElementById('cart').style.display = 'block';
});

closeCartButton.addEventListener('click', function() {
    document.getElementById('cart').style.display = 'none';
});

checkoutButton.addEventListener('click', function() {
    document.getElementById('cart').style.display = 'none';
    document.getElementById('checkoutForm').style.display = 'block';
});

closeCheckoutButton.addEventListener('click', function() {
    document.getElementById('checkoutForm').style.display = 'none';
});

orderForm.addEventListener('submit
