//Creando una instancia de Date() creamos una fecha, si no le pasamos parámetros es el momento actual
const hoy = new Date()
document.write(`<p>${hoy}</p>`)

//Podemos pasar por parámetro una fecha específica
const bdNina = new Date('January 10, 2023 03:00:00')
document.write(`<p>${bdNina}</p>`)
//Un timestamp son los milisegundos que han pasado desde el 1 de enero de 1970
const timestampNina = bdNina.getTime()
document.write(`<p>Nacimiento Nina: ${timestampNina}</p>`)
//El timestamp actual podemos cogerlo con Date.now()
const ahora = Date.now()
document.write(`<p>Ahora: ${ahora}</p>`)

//Restando dos timestamps podemos saber el tiempo transcurrido entre dos fechas/momentos
const edadMS = ahora - timestampNina
//Y operando con ellos lo convertimos a la unidad que más nos convenga
const edadDias = edadMS/1000/60/60/24
document.write(`<p>Edad en días: ${edadDias}</p>`)
const edadAnios = edadDias/365
document.write(`<p>Edad en años: ${edadAnios}</p>`)