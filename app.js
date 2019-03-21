const buttons = document.querySelectorAll('.btn');

buttons.forEach(clickedBtn => {
  clickedBtn.addEventListener('click', () => {
    clickedBtn.classList.toggle('active');
  });
});
