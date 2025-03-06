// Sélection de l'élément navbar une seule fois en dehors de la fonction
const navbar = document.getElementById('navbar');

// Événement de défilement avec une fonction fléchée
window.onscroll = () => {
    scrollFunction();
};

function scrollFunction() {
    // Utilisation de document.documentElement.scrollTop pour une compatibilité cross-browser
    if (document.documentElement.scrollTop > 20) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
}

// Options communes pour ScrollReveal
const scrollrevealOptions = {
    distance: '50px',
    origin: 'bottom',
    duration: 1500,
};

// Utilisation de délais cohérents et uniformes avec les options communes
ScrollReveal().reveal('.home h1', scrollrevealOptions);
ScrollReveal().reveal('.home h4', {
    ...scrollrevealOptions,
    delay: 800,
});
ScrollReveal().reveal('.home .btn-explore', {
    ...scrollrevealOptions,
    delay: 1200,
});

ScrollReveal().reveal('.about .about-title', scrollrevealOptions);
ScrollReveal().reveal('.about .about-desc', {
    ...scrollrevealOptions,
    delay: 600,
});
ScrollReveal().reveal('.about .item-data', {
    ...scrollrevealOptions,
    delay: 1200,
});

ScrollReveal().reveal('.btn-explore', {
    ...scrollrevealOptions,
    delay: 2000,
});
ScrollReveal().reveal('.btn-more', {
    ...scrollrevealOptions,
    delay: 2000,
});
ScrollReveal().reveal('.card', scrollrevealOptions);

ScrollReveal().reveal('.card .image', {
    ...scrollrevealOptions,
    delay: 600,
});
ScrollReveal().reveal('.card .content-card h4', {
    ...scrollrevealOptions,
    delay: 1600,
});
ScrollReveal().reveal('.next .card .content-card p', {
    ...scrollrevealOptions,
    delay: 2000,
});

// Correction de la sélecteur 'form .input' à '.contact form .input'
ScrollReveal().reveal('.contact form .input', scrollrevealOptions);

// Correction du sélecteur 'row .card' à '.row .card'
ScrollReveal().reveal('.row .card', scrollrevealOptions);
