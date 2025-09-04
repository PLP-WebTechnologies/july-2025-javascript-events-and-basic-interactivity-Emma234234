// Theme Toggle 
document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Counter 
let count = 0;
const counterDisplay = document.getElementById("counter");

document.getElementById("increment").addEventListener("click", function () {
  count++;
  counterDisplay.textContent = count;
});

document.getElementById("decrement").addEventListener("click", function () {
  count--;
  counterDisplay.textContent = count;
});

// FAQ 
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// Form Validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear previous messages
  const messageBox = document.getElementById("form-messages");
  messageBox.textContent = "";
  messageBox.style.color = "red";

  // Get field values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  let errors = [];

  // Name validation
  if (name === "") {
    errors.push("Name is required.");
  }

  // Email validation
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email)) {
    errors.push("Enter a valid email address.");
  }

  // Password validation
  if (password.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  // Show errors or success
  if (errors.length > 0) {
    messageBox.textContent = errors.join(" ");
  } else {
    messageBox.style.color = "green";
    messageBox.textContent = "Form submitted successfully!";
    this.reset();
  }
});

