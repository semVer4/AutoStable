const carsData = [
    {
        brand: "Lexus",
        model: "LX 600",
        image: "img/car.png",
        description: "Стильный и мощный внедорожник Lexus LX 600 с передовыми технологиями и роскошным интерьером. Отличное сочетание комфорта и высокой проходимости.",
        year: 2020,
        mileage: 10000,
        engine: "Бензиновый, 2.5",
        power: 181,
        body: "Седан",
        price: 22000,
    },
    {
        brand: "Mercedes-Benz",
        model: "G63",
        image: "img/g63.png",
        description: "Стильный и мощный внедорожник Lexus LX 600 с передовыми технологиями и роскошным интерьером. Отличное сочетание комфорта и высокой проходимости.",
        year: 2020,
        mileage: 10000,
        engine: "Бензиновый, 2.5",
        power: 181,
        body: "Седан",
        price: 22000,
    },
    {
        brand: "GMC",
        model: "Yukon",
        image: "img/gmc.png",
        description: "Стильный и мощный внедорожник Lexus LX 600 с передовыми технологиями и роскошным интерьером. Отличное сочетание комфорта и высокой проходимости.",
        year: 2020,
        mileage: 10000,
        engine: "Бензиновый, 2.5",
        power: 181,
        body: "Седан",
        price: 22000,
    }
];

const brandSelect = document.getElementById("brands-select");
const modelSelect = document.getElementById("models-select");
const priceFromInput = document.getElementById("priceFrom");
const priceToInput = document.getElementById("priceTo");
const carCardsContainer = document.getElementById("carCards");

function initFilters(data) {
    const brands = [...new Set(data.map(car => car.brand))];
    const models = [...new Set(data.map(car => car.model))];

    brands.forEach(brand => {
        const option = document.createElement("option");
        option.value = brand;
        option.textContent = brand;
        brandSelect.appendChild(option);
    });

    models.forEach(model => {
        const option = document.createElement("option");
        option.value = model;
        option.textContent = model;
        modelSelect.appendChild(option);
    });
}

function createCarCard(car) {
    const card = document.createElement("div");
    card.className = "car-cart";
    card.innerHTML = `
        <div class="cart-img">
            <img src="${car.image}" alt="${car.brand} ${car.model}">
        </div>
        <div class="cart-text">
            <h1 class="cars-name">
                <span class="car-brend">${car.brand}</span>
                <span class="car-model">${car.model}</span>
            </h1>
            <div class="car-desc">
                <span>${car.description}</span>
            </div>
            <div class="cart-data">
                <li>Год выпуска: <span class="car-year">${car.year}</span></li>
                <li>Пробег: <span class="mileage">${car.mileage}</span> км</li>
                <li>Тип двигателя: <span class="engine">${car.engine}</span></li>
                <li>Мощность: <span class="power">${car.power}</span> л.с.</li>
                <li>Кузов: <span class="body">${car.body}</span></li>
            </div>
            <div class="home-button">
                <a href="#" id="home-button">Узнать больше
                    <svg width="36" height="18" viewBox="0 0 36 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.65306L33.2292 8.95918M34.5 8.95918H33.2292M33.2292 8.95918C30.1597 7.63265 23.8083 3.69388 22.9583 1M33.2292 8.95918C30.5139 10.3878 24.6583 14.7959 22.9583 17" stroke="#202020" stroke-width="1.3" stroke-linecap="round"/>
                </svg></a>
            </div>
        </div>
    `;
    return card;
}

function filterCars() {
    const selectedBrand = brandSelect.value;
    const selectedModel = modelSelect.value;
    const priceFrom = parseFloat(priceFromInput.value) || 0;
    const priceTo = parseFloat(priceToInput.value) || Infinity;

    const filteredCars = carsData.filter(car => {
        const matchesBrand = !selectedBrand || car.brand === selectedBrand;
        const matchesModel = !selectedModel || car.model === selectedModel;
        const matchesPrice = car.price >= priceFrom && car.price <= priceTo;
        return matchesBrand && matchesModel && matchesPrice;
    });

    carCardsContainer.innerHTML = "";
    filteredCars.forEach(car => {
        const card = createCarCard(car);
        carCardsContainer.appendChild(card);
    });
}

brandSelect.addEventListener("change", filterCars);
modelSelect.addEventListener("change", filterCars);
priceFromInput.addEventListener("input", filterCars);
priceToInput.addEventListener("input", filterCars);

initFilters(carsData);
filterCars(); 


//REVIEWS
const reviews = document.querySelectorAll('.rev-blocks');
const leftArrow = document.querySelector('.rev-arr-left');
const rightArrow = document.querySelector('.rev-arr-right');

let currentIndex = 0;

function showReviews(index) {
    const isMobile = window.innerWidth <= 1400; 
    const reviewsToShow = isMobile ? 1 : 2; 

    reviews.forEach((review) => {
        review.classList.remove('active');
        review.style.display = 'none';
    });

    for (let i = 0; i < reviewsToShow; i++) {
        const reviewIndex = (index + i) % reviews.length;
        reviews[reviewIndex].classList.add('active');
        reviews[reviewIndex].style.display = 'block';
    }
}

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    showReviews(currentIndex);
});

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % reviews.length; 
    showReviews(currentIndex);
});

window.addEventListener('resize', () => showReviews(currentIndex));

showReviews(currentIndex);