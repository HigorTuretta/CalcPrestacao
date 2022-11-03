
export function calcResult(timeDiff) {
    const hoursDiff = timeDiff.hours;
    const daysDiff = timeDiff.days;
    const minutesDiff = timeDiff.minutes;
  
    console.log(daysDiff);
    if (daysDiff >= 1) {
      result.innerHTML = `Total: ${hoursDiff > 12 ? daysDiff + 1 : daysDiff}${
        hoursDiff <= 12 ? " diária(s) e meia" : " diária(s)"
      } `;
    }
  }