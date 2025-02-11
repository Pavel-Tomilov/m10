const wrapper = document.querySelector('.icon-burger');
wrapper.addEventListener('click', myFunction);

// const adder = document.querySelector('.rsvp__button-adder');
// adder.addEventListener('click', myFunction);

// function adderGuests() {

// }

function myFunction() {
  var element = document.querySelector('.menu');
  element.classList.toggle("menu__open");
  wrapper.classList.toggle("change");
}


document.addEventListener('DOMContentLoaded', function() {
  // конечная дата
  const deadline = new Date("Mar 5, 2025 14:46:00").getTime();
  // id таймера
  let timerId = null;
  // склонение числительных
  function declensionNum(num, words) {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  }
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function change() {
    const timer = deadline - new Date();
    if (timer > 0) {
      const diff = deadline - new Date();
      return countdown(diff);
    } else {
      const diff = new Date() - deadline;
      document.getElementById("timer").innerHTML = "Мы женаты";
      return countdown(diff);

    }
  }

  function countdown(diff) {
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days;
    $hours.textContent = hours;
    $minutes.textContent = minutes;
    $seconds.textContent = seconds;
    $daystext.textContent = declensionNum(days, ['день', 'дня', 'дней']);
    $hourstext.textContent = declensionNum(hours, ['час', 'часа', 'часов']);
    $minutestext.textContent = declensionNum(minutes, ['минута', 'минуты', 'минут']);
    $secondstext.textContent = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
  }

  // получаем элементы, содержащие компоненты даты
  const $daystext = document.querySelector('.timer__text_var_day');
  const $hourstext = document.querySelector('.timer__text_var_hour');
  const $minutestext = document.querySelector('.timer__text_var_min');
  const $secondstext = document.querySelector('.timer__text_var_sec');

  const $days = document.querySelector('.timer__number_var_day');
  const $hours = document.querySelector('.timer__number_var_hour');
  const $minutes = document.querySelector('.timer__number_var_min');
  const $seconds = document.querySelector('.timer__number_var_sec');
  change();
  timerId = setInterval(change, 1000);
});
