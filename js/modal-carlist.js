let currentCarIndex = null;
let currentImageIndex = 0; 

function openModal(carIndex) {
    currentCarIndex = carIndex; 
    currentImageIndex = 0; 
    const modal = document.querySelector('.modal-overlay');
    const modalImage = document.querySelector('.modal-image');
    const thumbnailsContainer = document.querySelector('.thumbnail-container');
    const body = document.querySelector('body');
    
    const carData = cars[carIndex];
    
    modal.style.display = 'flex'; 
    
    modalImage.src = carData.images[currentImageIndex];

    thumbnailsContainer.innerHTML = ''; 
    carData.images.forEach((img, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = img;
        thumbnail.classList.add('thumbnail');
        thumbnail.addEventListener('click', () => changeImage(index));
        thumbnailsContainer.appendChild(thumbnail);
    });
}

function changeImage(index) {
    const modalImage = document.querySelector('.modal-image');
    const carData = cars[currentCarIndex]; 
    currentImageIndex = index;
    modalImage.src = carData.images[index];
}

function showNextImage() {
    const carData = cars[currentCarIndex];
    currentImageIndex = (currentImageIndex + 1) % carData.images.length;  
    const modalImage = document.querySelector('.modal-image');
    modalImage.src = carData.images[currentImageIndex];
}

function showPrevImage() {
    const carData = cars[currentCarIndex];
    currentImageIndex = (currentImageIndex - 1 + carData.images.length) % carData.images.length; 
    const modalImage = document.querySelector('.modal-image');
    modalImage.src = carData.images[currentImageIndex];
}

document.querySelector('.modal-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        closeModal();
    }
});

function closeModal() {
    const modal = document.querySelector('.modal-overlay');
    const body = document.querySelector('body');
    modal.style.display = 'none';
    body.style.filter = 'none';
}

const cars = [
    {
        name: 'Lexus LX 600',
        images: ['img/car.png', 'img/g63.png', 'img/car.png', 'img/car.png'],
    },
    {
        name: 'Mercedes-Benz G-Class',
        images: ['img/g63.png', 'img/gmc.png', 'img/g63.png', 'img/g63.png'],
    },
    {
        name: 'GMC Yukon',
        images: ['img/gmc.png', 'img/car.png', 'img/gmc.png', 'img/gmc.png'],
    }
];

document.querySelectorAll('.cars2-btn a').forEach((btn, index) => {
    btn.addEventListener('click', () => openModal(index));
});

document.querySelector('.arrow.right').addEventListener('click', showNextImage);
document.querySelector('.arrow.left').addEventListener('click', showPrevImage);
