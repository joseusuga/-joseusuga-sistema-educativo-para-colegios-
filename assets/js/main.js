// Mostrar/ocultar contraseña
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.toggle-btn');
  const passwordInput = document.getElementById('password');
  const moreBtns = document.querySelectorAll('.more-btn');

  if (toggleBtn && passwordInput) {
    toggleBtn.addEventListener('click', () => {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleBtn.textContent = '🙈';
        toggleBtn.setAttribute('aria-label','Ocultar contraseña');
      } else {
        passwordInput.type = 'password';
        toggleBtn.textContent = '👁';
        toggleBtn.setAttribute('aria-label','Mostrar contraseña');
      }
    });
  }

  // ejemplo comportamiento de "más opciones" (placeholder)
  moreBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Aquí podrías mostrar opciones (autocompletar, pegar, etc.)');
    });
  });

  // validación simple al enviar el formulario
  const form = document.getElementById('loginForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('usuario').value.trim();
    const pwd = passwordInput.value.trim();

    if (!user || !pwd) {
      alert('Por favor completa todos los campos.');
      return;
    }

    // aquí va la petición real a tu backend (fetch / axios)
    // por ahora mostramos los datos (solo testing)
    alert(`Enviando...\nUsuario: ${user}`);
    // form.submit(); // descomenta si quieres enviar a un action
  });
});