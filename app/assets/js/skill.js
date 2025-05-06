document.addEventListener('DOMContentLoaded', function() {
    fillStars();
})

function fillStars(){
    document.querySelectorAll('skill').forEach(skill => {
        const skillLevel = skill.dataset.level;
        const stars = document.createElement('stars');
        skill.appendChild(stars);
        for (let i = 0; i < 5; i++) {
            const fill = i >= skillLevel ? "none" : "var(--white)";
            stars.appendChild(star(fill));
        }
    })
}