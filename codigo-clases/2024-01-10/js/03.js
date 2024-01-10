//Math.random() nos genera un número aleatorio entre 0 y 1 (nunca será 1)
console.log(Math.random())

//Nos genera un número entre 0 y 100 (nunca será 100)
console.log(Math.random()*100)
//Generar un número entre 0 y casi 100
console.log((Math.random()*99)+1)
//Generar un número entre 10 y casi 100
console.log((Math.random()*90)+10)

//.floor() redondea siempre hacia abajo
console.log(Math.floor(4.99)) //redondea a 4
//.ceil() redondea siempre hacia arriba
console.log(Math.ceil(4.1)) //redondea a 5
//.round() redondea al entero más cercano
console.log(Math.round(4.5)) //redondea a 5
console.log(Math.round(4.49)) //redondea a 4