// Highlight active sidebar link
document.addEventListener('DOMContentLoaded', function () {
  const current = window.location.pathname.split('/').pop();
  document.querySelectorAll('.sidebar-nav a').forEach(function (link) {
    if (link.getAttribute('href') === current || link.getAttribute('href') === './' + current) {
      link.classList.add('active');
    }
  });
});
