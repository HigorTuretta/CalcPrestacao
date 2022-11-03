export function calcResult(timeDiff) {
  const result = document.getElementById("result-area");
  const hoursDiff = timeDiff.hours;
  const daysDiff = timeDiff.days;
  if (daysDiff >= 1) {
    result.innerHTML = `Você tem Direito a: ${
      hoursDiff > 12 ? daysDiff + 1 : daysDiff
    }${hoursDiff <= 12 ? hoursDiff == 0 ? " diária(s)" :" diária(s) e meia" : " diária(s)"} `;
  }
}
