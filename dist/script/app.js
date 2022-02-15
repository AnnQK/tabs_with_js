"use strict";

const tabs = document.querySelectorAll(".tabs__item");
const tabsBtns = document.querySelectorAll(".btn");
const btnContainer = document.querySelector(".tabs__btn-container");

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
