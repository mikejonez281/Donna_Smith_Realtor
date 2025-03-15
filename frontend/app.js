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
                title: 'Valverde Rentals, LLC Review',
                text: '"Donna is an exceptional realtor who consistently provides outstanding service for all my properties."',
                logo: 'FullLogo.jpg'
            },
            rivera: {
                title: 'Rivera All Services Review',
                text: '"I have completed multiple projects on Donna\'s home listings and found her excellent to work with."',
                logo: 'rivera.png'
            }
        },
        home: { 
            welcome: 'Welcome to Donna Smith Realtor Page - With a focus on customer service, we are here to help you find your dream home and with over 20 years of experience, we are here to help you with all your real estate needs. Licensed in Georgia, South Carolina, and North Carolina.',
            review: 'Great service!'
        },
        footer: {
            contact: 'Contact',
            mobile: 'Mobile',
            office: 'Office',
            email: 'Email',
            quickLinks: 'Quick Links',
            followUs: 'Follow Us',
            services: 'Services',
            about: 'About',
            contact: 'Contact'
        }
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
                text: '"Donna es una agente inmobiliaria excepcional que siempre brinda un servicio impecable para la gestión de mis propiedades."',
                logo: 'FullLogo.jpg'
            },
            rivera: {
                title: 'Opinión de Rivera Services',
                text: '"He realizado múltiples proyectos en las listas de propiedades de Donna y ha sido un placer trabajar con ella debido a su profesionalismo y excelencia."',
                logo: 'rivera.png'
            }
        },
        home: { 
            welcome: 'Bienvenido a la página de Donna Smith Realtor - Con un enfoque en el servicio al cliente, estamos aquí para ayudarle a encontrar la casa de sus sueños y, con más de 20 años de experiencia, estamos aquí para asistirle con todas sus necesidades inmobiliarias. Licenciada en Georgia, Carolina del Sur y Carolina del Norte.',
            review: '¡Gran servicio!'
        },
        footer: {
            contact: 'Contacto',
            mobile: 'Móvil',
            office: 'Oficina',
            email: 'Correo',
            quickLinks: 'Enlaces rápidos',
            followUs: 'Síguenos',
            services: 'Servicios',
            about: 'Acerca de',
            contact: 'Contacto'
        }
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

    // Get the translated welcome message
    const welcomeMessage = translations[state.language].home.welcome;

    // Set the welcome message above the carousel with the custom CSS class
    document.getElementById('welcome-message').innerHTML = `<h3>${welcomeMessage}</h3>`;
    return translations[state.language].home.review;
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

    // Update footer content
    document.getElementById('footer-contact').textContent = t.footer.contact;
    document.getElementById('footer-mobile-label').textContent = t.footer.mobile;
    document.getElementById('footer-office-label').textContent = t.footer.office;
    document.getElementById('footer-email-label').textContent = t.footer.email;
    document.getElementById('footer-quick-links').textContent = t.footer.quickLinks;
    document.getElementById('footer-follow-us').textContent = t.footer.followUs;
    document.getElementById('footer-contact-link').textContent = t.footer.contact;
    document.getElementById('footer-services').textContent = t.footer.services;
    document.getElementById('footer-about').textContent = t.footer.about;
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