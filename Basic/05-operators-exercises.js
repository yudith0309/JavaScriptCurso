/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Crea una variable para cada operación aritmética
a = 2
b = 6
let adittion = a + b
let multipliction = a * b
let subtraction = a - b;
let divide = a / b
let module = a % b
let exponent = a ** b

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let adittionOperation = 4
adittionOperation += adittion
let multiplictiOperation = 2
multiplictiOperation *= multipliction
let subtractionOperation = 7
subtractionOperation -= subtraction
let divideOperation = 2
divideOperation /= divide
let moduleOperation = 9
moduleOperation %= module
let exponentOperation = 7
exponentOperation **= exponent
// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación
console.log(5 < 10)
console.log(7 > 2)
console.log(8 != 5)
console.log(74 == '74')
console.log(12 <= 24)
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(8 === '8')
console.log(18 >= 100)
console.log(30 != '30')
console.log(9 === 10)
console.log(30 === null)
// 5. Utiliza el operador lógico and
console.log(50 > 40 && 60 > 30)

// 6. Utiliza el operador lógico or
console.log(6 > 8 || 81 > 50)

// 7. Combina ambos operadores lógicos
console.log(50 > 40 && 60 > 30 || 81 > 50)

// 8. Añade alguna negación
console.log(!(50 > 40 && 60 > 30 || 81 > 50))

// 9. Utiliza el operador ternario
const weekend = "Friday"
weekend ? console.log("It's the weekend") : console.log("It's not the weekend")

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log(((2 * 2) && (10 / 5) || (9 - 6)) <= 10)




