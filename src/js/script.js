const darkToggle = document.querySelector('#dark-mode-toggle');
const button = document.querySelectorAll('.box > button');
const footer = document.querySelector('#footer');
const modalbtn = document.querySelectorAll('.modal > button');
const body = document.body;

darkToggle.addEventListener('change', () => {
    document.body.className = darkToggle.checked ? 'dark' : '';
    localStorage.setItem('colorMode', body.className);
});

window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
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
    body.style.height = '100vh';
    body.style.overflowY = 'hidden';
};

const enableScrolling = () => {
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    body.style.position = '';
    body.style.top = '';
    body.style.height = '';
    body.style.overflowY = '';
    window.scrollTo(0, parseInt(scrollY || '0'));
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
