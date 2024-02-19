let elBody = document.querySelector('body')
let darkMode = true
document.querySelector('.slider').addEventListener('click', (e)=>{
    e.stopPropagation()
    if(darkMode){
        elBody.style.backgroundColor='rgb(200, 200, 200)'
    }else{
        elBody.style.backgroundColor='rgb(35, 35, 35)'
    }
    darkMode=!darkMode
})