/* Al ponerlo entre llaves, desestructuramos valores, básicamente
esto quiere decir que creamos una constante llamada "saluda"
y cogemos del require la que tiene el mismo nombre */
const { saluda } = require('./modules/frases')

/*Como hemos metido esa única función en una constante,
podemos llamarla directamente, no hace falta llamar al módulo completo */
saluda()