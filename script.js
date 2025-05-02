
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
