// Translations object
const translations = {
  en: {
    nav: {
      home: "Home",
      listings: "Listings",
      services: "Services",
      contact: "Contact",
      about: "About",
    },
    reviews: {
      valverde: {
        title: "Valverde Rentals, LLC Review",
        text: '"Donna is an exceptional realtor who consistently provides outstanding service for all my properties."',
        logo: "FullLogo.jpg",
      },
      rivera: {
        title: "Rivera All Services Review",
        text: '"I have completed multiple projects on Donna\'s home listings and found her excellent to work with."',
        logo: "rivera.png",
      },
    },
    home: {
      welcome:
        "Welcome to Donna Smith's Realtor Page - With a focus on customer service, we are here to help you find your dream home and with over 20 years of experience, we are here to help you with all your real estate needs. Licensed in Georgia, South Carolina, and North Carolina.",
      review: "Great service!",
    },
    footer: {
      contact: "Contact",
      mobile: "Mobile",
      office: "Office",
      email: "Email",
      quickLinks: "Quick Links",
      followUs: "Follow Us",
      services: "Services",
      about: "About",
      contact: "Contact",
      copyright: "&copy; 2025 Donna M. Smith Realty. All rights reserved.",
    },
    services: {
      title: "Our Services",
      description: "Explore our real estate services:",
      welcome:
        "Explore our wide range of real estate services tailored to your needs.",
      list: [
        "Find homes & schedule tours",
        "Help with offers & negotiations",
        "Guide through financing & closing",
        "Price & list your home",
        "Market & advertise",
        "Handle showings & offers",
        "Find rental & investment properties",
        "Short-term rental advice",
        "Home improvement advice",
      ],
    },
    contact: {
      title: "Contact Us",
      description:
        "We'd love to hear from you! Please fill out the form below.",
      welcome:
        "Get in touch with Donna Smith Realty for all your real estate needs.",
      form: {
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        submit: "Submit",
      },
    },
    about: {
        title: "",
        welcome:"About Us",
        description:`About Donna Smith

Donna Smith is a lifelong Georgia resident with deep roots in the state. She attended Marist High School and Georgia State University, gaining a strong connection to the Atlanta area. While she knows the city well, her true passion lies in the serene beauty of the Southeast's mountains.  

After a successful career in Atlanta, Donna and her husband, Dennis, embraced their own "happily ever after" by moving to Toccoa in 2017. The purchase of their 90-acre farm not only fulfilled a lifelong dream but also inspired Donna to pursue her real estate career, becoming a licensed REALTOR™ in 2022.  

Beyond real estate, Donna is an avid pickleball player, quilter, and HAM radio operator, and she enjoys playing MahJong. When she’s not helping clients find their perfect home in the countryside, she and Dennis can often be found unwinding at their cabin on Lake Hartwell.  
`,}
        
  },
  es: {
    nav: {
      home: "Inicio",
      listings: "Listados",
      services: "Servicios",
      contact: "Contacto",
      about: "Acerca de",
    },
    reviews: {
      valverde: {
        title: "Opinión de Valverde Rentals",
        text: '"Donna es una agente inmobiliaria excepcional que siempre brinda un servicio impecable para la gestión de mis propiedades."',
        logo: "FullLogo.jpg",
      },
      rivera: {
        title: "Opinión de Rivera Services",
        text: '"He realizado múltiples proyectos en las listas de propiedades de Donna y ha sido un placer trabajar con ella debido a su profesionalismo y excelencia."',
        logo: "rivera.png",
      },
    },
    home: {
      welcome:
        "Bienvenido a la página de la Realtor Donna Smith - Con un enfoque en el servicio al cliente, estamos aquí para ayudarle a encontrar la casa de sus sueños y, con más de 20 años de experiencia, estamos aquí para asistirle con todas sus necesidades inmobiliarias. Licenciada en Georgia, Carolina del Sur y Carolina del Norte.",
      review: "¡Gran servicio!",
    },
    footer: {
      contact: "Contacto",
      mobile: "Móvil",
      office: "Oficina",
      email: "Correo",
      quickLinks: "Enlaces rápidos",
      followUs: "Síguenos",
      services: "Servicios",
      about: "Acerca de",
      contact: "Contacto",
      copyright:
        "&copy; 2025 Donna M. Smith Realty. Todos los derechos reservados.",
    },
    services: {
      title: "Nuestros Servicios",
      description: "Explore nuestros servicios inmobiliarios:",
      welcome:
        "Descubra nuestra amplia gama de servicios inmobiliarios adaptados a sus necesidades.",
      list: [
        "Encuentra casas y programa visitas",
        "Ayuda con ofertas y negociaciones",
        "Guía a través de financiamiento y cierre",
        "Valora y lista tu casa",
        "Promociona y publicita",
        "Gestiona visitas y ofertas",
        "Encuentra propiedades de alquiler e inversión",
        "Asesoramiento en alquileres a corto plazo",
        "Consejos para mejoras en el hogar",
      ],
    },
    contact: {
      title: "Contáctenos",
      description:
        "¡Nos encantaría saber de usted! Por favor complete el formulario a continuación.",
      welcome:
        "Póngase en contacto con Donna Smith Realty para todas sus necesidades inmobiliarias.",
      form: {
        name: "Nombre",
        email: "Correo Electrónico",
        message: "Mensaje",
        submit: "Enviar",
      },
    },
    about: {
        title: "Acerca De",
        welcome:"Acerca De Nosotros",
        description:`Acerca de Donna Smith 

Donna Smith es una residente de Georgia de toda la vida con profundas raíces en el estado. Asistió a Marist High School y a la Universidad Estatal de Georgia, desarrollando una fuerte conexión con el área de Atlanta. Aunque conoce bien la ciudad, su verdadera pasión reside en la serenidad de las montañas del sureste.  

Después de una exitosa carrera en Atlanta, Donna y su esposo, Dennis, emprendieron su propio "felices para siempre" al mudarse a Toccoa en 2017. La compra de su finca de 90 acres no solo cumplió un sueño de toda la vida, sino que también inspiró a Donna a seguir una carrera en bienes raíces, convirtiéndose en REALTOR™ con licencia en 2022.  

Más allá de los bienes raíces, Donna es una apasionada jugadora de pickleball, aficionada al acolchado y operadora de radio HAM, además de disfrutar del MahJong. Cuando no está ayudando a sus clientes a encontrar su hogar perfecto en el campo, ella y Dennis suelen relajarse en su cabaña en el lago Hartwell.  
`,}
  },
};

