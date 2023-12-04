const cart = [];

function addToCart(button) {
    const selectedProduct = button.parentElement;
    const name = selectedProduct.dataset.name;
    const price = parseFloat(selectedProduct.dataset.price);
    let existence = parseInt(selectedProduct.dataset.existence);  // Corregir aquí

    if (existence > 0) {
        // Agregar al carrito
        cart.push({ name, price });
    
        // Disminuir la existencia y actualizar en la lista de productos
        existence--;  // Corregir aquí
        selectedProduct.dataset.existence = existence; 
        alert(`Se agregó ${name} al carrito. Existencia actual: ${existence}`);
    
        showCart();
    } else {
        alert("Producto agotado");
    }
}

function showCart() {
    const cartList = document.getElementById("cartList");
    const totalCart = document.getElementById("totalCart");

    cartList.innerHTML = "";
    let total = 0;

    cart.forEach((product, index) => {
        const li = document.createElement("li");

        const img = document.createElement("img");
        img.src = `./assets/images/${product.name.replace(/\s+/g, '')}.jpg`;
        img.alt = product.name;
        img.style.maxWidth = '50vh';  // You can adjust the image size according to your preferences
        img.style.maxHeight = '50vh';
        li.appendChild(img);

        const namePrice = document.createElement("div");
        namePrice.innerHTML = `<b>${product.name}</b> - $${product.price.toFixed(2)}`;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete Product";
        deleteButton.onclick = function () {
            removeFromCart(index);
        };

        li.appendChild(namePrice);
        li.appendChild(deleteButton);
        cartList.appendChild(li);

        total += product.price;
    });

    totalCart.textContent = total.toFixed(2);
}

function removeFromCart(index) {
    const removedProduct = cart.splice(index, 1)[0];

    // Reset stock of the removed product in the product list
    const productInList = document.querySelector(`[data-name="${removedProduct.name}"]`);
    productInList.dataset.stock = parseInt(productInList.dataset.stock) + 1;

    // Update cart display
    showCart();
}

function emptyCart() {
    // Reset stock of products in the cart when emptying it
    cart.forEach(product => {
        const productInList = document.querySelector(`[data-name="${product.name}"]`);
        productInList.dataset.stock = parseInt(productInList.dataset.stock) + 1;
    });

    // Empty the cart
    cart.length = 0;

    // Update cart display
    showCart();
}

function buyProducts() {
    if (cart.length > 0) {
        alert("Thank you for your purchase! Purchased products:\n" + getPurchasedProducts());
        // You can perform additional actions related to the purchase here
        emptyCart();
    } else {
        alert("The cart is empty. Add products before buying.");
    }
}

function getPurchasedProducts() {
    return cart.map(product => `${product.name} - $${product.price.toFixed(2)}`).join('\n');
}

