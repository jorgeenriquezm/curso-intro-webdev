//Función para determinar si estamos en un dispositivo móvil
//Simplemente la pegamos, la llamamos y nos va a devoler true (es móvil) o false
window.mobileCheck = function() { let check = false; (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera); return check; };
//Guardamos lo que devuelve la función en una constante para usar
const esMobile = window.mobileCheck()
if(esMobile){
    const contenedor = document.querySelector('#contenido')
    const cargando = document.querySelector('#cargando')
    const menuMobile = document.querySelector('#menu')
    //1-Hacemos desaparecer la splash screen a los 2s.
    const splash = document.querySelector('#splash')
    setTimeout(()=>{
        splash.style.display='none'
    }, 2000)
    //Guardamos el menú y el boton/icono que lo lanza    
    const btnMenuMobile = document.querySelector('#btnMenuMobile')
    btnMenuMobile.addEventListener('click', ()=>{
        menuMobile.style.display='grid'
        //contenido.innerHTML=''
        menuMobile.style.zIndex = 500
    })
    //Guardamos el botón/icono que cierra el menú
    const btnCerrarMenu = document.querySelector('#btnCerrarMenu')
    btnCerrarMenu.addEventListener('click', ()=>{
        menuMobile.style.display='none'
        btnMenuMobile.style.display='block'
    })
    function cargaPeliMobile(urlApi){
        cargando.style.display='grid'
        fetch(urlApi)
        .then(data=>data.json())
        .then(info=>{
            contenedor.innerHTML=''
            cargando.style.display='none'
            menuMobile.style.display='none'
            btnMenuMobile.style.display='block'
            console.log(info)
                const ficha = document.createElement('article')
                ficha.classList.add('ficha')
                const titulo = document.createElement('h2')
                titulo.innerHTML = info.title
                const director = document.createElement('span')
                director.innerHTML = `(${info.director})`
                titulo.appendChild(director)

                const imagen = document.createElement('img')
                imagen.src = `img/${info.episode_id}.png`
                ficha.appendChild(titulo) 
                ficha.appendChild(imagen)
                contenedor.appendChild(ficha)

        })
        .catch(error=>{new Error(error)})
    }
    function cargaPelisMobile(urlApi){
        cargando.style.display='grid'
        fetch(urlApi)
        .then(data=>data.json())
        .then(info=>{
            contenedor.innerHTML=''
            cargando.style.display='none'
            menuMobile.style.display='none'
            btnMenuMobile.style.display='block'
            const informacion = info.results
            informacion.forEach(elemento=>{
                const ficha = document.createElement('article')
                ficha.classList.add('ficha')

                const titulo = document.createElement('p')
                titulo.innerHTML = elemento.title

                const director = document.createElement('p')
                director.innerHTML = elemento.director

                const enlace = document.createElement('p')
                enlace.classList.add('masInfo')
                enlace.innerHTML = 'Más info'
                enlace.addEventListener('click', ()=>{
                    console.log(elemento.url)
                    cargaPeliMobile(elemento.url)
                })
                ficha.appendChild(titulo) 
                ficha.appendChild(director) 
                ficha.appendChild(enlace)              
                contenedor.appendChild(ficha)
                console.log(elemento)
            })
        })
        .catch(error=>{new Error(error)})
    }
    const btnMobilePeliculas = document.querySelector('#btn-mobile-peliculas')
    btnMobilePeliculas.addEventListener('click', ()=>{
        cargaPelisMobile('https://swapi.dev/api/films')
    })
}