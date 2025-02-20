// Select menu toggle button and navigation links
const hamburgerMenu = document.getElementById("hamburgerMenu");
const menuItems = document.getElementById("menuItems");

// Toggle class on menu button click
hamburgerMenu.addEventListener("click", () => {
    menuItems.classList.toggle("active");
    hamburgerMenu.classList.toggle("toggle");
});
