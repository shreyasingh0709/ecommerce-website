// Switch between login and signup forms
function showSignup() {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('signupForm').style.display = 'block';
  document.getElementById('formTitle').innerText = 'Create Account - Majestic Herbs';
}

function showLogin() {
  document.getElementById('signupForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('formTitle').innerText = 'Login to Majestic Herbs';
}

// Signup function (stores data in localStorage)
function signup() {
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value.trim();
  const message = document.getElementById('signupMessage');

  if (!name || !email || !password) {
    message.innerText = 'Please fill all fields.';
    return;
  }

  if (localStorage.getItem(email)) {
    message.innerText = 'Account already exists! Please login.';
    return;
  }

  localStorage.setItem(email, JSON.stringify({ name, email, password }));
  message.style.color = 'green';
  message.innerText = 'Signup successful! Please login.';
  setTimeout(showLogin, 1500);
}

// Login function (checks localStorage)
function login() {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();
  const message = document.getElementById('loginMessage');

  if (!email || !password) {
    message.innerText = 'Please fill all fields.';
    return;
  }

  const user = JSON.parse(localStorage.getItem(email));

  if (user && user.password === password) {
    // Store logged-in user info
    localStorage.setItem('loggedInUser', email);
    message.style.color = 'green';
    message.innerText = 'Login successful! Redirecting...';
    setTimeout(() => {
      window.location.href = "index.html"; // ✅ Redirect to main page
    }, 1500);
  } else {
    message.style.color = 'red';
    message.innerText = 'Invalid email or password.';
  }
}