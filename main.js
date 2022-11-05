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

  calcResult(datetimeDifference(dataHoraVolta, dataHoraIda));
}