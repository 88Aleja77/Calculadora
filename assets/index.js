/*let botones = document.querySelectorAll("button")


for (let index = 0; index < botones.length; index++){
    const button =botones [index];
    button.addEventListener("click", function (e){
      e.preventDefault()

      calculate(button.innerHTML)
    })
}

function calculate (opera){
  console.log(opera)
}*/

  /*var operacion
  operacion="sumar"
  console.log(operacion)*/

  document.getElementById("suma").addEventListener("click", function (e) {
      e.preventDefault()
      
      var numberOne = parseFloat(document.getElementById("numberOne").value)
      var numberTwo = parseFloat(document.getElementById("numberTwo").value)

    if (isNaN(numberOne)||isNaN (numberTwo)) {
      alert("Debe completar todos los campos")
    } else {
      var sumar = numberOne + numberTwo;
      var pElement = document.getElementById("result");
      pElement.innerHTML = " La suma es: " + sumar;
    }
});

    document.getElementById("resta").addEventListener("click", function (e) {
      e.preventDefault()

      var numberOne = parseFloat(document.getElementById("numberOne").value)
      var numberTwo = parseFloat(document.getElementById("numberTwo").value)

    if (isNaN(numberOne)||isNaN (numberTwo)) {
      alert("Debe completar todos los campos")
    } else {
      var resta = numberOne - numberTwo
      var pElement = document.getElementById("result");
      pElement.innerHTML = " La resta es: " + resta
      }
  });
    document.getElementById("multiplicacion").addEventListener("click", function (e) {
      e.preventDefault()

      var numberOne = parseFloat(document.getElementById("numberOne").value)
      var numberTwo = parseFloat(document.getElementById("numberTwo").value)

    if (isNaN(numberOne)||isNaN (numberTwo)) {
      alert("Debe completar todos los campos")
    } else {
      var multiplicacion = numberOne * numberTwo;
      var pElement = document.getElementById("result");
      pElement.innerHTML = " La multiplicación es: " + multiplicacion
    }
  });
    document.getElementById("division").addEventListener("click", function (e) {
      e.preventDefault()

      var numberOne = parseFloat(document.getElementById("numberOne").value)
      var numberTwo = parseFloat(document.getElementById("numberTwo").value)

    if (isNaN(numberOne)||isNaN (numberTwo)) {
      alert("Debe completar todos los campos")
    } else {
      var division = numberOne / numberTwo;
      var pElement = document.getElementById("result");
      pElement.innerHTML = " La division es: " + division
    }
});
