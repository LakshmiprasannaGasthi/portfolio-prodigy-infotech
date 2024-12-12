// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name && email && message) {
      document.getElementById("successMessage").textContent = `Thank you, ${name}! Your message has been sent.`;
      document.getElementById("contactForm").reset(); // Reset the form fields
    } else {
      document.getElementById("successMessage").textContent = "Please fill out all fields.";
    }
  });
  