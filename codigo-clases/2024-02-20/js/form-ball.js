const bolitas = document.querySelectorAll('.choice-circle')

function reseteaBolitas(){
    bolitas.forEach(bolita=>{
        bolita.setAttribute('checked', 'false')
    })
}
bolitas.forEach(bolita=>{
    //onclick es otra forma de hacer addEventListener('click')
    bolita.onclick=(e)=>{
        reseteaBolitas()
        bolita.setAttribute('checked', 'true')
    }
})