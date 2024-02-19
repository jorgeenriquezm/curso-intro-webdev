const contenedor = document.querySelector('main')


fetch('https://swapi.dev/api/planets/')
.then(data=>data.json())
.then(convertida=>{
        console.log(convertida.results)
        convertida.results.forEach(planeta => {
            console.log(planeta)
            let pl = document.createElement('div')
            pl.classList.add('planeta')

            let nombre = document.createElement('p')
            nombre.innerHTML = planeta.name
            pl.appendChild(nombre)

            let boton = document.createElement('div')
            boton.innerHTML="RESIDENTS"
            boton.addEventListener('click', ()=>{
                let planetaIdx = planeta.url
                console.log(planetaIdx)
                planetaIdx=planetaIdx.replace('https://swapi.dev/api/planets/','')
                console.log(planetaIdx)
                planetaIdx=planetaIdx.replace('/','')
                console.log(planetaIdx)                
                console.log('Has pedido los residentes del planeta '+planetaIdx)
            })
            pl.appendChild(boton)

            /* planeta.residents.forEach(tipo=>{
                console.log(tipo)
                let tp = document.createElement('div')
                tp.innerHTML=tipo
                rs.appendChild(tp) 
            }) */
        contenedor.appendChild(pl)
    })
})
.catch(error => new Error(error))