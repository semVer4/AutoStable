//MODAL-HEADER
document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const menuModal = document.getElementById('menu-modal');

    burgerMenu.addEventListener('click', () => {
        menuModal.classList.toggle('show');
    });

    menuModal.addEventListener('click', (e) => {
        if (e.target === menuModal) {
            menuModal.classList.remove('show');
        }
    });
});