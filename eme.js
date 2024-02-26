document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('login-form');
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', function (event) {
      event.preventDefault();

      try {
          const username = form.elements['username'].value.trim();
          const email = form.elements['email'].value.trim();
          const password = form.elements['password'].value.trim();
          const location = form.elements['location'].value.trim();
          const contact = form.elements['contact'].value.trim();

          // Validation
          if (!username) {
              throw new Error('Name is required');
          }

          if (!email) {
              throw new Error('Email is required');
          }

          if (!isValidEmail(email)) {
              throw new Error('Invalid email format');
          }

          if (!password) {
              throw new Error('Password is required');
          }

          if (!location) {
              throw new Error('Location is required');
          }

          if (!contact) {
              throw new Error('Contact number is required');
          }

          // If validation passes, display success message
          successMessage.style.display = 'block';
          // You can redirect the user to another page after successful submission
          window.location.href = 'homepage.html';
      } catch (error) {
          // Handle errors
          console.error('Error:', error.message);

          // Display error message to the user
          const errorMessage = document.createElement('div');
          errorMessage.classList.add('error');
          errorMessage.textContent = error.message;

          // Remove any existing error messages before appending a new one
          const existingErrorMessages = form.querySelectorAll('.error');
          existingErrorMessages.forEach(function (errorMessage) {
              errorMessage.remove();
          });

          form.appendChild(errorMessage);
      }
  });

  // Function to validate email format
  function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }
});
