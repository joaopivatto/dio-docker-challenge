document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector("menu").querySelector('circle');
    const links = document.querySelector('links');

    links.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function (e) {
            if(links.classList.contains('linksmenu')) {
                menu.click()
            }
        })
    })

    const body = document.querySelector('body');

    menu.addEventListener('click', () => {
        console.log('a')
        const isMenuOpen = links.classList.contains('linksmenu');

        links.style = isMenuOpen ? '' : 'display: flex!important; z-index: 100';
        links.classList.toggle('linksmenu', !isMenuOpen);
        menu.querySelector('svg').replaceWith(isMenuOpen ? menuIcon() : x());

        if (isMenuOpen) {
            body.style.overflow = '';
        } else {
            body.style.overflow = 'hidden';
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 800) {
            links.style = '';
            links.classList.remove('linksmenu');
            menu.querySelector('svg').replaceWith(menuIcon());

            body.style.overflow = '';
        }
    });
});
