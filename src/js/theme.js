



const themeToggle = document.getElementById("themeBtn");

// Get saved theme
let savedTheme = localStorage.getItem("theme");

// Apply saved theme when page loads
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
} else {
    document.body.classList.remove("dark-mode");
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

// Handle button click
themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem("theme", "light");
    }

});
