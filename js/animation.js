const toggleButton = document.querySelector('.arrow');
const header = document.querySelector('.side-header');

toggleButton.addEventListener('click', () => {
    header.classList.toggle('open');
});


