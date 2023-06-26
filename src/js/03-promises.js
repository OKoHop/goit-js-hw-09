import Notiflix, { Notify } from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  inputDelay: document.querySelector('[name="delay"]'),
  inputStep: document.querySelector('[name="step"]'),
  inputAmount: document.querySelector('[name="amount"]'),
}
const dataObj = {};
refs.form.addEventListener('submit', runPromise);


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay})
  } else {
        reject({position, delay})
  }
  }, delay)
    }) 
}

function runPromise(evt) {
  evt.preventDefault();
  let iDelay = parseInt(refs.inputDelay.value);
  const iStep = Number(refs.inputStep.value);
  const iAmount = Number(refs.inputAmount.value);

  for (let i = 1; i <= iAmount; i++) {
    createPromise(i, iDelay)
      .then(({ position, delay }) => { Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`) })
      .catch(({ position, delay }) => { Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`) });
    iDelay += iStep;
  }
}