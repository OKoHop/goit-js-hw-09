// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    startBtn: document.querySelector('button'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    min: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
}
refs.startBtn.addEventListener('click', runTimer);



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0].getTime() - options.defaultDate.getTime() < 0) {
          refs.startBtn.setAttribute('disabled', '')
          return window.alert('Please choose a date in the future');
      }
      refs.startBtn.removeAttribute('disabled');
      setInterval(() => {
          const time = selectedDates[0].getTime() - Date.now();
          const { days, hours, minutes, seconds } = convertMs(time);

          runTimer({ days, hours, minutes, seconds });
    }, 1000)
    },
};
flatpickr('#datetime-picker', options)

function runTimer( { days, hours, minutes, seconds } ) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.min.textContent = `${minutes}`;
    refs.seconds.textContent = `${seconds}`;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}