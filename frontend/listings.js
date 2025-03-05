// Extend routes in app.js to include listings route
routes['/listings'] = () => renderListings();

// Function to render listings page
function renderListings() {
    const t = translations[state.language];
    
    const listingsContent = `
        <div class="container listings-container">
            <h1 class="mb-4">${t.nav.listings}</h1>
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="house1.jpg" class="card-img-top" alt="Beautiful Home Listing">
                        <div class="card-body">
                            <h5 class="card-title">Spacious Family Home</h5>
                            <p class="card-text">3 Bedrooms | 2 Bathrooms | 2,000 sq ft</p>
                            <a href="https://www.zillow.com" target="_blank" class="btn btn-primary">
                                ${state.language === 'en' ? 'View on Zillow' : 'Ver en Zillow'}
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="house2.jpg" class="card-img-top" alt="Modern Downtown Condo">
                        <div class="card-body">
                            <h5 class="card-title">Modern Downtown Condo</h5>
                            <p class="card-text">2 Bedrooms | 1 Bathroom | 1,200 sq ft</p>
                            <a href="https://www.realtor.com" target="_blank" class="btn btn-primary">
                                ${state.language === 'en' ? 'View on Realtor.com' : 'Ver en Realtor.com'}
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="house3.jpg" class="card-img-top" alt="Luxury Suburban Home">
                        <div class="card-body">
                            <h5 class="card-title">Luxury Suburban Home</h5>
                            <p class="card-text">4 Bedrooms | 3 Bathrooms | 3,500 sq ft</p>
                            <a href="https://www.redfin.com" target="_blank" class="btn btn-primary">
                                ${state.language === 'en' ? 'View on Redfin' : 'Ver en Redfin'}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return listingsContent;
}

// You may want to add this to your translations object in app.js
translations.en.listings = {
    title: 'Our Listings',
    viewDetails: 'View Details'
};

translations.es.listings = {
    title: 'Nuestros Listados',
    viewDetails: 'Ver Detalles'
};