'use strict';

const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');


// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    console.log(seconds.target);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа

  let input = inputEl.value.replace(/[^0-9]/g, '');
  // console.log(input);
});


let timer;

buttonEl.addEventListener('click', () => {
  const input = inputEl.value;
  if (timer) clearInterval(timer);
  if (input === '' || input.trim().length === 0) {
    alert('Пожалуйста, установите таймер ⌛');


    clearInterval(timer);
    timerEl.textContent = 'hh:mm:ss';
  }
  else {
    let seconds = Number(input.replace(/[^0-9]/g, ''));

    // Очистите input
    console.log(seconds);
    if (!seconds == 0) {

      // Вызывать таймер каждые секунды
      timer = setInterval(function () {
        const hour = String(Math.trunc(seconds / 3600)).padStart(2, 0);
        const min = String(Math.trunc(seconds / 60)).padStart(2, 0);
        const sec = String(seconds % 60).padStart(2, 0);

        // Каждую секунду оставшееся время отображается в UI
        timerEl.textContent = `${hour}:${min}:${sec}`;

        // Уменьшить 1s
        seconds--;

        // Когда 0s, остановить таймер
        if (seconds === 0) {
          clearInterval(timer);
          timerEl.textContent = 'hh:mm:ss'
        };
      }, 1000);
    }
  }

  // inputEl.addEventListener('DOMContentLoaded', timer);

  // animateTimer(seconds);

  inputEl.value = '';
});
