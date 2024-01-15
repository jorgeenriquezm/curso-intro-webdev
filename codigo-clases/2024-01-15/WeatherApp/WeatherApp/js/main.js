const miData = [
    {
        "ciudad":"Donostia",
        "temperatura":14,
        "estado":5,
        "termometro":2
    },
    {
        "ciudad":"Burgos",
        "temperatura":-5,
        "estado":8,
        "termometro":1
    },
    {
        "ciudad":"Miami",
        "temperatura":35,
        "estado":1,
        "termometro":3
    },
]
let miSelect = document.querySelector('select')
miSelect.addEventListener('change', ()=>{
    console.log(miSelect.value)
    miData.forEach(ciudad=>{
        if(ciudad.ciudad.toLocaleLowerCase()==miSelect.value){
            console.log(ciudad)
            document.querySelector('#estado img').src=`./img/iconos/${ciudad.estado}.png`
        }
    })
})
