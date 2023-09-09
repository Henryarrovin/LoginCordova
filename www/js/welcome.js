// welcome.js
const welcomeUsername = document.getElementById('welcomeUsername');
const welcomeLogoutBtn = document.getElementById('welcomeLogoutBtn');

const params = new URLSearchParams(window.location.search);
const username = params.get('username');

if (username) {
    welcomeUsername.textContent = username;
} else {
    welcomeUsername.textContent = 'Guest';
}

welcomeLogoutBtn.addEventListener('click', function() {
    window.location.href = 'index.html';
});
