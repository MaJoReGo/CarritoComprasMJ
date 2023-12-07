const products = [];
const cart = [];

function addProduct() {
    const image = document.getElementById('image').value;
    const name = document.getElementById('name').value;
    const price = parseFloat(document.getElementById('price').value);
    const existence = parseInt(document.getElementById('existence').value);
    const description = document.getElementById('description').value;

    if (!name || isNaN(price) || isNaN(existence) || existence < 0) {
        alert('Please fill in all the required fields with valid values.');
        return;
    }

    products.push({ image, name, price, existence, description });
    showProducts();
}

function showProducts() {
    const listProducts = document.getElementById('listProducts');
    listProducts.innerHTML = '';

    products.forEach((product, index) => {
        const li = document.createElement('li');

        const img = createImageElement(product);
        const namePrice = createNamePriceElement(product);
        const addToCartButton = createButton('Add to Cart', () => addToCart(index));
        const deleteButton = createButton('Delete Product', () => deleteProduct(index));

        li.appendChild(img);
        li.appendChild(namePrice);
        li.appendChild(addToCartButton);
        li.appendChild(deleteButton);
        listProducts.appendChild(li);
    });
}

function createImageElement(product) {
    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    img.style.maxWidth = '50px';
    return img;
}

function createNamePriceElement(product) {
    const namePrice = document.createElement('div');
    namePrice.textContent = `${product.name} - $${product.price.toFixed(2)}`;
    return namePrice;
}

function createButton(text, clickHandler) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', clickHandler);
    return button;
}

function addToCart(index) {
    const selectedProduct = products[index];
    if (selectedProduct.existence > 0) {
        cart.push(selectedProduct);
        selectedProduct.existence--;
        showCart();
    } else {
        alert('Product is out of stock.');
    }
}

function showCart() {
    const cartList = document.getElementById('cartList');
    const totalCart = document.getElementById('totalCart');

    cartList.innerHTML = '';
    let total = 0;

    cart.forEach((product, index) => {
        const li = document.createElement('li');
        const img = createImageElement(product);
        const namePrice = createNamePriceElement(product);
        const deleteButton = createButton('Remove from Cart', () => removeFromCart(index));

        li.appendChild(img);
        li.appendChild(namePrice);
        li.appendChild(deleteButton);
        cartList.appendChild(li);

        total += product.price;
    });

    totalCart.textContent = total.toFixed(2);
}

function removeFromCart(index) {
    const removedProduct = cart.splice(index, 1)[0];
    removedProduct.existence++;
    showCart();
}

function deleteProduct(index) {
    products.splice(index, 1);
    showProducts();
}

function buyProducts() {
    alert('Thank you for your purchase!');
    cart.length = 0;
    showCart();
    saveCart();
}

function saveCart() {
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
        console.error('Error saving cart to local storage:', error);
    }
}

function retrieveCart() {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.length = 0;
    cart.push(...savedCart);
}

// Retrieve the cart on page load
retrieveCart();
// Show the initial cart state
showCart();

// Log local storage to console
console.log(localStorage);

