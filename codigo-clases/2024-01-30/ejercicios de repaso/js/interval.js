let frase1 = document.querySelector('#frase1')
let frasesRandom = ['En abril, aguas mil', 'No hay dos sin tres', 'A la tercera va la vencida', 'En casa de herrero, cuchillo de palo']

let intervalo1 = setInterval(()=>{
    let aleatorio = Math.floor(Math.random()*frasesRandom.length)
    frase1.innerHTML=frasesRandom[aleatorio]
}, 5000)


let intervalo2 = setInterval(()=>{
    let aleatorio = Math.floor(Math.random()*frasesRandom.length)
    frase2.innerHTML+=`<p>${frasesRandom[aleatorio]}</p>`
}, 500)

let frase3 = document.querySelector('#frase3')
for(i=1;i<=5;i++){
    let aleatorio = Math.floor(Math.random()*frasesRandom.length)
    frase3.innerHTML+=`<p>${frasesRandom[aleatorio]}</p>` 
}
let intervalo3 = setInterval(()=>{
    if(document.querySelector('#frase3 p')==null){
        clearInterval(intervalo3)
    }else{
        document.querySelector('#frase3 p').remove()
    }   
}, 1000)