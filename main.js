const inputField = document.getElementById("input");
const errorMessage = document.getElementById("error-message");
const submitButton = document.querySelector(".button");

inputField.addEventListener("input", () => {
  let inputValue = inputField.value.trim();

  if (parseInt(inputValue) < 10 && inputValue !== "") {
    inputField.classList.add("error");
    errorMessage.style.display = "block";
    submitButton.style.display = "none";
  } else {
    inputField.classList.remove("error");
    errorMessage.style.display = "none";
    submitButton.style.display = "block";
  }
});
