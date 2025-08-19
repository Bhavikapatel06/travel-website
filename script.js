// Contact form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const confirmation = document.getElementById("confirmation");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      confirmation.textContent = `Thank you, ${name}! Your message has been sent.`;
      form.reset();
    });
  }
});
