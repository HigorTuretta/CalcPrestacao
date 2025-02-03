import { scrollToBottom } from "./app/utils/autoScroll";

export function calcResult(timeDiff) {  
  const hoursDiff = timeDiff.hours;
  const minutesDiff = timeDiff.minutes
  const daysDiff = timeDiff.days;
  let diarias = 0;
  let meiaDiaria = false;

  //Verifica quantos dias se passou.
  if (daysDiff >= 1) {
    if (hoursDiff > 12) {
      //Se já passou + 12 horas é contato mais 1 dia na diária.
      diarias = daysDiff + 1;
    } else {
      diarias = daysDiff;
    }

    
    if (hoursDiff <= 12) {
      
      // Se a diferença de horas for menor que 12 e também diferente de 0, teremos meia diária.
      if (hoursDiff != 0) {
        meiaDiaria = true;
      }

      //Se a diferença de minutos for maior ou igual a 5 também teremos meia diária.
      if (minutesDiff >= 5) {
        meiaDiaria = true;
      }
    }
  } else {
    // Se não temos a diferença de dias, apenas conferimos se teremos uma diferença superior a 12 horas.
    if (hoursDiff > 12 || minutesDiff >= 5) {
      diarias = 1; // Acima de 12 horas e 5 minutos = 1 diária.
    } else {
      meiaDiaria = true; // Caso negativo, meia diária.
    }
  }

  geraMensagem(diarias, meiaDiaria);  
}

function addEntrance(element) {
  element.classList.add("scale-in-center");
  setTimeout(() => {
    element.classList.remove("scale-in-center");
  }, 1000);
}

function geraMensagem(qtdDiarias, meia) {
  const exibeTotalDiarias = document.getElementById("total-diarias");
  const exibeValorDiarias = document.getElementById("valor-total");
  const valorDiarias = document.getElementById("vlrDiaria").value;
  let vlrTotal = 0;

  exibeTotalDiarias.innerHTML = `Você tem direito a: ${
    qtdDiarias > 0
      ? meia == true
        ? qtdDiarias + " diária(s) e meia."
        : qtdDiarias + " diárias(s)"
      : " Meia diária."
  }`;
  addEntrance(exibeTotalDiarias);

  if (valorDiarias == 0 || valorDiarias < 0) {
    alert("Coloca um valor válido ai!");
  } else {
    vlrTotal =
      meia == true
        ? qtdDiarias * valorDiarias + valorDiarias / 2
        : qtdDiarias * valorDiarias;

    vlrTotal = vlrTotal.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
    exibeValorDiarias.innerHTML = `<h1>${vlrTotal}</h1>`;
    addEntrance(exibeValorDiarias);
  }
  scrollToBottom();
}

