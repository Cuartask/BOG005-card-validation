//const { parse } = require("@babel/core");

const validator = {
   isValid: function (creditCardNumber) {
      let numbers = creditCardNumber.toString().split('').reverse();
      let sum = 0;

    for (let i = 0; i < creditCardNumber.length; i++) {
      numbers[i] = parseInt(numbers[i]);

      if (i % 2 !== 0) {
        numbers[i] *= 2;

      if (numbers[i] > 9) {
        numbers[i] -= 9;
  }
}

  sum += numbers [i];

}

  if (sum % 10  === 0) {
  console.log("true");
  return true
} else {
  console.log("false");
  return false
}
  },

  maskify: function (creditCardNumber) {
    let creditCardStr = creditCardNumber.toString();
    let maskNumbers = creditCardStr.slice(0, -4).replace(/./g,"#");
    let lastNumbers = creditCardStr.slice(-4);
    let allNumbers = maskNumbers + lastNumbers;

    return(allNumbers)
    }
}





// ENSAYO 2 DE ISVALID
// //constante donde guardo mi boton de enviar formulario con un evento de tipo click
// const btnEnviar = document.querySelector('#login');
// //guardo el numero digitado en el formulario en una variable 
// let inputElement = document.getElementById("password");
// const $listNumbers = document.querySelector('#mostrar-list-numbers');
// let arrayNumbers = [];

// btnEnviar.addEventListener('click', function(){
//   arrayNumbers.push(inputElement.value);
//   $listNumbers.innerHTML = arrayNumbers.sort(function(a,b){
//     return a - b;
//   }); 
//     })

// ENSAYO 2 DE MASKIFY
// El método split() divide un objeto de tipo String en un array
// El método map() crea un nuevo array con los resultados de la llamada a la función indicada
// El método join() une todos los elementos de una matriz

// function maskify(inputContrasena){
//     return inputContrasena.split('').map((Number, index) => index < inputContrasena.length - 4 ? '#' : Number).join('');
// }

// console.log(maskify(inputContrasena));


export default validator;