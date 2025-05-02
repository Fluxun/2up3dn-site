document.querySelectorAll('[data-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    document.querySelectorAll('.artwork').forEach(card => {
      const match = filter === 'all' || card.classList.contains(filter);
      card.style.display = match ? 'inline-block' : 'none';
    });
  });
});