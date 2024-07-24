/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Concatena dos cadenas de texto

let cadena = "Hola"
let cadenaConcatena = "Yudith" + cadena

// 2. Muestra la longitud de una cadena de texto

console.log(cadenaConcatena.length)

// 3. Muestra el primer y último carácter de un string
console.log(cadena[0])
console.log(cadena[3])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(cadena.toLocaleUpperCase())
console.log(cadena.toLocaleLowerCase())
// 5. Crea una cadena de texto en varias líneas
let variasLineas = `Hola Yudith
Bienvenida al curso 
de Java Script`
console.log(variasLineas)
// 6. Interpola el valor de una variable en un string
let interpolacion = "Josefa"

console.log(`Bienvenido el nuevo miembro del curso ${interpolacion}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let espaciosBlancos = "Bienvenido el nuevo miembro del curso"

console.log(espaciosBlancos.split(" ").join("_"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(variasLineas.includes("curso"))

// 9. Comprueba si dos strings son iguales
console.log(interpolacion === "Josefa")

console.log(interpolacion.localeCompare("Josefa"))

// 10. Comprueba si dos strings tienen la misma longitud
console.log(interpolacion.length == variasLineas.length)