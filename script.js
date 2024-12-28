document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get input values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const dob = document.getElementById('dob').value;

    let errorMessage = '';

    // Validate the form
    if (password !== confirmPassword) {
        errorMessage = 'Passwords do not match!';
    } else if (password.length < 6) {
        errorMessage = 'Password must be at least 6 characters long!';
    } else if (!email.includes('@')) {
        errorMessage = 'Please enter a valid email address!';
    }

    // Display error message or submit form
    if (errorMessage) {
        document.getElementById('error-message').textContent = errorMessage;
    } else {
        document.getElementById('error-message').textContent = '';
        alert('Registration successful!');
        // In a real-world app, you would submit the form data to the server here.
    }
});
