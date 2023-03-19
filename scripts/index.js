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

const map = document.getElementById('contato');             
let element = document.createElement('div');
element.classList.add('mt-4');

element.innerHTML = `
    <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Fazenda%20Brejo%20Preto,%20Zona%20Rural%20-%20Vila%20Comunheira%20C%C3%B3rrego%20Fundo+(MINAS%20FERTIL)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
`
map.append(element);

