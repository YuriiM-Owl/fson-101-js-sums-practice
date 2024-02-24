/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/
const swapButton = document.querySelector("#swapButton");
swapButton.addEventListener("click", swapInformation);
const leftSwapInput = document.querySelector("#leftSwapInput");
const rightSwapInput = document.querySelector("#rightSwapInput");

function swapInformation() {
  const leftValue = leftSwapInput.value;
  const rightValue = rightSwapInput.value;
  leftSwapInput.value = rightValue;
  rightSwapInput.value = leftValue;
}
