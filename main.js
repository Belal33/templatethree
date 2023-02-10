let ourSkillsSection = document.querySelector(".our-skills");
let statsSection = document.querySelector(".stats");

let progressSpans = document.querySelectorAll(".progress-bar span");
let daysEventEl = document.querySelector(".about-event .days > div");
let hoursEventEl = document.querySelector(".about-event .hours > div");
let minutesEventEl = document.querySelector(".about-event .minutes > div");
let secondsEventEl = document.querySelector(".about-event .seconds > div");

let statsNumbers = document.querySelectorAll(".stats .number");

window.onscroll = function () {
  if (window.scrollY > ourSkillsSection.offsetTop) {
    progressSpans.forEach((span) => {
      span.style.width = span.getAttribute("progress");
    });
  }
  if (window.scrollY > statsSection.offsetTop) {
    statsNumbers.forEach((span) => {
      let maxvalue = +span.getAttribute("data");
      const increaser = setInterval(() => {
        if (+span.innerHTML < maxvalue) {
          span.innerHTML = +span.innerHTML + 1;
        } else {
          clearInterval(increaser);
        }
      }, 1000 / maxvalue);
    });
  }
};

let eventDate = new Date("DEC 31 2023 23:59:59");
const counter = setInterval(() => {
  let now = new Date();

  let timeLeft = eventDate - now; // in milliseconds
  let days = timeLeft / (1000 * 3600 * 24);
  let hours = (days - Math.floor(days)) * 24;
  let minutes = (hours - Math.floor(hours)) * 60;
  let seconds = (minutes - Math.floor(minutes)) * 60;

  daysEventEl.innerHTML =
    Math.floor(days) < 10 ? `00${Math.floor(days)}` : Math.floor(days);
  hoursEventEl.innerHTML =
    Math.floor(hours) < 10 ? `0${Math.floor(hours)}` : Math.floor(hours);
  minutesEventEl.innerHTML =
    Math.floor(minutes) < 10 ? `0${Math.floor(minutes)}` : Math.floor(minutes);
  secondsEventEl.innerHTML =
    Math.floor(seconds) < 10 ? `0${Math.floor(seconds)}` : Math.floor(seconds);

  if (timeLeft <= 0) {
    clearInterval(counter);
  }
}, 1000);
