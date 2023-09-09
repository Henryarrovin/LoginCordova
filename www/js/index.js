const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginStatus = document.getElementById('loginStatus');

document.getElementById('submitBtn').addEventListener('click', function() {
    const username = usernameInput.value;
    const password = passwordInput.value;
    
    if (username === 'hen' && password === 'hen') {
        window.location.href = `welcome.html?username=${encodeURIComponent(username)}`;
    } else {
        loginStatus.textContent = 'Wrong Credentials';
    }
});

document.getElementById('resetBtn').addEventListener('click', function() {
    usernameInput.value = '';
    passwordInput.value = '';
    loginStatus.textContent = '';
});
