// Trigger bounce animation on button click
const animateButton = document.getElementById("animateButton");

animateButton.addEventListener("click", () => {
  animateButton.style.animation = "bounce 0.5s";
  setTimeout(() => {
    animateButton.style.animation = ""; // Reset animation
  }, 500);
});

// Save and retrieve user preferences with localStorage
const preferencesForm = document.getElementById("preferencesForm");
const themeSelect = document.getElementById("theme");

// Load saved preference on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    themeSelect.value = savedTheme;
    document.body.style.backgroundColor = savedTheme === "dark" ? "#333" : "#fff";
    document.body.style.color = savedTheme === "dark" ? "#fff" : "#000";
  }
});

animateButton.addEventListener("click", () => {
    animateButton.style.animation = "none"; // Reset the animation first
    setTimeout(() => {
      animateButton.style.animation = "bounce 0.5s";
    }, 10); // A small delay ensures the reset is applied
  });
// Save preference on form submission
preferencesForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent page reload
  const selectedTheme = themeSelect.value;
  localStorage.setItem("theme", selectedTheme);

  // Apply the theme dynamically
  document.body.style.backgroundColor = selectedTheme === "dark" ? "#333" : "#fff";
  document.body.style.color = selectedTheme === "dark" ? "#fff" : "#000";

  alert("Preferences saved!");
  });

