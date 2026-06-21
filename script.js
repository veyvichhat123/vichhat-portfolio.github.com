const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Contact Form
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been sent to that Gmail.");
});