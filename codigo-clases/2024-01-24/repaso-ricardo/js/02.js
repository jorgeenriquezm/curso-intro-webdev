let nombres = ["Jorge", "Pablo", "Kike"]
function uno(miArray, idx){
    document.write(`<p>${miArray[idx]}</p>`)
}
uno(nombres,0)
uno(nombres,2)

let alumnos = [234234234,234234234,23423423,4234,6,3464,564,57,45,746,756,78,58,678,67,867,86,78,678,67,867,86,78,678,678,99999999,88888888888]
function dos(miArray){
    document.write(`<p>${miArray[miArray.length-1]}</p>`)
    //document.write('<p>'+miArray[miArray.length-1]+'</p>')
}
dos(alumnos)

function tres(miArray){
    return miArray.length>5
}
console.log(tres(alumnos))
console.log(tres(nombres))

function cuatro(arr, idx){
    console.log(arr)
    arr.splice(idx, 1)
    console.log(arr)
}
cuatro(nombres, 0)

console.log('##############################')
function cinco(n1, n2){
    for(var i=n1; i<=n2;i++){
        document.write(`<p>${i}</p>`)
    }
}
cinco(10, 100)