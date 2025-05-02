
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    document.querySelectorAll('.artwork').forEach(el => {
      const match = filter === 'all' || el.classList.contains(filter);
      el.style.display = match ? 'inline-block' : 'none';
    });
  });
});

const lightbox = document.getElementById('lightbox');
document.querySelectorAll('.artwork img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightbox.querySelector('img').src = img.src;
  });
});
lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
