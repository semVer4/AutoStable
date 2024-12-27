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
        name: 'Dodge RAM',
        images: ['img/ram/ram1-1.png', 'img/ram/ram1-2.png', 'img/ram/ram1-3.png', 'img/ram/ram1-4.png'],
    },
    {
        name: 'Dodge RAM',
        images: ['img/ram/ram2-1.png', 'img/ram/ram2-2.png', 'img/ram/ram2-3.png', 'img/ram/ram2-4.png'],
    },
    {
        name: 'Dodge RAM',
        images: ['img/ram/ram3-1.png', 'img/ram/ram3-2.png', 'img/ram/ram3-3.png', 'img/ram/ram3-4.png'],
    },
    {
        name: 'Chevrolet Tahoe',
        images: ['img/tahoe/tah1-1.png', 'img/tahoe/tah1-2.png', 'img/tahoe/tah1-2.png', 'img/tahoe/tah1-2.png'],
    },
    {
        name: 'Chevrolet Tahoe',
        images: ['img/tahoe/tah2-1.png', 'img/tahoe/tah2-2.png', 'img/tahoe/tah2-3.png', 'img/tahoe/tah2-4.png'],
    },
    {
        name: 'GMC Yukon',
        images: ['img/gmc/gmc1-1.png', 'img/gmc/gmc1-2.png', 'img/gmc/gmc1-3.png', 'img/gmc/gmc1-4.png'],
    },
    {
        name: 'GMC Yukon',
        images: ['img/gmc/gmc1-1.png', 'img/gmc/gmc1-2.png', 'img/gmc/gmc1-3.png', 'img/gmc/gmc1-4.png'],
    },
    {
        name: 'Jeep Grand Cherokee',
        images: ['img/jeep/jeep1-1.png', 'img/jeep/jeep1-2.png', 'img/jeep/jeep1-3.png', 'img/jeep/jeep1-4.png'],
    },
    {
        name: 'Jeep Grand Cherokee',
        images: ['img/jeep/jeep2-1.png', 'img/jeep/jeep2-2.png', 'img/jeep/jeep2-3.png', 'img/jeep/jeep2-4.png'],
    },
    {
        name: 'Lexus RX',
        images: ['img/lexus/lexus1-1.png', 'img/lexus/lexus1-2.png', 'img/lexus/lexus1-3.png', 'img/lexus/lexus1-4.png'],
    },
    {
        name: 'Honda CR-V',
        images: ['img/honda/honda1-1.png', 'img/honda/honda1-2.png', 'img/honda/honda1-3.png', 'img/honda/honda1-4.png'],
    },
    {
        name: 'Audi Q7',
        images: ['img/audi/audi1-1.png', 'img/audi/audi1-2.png', 'img/audi/audi1-3.png', 'img/audi/audi1-4.png'],
    },
    {
        name: 'Mitsubishi Pajero Sport',
        images: ['img/mitsubishi/m1-1.png', 'img/mitsubishi/m1-2.png', 'img/mitsubishi/m1-3.png', 'img/mitsubishi/m1-4.png'],
    },
    {
        name: 'Mini John Cooper Works',
        images: ['img/mini/mini1-1.png', 'img/mini/mini1-2.png', 'img/mini/mini1-3.png', 'img/mini/mini1-4.png'],
    },
    {
        name: 'GMC Yukon',
        images: ['img/gmc.png', 'img/car.png', 'img/gmc.png', 'img/gmc.png'],
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
