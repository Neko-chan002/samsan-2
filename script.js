// Toggle Profile
const toggleBtn = document.getElementById("toggleProfileBtn");
const profileInfo = document.getElementById("profileInfo");
const toggleIcon = document.getElementById("toggleIcon");

toggleBtn.addEventListener("click", () => {
  profileInfo.classList.toggle("hidden");
  toggleIcon.classList.toggle("fa-chevron-down");
  toggleIcon.classList.toggle("fa-chevron-up");
});

// Toggle Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
