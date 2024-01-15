let numeros = [1,2,3,4,5,6,7,8,9,10]
let miSelect = document.querySelector('select')

miSelect.addEventListener('change', ()=>{
    numeros.forEach(numero=>{console.log(numero)})
})