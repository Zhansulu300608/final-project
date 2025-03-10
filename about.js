document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".about-text, .about-image img");

    function handleScroll() {
        let scrollPosition = window.scrollY;

        if (scrollPosition > 200) {
            elements.forEach(element => {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            });
        }
    }

    window.addEventListener("scroll", handleScroll);
});