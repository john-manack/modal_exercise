const showModal = document.querySelector('#showModal');
const closeModal = document.querySelector('#closeModal');

showModal.addEventListener('click', function() {
    const modalOverlay = document.querySelector("#overlay");
    modalOverlay.classList.toggle("visible");
});

closeModal.addEventListener('click', function () {
    const modalOverlay = document.querySelector("#overlay");
    modalOverlay.classList.toggle("visible");
});