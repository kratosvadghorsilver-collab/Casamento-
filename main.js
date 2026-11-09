function toggleMenu() {
  const nav = document.getElementById('mainNav');
  nav.classList.toggle('active');
}

// Close menu when clicking a link (mobile)
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('#mainNav a');
  links.forEach(link => {
    link.addEventListener('click', function() {
      const nav = document.getElementById('mainNav');
      if (window.innerWidth <= 768) {
        nav.classList.remove('active');
      }
    });
  });
});