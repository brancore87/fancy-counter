const counterEl = document.querySelector(".counter");
const counterValueEl = document.querySelector(".counter__value");
const counterTitleEl = document.querySelector(".counter__title");

const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");

increaseButtonEl.addEventListener("click", () => {
  counterValueEl.textContent = parseInt(counterValueEl.textContent) + 1;

  if (counterValueEl.textContent > 5) {
    counterValueEl.textContent = 5;
    counterEl.classList.add("counter--limit");
    counterTitleEl.innerHTML = "LIMIT! BUY <b>PRO</b> FOR >5";

    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  }

  increaseButtonEl.blur();
});

decreaseButtonEl.addEventListener("click", () => {
  counterValueEl.textContent = parseInt(counterValueEl.textContent) - 1;

  if (counterValueEl.textContent < 0) {
    counterValueEl.textContent = 0;
  }

  decreaseButtonEl.blur();
});

resetButtonEl.addEventListener("click", () => {
  counterValueEl.textContent = 0;

  counterEl.classList.remove("counter--limit");
  counterTitleEl.textContent = "Fancy Counter";

  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;

  resetButtonEl.blur();
});
