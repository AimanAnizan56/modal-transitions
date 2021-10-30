const darkToggle = document.querySelector('#dark-mode-toggle');

darkToggle.addEventListener('change', () => {
    document.body.className = darkToggle.checked ? 'dark' : '';
});
