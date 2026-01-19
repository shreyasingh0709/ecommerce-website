let cart = JSON.parse(localStorage.getItem("cart")) || [];
let tableBody = document.querySelector("#cartTable tbody");

function renderCart() {
  tableBody.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    let subtotal = item.price * item.quantity;
    total += subtotal;

    let row = `
      <tr>
        <td>${item.product}</td>
        <td>₹${item.price}</td>
        <td>
          <button class="btn" onclick="changeQuantity(${index}, -1)">-</button>
          ${item.quantity}
          <button class="btn" onclick="changeQuantity(${index}, 1)">+</button>
        </td>
        <td>₹${subtotal}</td>
        <td><button class="btn remove-btn" onclick="removeItem(${index})">Remove</button></td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });

  document.getElementById("total").innerText = "Total: ₹" + total;
  localStorage.setItem("cart", JSON.stringify(cart));
}

function changeQuantity(index, change) {
  cart[index].quantity += change;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

function goToCheckout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  window.location.href = "checkout.html"; // redirect to payment page
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Thank you for shopping with M Herbs!");
  localStorage.removeItem("cart");
  window.location.href = "products.html";
}

renderCart();