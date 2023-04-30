const images = document.querySelectorAll('.project img');
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal-img');
const closeModal = document.querySelector('.close-modal');

function openModal(event) {
  const imageSrc = event.target.getAttribute('src');
  modalImage.setAttribute('src', imageSrc);
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

images.forEach(image => {
  image.addEventListener('click', openModal);
});

closeModal.addEventListener('click', closeModal);
