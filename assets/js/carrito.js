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
});
