// Funcionalidad del Menú Hamburger para dispositivos móviles
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Funcionalidad del Modal en la sección de contacto
const contactForm = document.getElementById('contactForm');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close-button');

// Manejar el envío del formulario
contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    // Aquí podrías agregar lógica para enviar los datos del formulario a un servidor
    modal.style.display = 'block';
    contactForm.reset();
});

// Cerrar el modal cuando se hace clic en la 'X'
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar el modal cuando se hace clic fuera del contenido del modal
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});
// Generar confeti aleatorio
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = Math.random() > 0.5 ? 'var(--rojo)' : 'var(--azul)';
    confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
    confetti.style.opacity = Math.random();
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(confetti);

    // Remover confeti después de la animación
    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

// Crear confeti cada 300 ms
setInterval(createConfetti, 300);

// categorias




// script.js

/*document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartModal = document.getElementById('cart-modal');
    const cartIcon = document.getElementById('cart-icon');
    const closeModal = document.querySelector('.close');
    const checkoutButton = document.getElementById('checkout');

    // Mostrar el modal del carrito
    cartIcon.addEventListener('click', () => {
        cartModal.style.display = 'block';
        renderCart();
    });

    // Cerrar el modal del carrito
    closeModal.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });
        //
    // Agregar productos al carrito
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-name');
            const productPrice = parseInt(this.getAttribute('data-price'));

            const product = cart.find(item => item.name === productName);
            if (product) {
                product.quantity += 1;
            } else {
                cart.push({ name: productName, price: productPrice, quantity: 1 });
            }

            cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
        });
    });*/

    // Renderizar los elementos del carrito
    /*function renderCart() {
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            total += item.price * item.quantity;
            cartItems.innerHTML += `
                <p>${item.name} x ${item.quantity} - $${item.price * item.quantity}</p>
            `;
        });

        cartTotal.textContent = total;
    }*/

    // Realizar pedido
    /*checkoutButton.addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Pedido realizado con éxito');
            cart.length = 0; // Vaciar el carrito
            cartCount.textContent = '0';
            cartModal.style.display = 'none';
        } else {
            alert('El carrito está vacío');
        }
    });*/

    // Cerrar el modal si se hace clic fuera de él
    /*window.onclick = function(event) {
        if (event.target == cartModal) {
            cartModal.style.display = 'none';
        }
    }
});*/
