document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    
    const categoryTitle = document.getElementById('categoryTitle');
    const categoryCards = document.getElementById('categoryCards');

    const dishes = {
        'comida-tradicional': [
            { name: 'Empanada de Pino', price: 2500, image: 'assets/img/empanada.jpeg' },
            { name: 'Asado Chileno', price: 7500, image: 'assets/img/asado.jpeg' },
            { name: 'Charquicán', price: 5500, image: 'assets/img/charquican.jpeg' },
            { name: 'Porotos Granados', price: 5000, image: 'assets/img/porotos.jpeg' },
            { name: 'Pastel de Choclo', price: 6000, image: 'assets/img/pastel-choclo.jpeg' },
            { name: 'Cazuela', price: 6500, image: 'assets/img/cazuela.jpeg' },
        ],
        'bebidas': [
            { name: 'Mote con Huesillo', price: 1500, image: 'assets/img/mote.jpeg' },
            { name: 'Jugo Natural', price: 1200, image: 'assets/img/jugo.jpeg' },
            { name: 'Chicha', price: 2000, image: 'assets/img/chicha.jpeg' },
            { name: 'Vino Tinto', price: 3000, image: 'assets/img/vino.jpeg' },
            { name: 'Cerveza Artesanal', price: 2500, image: 'assets/img/cerveza.jpeg' },
            { name: 'Pisco Sour', price: 2800, image: 'assets/img/pisco-sour.jpeg' },
        ],
        'postres': [
            { name: 'Leche Asada', price: 1800, image: 'assets/img/leche-asada.jpeg' },
            { name: 'Torta de Milhojas', price: 3500, image: 'assets/img/milhojas.jpeg' },
            { name: 'Alfajor Chileno', price: 1200, image: 'assets/img/alfajor.jpeg' },
            { name: 'Torta Tres Leches', price: 4000, image: 'assets/img/tres-leches.jpeg' },
            { name: 'Suspiro Limeño', price: 3000, image: 'assets/img/suspiro.jpeg' },
            { name: 'Arroz con Leche', price: 2000, image: 'assets/img/arroz-leche.jpeg' },
        ],
        'snacks': [
            { name: 'Choripan', price: 2000, image: 'assets/img/choripan.jpeg' },
            { name: 'Empanaditas', price: 3500, image: 'assets/img/empanaditas.jpeg' },
            { name: 'Papas Fritas', price: 1200, image: 'assets/img/papas-fritas.jpeg' },
            { name: 'Ceviche', price: 4500, image: 'assets/img/ceviche.jpeg' },
            { name: 'Sopaipíllas', price: 3000, image: 'assets/img/tequenos.jpeg' },
            { name: 'Anticuchos', price: 5000, image: 'assets/img/anticuchos.jpeg' },
        ]
    };

    // Mostrar título de la categoría
    categoryTitle.textContent = `Categoría: ${category.replace('-', ' ').toUpperCase()}`;

    // Mostrar los platos correspondientes a la categoría seleccionada
    if (dishes[category]) {
        dishes[category].forEach(dish => {
            let card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${dish.image}" alt="${dish.name}">
                <h3>${dish.name}</h3>
                <p>Precio: $${dish.price}</p>
                <button data-name="${dish.name}" data-price="${dish.price}">Agregar</button>
            `;
            categoryCards.appendChild(card);
        });
    }

    // Funcionalidad de agregar al carrito
    document.querySelectorAll('.card button').forEach(button => {
        button.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            const price = parseInt(this.getAttribute('data-price'));

            // Guardar en el carrito (usando Local Storage o simplemente un array en el script)
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push({ name, price });
            localStorage.setItem('cart', JSON.stringify(cart));

            // Mostrar una alerta o notificación
            alert(`${name} ha sido agregado al carrito.`);
        });
    });
});
