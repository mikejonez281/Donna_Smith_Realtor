// Translations object
const translations = {
    en: {
        nav: {
            home: 'Home',
            listings: 'Listings',
            services: 'Services',
            contact: 'Contact',
            about: 'About'
        },
        reviews: {
            valverde: {
                title: 'Review from Valverde Rentals',
                text: 'Awesome Realtor, Donna is always at my service with my properties',
                logo: 'FullLogo.jpg'
            },
            rivera: {
                title: 'Review from Rivera Services',
                text: 'Did multiple projects on Donna\'s home listing and excellent to work with',
                logo: 'rivera.png'
            }
        },
        home: { welcome: 'Welcome to Donna M. Smith Realty', review: 'Great service!' }
    },
    es: {
        nav: {
            home: 'Inicio',
            listings: 'Listados',
            services: 'Servicios',
            contact: 'Contacto',
            about: 'Acerca de'
        },
        reviews: {
            valverde: {
                title: 'Opinión de Valverde Rentals',
                text: 'Gran agente inmobiliario, Donna siempre está a mi servicio con mis propiedades',
                logo: 'FullLogo.jpg'
            },
            rivera: {
                title: 'Opinión de Rivera Services',
                text: 'Realizó múltiples proyectos en la lista de casas de Donna y es excelente para trabajar',
                logo: 'rivera.png'
            }
        },
        home: { welcome: 'Bienvenido a Donna M. Smith Realty', review: '¡Gran servicio!' }
    }
};

// State
let state = { language: 'en' };

// Router
const routes = {
    '/': () => renderHome(),
    '/about': () => '<h1>About Donna M. Smith Realty</h1><p>Learn more about us.</p>',
    '/services': () => '<h1>Services</h1><p>Explore our real estate services.</p>',
    '/contact': () => '<h1>Contact</h1><p>Get in touch with us!</p>'

};

//Render Home with Carousel and Logos
function getCarouselContent() {
    const t = translations[state.language];
    return `
        <div class="container">
            <div id="reviewCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="${t.reviews.valverde.logo}" alt="Valverde Rentals, LLC Logo" class="carousel-logo mb-3">
                        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">${t.reviews.valverde.title}</h1>
                        <p class="lead">${t.reviews.valverde.text}</p>
                        <div class="stars">${renderStars(5)}</div>
                    </div>
                    <div class="carousel-item">
                        <img src="${t.reviews.rivera.logo}" alt="Rivera All Services Logo" class="carousel-logo mb-3">
                        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">${t.reviews.rivera.title}</h1>
                        <p class="lead">${t.reviews.rivera.text}</p>
                        <div class="stars">${renderStars(5)}</div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#reviewCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#reviewCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <!-- <div class="d-grid gap-2 d-md-flex justify-content-md-start mt-3">
                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
            </div> -->
        </div>
    `;
}

function renderHome() {
    const carouselContent = getCarouselContent();
    document.getElementById('carousel-content').innerHTML = carouselContent;

    return 'Welcome to Donna Smith Realtor Page - With a focus on customer service, we are here to help you find your dream home and with over 20 years of experience, we are here to help you with all your real estate needs.';
}

// Render Stars
function renderStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < Math.floor(rating)) {
            stars += '<span class="star full-star">★</span>';
        } else if (i === Math.floor(rating) && rating % 1 >= 0.5) {
            stars += '<span class="star half-star">★</span>';
        } else {
            stars += '<span class="star empty-star">★</span>';
        }
    }
    
    return stars;
}

// Update Content
function updateContent() {
    const path = window.location.hash.slice(1) || '/';
    const content = routes[path] ? routes[path]() : '<h1>404 Not Found</h1>';
    document.getElementById('page-content').innerHTML = content;
    updateTranslations();
}

// Update Translations for Navigation
function updateTranslations() {
    const t = translations[state.language];
    const links = document.querySelectorAll('.nav-link');
    links[0].textContent = t.nav.home; // Home
    links[1].textContent = t.nav.listings; // Listings
    links[2].textContent = t.nav.services; // Services
    links[3].textContent = t.nav.contact; // Contact
    links[4].textContent = t.nav.about; // About
    document.getElementById('language-switch').textContent = state.language === 'en' ? 'Español' : 'English';
}

// Language Switch Event Listener
// document.getElementById('language-switch').addEventListener('click', () => {
//     state.language = state.language === 'en' ? 'es' : 'en';
//     updateTranslations();
//     updateContent(); // Re-render carousel with new language
// });

// Event Listeners (Modified)
window.addEventListener('hashchange', updateContent);
window.addEventListener('load', () => {
    updateContent();
    renderHome(); // Initial render after DOM is loaded
});