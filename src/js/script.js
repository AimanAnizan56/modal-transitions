const darkToggle = document.querySelector('#dark-mode-toggle');
const button = document.querySelectorAll('.box > button');
const footer = document.querySelector('#footer');
const modalbtn = document.querySelectorAll('.modal > button');

darkToggle.addEventListener('change', () => {
    document.body.className = darkToggle.checked ? 'dark' : '';
});

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', (event) => {
        footer.className = 'opened';

        const modal = '.modal-' + button[i].getAttribute('aria-modal');
        document.querySelector(modal).classList.add('visible');
    });

    modalbtn[i].addEventListener('click', (event) => {
        footer.className = '';

        const modal = '.modal-' + modalbtn[i].getAttribute('aria-modal');
        document.querySelector(modal).classList.remove('visible');
    });
}
