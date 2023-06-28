function changeTab(tabId) {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const loginTab = document.querySelector('.tab:nth-child(1)');
  const registerTab = document.querySelector('.tab:nth-child(2)');

  if (tabId === 'login') {
    loginForm.style.transform = 'translateX(0)';
    registerForm.style.transform = 'translateX(100%)';
    loginForm.style.opacity = '1';
    registerForm.style.opacity = '0';
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
  } else if (tabId === 'register') {
    loginForm.style.transform = 'translateX(-100%)';
    registerForm.style.transform = 'translateX(0)';
    loginForm.style.opacity = '0';
    registerForm.style.opacity = '1';
    loginTab.classList.remove('active');
    registerTab.classList.add('active');
  }
}

function toggleTheme() {
  const themeIcon = document.getElementById('theme-icon');
  const body = document.body;

  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    themeIcon.src = 'IMG/sun.svg';
    themeIcon.alt = 'Modo Claro';
  } else {
    body.classList.add('dark-theme');
    themeIcon.src = 'IMG/moon.svg';
    themeIcon.alt = 'Modo Oscuro';
  }
}
