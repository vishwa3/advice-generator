const button = document.querySelector(".dice");
const adviceId = document.querySelector(".advice_id");
const adviceMessage = document.querySelector(".advice_message");
const diceImg = document.querySelector(".dice img");

button.addEventListener("click", async (event) => {
  event.stopPropagation();
  diceImg.classList.add("spin");
  button.style.setProperty("pointer-events", "none");
  adviceMessage.style.setProperty("filter", "blur(5px)");
  adviceId.style.setProperty("filter", "blur(5px)");
  const response = await fetch("https://api.adviceslip.com/advice");
  const {
    slip: { advice, id },
  } = await response.json();
  diceImg.classList.remove("spin");
  button.style.setProperty("pointer-events", "auto");
  adviceMessage.style.setProperty("filter", "unset");
  adviceId.style.setProperty("filter", "unset");
  adviceId.innerHTML = `ADVICE #${id}`;
  adviceMessage.innerHTML = advice;
});
