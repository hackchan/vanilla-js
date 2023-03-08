/**En Javascript hay 6 tipos de datos primivos
 * string, 
 * number, 
 * bigint, 
 * boolean, 
 * undefined 
 * symbol
 */

const personas = [
  { name: 'fabio', edad: 42 },
  { name: 'neyla', edad: 36 },
  { name: 'daniel', edad: 12 },
  { name: 'david', edad: 8 }
]
const numeros =[1,2,3,4,5]

console.log('*** tipo de datos primitivos ***')

const cloneNum = numeros.map(numero => numero*2)
console.log('Array Original', numeros)
console.log('Array Resultante', cloneNum)

/**Cuando manejamos objetos debemos de aseguranos de no mutar el objeto original */
const clone = personas.map((persona) => {
    return {...persona, estatura: 175}
})
console.log('Array Original', personas)
console.log('Array Resultante', clone)