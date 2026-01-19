function addToCart(product, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if product already exists in cart
  let existing = cart.find(item => item.product === product);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ product, price, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product + " added to cart!");
}