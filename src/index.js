import validator from './validator.js';  

//funcion para que me guarde el valor digitado por el usuario en el input dentro de la variable creditCardNumber
let boton = document.getElementById("enviar");
boton.addEventListener("click", enviarFormulario);

function enviarFormulario() {
    let creditCardNumber = document.getElementById("cardNumber").value;
    
    //AQUI VALIDO DE ACUERDO AL RESULTADO DE ISVALID SI ES VERDADERO O FALSO PARA INDICAR SI ES VALIDA O NO LA TARJETA DE CREDITO EN UN PARRAFO VERDE O ROJO
    let confirmValidator = document.getElementById("result");
    let resultValidator = validator.isValid(creditCardNumber);
    //confirmValidator.innerText = resultValidator;
    if(creditCardNumber !== undefined || creditCardNumber !== "") {

        document.getElementById("cardNumber").value =  validator.maskify(creditCardNumber)

        if (resultValidator === true) {
            confirmValidator.style.color = "green";
            confirmValidator.innerText   = "Tu tarjeta es válida"
        }else {
            confirmValidator.style.color = "red";    
            confirmValidator.innerText = "Tu tarjeta es inválida"
        }
    }
}

//DECLARE DOS VARIABLES UNA PARA CCV Y OTRA PARA EL NUMERO DE LA TARJETA Y QUE AL PRESIONAR LAS TECLAS DE NUMERO EVALUA LA FUNCION LIMITSIZE CON EL PARAMETRO DE LONGITUD MAXIMO ASIGNADO A CADA UNO (CCV=>3 CARACTERES) (CARDNUMBER=>16 CARACTERES)

let ccv = document.getElementById("securityCode");
ccv.addEventListener("keypress", (e) => limitSize(e, 2));

let cardNumber = document.getElementById("cardNumber");
cardNumber.addEventListener("keypress", (e) => limitSize(e, 15));

function limitSize(event, maxLength) {
    console.log(event.target.value);
    if(event.target.value.length > maxLength) {
        event.preventDefault();
    }
}

//Que al ingresar texto valida por medio de codigo ascii si son solo numeros de lo contrario no escribe los demas caracteres. 
cardNumber.addEventListener("keypress", onlyNumberKey);

function onlyNumberKey(evt) {
          
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
        evt.preventDefault();
    }
}