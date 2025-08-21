// Smooth scrolling for navbar links
document.querySelectorAll("header nav a, .btn-group a, .header .btn").forEach(link => {
  link.addEventListener("click", function (e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth"
        });
      }
    }
  });
});

// Highlight active nav link on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  let scrollPos = window.scrollY + 100;
  sections.forEach(sec => {
    if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      document.querySelectorAll("header nav a").forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sec.id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// Contact form validation
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (!name || !email || !message) {
      e.preventDefault();
      alert("Please fill in all fields before submitting.");
    }
  });
}
