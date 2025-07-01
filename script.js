const modal = document.getElementById('modal');
const openModalBtn = document.querySelector('.header-nav-button[type="submit"]');
const closeModalBtn = document.getElementById('closeModalBtn');

openModalBtn.addEventListener('click', () => {
  modal.classList.remove('is-hidden');
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.add('is-hidden');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('is-hidden');
  }
});




// --- ФІЛЬТРАЦІЯ ---
const filterButtons = document.querySelectorAll('.animals-button');
const animalsItems = document.querySelectorAll('.animals-list-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Зняти клас active з усіх кнопок
    filterButtons.forEach(btn => btn.classList.remove('active'));

    // Додати active до натиснутої
    button.classList.add('active');

    const filter = button.textContent.trim().toLowerCase(); // "cats", "dogs", etc.
animalsItems.forEach(item => {
      const type = item.dataset.type;

      const showItem =
        filter === 'all animals' ||
        (filter === 'cats' && type === 'cat') ||
        (filter === 'dogs' && type === 'dog') ||
        (filter === 'others' && type === 'other');

      item.style.display = showItem ? 'flex' : 'none';
    });
  });
});