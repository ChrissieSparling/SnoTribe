// Select carousel elements
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');
let currentCarouselIndex = 0;

// Function to update carousel display
function updateCarousel(index) {
    carouselItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

// Add event listeners for carousel buttons
prevButton.addEventListener('click', () => {
    currentCarouselIndex =
        (currentCarouselIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel(currentCarouselIndex);
});

nextButton.addEventListener('click', () => {
    currentCarouselIndex = (currentCarouselIndex + 1) % carouselItems.length;
    updateCarousel(currentCarouselIndex);
});

// Dynamic content loading for medical tabs (optional feature)
const tabLinks = document.querySelectorAll('.medical-tab');
const tabContent = document.querySelector('#tab-content');

// Function to load tab content dynamically
function loadTabContent(tabName) {
    let content = '';

    switch (tabName) {
        case 'primary-care':
            content = `
                <h3>Primary Care</h3>
                <p>Our Primary Care services provide comprehensive healthcare for all ages, focusing on preventive care and managing chronic conditions.</p>
            `;
            break;
        case 'dental-care':
            content = `
                <h3>Dental Care</h3>
                <p>Our Dental Care services include preventive, restorative, and emergency dental care to ensure your oral health.</p>
            `;
            break;
        case 'behavioral-health':
            content = `
                <h3>Behavioral Health</h3>
                <p>Our Behavioral Health team offers mental health support, counseling, and community resources to help you thrive.</p>
            `;
            break;
        default:
            content = `<p>Please select a service to learn more.</p>`;
    }

    tabContent.innerHTML = content;
}

// Add click event listeners to tabs
tabLinks.forEach(tab => {
    tab.addEventListener('click', e => {
        e.preventDefault();
        const tabName = tab.getAttribute('data-tab');
        loadTabContent(tabName);
    });
});

// Initialize carousel
updateCarousel(currentCarouselIndex);

// Optionally, preload the first tab's content
loadTabContent('primary-care');