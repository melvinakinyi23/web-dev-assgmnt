const form = document.getElementById("registrationForm");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

let registeredUser = null;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateForm();

  if (
    username.classList.contains("success") &&
    email.classList.contains("success") &&
    password.classList.contains("success") &&
    confirmPassword.classList.contains("success")
  ) {
    // Save user data
    registeredUser = {
      username: username.value.trim(),
      email: email.value.trim(),
      password: password.value,
    };

    alert("Registration successful! Welcome!");

    // Hide the registration form
    form.style.display = "none";

    // Show the user dashboard
    showDashboard();
  }
});

// Validation logic
function validateForm() {
  validateInput(username, username.value.trim().length >= 3, "Username must be at least 3 characters.");
  validateInput(email, /^\S+@\S+\.\S+$/.test(email.value), "Invalid email address.");
  validateInput(password, /^(?=.*\d).{6,}$/.test(password.value), "Password must be at least 6 characters and contain a number.");
  validateInput(confirmPassword, password.value === confirmPassword.value, "Passwords do not match.");
}

function validateInput(input, condition, message) {
  const small = input.nextElementSibling;
  if (condition) {
    input.classList.add("success");
    input.classList.remove("error");
    small.textContent = "";
  } else {
    input.classList.remove("success");
    input.classList.add("error");
    small.textContent = message;
  }
}

// Dashboard display
function showDashboard() {
  document.body.innerHTML = `
    <div class="container">
      <h1>Welcome, ${registeredUser.username}!</h1>
      <p>You have successfully registered, you can now learn more about the us.</p>
      <p>"its a form validation system that ensure that all user inputs are accurate, complete, and in the correct format before submission. Thus improving data quality, enhances user experience, and helps protect your site from incorrect or malicious input."
</p>

      <button onclick="logout()">Logout</button>
    </div>
<div class="navbar">
  <a href="#" onclick="showSection('home')">HOME</a>
  <a href="#" onclick="showSection('about')">ABOUT</a>
  <a href="#" onclick="showSection('features')">FEATURES</a>
  
</div>

<div id="home" class="section active">
  <h2>Welcome to our platform</h2>
  <p>Hello! you can perform tasks.</p>
</div>

<div id="about" class="section">
  <h2>About Me</h2>
  <p>This is validator ensures requirements are met.</p>
</div>

<div id="features" class="section">
  <h2>features</h2>
  <ul>
    <li>input validation</li>
    <li>field checking</li>
    <li>time saving</li>
  </ul>
</div>

  `;
}

// Reload page to reset
function logout() {
  location.reload();
  
}
