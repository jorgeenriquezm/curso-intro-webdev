let libros = []
let libro = {sku:1111}
libros.push(libro)
libro = {sku:2222}
libros.push(libro)
libro = {sku:3333}
libros.push(libro)
libro = {sku:4444}
libros.push(libro)
console.log(libros)
const buscado = 6666

let encontrado=false

for(var i=0;i<libros.length;i++){
    if(libros[i].sku==buscado){
        encontrado=true
        console.log("Hemos encontrado el libro en la posicion "+i)
    }
}

if(encontrado){
    console.log("Ese libro existe")
}else{
    console.log("Ese libro no está en nuestro inventario")
}