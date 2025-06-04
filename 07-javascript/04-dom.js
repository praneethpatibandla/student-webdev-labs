let userInput = document.querySelector("#userInput1");
let copy = document.querySelector("#copy");
let output = document.querySelectorAll(".output")[0];

copy.addEventListener("click", function () {
  output.textContent = userInput.value;
});

let userInput2 = document.querySelector("#userInput2");
let output2 = document.querySelectorAll(".output")[1];

userInput2.addEventListener("input", function () {
  output2.textContent = userInput2.value;
});
