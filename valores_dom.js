const calcularImc = () =>{
    let num1 = Number(document.querySelector('#num1').value)
    let num2 = Number(document.querySelector('#num2').value)
    let imc = (num1 * num1) /num2

    let resultado = document.querySelector('h3')
    resultado.innerHTML = `Seu IMC é: ${imc}`
}