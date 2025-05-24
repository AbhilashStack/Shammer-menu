// app.js - Main JavaScript for Mr.Chai Tea Point by Shammer
// ----------------------------------------------------------

// Menu data: add/edit items here
const menu = [
    // Tea
    { name: 'Masala Chai', price: 30, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=200&q=80', desc: 'Classic Indian spiced tea.', type: 'tea' },
    { name: 'Ginger Tea', price: 35, img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=200&q=80', desc: 'Tea with fresh ginger.', type: 'tea' },
    { name: 'Elaichi Tea', price: 40, img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80', desc: 'Cardamom flavored tea.', type: 'tea' },
    { name: 'Lemon Tea', price: 35, img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=200&q=80', desc: 'Refreshing lemon tea.', type: 'tea' },
    { name: 'Green Tea', price: 45, img: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=200&q=80', desc: 'Healthy green tea.', type: 'tea' },
    { name: 'Black Tea', price: 30, img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80', desc: 'Strong black tea.', type: 'tea' },
    { name: 'Tulsi Tea', price: 40, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=200&q=80', desc: 'Tulsi infused tea.', type: 'tea' },
    { name: 'Kesar Chai', price: 50, img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=200&q=80', desc: 'Saffron flavored tea.', type: 'tea' },
    { name: 'Adrak Elaichi Chai', price: 45, img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80', desc: 'Ginger & cardamom tea.', type: 'tea' },
    { name: 'Special Cutting Chai', price: 25, img: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=200&q=80', desc: 'Mumbai style cutting chai.', type: 'tea' },
    // Milkshakes
    { name: 'Chocolate Milkshake', price: 70, img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=200&q=80', desc: 'Rich chocolate milkshake.', type: 'milkshake' },
    { name: 'Strawberry Milkshake', price: 70, img: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=200&q=80', desc: 'Fresh strawberry milkshake.', type: 'milkshake' },
    { name: 'Oreo Milkshake', price: 80, img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=200&q=80', desc: 'Oreo cookie milkshake.', type: 'milkshake' },
    { name: 'Vanilla Milkshake', price: 65, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=200&q=80', desc: 'Classic vanilla shake.', type: 'milkshake' },
    { name: 'Banana Milkshake', price: 60, img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=200&q=80', desc: 'Banana blended shake.', type: 'milkshake' },
    { name: 'Mango Milkshake', price: 75, img: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=200&q=80', desc: 'Seasonal mango shake.', type: 'milkshake' },
    { name: 'Butterscotch Shake', price: 80, img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=200&q=80', desc: 'Butterscotch delight.', type: 'milkshake' },
    { name: 'Coffee Shake', price: 70, img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80', desc: 'Coffee flavored shake.', type: 'milkshake' },
    { name: 'KitKat Shake', price: 90, img: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=200&q=80', desc: 'KitKat blended shake.', type: 'milkshake' },
    { name: 'Dry Fruit Shake', price: 100, img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=200&q=80', desc: 'Rich dry fruit shake.', type: 'milkshake' },
    // Snacks
    { name: 'Samosa', price: 20, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=200&q=80', desc: 'Crispy potato samosa.', type: 'snack' },
    { name: 'Veg Puff', price: 25, img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80', desc: 'Flaky vegetable puff.', type: 'snack' },
    { name: 'Paneer Roll', price: 50, img: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=200&q=80', desc: 'Spicy paneer roll.', type: 'snack' },
    { name: 'Cheese Sandwich', price: 40, img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=200&q=80', desc: 'Grilled cheese sandwich.', type: 'snack' },
    { name: 'Aloo Tikki', price: 30, img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=200&q=80', desc: 'Spiced potato patty.', type: 'snack' },
    { name: 'Chilli Paneer', price: 90, img: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=200&q=80', desc: 'Paneer in spicy sauce.', type: 'snack' },
    { name: 'French Fries', price: 40, img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80', desc: 'Crispy fries.', type: 'snack' },
    { name: 'Spring Roll', price: 45, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=200&q=80', desc: 'Veg spring roll.', type: 'snack' },
    { name: 'Chana Chaat', price: 35, img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=200&q=80', desc: 'Spicy chickpea chaat.', type: 'snack' },
    { name: 'Maggi', price: 35, img: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=200&q=80', desc: 'Masala Maggi noodles.', type: 'snack' },
    { name: 'Bread Pakora', price: 30, img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80', desc: 'Stuffed bread pakora.', type: 'snack' },
    { name: 'Onion Rings', price: 35, img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=200&q=80', desc: 'Crispy onion rings.', type: 'snack' },
    { name: 'Corn Cheese Balls', price: 50, img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=200&q=80', desc: 'Cheesy corn balls.', type: 'snack' },
    { name: 'Veg Burger', price: 60, img: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=200&q=80', desc: 'Classic veg burger.', type: 'snack' },
    { name: 'Paneer Sandwich', price: 55, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=200&q=80', desc: 'Paneer sandwich.', type: 'snack' },
];

// DOM element references
const teaList = document.getElementById('tea-list'); // Tea menu container
const milkshakeList = document.getElementById('milkshake-list'); // Milkshake menu container
const snackList = document.getElementById('snack-list'); // Snack menu container
const cartItems = document.getElementById('cart-items'); // Cart items list
const clearCartBtn = document.getElementById('clear-cart'); // Clear cart button
const backToMenuBtn = document.getElementById('back-to-menu'); // Back to menu button
const cartSection = document.getElementById('cart'); // Cart section
const menuSection = document.getElementById('menu'); // Menu section
const cartIcon = document.getElementById('cart-icon'); // Cart icon
const cartCount = document.getElementById('cart-count'); // Cart item count badge
const modal = document.getElementById('image-modal'); // Modal for image preview
const modalImg = document.getElementById('modal-img'); // Modal image
const captionText = document.getElementById('caption'); // Modal caption
const closeModal = document.querySelector('.close'); // Modal close button

// Cart array to store selected items
let cart = [];

// Track items that have ever been added to the cart
let cartHistory = [];

// Render the menu with quantity controls for each item
function renderMenu() {
    teaList.innerHTML = '';
    milkshakeList.innerHTML = '';
    snackList.innerHTML = '';
    menu.forEach((item, idx) => {
        // Count how many of this item are in the cart
        const count = cart.filter(ci => ci.name === item.name).length;
        const div = document.createElement('div');
        div.className = 'menu-item';
        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="menu-img" onclick="showModal('${item.img}','${item.name}')">
            <div class="menu-info">
                <span class="menu-title">${item.name}</span>
                <span class="menu-price">₹${item.price}</span>
                <span class="menu-desc">${item.desc}</span>
            </div>
            <div class="menu-qty-controls">
                <button class="qty-btn" onclick="decreaseQty(${idx})">-</button>
                <span class="qty-count">${count}</span>
                <button class="qty-btn" onclick="addToCart(${idx})">+</button>
            </div>
        `;
        if (item.type === 'tea') teaList.appendChild(div);
        else if (item.type === 'milkshake') milkshakeList.appendChild(div);
        else if (item.type === 'snack') snackList.appendChild(div);
    });
}

// Decrease quantity of an item in the cart
window.decreaseQty = function(idx) {
    const item = menu[idx];
    const cartIdx = cart.findIndex(ci => ci.name === item.name);
    if (cartIdx !== -1) {
        cart.splice(cartIdx, 1);
        renderCart();
        renderMenu();
    } else {
        // If already at 0, just re-render to keep it visible
        renderCart();
    }
};

// Add item to cart and update UI
window.addToCart = function(idx) {
    cart.push(menu[idx]);
    // Add to cartHistory if not already present
    if (!cartHistory.includes(idx)) {
        cartHistory.push(idx);
    }
    renderCart();
    renderMenu();
};

// Render the cart items and update cart count
function renderCart() {
    cartItems.innerHTML = '';
    // Group items by name and count quantity
    const grouped = {};
    cart.forEach(item => {
        if (!grouped[item.name]) {
            grouped[item.name] = { ...item, qty: 1, idx: menu.findIndex(m => m.name === item.name) };
        } else {
            grouped[item.name].qty++;
        }
    });
    // Ensure all items in cartHistory are shown, even if qty is 0
    cartHistory.forEach(idx => {
        const item = menu[idx];
        if (!grouped[item.name]) {
            grouped[item.name] = { ...item, qty: 0, idx };
        }
    });
    if (Object.keys(grouped).length === 0) {
        cartItems.innerHTML = '<li>Your cart is empty.</li>';
    } else {
        Object.values(grouped).forEach(item => {
            // Render each cart item with quantity controls
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="cart-item-name">${item.name}</span>
                <div class="cart-qty-controls">
                    <button class="qty-btn" onclick="decreaseQty(${item.idx})" ${item.qty === 0 ? 'disabled' : ''}>-</button>
                    <span class="cart-item-qty-badge">${item.qty}</span>
                    <button class="qty-btn" onclick="addToCart(${item.idx})">+</button>
                </div>
                <span class="cart-item-price">₹${item.price} each</span>
                <span class="cart-item-total">Total: ₹${item.price * item.qty}</span>
            `;
            cartItems.appendChild(li);
        });
    }
    cartCount.textContent = cart.length;
}

// Show modal with large image preview
window.showModal = function(img, name) {
    modal.style.display = 'block';
    modalImg.src = img;
    captionText.textContent = name;
};

// Close modal on X click
closeModal.onclick = function() {
    modal.style.display = 'none';
};

// Close modal when clicking outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Clear the cart and cartHistory
clearCartBtn.addEventListener('click', function() {
    cart = [];
    cartHistory = [];
    renderCart();
});

// Show cart section when cart icon is clicked
cartIcon.addEventListener('click', function() {
    menuSection.style.display = 'none';
    cartSection.style.display = 'block';
});

// Go back to menu from cart
backToMenuBtn.addEventListener('click', function() {
    cartSection.style.display = 'none';
    menuSection.style.display = 'block';
});

// Collapsible menu logic: only one open at a time
function setupCollapsibles() {
    document.querySelectorAll('.collapsible').forEach(header => {
        header.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const target = document.getElementById(targetId);
            const isOpen = target.style.display === 'block';
            // Close all
            document.querySelectorAll('.menu-list').forEach(list => list.style.display = 'none');
            document.querySelectorAll('.collapsible').forEach(h => h.classList.remove('active'));
            // Open if not already open
            if (!isOpen) {
                target.style.display = 'block';
                this.classList.add('active');
            }
        });
    });
}

// Show floating cart icon when user scrolls down
const floatingCart = document.createElement('div');
floatingCart.id = 'floating-cart-icon';
floatingCart.innerHTML = `
    <span class="floating-cart-emoji">🛒</span>
    <span id="floating-cart-count">0</span>
    <span class="floating-cart-label">View Cart</span>
`;
floatingCart.style.display = 'none';
document.body.appendChild(floatingCart);

// Click on floating cart icon shows cart
floatingCart.addEventListener('click', function() {
    menuSection.style.display = 'none';
    cartSection.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show/hide floating cart icon on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 120) {
        floatingCart.style.display = 'flex';
    } else {
        floatingCart.style.display = 'none';
    }
});

// Update floating cart count when cart changes
function updateFloatingCartCount() {
    document.getElementById('floating-cart-count').textContent = cart.length;
    // Optionally, add a bounce effect when cart changes
    floatingCart.classList.remove('cart-bounce');
    void floatingCart.offsetWidth; // trigger reflow
    floatingCart.classList.add('cart-bounce');
}

// Patch renderCart to also update floating cart count
const originalRenderCart = renderCart;
renderCart = function() {
    originalRenderCart();
    updateFloatingCartCount();
};

// Initial render of menu, cart, and collapsibles
renderMenu();
renderCart();
setupCollapsibles();
