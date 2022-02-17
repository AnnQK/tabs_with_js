"use strict";

const tabs = document.querySelectorAll(".tabs__item");
const tabsBtns = document.querySelectorAll(".btn");
const btnContainer = document.querySelector(".tabs__btn-container");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

// Tabs
btnContainer.addEventListener("click", function (event) {
  const clicked = event.target.closest(".btn");

  if (!clicked) return;

  tabsBtns.forEach((btn) => {
    btn.classList.remove("btn--active");
  });

  clicked.classList.add("btn--active");

  tabs.forEach((tab) => tab.classList.remove("tabs__item--active"));

  document
    .querySelector(`.tabs__item--${clicked.dataset.tab}`)
    .classList.add("tabs__item--active");
});

// Slider

const lastSlide = slides.length - 1;
let currentSlide = 0; // index

function showSlide(slide) {
  slides.forEach((sl, index) => {
    sl.style.transform = `translateX(${100 * (index - slide)}%)`;
  });
}

function nextSlide() {
  if (currentSlide === lastSlide) {
    currentSlide = 0;
  } else currentSlide++;
  showSlide(currentSlide);
}

function prevSlide() {
  if (currentSlide === 0) {
    currentSlide = lastSlide;
  } else currentSlide--;
  showSlide(currentSlide);
}
//
showSlide(0);
btnLeft.addEventListener("click", prevSlide);
btnRight.addEventListener("click", nextSlide);
