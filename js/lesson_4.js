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


/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
const inputPass = document.querySelector("#passwordInput");
const passwordButton = document.querySelector("#passwordButton");

passwordButton.addEventListener("click", changeState);

function changeState() {
  if (inputPass.type === "password" && passwordButton.textContent === "Розкрити") {
    inputPass.type = "text";
    passwordButton.textContent = "Приховати";
    return
  }
  inputPass.type = "password";
  passwordButton.textContent = "Розкрити";
}

