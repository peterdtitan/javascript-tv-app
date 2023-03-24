export default function initModal() {
  const closeBtn = document.querySelector('.close');
  const modal = document.getElementById('comments-modal');
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    const modal = document.getElementById('comments-modal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}