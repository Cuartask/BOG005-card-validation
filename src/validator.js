/*eslint-disable */

//const { parse } = require("@babel/core");

//cree un objeto y para formar la funcion isvalid pedi que en la variable numbers me guarde la cadena de caracteres convertidos en un array e invertilrlos 
const validator = {
   isValid: function (creditCardNumber) {
      let numbers = creditCardNumber.toString().split('').reverse();
      let sum = 0;

      //a traves de un for mientras i valga 0 me vaya incrementando en uno, para que pase a traves de todo la cadena y lo convierta en enteros
    for (let i = 0; i < creditCardNumber.length; i++) {
      numbers[i] = parseInt(numbers[i]);

      //que me busque las posiciones pares y las multiplique por 2
      if (i % 2 !== 0) {
        numbers[i] *= 2;

        // que los numeros mayores a 9 les reste 9
      if (numbers[i] > 9) {
        numbers[i] -= 9;
  }
}
//que me sume todos los digitos del array
  sum += numbers [i];

}

//que me reconozca los multiplos de 10 si su residuo es 0 
  if (sum % 10  === 0) {
  return true
} else {
  return false
}
  },

  //Organice el numero de creditCardNumber en una cadena reemplazando desde 
 //el indice 0 y menos los ultimos 4 numeros de del array por el # y en otra 
 //variable guarde los ultimos numeros de la cadena para luego sumar las dos partes.

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
