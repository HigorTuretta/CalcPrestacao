import { getFormattedTime, getFormattedDate } from "./app/utils/formatDates";
import datetimeDifference from "datetime-difference";

export function getDates(ev) {
  ev.preventDefault();
  const hora1 = getFormattedTime(new Date(`2022-01-01 ${horaIda.value}`));
  const hora2 = getFormattedTime(new Date(`2022-01-01 ${horaVolta.value}`));

  const date1 = getFormattedDate(new Date(dataIda.value));
  const date2 = getFormattedDate(new Date(dataVolta.value));

  const dataHoraIda = new Date(date1 + " " + hora1);
  const dataHoraVolta = new Date(date2 + " " + hora2);

  calcResult(datetimeDifference(dataHoraVolta, dataHoraIda));
}

function calcResult(timeDiff) {
  const result = document.getElementById("result-area");
  const hoursDiff = timeDiff.hours;
  const daysDiff = timeDiff.days;
  if (daysDiff >= 1) {
    result.innerHTML = `Você tem Direito a: ${
      hoursDiff > 12 ? daysDiff + 1 : daysDiff
    }${
      hoursDiff <= 12
        ? hoursDiff == 0
          ? " diária(s)"
          : " diária(s) e meia"
        : " diária(s)"
    } `;
  }
}
