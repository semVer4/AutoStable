//MODAL-EQ
const modal = document.getElementById("product-modal");
const closeModal = document.getElementById("close-modal-eq");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalPrice = document.getElementById("modal-price");

const productCards = document.querySelectorAll(".list-prouduct");

productCards.forEach((card) => {
    card.addEventListener("click", () => {
        const imgSrc = card.querySelector("img").getAttribute("src");
        const title = card.querySelector(".name-prod").textContent;
        const desc = card.querySelector(".desc-prod").textContent;
        const price = card.querySelector(".cost-prod").textContent;

        modalImg.setAttribute("src", imgSrc);
        modalTitle.textContent = title;
        modalDesc.textContent = desc;
        modalPrice.textContent = price;

        modal.style.display = "flex";
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});