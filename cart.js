const products = [
  { id: 1, name: "Feral Pre-Workout", price: 39.99 },
  { id: 2, name: "Beast Protein", price: 49.99 },
  { id: 3, name: "Alpha Recovery", price: 29.99 }
];

function renderCart() {
  const container = document.getElementById("cart-container");
  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  let total = 0;
  container.innerHTML = "<ul>" + cart.map(item => {
    const prod = products.find(p => p.id === item.id);
    const subtotal = prod.price * item.quantity;
    total += subtotal;
    return `<li>${prod.name} (x${item.quantity}) - $${subtotal.toFixed(2)}</li>`;
  }).join("") + "</ul>";

  container.innerHTML += `<p><strong>Total: $${total.toFixed(2)}</strong></p>
    <button onclick="checkout()">Proceed to Checkout</button>`;
}

function checkout() {
  alert("Transaction completed! Thank you for shopping at JCSupplements!");
  saveCart([]);
  updateCartCount();
  renderCart();
}

document.addEventListener("DOMContentLoaded", renderCart);
