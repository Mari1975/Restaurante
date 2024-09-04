/* si funciona este carro eliminado


document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
    
    // Obtener los elementos del carrito desde el Local Storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Función para actualizar la vista del carrito
    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            total += item.price;

            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price}</td>
                <td><button class="removeBtn" data-index="${index}">Eliminar</button></td>
            `;
            cartItems.appendChild(row);
        });

        totalPriceElement.textContent = total;
    }

    // Actualizar el carrito al cargar la página
    updateCart();

    // Manejar la eliminación de productos del carrito
    document.querySelectorAll('.removeBtn').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        });
    });

    // Manejar el proceso de finalización de compra
    document.getElementById('checkoutBtn').addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Compra realizada con éxito.');
            localStorage.removeItem('cart'); // Vaciar el carrito
            updateCart(); // Actualizar la vista del carrito
        } else {
            alert('El carrito está vacío.');
        }
    });
});*/


// carrito.js segundo carrito funciona perfecto

// Función para cargar los productos del carrito desde localStorage
/*function loadCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
    let totalPrice = 0;

    cartItemsContainer.innerHTML = ''; // Limpiar el contenido previo

    cart.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td><button class="removeItemBtn" data-index="${index}">Eliminar</button></td>
        `;
        cartItemsContainer.appendChild(row);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2); // Actualizar el total

    // Añadir funcionalidad a los botones de eliminar
    document.querySelectorAll('.removeItemBtn').forEach(button => {
        button.addEventListener('click', removeItemFromCart);
    });
}

// Función para eliminar un producto del carrito
function removeItemFromCart(event) {
    const index = event.target.getAttribute('data-index');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.splice(index, 1); // Eliminar el producto del array
    localStorage.setItem('cart', JSON.stringify(cart)); // Guardar el array actualizado en localStorage
    loadCartItems(); // Recargar los productos en el carrito
}

// Función para finalizar la compra
function finalizePurchase() {
    alert('¡Gracias por su compra!');
    localStorage.removeItem('cart'); // Vaciar el carrito
    loadCartItems(); // Recargar el carrito vacío
}

// Cargar los productos del carrito al cargar la página
document.addEventListener('DOMContentLoaded', loadCartItems);

// Añadir funcionalidad al botón de finalizar compra
document.getElementById('checkoutBtn').addEventListener('click', finalizePurchase);

*/

// carrito.js

// Función para cargar los productos del carrito desde localStorage
function loadCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
    let totalPrice = 0;

    cartItemsContainer.innerHTML = ''; // Limpiar el contenido previo

    cart.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${item.image}" alt="${item.name}" class="cart-item-image"></td>
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td><button class="removeItemBtn" data-index="${index}">Eliminar</button></td>
        `;
        cartItemsContainer.appendChild(row);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2); // Actualizar el total

    // Añadir funcionalidad a los botones de eliminar
    document.querySelectorAll('.removeItemBtn').forEach(button => {
        button.addEventListener('click', removeItemFromCart);
    });
}

// Función para eliminar un producto del carrito
function removeItemFromCart(event) {
    const index = event.target.getAttribute('data-index');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.splice(index, 1); // Eliminar el producto del array
    localStorage.setItem('cart', JSON.stringify(cart)); // Guardar el array actualizado en localStorage
    loadCartItems(); // Recargar los productos en el carrito
}

// Función para finalizar la compra
function finalizePurchase() {
    alert('¡Gracias por su compra!');
    localStorage.removeItem('cart'); // Vaciar el carrito
    loadCartItems(); // Recargar el carrito vacío
}

// Cargar los productos del carrito al cargar la página
document.addEventListener('DOMContentLoaded', loadCartItems);

// Añadir funcionalidad al botón de finalizar compra
document.getElementById('checkoutBtn').addEventListener('click', finalizePurchase);
