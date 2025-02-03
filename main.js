import "./style.css";
import "./app/styles/header.css";
import "./app/styles/inputs.css";
import "./app/styles/buttons.css";

import { calcResult } from "./calcResult";
import { getCurrentDate, getFormattedTime, getFormattedDate } from "./app/utils/formatDates";
import datetimeDifference from "datetime-difference";
// Se estiver usando o SweetAlert2 via NPM, descomente a linha abaixo:
// import Swal from 'sweetalert2';

const form = document.getElementById("calc-form");
const vlrDiaria = document.getElementById("vlrDiaria");
const dataIda = document.getElementById("dataIda");
const horaIda = document.getElementById("horaIda");
const dataVolta = document.getElementById("dataVolta");
const horaVolta = document.getElementById("horaVolta");

window.onload = () => {
  dataIda.value = getCurrentDate();
  horaIda.value = "21:00";
  dataVolta.value = getCurrentDate();
  horaVolta.value = "08:00";
  vlrDiaria.value = 80;
  form.addEventListener("submit", getDates);
};

export function getDates(event) {
  event.preventDefault();

  const hora1 = getFormattedTime(new Date(`2022-01-01 ${horaIda.value}`));
  const hora2 = getFormattedTime(new Date(`2022-01-01 ${horaVolta.value}`));

  const date1 = getFormattedDate(new Date(dataIda.value));
  const date2 = getFormattedDate(new Date(dataVolta.value));

  const dataHoraIda = new Date(date1 + " " + hora1);
  const dataHoraVolta = new Date(date2 + " " + hora2);

  // Se a data de retorno for anterior à data de ida, exibe alerta via SweetAlert2
  if (dataHoraVolta < dataHoraIda) {
    Swal.fire({
      icon: 'error',
      title: 'Data Inválida',
      text: 'A data de retorno não pode ser anterior à data de ida. Por favor, verifique.'
    });
    return;
  }

  calcResult(datetimeDifference(dataHoraVolta, dataHoraIda));
}
