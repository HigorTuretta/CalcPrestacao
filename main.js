import "./style.css";
import { getFormattedDate, getFormattedTime } from "./app/utils/formatDates.js";
import datetimeDifference from "datetime-difference";

const btn = document.getElementById("teste");
const dataIda = document.getElementById("dataIda");
const horaIda = document.getElementById("horaIda");
const dataVolta = document.getElementById("dataVolta");
const horaVolta = document.getElementById("horaVolta");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
  const hora1 = getFormattedTime(new Date(`2022-01-01 ${horaIda.value}`));
  const hora2 = getFormattedTime(new Date(`2022-01-01 ${horaVolta.value}`));

  const date1 = getFormattedDate(new Date(dataIda.value));
  const date2 = getFormattedDate(new Date(dataVolta.value));

  const dataHoraIda = new Date(date1 + " " + hora1);
  const dataHoraVolta = new Date(date2 + " " + hora2);
  console.log(date1, hora1, date2, hora2);
  console.log(datetimeDifference(dataHoraVolta, dataHoraIda));
  calcResult(datetimeDifference(dataHoraVolta, dataHoraIda));
});

function calcResult(timeDiff) {
  const hoursDiff = timeDiff.hours;
  const daysDiff = timeDiff.days;
  const minutesDiff = timeDiff.minutes;

  console.log(daysDiff);
  if (daysDiff >= 1) {
    result.innerHTML = `Total: ${hoursDiff > 12 ? daysDiff + 1 : daysDiff}${
      hoursDiff > 12 ? " diárias e meia" : " diária(s)"
    } `;
  }
}
