document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(document.querySelector('#usuario').value)
    console.log(document.querySelector('#pwd').value)
    console.log(document.querySelector('#cantidad').value)
    console.log(document.querySelector('#genero').value)
})