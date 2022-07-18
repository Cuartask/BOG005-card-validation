
// //funcion para capturar los datos del HTML y resaltar los campos vacios para que el usuario los rellene
// let datos = function (numero, nombre, cvv){
//     console.log ("hola");

//     let numero = document.getElementById("numero").value;
//     let nombre = document.getElementById("nombre").value;
//     let cvv = document.getElementById("cvv").value;
    
//     console.log(numero);

// document.querySelector("#enviar").addEventListener("click", datos());



/*let card = creditCard(
    document.getElementById("numero").value,
    document.getElementById("numero").value,
    document.getElementById("numero").value
    document.getElementById("numero").value
);*/
//validar campos vacios del formulario
//let numero = document.getElementById("numero").value;
//let nombre = document.getElementById("nombre").value;
//let cvv = document.getElementById("cvv").value;

/*function enviar_formulario(){
    return false;

    if (documento.formulario.numero.value === "") {
        alert("Por favor ingrese el numero de su tarjeta de crédito");
    } 
    if (documento.formulario.nombre.value === "") {
    alert("Por favor ingrese su nombre");
    }
    if (documento.formulario.cvv.value === "") {
    alert("Por favor ingrese su digito de verificación");
}
}*/

// NUEVO INTENTO 

//Object de la tarjeta de credit
function creditCard(cardName, numberCard, dateExpire, securityCode){
    return{
        numberCard,
        cardName,
        dateExpire,
        securityCode
    };
}


//funcion que valida los campos ingresados en el HTML y asigna por parametro los valores al Object creditCard
//Esta funcion se llama desde el boton enviar en el HTML
function validateCreditCard(){
    // Creo el objeto card para usarlo en los if
    let card = creditCard(
      document.getElementById("cardNumber").value,
      document.getElementById("cardName").value,
      document.getElementById("dateExpire").value,
      document.getElementById("securityCode").value,)

      //Este primer if valida el primer campo (Numero de tarjeta) si no esta null o vacio y si realmente ingreso numeros y no texto
      //tambien valida que sea de 16 digitos
      if(card.numberCard != null && card.numberCard != undefined && /\d/.test(card.numberCard) && card.numberCard.length == 16){

        //Este segundo if valida que no este null o vacio el campo y que realmente sea texto, tambien valida la longitud del texto de 30 caracteres
        if(card.cardName !=null && card.cardName !=undefined && !/\d/.test(card.cardName) && card.cardName.length <= 30){

            //Este tercer if valida la fecha de expiracion de la tarjeta (lo hice solo con numeros) tambien valida que no sea null o vacia
          if(card.dateExpire != null && card.dateExpire != undefined && /\d/.test(card.dateExpire) &&  card.dateExpire.length == 4){

            //Este if hace lo mismo del anterior pero como el codigo de seguridad es 3 digitos entonces compara que sea 3 digitos
            if(card.securityCode != null && card.securityCode != undefined && /\d/.test(card.dateExpire) && card.securityCode.length == 3){
              alert("creditCard is valid")
            }
          }
        }
      }
      else{

        alert("creditCard number is not valid")
      }
}
document.querySelector("#enviar").addEventListener("click", validateCreditCard());




//validar que me tome como numero el input del numero de la tarjeta de credito
// function validarNumero(valor){
//     number = parseInt(number)
//     if (isNaN(number)) {
//         return ""
//       }else{
//         return number
//       }
// }
