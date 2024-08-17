function validate() {
    var firstName = document.querySelector('.fname').value;
    var lastName = document.querySelector('.lname').value;
    var email = document.querySelector('input[name="email"]').value;
    var password = document.querySelector('input[name="password"]').value;
  
    // Check if all fields are filled
    if (firstName && lastName && email && password && termsAccepted) {
      // Create an object to store user data
      var userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      };
  
      // Store user data in local storage
      localStorage.setItem('userData', JSON.stringify(userData));
  
      alert('Sign up successful!');
    } else {
      alert('Please fill in all fields and accept the terms and conditions.');
    }
  }
  
  // Add event listener to the sign up button
  document.querySelector('.signup_btn').addEventListener('click', validate);