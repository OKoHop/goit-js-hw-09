const refs = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
    body: document.querySelector('body'),
};
let intervalId = null;


refs.btnStart.addEventListener('click', startColorSwitcher);
refs.btnStop.addEventListener('click', stopColorSwitcher);


function startColorSwitcher() {
    refs.btnStart.setAttribute('disabled', '');
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = `${getRandomHexColor()}`
    }, 1000)
}

function stopColorSwitcher() {
    refs.btnStart.removeAttribute('disabled');
    clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
