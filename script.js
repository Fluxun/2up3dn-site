
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".main-menu a");

  function setActive() {
    let current = "";
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      if (pageYOffset >= top) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActive);
});


const fadeTarget = document.querySelector('.fade-in');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    fadeTarget.classList.add('visible');
  }
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
