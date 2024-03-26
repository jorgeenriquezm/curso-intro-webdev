//Creamos dos cookies con js aunque estas deberían venir del server por ejemplo
document.cookie = "email=jorge@jorge.es";
document.cookie = "session=87e1c5bedf042ae23f4947286f224847c7d00548ce47e47d35a1eb968a5ecfe7";
//
//
//
//Cogemos todas las cookies con document.cookie
//y hacemos un split para tenerlas separadas
const cookies = document.cookie.split(';')
cookies.forEach(cookie=>{
    /*
    Como cada una es clave=valor,
    utilizamos ese = para hacer otro split
    y tener por separado ambos valores
    */
    const data = cookie.split('=')
    console.log(data)
})