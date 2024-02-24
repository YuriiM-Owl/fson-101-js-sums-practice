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

//  Завдання 7
// При натисканні на коло він повинен слідувати за курсором.
// При повторному натисканні він стає в початкове положення.
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
// https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY

const circle = document.querySelector(".outerCircle");

circle.addEventListener("click", addPosition);
console.log(getComputedStyle(circle).left);

function addPosition(event) {
  if (circle.style.position !== "absolute") {
    circle.style.position = "absolute";
    window.addEventListener("mousemove", catchCursorPosition);
    return;
  }
  circle.style.position = "unset"; 
  // можно static
  window.removeEventListener("mousemove", catchCursorPosition);
  return;
}
 function catchCursorPosition(event) {
    circle.style.left = (event.pageX - 20 + "px");
    circle.style.top = (event.pageY -20 + "px");
}
  
  