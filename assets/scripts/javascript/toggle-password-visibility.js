setTimeout(() => {
  const input = document.querySelector('.input-container input');
  const showIcon = document.querySelector('.show-icon');
  const hideIcon = document.querySelector('.hide-icon');
  const toggleInput = () => {
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  }
  showIcon.addEventListener('click', () => {
    toggleInput();
    showIcon.style.display = 'none';
    hideIcon.style.display = 'initial';
  });
  hideIcon.addEventListener('click', () => {
    toggleInput();
    hideIcon.style.display = 'none';
    showIcon.style.display = 'initial';
  });
}, 3000);
