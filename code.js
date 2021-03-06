const inputBill = document.querySelector(".app__input--bill");
const inputPerson = document.querySelector(".app__input--people");
const tipButtons = document.querySelectorAll(".app__tipBtn");
const customInput = document.querySelector(".app__customInput");
const tipAmount = document.querySelector(".tipAmount");
const totalAmount = document.querySelector(".totalAmount");
const resetBtn = document.querySelector(".resetBtn");
const errorTexts = document.querySelectorAll(".error");

function checkInputs(tipValue) {
  if (inputPerson.value == "0" && inputBill.value == "0") {
    errorTexts[0].style = "display:block";
    errorTexts[1].style = "display:block";
  } else if (inputBill.value == "0") {
    errorTexts[0].style = "display:block";
    errorTexts[1].style = "display:none";
  } else if (inputPerson.value == "0") {
    errorTexts[0].style = "display:none";
    errorTexts[1].style = "display:block";
  } else {
    const percent =
      tipValue.value > 0.99 ? parseFloat(tipValue.value) / 100 : tipValue.value;
    const people = Number.parseInt(inputPerson.value);
    const bill = Number.parseInt(inputBill.value);

    totalAmount.innerHTML = "$" + ((bill + percent * bill) / people).toFixed(2);
    tipAmount.innerHTML = "$" + ((percent * bill) / people).toFixed(2);

    errorTexts[0].style = "display:none";
    errorTexts[1].style = "display:none";
  }
}

tipButtons.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    checkInputs(item);
  });
});
customInput.addEventListener("keyup", () => {
  checkInputs(customInput);
});

resetBtn.addEventListener("click", () => {
  totalAmount.innerHTML = "$0";
  tipAmount.innerHTML = "$0";
  inputBill.value = "0";
  inputPerson.value = "0";
  customInput.value = "";
  errorTexts[0].style = "display:none";
  errorTexts[1].style = "display:none";
});
