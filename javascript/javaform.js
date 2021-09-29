let losInputs = document.getElementsByClassName("inPut")
let respuestaCorrecta = "Guerrero"
let inputId = document.getElementById

let funcionCambioColor = (i) => {
  for(let i = 0; i < losInputs.length; i++) {
    if(losInputs[i].value == respuestaCorrecta) {
       losInputs[i].style.backgroundColor = "green";
    }else{
       losInputs[i].style.backgroundColor = "red";
    }
  }
}


for(let i = 0; i < losInputs.length; i++) {
   losInputs[i].addEventListener("click", funcionCambioColor)
    }


    