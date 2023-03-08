import "./style.css";
import "./app/styles/header.css";
import "./app/styles/inputs.css";
import "./app/styles/buttons.css";

import { calcResult } from "./calcResult";
import {getCurrentDate, getFormattedTime, getFormattedDate } from "./app/utils/formatDates"
import datetimeDifference from "datetime-difference";

const btn = document.getElementById("calc");
const vlrDiaria = document.getElementById('vlrDiaria');
let dataIda = document.getElementById("dataIda");
let horaIda = document.getElementById("horaIda");
let dataVolta = document.getElementById("dataVolta");
let horaVolta = document.getElementById("horaVolta");

window.onload = () => {
  dataIda.value = getCurrentDate();
  horaIda.value = "21:00";
  dataVolta.value = getCurrentDate();
  horaVolta.value = "08:00";
  vlrDiaria.value = 80;
  btn.addEventListener("click", getDates);
  btn.addEventListener("touchstart", getDates);
};

export function getDates() {

  const hora1 = getFormattedTime(new Date(`2022-01-01 ${horaIda.value}`));
  const hora2 = getFormattedTime(new Date(`2022-01-01 ${horaVolta.value}`));

  const date1 = getFormattedDate(new Date(dataIda.value));
  const date2 = getFormattedDate(new Date(dataVolta.value));

  const dataHoraIda = new Date(date1 + " " + hora1);
  const dataHoraVolta = new Date(date2 + " " + hora2);


// Exibe a mensagem de erro caso a data de retorno seja anterior a data de ida
if (dataHoraVolta < dataHoraIda) {
  showErrorPopup("A data de retorno não pode ser anterior a data de ida, gentileza verificar.");
  return;
}

  calcResult(datetimeDifference(dataHoraVolta, dataHoraIda));
}

function showErrorPopup(message) {
  // Cria a div da popup
  const popup = document.createElement("div");
  popup.classList.add("popup_popUp");

  // Cria o conteúdo da popup
  const content = document.createElement("div");
  content.classList.add("content_popUp");

  const messageEl = document.createElement("div");
  messageEl.classList.add("message_popUp");
  messageEl.innerText = message;
  content.appendChild(messageEl);

  // Adiciona o conteúdo à popup
  popup.appendChild(content);

  // Cria o botão de fechar
  const closeBtn = document.createElement("button");
  closeBtn.classList.add("btn_popUp");
  closeBtn.addEventListener("click", () => {
    content.classList.add("hide_popUp");
    setTimeout(() => {
      document.body.removeChild(popup);
    }, 300);
  });

  // Adiciona o botão ao conteúdo
  content.appendChild(closeBtn);

  // Adiciona a popup ao body
  document.body.appendChild(popup);

  // Adiciona a animação de entrada da popup
  setTimeout(() => {
    popup.classList.add("show_popUp");
  }, 0);
  setTimeout(() => {
    content.classList.add("show_popUp");
  }, 0);
}