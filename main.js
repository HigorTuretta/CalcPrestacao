import "./style.css";
import "./app/styles/header.css";
import "./app/styles/inputs.css";
import "./app/styles/buttons.css";

import { getDates } from "./calcResult";
import {getCurrentDate} from "./app/utils/formatDates"

const btn = document.getElementById("calc");
let dataIda = document.getElementById("dataIda");
let horaIda = document.getElementById("horaIda");
let dataVolta = document.getElementById("dataVolta");
let horaVolta = document.getElementById("horaVolta");

window.onload = () => {
  dataIda.value = getCurrentDate();
  horaIda.value = "21:00";
  dataVolta.value = getCurrentDate();
  horaVolta.value = "08:00";

  btn.addEventListener("click", getDates(event), false);
};
