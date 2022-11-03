import "./style.css";
import "./app/styles/header.css";
import "./app/styles/inputs.css";
import "./app/styles/buttons.css";

import { getFormattedDate, getFormattedTime } from "./app/utils/formatDates.js";
import datetimeDifference from "datetime-difference";
import { calcResult } from "./app/utils/calcResult";

const btn = document.getElementById("calc");
const dataIda = document.getElementById("dataIda");
const horaIda = document.getElementById("horaIda");
const dataVolta = document.getElementById("dataVolta");
const horaVolta = document.getElementById("horaVolta");

btn.addEventListener("click", () => {
  const hora1 = getFormattedTime(new Date(`2022-01-01 ${horaIda.value}`));
  const hora2 = getFormattedTime(new Date(`2022-01-01 ${horaVolta.value}`));

  const date1 = getFormattedDate(new Date(dataIda.value));
  const date2 = getFormattedDate(new Date(dataVolta.value));

  const dataHoraIda = new Date(date1 + " " + hora1);
  const dataHoraVolta = new Date(date2 + " " + hora2);

  calcResult(datetimeDifference(dataHoraVolta, dataHoraIda));
});
