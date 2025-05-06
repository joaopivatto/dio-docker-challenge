document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    if(!sessionStorage.getItem("theme")) {
        sessionStorage.setItem('theme', 'dark');
    }
    setTheme()
    document.getElementById('icon-theme').addEventListener('click', () => {
        const theme = sessionStorage.getItem('theme');
        if (theme === 'dark') {
            sessionStorage.setItem('theme', 'light');
        } else {
            sessionStorage.setItem('theme', 'dark');
        }
        setTheme();
    });
})

function setTheme() {
    const theme = sessionStorage.getItem('theme');
    let background, secondary;
    const icon = document.getElementById('icon-theme').querySelector("svg");
    if (theme === 'light') {
        background = getComputedStyle(document.documentElement).getPropertyValue('--backgroundLight').trim();
        secondary = getComputedStyle(document.documentElement).getPropertyValue('--black').trim();
        icon.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-moon\"><path d=\"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z\"/></svg>"
    } else {
        background = getComputedStyle(document.documentElement).getPropertyValue('--backgroundDark').trim();
        secondary = getComputedStyle(document.documentElement).getPropertyValue('--white').trim();
        icon.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-sun\"><circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2v2\"/><path d=\"M12 20v2\"/><path d=\"m4.93 4.93 1.41 1.41\"/><path d=\"m17.66 17.66 1.41 1.41\"/><path d=\"M2 12h2\"/><path d=\"M20 12h2\"/><path d=\"m6.34 17.66-1.41 1.41\"/><path d=\"m19.07 4.93-1.41 1.41\"/></svg>";
    }
    document.documentElement.style.setProperty('--background', background);
    document.documentElement.style.setProperty('--secondary', secondary);
}