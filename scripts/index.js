const navbarCollapseElement = document.querySelector('.navbar-mobile-screen');
const navbarButton = document.querySelector('#navbar-button');
const anchorElemnts = document.querySelectorAll('.site-anchors');

navbarButton.addEventListener('click', () => {
    if (navbarCollapseElement.classList.contains('show')) {
        navbarCollapseElement.classList.remove('show');
        navbarCollapseElement.style.display = 'none';
    } else {
        navbarCollapseElement.classList.add('show');
        navbarCollapseElement.style.display = 'block';
    }
});

anchorElemnts.forEach(element => {
    element.addEventListener('click', () => {
        if (navbarCollapseElement.classList.contains('show')) {
            navbarCollapseElement.classList.remove('show');
            navbarCollapseElement.style.display = 'none';
        }
    });
})

