import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({ useIcon: 'false' });

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}

console.log(createPromise(2, 1500));
createPromise(2, 1500)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
      timeout: 3000,
    });
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
      timeout: 3000,
    });
  });
