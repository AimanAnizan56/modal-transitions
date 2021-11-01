const darkToggle = document.querySelector('#dark-mode-toggle');
const button = document.querySelectorAll('.box > button');
const footer = document.querySelector('#footer');
const modalbtn = document.querySelectorAll('.modal > button');
const body = document.body;

darkToggle.addEventListener('change', () => {
    document.body.className = darkToggle.checked ? 'dark' : '';
    localStorage.setItem('colorMode', body.className);
});

const getLocalStorage = () => {
    const colorMode = localStorage.getItem('colorMode');
    if (colorMode != null && colorMode === 'dark') {
        darkToggle.checked = true;
        body.className = colorMode;
    } else if (colorMode == null) {
        localStorage.setItem('colorMode', body.className);
    }
};

const disableScrolling = () => {
    body.style.overflowY = 'hidden';
};

const enableScrolling = () => {
    body.style.overflowY = '';
};

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
        footer.className = 'opened';

        const modal = '.modal-' + button[i].getAttribute('aria-modal');
        document.querySelector(modal).classList.add('visible');

        disableScrolling();
    });

    modalbtn[i].addEventListener('click', () => {
        footer.className = '';

        const modal = '.modal-' + modalbtn[i].getAttribute('aria-modal');
        document.querySelector(modal).classList.remove('visible');

        enableScrolling();
    });
}

getLocalStorage();
