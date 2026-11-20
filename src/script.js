
const aboutSection = document.querySelector(".about-section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

if (aboutSection) {
    observer.observe(aboutSection);
}
