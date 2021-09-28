let losInputs = document.getElementsByClassName("inPut")
let respuestaCorrecta = "1974"
let inputId = document.getElementById

let funcionCambioColor = () => {
  for(let i = 0; i < losInputs.length; i++) {
    if(losInputs[i].value == respuestaCorrecta) {
      losInputs[i].style.backgroundColor = "green";
    }else{
      losInputs[i].style.backgroundColor = "red";
    }
  }
}

let eventoStart = () =>{
    for(let i = 0; i < losInputs.length; i++) {
        losInputs[i].addEventListener("click", funcionCambioColor())
    }
}

eventoStart();