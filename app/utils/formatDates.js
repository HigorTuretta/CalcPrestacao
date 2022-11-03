//Formata a data no padrão americano mm/dd/yyyy
export function getFormattedDate(date) {
  let year = date.getFullYear();
  let month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  let day = date.getUTCDate().toString().padStart(2, "0");

  return month + "/" + day + "/" + year;
}
//formata a hora no padrão americano AM/PM
export function getFormattedTime(date) {
  return date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}

//Pega a Data Atual
export function getCurrentDate(){
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  
  return today = yyyy + '-' + mm + '-' + dd;
}
