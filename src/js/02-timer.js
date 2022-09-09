import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({ position: 'center-top' });

const refs = {
  startBtn: document.querySelector('[data-start]'),
  dayInterface: document.querySelector('[data-days]'),
  hoursInterface: document.querySelector('[data-hours]'),
  minsInterface: document.querySelector('[data-minutes]'),
  secInterface: document.querySelector('[data-seconds]'),
};
const today = new Date();
let selectedDatesUTC = 0;
let intervalId = null;

refs.startBtn.addEventListener('click', startTimer);

refs.startBtn.disabled = true;

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDatesUTC = selectedDates[0].getTime();

    dateValidation(selectedDates[0]);
  },
});

function dateValidation(date) {
  if (date <= today) {
    // alert('Please choose a date in the future');
    Notify.warning('Please choose a date in the future', {
      timeout: 3000,
    });

    refs.startBtn.disabled = true;
  }
  if (date > today) {
    refs.startBtn.disabled = false;
  }
}

function startTimer() {
  refs.startBtn.disabled = true;

  intervalId = setInterval(() => {
    let nowUTC = new Date().getTime();

    getTimerValue(nowUTC);

    let SumDateValue = days + hours + minutes + seconds;

    if (SumDateValue === 0) {
      clearInterval(intervalId);
    }

    refs.dayInterface.textContent = padStart(days);
    refs.hoursInterface.textContent = padStart(hours);
    refs.minsInterface.textContent = padStart(minutes);
    refs.secInterface.textContent = padStart(seconds);
  }, 1000);
}

function padStart(num) {
  return String(num).padStart(2, 0);
}

function getTimerValue(now) {
  let timerValue = convertMs(selectedDatesUTC - now);

  return ({ days, hours, minutes, seconds } = timerValue);
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
