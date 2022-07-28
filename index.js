//Declaramos variables globales
var operandoa;
var operandob;
var operacion;

function init() {
  //variables
  var resultado = document.getElementById("resultado");
  var resultado2 = document.getElementById("resultado2");
  var reset = document.getElementById("reset");
  var suma = document.getElementById("suma");
  var resta = document.getElementById("resta");
  var multiplicacion = document.getElementById("multiplicacion");
  var division = document.getElementById("division");
  var igual = document.getElementById("igual");
  var uno = document.getElementById("uno");
  var dos = document.getElementById("dos");
  var tres = document.getElementById("tres");
  var cuatro = document.getElementById("cuatro");
  var cinco = document.getElementById("cinco");
  var seis = document.getElementById("seis");
  var siete = document.getElementById("siete");
  var ocho = document.getElementById("ocho");
  var nueve = document.getElementById("nueve");
  var cero = document.getElementById("cero");
  var ms = document.getElementById("memoryStorage");
  var mc = document.getElementById("memoryRecall");

  //Eventos de click
  uno.onclick = function () {
    resultado.textContent = resultado.textContent + "1";
    resultado2.textContent = resultado2.textContent + "1";
  };
  dos.onclick = function () {
    resultado.textContent = resultado.textContent + "2";
    resultado2.textContent = resultado2.textContent + "2";
  };
  tres.onclick = function () {
    resultado.textContent = resultado.textContent + "3";
    resultado2.textContent = resultado2.textContent + "3";
  };
  cuatro.onclick = function () {
    resultado.textContent = resultado.textContent + "4";
    resultado2.textContent = resultado2.textContent + "4";
  };
  cinco.onclick = function () {
    resultado.textContent = resultado.textContent + "5";
    resultado2.textContent = resultado2.textContent + "5";
  };
  seis.onclick = function () {
    resultado.textContent = resultado.textContent + "6";
    resultado2.textContent = resultado2.textContent + "6";
  };
  siete.onclick = function () {
    resultado.textContent = resultado.textContent + "7";
    resultado2.textContent = resultado2.textContent + "7";
  };
  ocho.onclick = function () {
    resultado.textContent = resultado.textContent + "8";
    resultado2.textContent = resultado2.textContent + "8";
  };
  nueve.onclick = function () {
    resultado.textContent = resultado.textContent + "9";
    resultado2.textContent = resultado2.textContent + "9";
  };
  cero.onclick = function () {
    resultado.textContent = resultado.textContent + "0";
    resultado2.textContent = resultado2.textContent + "0";
  };

  // Botones de memoria
  ms.onclick = function () {
    memory = resultado.textContent;
    resultado2.textContent = "";

    limpiar();
  };
  mc.onclick = function () {
    resultado.textContent = memory;
  };

  //Eventos de click operaciones
  reset.onclick = function () {
    resetear();
  };

  reset.ondblclick = function () {
    resetearTodo();
  };
  suma.onclick = function () {
    operandoa = resultado.textContent;
    operacion = "+";
    resultado2.textContent = resultado2.textContent + operacion;
    limpiar();
  };
  resta.onclick = function () {
    operandoa = resultado.textContent;
    operacion = "-";
    resultado2.textContent = resultado2.textContent + operacion;
    limpiar();
  };
  multiplicacion.onclick = function () {
    operandoa = resultado.textContent;
    operacion = "*";
    resultado2.textContent = resultado2.textContent + operacion;
    limpiar();
  };
  division.onclick = function () {
    operandoa = resultado.textContent;
    operacion = "/";
    resultado2.textContent = resultado2.textContent + operacion;
    limpiar();
  };
  igual.onclick = function () {
    operandob = resultado.textContent;
    resolver();
  };
}

function limpiar() {
  resultado.textContent = "";
}

function resetear() {
  resultado.textContent = "";
  resultado2.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
  memory;
}

function resetearTodo() {
  resultado.textContent = "";
  resultado2.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
  memory = 0;
}

function resolver() {
  var res = 0;
  switch (operacion) {
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;

    case "-":
      res = parseFloat(operandoa) - parseFloat(operandob);
      break;

    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;

    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }
  // resetearTodo();
  resultado.textContent = res;
  resultado2.textContent = res;
}