// State
let state = { language: "en" };

// Router
const routes = {
  "/": () => renderHome(),
  "/about": () =>
    "<h1>About Donna M. Smith Realty</h1><p>Learn more about us.</p>",
  "/services": () => "<h1>Services</h1><p>Explore our real estate services</p>",
  "/contact": () => "<h1>Contact</h1><p>Get in touch with us!</p>",
};

//Render Home with Carousel and Logos
function getCarouselContent() {
  const t = translations[state.language];
  return `
        <div class="container">
            <div id="reviewCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="${
                          t.reviews.valverde.logo
                        }" alt="Valverde Rentals, LLC Logo" class="carousel-logo mb-3">
                        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">${
                          t.reviews.valverde.title
                        }</h1>
                        <p class="lead">${t.reviews.valverde.text}</p>
                        <div class="stars">${renderStars(5)}</div>
                    </div>
                    <div class="carousel-item">
                        <img src="${
                          t.reviews.rivera.logo
                        }" alt="Rivera All Services Logo" class="carousel-logo mb-3">
                        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">${
                          t.reviews.rivera.title
                        }</h1>
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
  document.getElementById("carousel-content").innerHTML = carouselContent;

  // Get the translated welcome message
  const welcomeMessage = translations[state.language].home.welcome;

  // Set the welcome message above the carousel with the custom CSS class
//   document.getElementById(
//     "welcome-message"
//   ).innerHTML = `<h3>${welcomeMessage}</h3>`;
  return translations[state.language].home.review;
}

// Render Stars
function renderStars(rating) {
  let stars = "";
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
  const path = window.location.hash.slice(1) || "/";
  const content = routes[path] ? routes[path]() : "<h1>404 Not Found</h1>";
  document.getElementById("page-content").innerHTML = content;

  // Ensure translations are updated for the current route
  updateTranslations();

  // Handle specific cases for Home and Services
  if (path === "/") {
    renderHome(); // Render the carousel and welcome message for Home
  } else if (path === "/services") {
    showServicesLayer(); // Ensure the Services layer is displayed
  } else if (path === "/contact") {
    showContactLayer(); // Ensure the Contact layer is displayed
  } else if (path === "/about") {
    showAboutLayer(); // Ensure the About layer is displayed
  }
}

// Update Translations for Navigation
function updateTranslations() {
  const t = translations[state.language];
  const path = window.location.hash.slice(1) || "/";

  // Update navigation links
  const links = document.querySelectorAll(".nav-link");
  links[0].textContent = t.nav.home; // Home
  links[1].textContent = t.nav.listings; // Listings
  links[2].textContent = t.nav.services; // Services
  links[3].textContent = t.nav.contact; // Contact
  links[4].textContent = t.nav.about; // About
  document.getElementById("language-switch").textContent =
    state.language === "en" ? "Español" : "English";

  // Update footer content
  document.getElementById("footer-mobile-label").textContent = t.footer.mobile;
  document.getElementById("footer-office-label").textContent = t.footer.office;
  document.getElementById("footer-email-label").textContent = t.footer.email;
  document.getElementById("footer-quick-links").textContent =
    t.footer.quickLinks;
  document.getElementById("footer-follow-us").textContent = t.footer.followUs;
  document.getElementById("footer-contact").textContent = t.footer.contact;
  document.getElementById("footer-services").textContent = t.footer.services;
  document.getElementById("footer-about").textContent = t.footer.about;
  document.querySelector(".footer-bottom p").innerHTML = t.footer.copyright;

  // Update welcome message based on the current route
  let welcomeMessage = "";
  if (path === "/") {
    welcomeMessage = t.home.welcome;
  } else if (path === "/services") {
    welcomeMessage = t.services.welcome;
  } else if (path === "/contact") {
    welcomeMessage = t.contact.welcome;
  } else if (path === "/about") {
    welcomeMessage = t.about.welcome;
  }
  document.getElementById(
    "welcome-message"
  ).innerHTML = `<h3>${welcomeMessage}</h3>`;

  // Update content based on the current route
  if (path === "/") {
    renderHome(); // Re-render the carousel with the updated language
  } else if (path === "/services") {
    updateServicesLayer(); // Update the services layer
  } else if (path === "/contact") {
    updateContactLayer(); // Update the contact layer
  } else if (path === "/about") {
    updateAboutLayer(); // Update the about layer
  }
}
  // Event Listeners (Modified)
  window.addEventListener("hashchange", updateContent);
  window.addEventListener("load", () => {
    updateContent();
    renderHome(); // Initial render after DOM is loaded
  });

function showServicesLayer() {
  const carouselLayer = document.getElementById("carousel-layer");
  const servicesLayer = document.getElementById("services-layer");
  const contactLayer = document.getElementById("contact-layer");
  const aboutLayer = document.getElementById("about-layer");

  // Hide the carousel layer and show the services layer
  carouselLayer.style.display = "none";
  carouselLayer.style.zIndex = 0;
  servicesLayer.style.display = "block";
  servicesLayer.style.zIndex = 2;

  // Hide the carousel layer and show the contact layer
  contactLayer.style.display = "none";
  contactLayer.style.zIndex = 0;

  // Hide the about layer
  aboutLayer.style.display = "none";
  aboutLayer.style.zIndex = 0;

  // Update the welcome message for the Services section
  const t = translations[state.language];
  const welcomeMessage = t.services.welcome;
  document.getElementById(
    "welcome-message"
  ).innerHTML = `<h3>${welcomeMessage}</h3>`;

  // Update the services layer content with the current language
  updateServicesLayer();

  // Update the services layer content with the current language
  updateContactLayer();

  // Update the about layer content with the current language
  updateAboutLayer();
}

function showContactLayer() {
  const carouselLayer = document.getElementById("carousel-layer");
  const servicesLayer = document.getElementById("services-layer");
  const contactLayer = document.getElementById("contact-layer");
  const aboutLayer = document.getElementById("about-layer");

  // Show the contact layer and hide the services and carousel layer
  carouselLayer.style.display = "none";
  carouselLayer.style.zIndex = 0;
  servicesLayer.style.display = "none";
  servicesLayer.style.zIndex = 0;
  contactLayer.style.display = "block";
  contactLayer.style.zIndex = 2;

  // Hide the about layer and show contact layer
  aboutLayer.style.display = "none";
  aboutLayer.style.zIndex = 0;
}

function showCarouselLayer() {
  const carouselLayer = document.getElementById("carousel-layer");
  const servicesLayer = document.getElementById("services-layer");
  const contactLayer = document.getElementById("contact-layer");
  const aboutLayer = document.getElementById("about-layer");

  // Show the carousel layer and hide the services and contact layer
  carouselLayer.style.display = "block";
  carouselLayer.style.zIndex = 2;
  servicesLayer.style.display = "none";
  servicesLayer.style.zIndex = 0;
  contactLayer.style.display = "none";
  contactLayer.style.zIndex = 0;

  // Hide the about layer
  aboutLayer.style.display = "none";
  aboutLayer.style.zIndex = 0;
}
function showAboutLayer() {
  const carouselLayer = document.getElementById("carousel-layer");
  const servicesLayer = document.getElementById("services-layer");
  const contactLayer = document.getElementById("contact-layer");
  const aboutLayer = document.getElementById("about-layer");

  // Show the About layer and hide the services, contact and carousel layer
  carouselLayer.style.display = "none";
  carouselLayer.style.zIndex = 0;
  servicesLayer.style.display = "none";
  servicesLayer.style.zIndex = 0;
  contactLayer.style.display = "none";
  contactLayer.style.zIndex = 0;
  aboutLayer.style.display = "block";
  aboutLayer.style.zIndex = 2;
}

function updateServicesLayer() {
  const t = translations[state.language];

  const servicesTitle = document.querySelector("#services-layer h1");
  const servicesDescription = document.querySelector("#services-layer p");
  const servicesList = document.querySelector("#services-layer ul");

  servicesTitle.textContent = t.services.title;
  servicesDescription.textContent = t.services.description;
  servicesList.innerHTML = t.services.list
    .map((item) => `<li>${item}</li>`)
    .join("");
}

function updateContactLayer() {
  const t = translations[state.language];

  const contactTitle = document.querySelector("#contact-layer h1");
  const contactDescription = document.querySelector("#contact-layer p");
  const contactFormTitle = document.querySelector("#contact-layer h2");

  contactTitle.textContent = t.contact.title;
  contactDescription.textContent = t.contact.description;
  contactFormTitle.textContent = t.contact.form.title; // Update h2 for the form
}

function updateAboutLayer() {
  const t = translations[state.language];

  const aboutTitle = document.querySelector("#about-layer h1");
  const aboutDescription = document.querySelector("#about-layer p");
  

  aboutTitle.textContent = t.about.title;
  aboutDescription.textContent = t.about.description;
  aboutTitle.textContent = t.about.title; // Update h2 for the form
}

function navigateToServices() {
  window.location.hash = "/services"; // Update the URL hash
  updateContent(); // Trigger content update
}

function navigateToContact() {
  window.location.hash = "/contact"; // Update the URL hash
  updateContent(); // Trigger content update
}

function navigateToAbout() {
  window.location.hash = "/about"; // Update the URL hash
  updateContent(); // Trigger content update
}
