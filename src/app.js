/* eslint-disable */
import "bootstrap";
import "./style.css";
import validator from "validator";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  //Se obtiene el formulario
  let form = document.getElementById("form-info");
  let myAlert = document.getElementById("theAlert");
  let card = document.getElementById("cardInput");
  let amount = document.getElementById("amountInput");
  let firstName = document.getElementById("firstNameInput");
  let lastName = document.getElementById("lastNameInput");
  let city = document.getElementById("cityInput");
  let message = document.getElementById("messageInput");
  let cvc = document.getElementById("cvcInput");
  let postal = document.getElementById("postalCodeInput");
  let state = document.getElementById("stateInput");

  //Escucha el evento 'submit'
  form.addEventListener("submit", function(e) {
    if (
      validator.isEmpty(card.value) ||
      validator.isCreditCard(card.value) == false
    ) {
      card.style.background = "rgb(216, 153, 153)";
      myAlert.style.display = "block";
      card.classList.add("is-invalid");
      card.classList.remove("is-valid");
    } else if (validator.isCreditCard(card.value)) {
      card.classList.add("is-valid");
      card.style.background = "white";
      card.classList.remove("is-invalid");
      myAlert.style.display = "none";
    }

    if (
      validator.isEmpty(amount.value) ||
      validator.isNumeric(amount.value) == false
    ) {
      amount.style.background = "rgb(216, 153, 153)";
      myAlert.style.display = "block";
      amount.classList.add("is-invalid");
      amount.classList.remove("is-valid");
    } else if (validator.isNumeric(amount.value)) {
      amount.classList.add("is-valid");
      amount.style.background = "white";
      amount.classList.remove("is-invalid");
      myAlert.style.display = "none";
    }

    if (validator.isEmpty(firstName.value)) {
      firstName.style.background = "rgb(216, 153, 153)";
      myAlert.style.display = "block";
      firstName.classList.add("is-invalid");
    } else {
      firstName.classList.add("is-valid");
      firstName.style.background = "white";
      firstName.classList.remove("is-invalid");
      myAlert.style.display = "none";
    }
    if (validator.isEmpty(lastName.value)) {
      lastName.style.background = "rgb(216, 153, 153)";
      myAlert.style.display = "block";
      lastName.classList.add("is-invalid");
    } else {
      lastName.classList.add("is-valid");
      lastName.style.background = "white";
      lastName.classList.remove("is-invalid");
      myAlert.style.display = "none";
    }

    if (validator.isEmpty(city.value)) {
      city.style.background = "rgb(216, 153, 153)";
      myAlert.style.display = "block";
      city.classList.add("is-invalid");
    } else {
      city.classList.add("is-valid");
      city.style.background = "white";
      city.classList.remove("is-invalid");
      myAlert.style.display = "none";
    }

    if (
      validator.isEmpty(cvc.value) ||
      validator.isNumeric(cvc.value) == false
    ) {
      cvc.style.background = "rgb(216, 153, 153)";
      myAlert.style.display = "block";
      cvc.classList.add("is-invalid");
      cvc.classList.remove("is-valid");
    } else if (validator.isNumeric(cvc.value)) {
      cvc.classList.add("is-valid");
      cvc.style.background = "white";
      cvc.classList.remove("is-invalid");
      myAlert.style.display = "none";
    }

    if (validator.isEmpty(message.value)) {
      message.style.background = "rgb(216, 153, 153)";
      myAlert.style.display = "block";
      message.classList.add("is-invalid");
    } else {
      message.classList.add("is-valid");
      message.style.background = "white";
      message.classList.remove("is-invalid");
      myAlert.style.display = "none";
    }

    if (
      validator.isEmpty(postal.value) ||
      validator.isNumeric(postal.value) == false
    ) {
      postal.style.background = "rgb(216, 153, 153)";
      myAlert.style.display = "block";
      postal.classList.add("is-invalid");
      postal.classList.remove("is-valid");
    } else if (validator.isNumeric(postal.value)) {
      postal.classList.add("is-valid");
      postal.style.background = "white";
      postal.classList.remove("is-invalid");
      myAlert.style.display = "none";
    }

    if (state.value == "") {
      state.style.background = "rgb(216, 153, 153)";
      myAlert.style.display = "block";
      state.classList.add("is-invalid");
    } else {
      state.classList.add("is-valid");
      state.style.background = "white";
      state.classList.remove("is-invalid");
    }

    event.preventDefault();
  });
};
