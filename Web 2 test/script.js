function changeTab(tabName) {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const loginTab = document.querySelector('.tab:first-child');
  const registerTab = document.querySelector('.tab:last-child');

  if (tabName === 'login') {
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
  } else if (tabName === 'register') {
    loginForm.classList.remove('active');
    registerForm.classList.add('active');
    loginTab.classList.remove('active');
    registerTab.classList.add('active');
  }
}

function toggleTheme() {
  const themeIcon = document.getElementById('theme-icon');
  const body = document.body;

  if (themeIcon.src.includes('sun-regular.svg')) {
    themeIcon.src = 'IMG/moon-regular.svg';
    body.classList.add('dark-theme');
  } else {
    themeIcon.src = 'IMG/sun-regular.svg';
    body.classList.remove('dark-theme');
  }
}
