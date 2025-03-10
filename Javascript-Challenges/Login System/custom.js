document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (authenticate(username, password)) {
        alert('Login successful!');
    } else {
        alert('Invalid username or password.');
    }
});

function authenticate(username, password) {
    // Simple authentication logic (for demonstration purposes)
    const validUsername = 'admin';
    const validPassword = 'password123';

    return username === validUsername && password === validPassword;
}