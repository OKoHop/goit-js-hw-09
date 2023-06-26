import Notiflix from 'notiflix';

const refs = {
  btnSubmit: document.querySelector('button'),
  form: document.querySelector('.form'),
}
const dataObj = {};
refs.btnSubmit.addEventListener('click', createPromise);
refs.form.addEventListener('input', addData);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

function addData(e) {
  dataObj[e.target.name] = e.target.value;
}