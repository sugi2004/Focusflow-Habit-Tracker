function goTo(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
  }
  
  // Show splash screen by default
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('splash').classList.add('active');
  });
  