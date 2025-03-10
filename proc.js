document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.1)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});




document.querySelectorAll(".maksat").forEach((faq) => {
    const button = faq.querySelector(".btn");
    const answer = faq.querySelector(".best");

    faq.addEventListener("click", () => {
        const isVisible = answer.style.display === "block";
        document.querySelectorAll(".best").forEach((el) => (el.style.display = "none"));
        document.querySelectorAll(".btn").forEach((btn) => (btn.textContent = "+"));

        if (!isVisible) {
            answer.style.display = "block";
            button.textContent = "-";
        } else {
            button.textContent = "+";
        }
    });
});
