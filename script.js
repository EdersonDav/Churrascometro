let getAdultos = document.querySelector('#adultos')
let getCriancas = document.querySelector('#criancas')
let getHoras = document.querySelector('#horas')

let calcular = document.querySelector('#btnCalcular')

let saida = document.querySelector('#saida')


calcular.addEventListener('click',()=>{

    let adultos = getAdultos.value
    let criancas = getCriancas.value
    let horas = getHoras.value

    let carne = horas >=6 ? 650 : 400
    let refrigerante = horas >=6 ? 1500 : 1000


    let carneTotal = adultos * carne + (criancas * carne/2)
    let refriTotal = adultos * refrigerante + (criancas * refrigerante/2)
    
    saida.innerHTML = `<p>${carneTotal/1000} Kg de Carne</p>
                       <p>${Math.round(refriTotal/2000)} Garrafas de Refrigerante</p>` 
})