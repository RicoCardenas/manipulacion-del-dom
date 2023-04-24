const h1 = document.querySelector('h1');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const button = document.getElementById('btnCalcular');
const parrafo = document.getElementById('resultado')
const form  = document.getElementById('form')

form.addEventListener('submit', sumarImputValues);

function sumarImputValues(event){
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    parrafo.innerText = "Resultado: " + sumaInputs;
}




