function changeTab(tab) {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const loginTab = document.querySelector(".tab:nth-child(1)");
  const registerTab = document.querySelector(".tab:nth-child(2)");

  if (tab === "login") {
    loginForm.style.transform = "translateX(0)";
    registerForm.style.transform = "translateX(100%)";
    loginTab.classList.add("active");
    registerTab.classList.remove("active");
  } else if (tab === "register") {
    loginForm.style.transform = "translateX(-100%)";
    registerForm.style.transform = "translateX(0)";
    loginTab.classList.remove("active");
    registerTab.classList.add("active");
  }
}

// Reemplaza el contenido de la función toggleTheme con el siguiente código:
function toggleTheme() {
  const themeIcon = document.getElementById("theme-icon");
  const currentTheme = document.body.classList.contains("dark");

  if (currentTheme) {
    document.body.classList.remove("dark");
    themeIcon.src = "IMG/sun-regular.svg";
    themeIcon.alt = "Modo Claro";
  } else {
    document.body.classList.add("dark");
    themeIcon.src = "IMG/moon-regular.svg";
    themeIcon.alt = "Modo Oscuro";
  }
}

changeTab('login');  // Establecer la pestaña de inicio de sesión como activa inicialmente
