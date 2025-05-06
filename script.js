// Event Listener for form submission
document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault(); // prevent form from submitting
  validateForm();
});

// Validation function
function validateForm() {
  // Getting all input values
  const name = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  let isValid = true;

  // Clear all error messages
  document.getElementById('nameError').textContent = "";
  document.getElementById('emailError').textContent = "";
  document.getElementById('phoneError').textContent = "";
  document.getElementById('passwordError').textContent = "";
  document.getElementById('confirmPasswordError').textContent = "";

  // Name Validation
  if (name.length < 5) {
    document.getElementById('nameError').textContent = "Name must be at least 5 characters.";
    isValid = false;
  }

  // Email Validation
  if (!email.includes('@')) {
    document.getElementById('emailError').textContent = "Enter a valid email address.";
    isValid = false;
  }

  // Phone Validation
  if (phone === "123456789" || phone.length !== 10 || !/^\d{10}$/.test(phone)) {
    document.getElementById('phoneError').textContent = "Enter a valid 10-digit phone number.";
    isValid = false;
  }

  // Password Validation
  if (
    password.length < 8 ||
    password.toLowerCase() === "password" ||
    password.toLowerCase() === name.toLowerCase()
  ) {
    document.getElementById('passwordError').textContent = "Password must be at least 8 characters and not common.";
    isValid = false;
  }

  // Confirm Password
  if (password !== confirmPassword) {
    document.getElementById('confirmPasswordError').textContent = "Passwords do not match.";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    // Reset form
    document.getElementById('registrationForm').reset();
  }
}
