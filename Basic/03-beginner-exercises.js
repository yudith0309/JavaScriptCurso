/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Escribe un comentario en una línea

// R/ Esto es un comentario de una linea 

// 2. Escribe un comentario en varias líneas

/*R/Esto es un comentario de varias lineas */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let name = "Yudith"
let firsName = 'Recio'
let lastName = `Milanes`
let number = 2
let decimal = 2.0
let isTrue = true
let isFalse = false
let undefineVaues
let nullValues = null
let symbols = Symbol("number")
let numberBig = 7675754775455484584684658465646n;

// 4. Imprime por consola el valor de todas las variables

console.log(name)
console.log(firsName)
console.log(lastName)
console.log(number)
console.log(decimal)
console.log(isTrue)
console.log(isFalse)
console.log(undefineVaues)
console.log(nullValues)
console.log(symbols)
console.log(numberBig);


// 5. Imprime por consola el tipo de todas las variables
console.log(typeof name)
console.log(typeof firsName)
console.log(typeof lastName)
console.log(typeof number)
console.log(typeof decimal)
console.log(typeof isTrue)
console.log(typeof isFalse)
console.log(typeof undefineVaues)
console.log(typeof nullValues)
console.log(typeof symbols)
console.log(typeof numberBig)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
name = "Dani"
firsName = "Rodriguez"
lastName = "Fernandez"
number = 8
decimal = 7.0
isTrue = true
isFalse = false
undefineVaues
nullValues = null

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
name = 2
firsName = 9
lastName = 90
number = "Yunior"
decimal = 'Pepe'
isTrue = false
isFalse = true
undefineVaues = 3
nullValues = "Pedro"
numberBig = 'Lolo'

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const names = "Yudith"
const firsNames = 'Recio'
const lastNames = `Milanes`
const numbers = 2
const decimals = 2.7
const isTrues = true
const isFalses = false
const undefineVauess = 9 // Da error si no se declara
const nullValuess = null
const symbolss = Symbol("number")
const numberBigs = 7675754775455484584684658465646n;

// 9. A continuación, modifica los valores de las constantes
names = "Berta"
firsNames = 'Roberto'
lastNames = `Cordero`
numbers = 5
decimals = 5.0
isTrues = false
isFalses = true
undefineVauess = "undefined"
nullValuess = 5
symbolss = Symbol(8)
numberBigs = "Prueba";

console.log(names)
console.log(firsNames)
console.log(lastNames)
console.log(numbers)
console.log(decimals)
console.log(undefineVauess)
console.log(nullValues)
console.log(symbols)
console.log(numberBigs)

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarser
// const undefineVauess = 9 // Da error si no se declara