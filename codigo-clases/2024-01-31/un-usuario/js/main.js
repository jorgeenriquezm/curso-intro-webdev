let contenedor = document.querySelector('#contenedor')

let usuario = {"results":[{"gender":"female","name":{"title":"Miss","first":"Wilma","last":"Marshall"},"location":{"street":{"number":5911,"name":"N Stelling Rd"},"city":"Darwin","state":"New South Wales","country":"Australia","postcode":6205,"coordinates":{"latitude":"-82.8293","longitude":"60.3124"},"timezone":{"offset":"-11:00","description":"Midway Island, Samoa"}},"email":"wilma.marshall@example.com","login":{"uuid":"f8009842-9875-42b8-b8c9-db871a950a09","username":"purpleswan722","password":"shou","salt":"FBuiQFTH","md5":"83682e98a5c9ffcc7213b5e16586200f","sha1":"546dec234764294e668446e7d6f81a067179c1d5","sha256":"79d8c7adc63e207a371cd0a86d5087fa0c5d2636a2d1626265c06686ded12594"},"dob":{"date":"1974-04-08T17:58:09.137Z","age":49},"registered":{"date":"2011-08-25T01:10:21.990Z","age":12},"phone":"06-6306-0665","cell":"0454-642-418","id":{"name":"TFN","value":"183901123"},"picture":{"large":"https://randomuser.me/api/portraits/women/11.jpg","medium":"https://randomuser.me/api/portraits/med/women/11.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/11.jpg"},"nat":"AU"}],"info":{"seed":"52f5229bcf4d1d87","results":1,"page":1,"version":"1.4"}}
console.log(usuario)

document.write(usuario.results[0].name.first)

let imagen = document.createElement('img')
imagen.src = usuario.results[0].picture.large
imagen.classList.add('imagen-usuario')
contenedor.appendChild(imagen)