let losInputs = document.getElementsByClassName("inPut")
let respuestaCorrecta = "Guerrero"
let inputId = document.getElementById



let funcionCambioColor = (n) => {
    if(losInputs[n].value == respuestaCorrecta) {
      losInputs[n].style.backgroundColor = "green";
    }else{
      losInputs[n].style.backgroundColor = "red";
    }
  
}


let cogerN = () => {
    
}