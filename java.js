<script>
// Smooth scroll button
document.querySelector("button").addEventListener("click", () => {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
});

// Scroll Reveal Animation
const reveals = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;
        const revealPoint = 150;

        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add("reveal", "active");
        } else {
            section.classList.remove("active");
        }
    });
});

// Skill hover sound effect (optional premium touch)
document.querySelectorAll(".skills-list li").forEach(skill => {
    skill.addEventListener("mouseenter", () => {
        skill.style.boxShadow = "0 0 20px #38bdf8";
    });
    skill.addEventListener("mouseleave", () => {
        skill.style.boxShadow = "none";
    });
});

</script>
