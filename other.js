// const guests = [{nombre: 'Cheyenne', age: 23, value: true},{nombre: 'Imani', age: 23, value: true},{nombre: 'Chelo', age: 21, value: false},{nombre: 'Aritz', age: 25, value: true},{nombre: 'Zendo', age: 19, value: false},{nombre: 'Ilias', age: 27, value: true},{nombre: 'Aioros', age: 22, value: true},{nombre: 'Aitana', age: 21, value: false},{nombre: 'Ikaria', age: 29, value: true},{nombre: 'Kenya', age: 27, value: true},]

// const edades = guests.map(function(x){
//  return x['age'];
// });
// console.log(edades);

// function order(a,b){
//     return a - b;
// }
// console.log(edades.sort(order));

// const findNames =  guests.map(function(x) {
//     return x['nombre'];
// })
// console.log(findNames);

// const sumaEdades = edades.reduce((x,y) => x + y, 0)
// console.log(sumaEdades);

// const longitud = guests.length;
// const media =  sumaEdades / longitud;
// console.log(media);

// const enOrder = findNames.sort(function (a,b) {
//  if (a > b) {
//     return 1
//  }
//  if(a < b){
//     return -1
//  }
//  return 0
// })
// console.table(enOrder);

// const onlyFalse = guests.filter(x => x.value !== true)
// console.table(onlyFalse);

// const averNombres = guests.map(function(n) {
//     return n.nombre;
// });
// console.log(averNombres);
// const sacarElUltimo =  averNombres.slice()
// console.log(sacarElUltimo);

const guests = [
  { nombre: "Cheyenne", age: 23, value: true },
  { nombre: "Imani", age: 23, value: true },
  { nombre: "Chelo", age: 21, value: false },
  { nombre: "Aritz", age: 25, value: true },
  { nombre: "Zendo", age: 19, value: false },
  { nombre: "Ilias", age: 27, value: true },
  { nombre: "Aioros", age: 22, value: true },
  { nombre: "Aitana", age: 21, value: false },
  { nombre: "Ikaria", age: 29, value: true },
  { nombre: "Kenya", age: 27, value: true },
];

// Get all Names only =>
const allNames = guests.map(({ nombre }) => nombre);
console.log(allNames);

//Order all Names =>
const orderNames = allNames.sort();
console.log(orderNames);

// Full Order of names =>
function fullOrder(a, b) {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
}
console.table(allNames.sort(fullOrder));

// Get all the Ages only
const allAges = guests.map(({ age }) => age);
console.log(allAges);

// Order all ages, ascendent order =>
function ruleToOrder(a, b) {
  return a - b;
}
const orderAll = console.log(allAges.sort(ruleToOrder));
const sumAll = allAges.reduce((x, y) => x + y, 0);
console.log(sumAll);

// Get the average ages
const getMedia = sumAll / guests.length;
console.log(getMedia);

// Print all false values  person => 

const allFalsePerson = guests.filter(x => x.value === false);
console.table(allFalsePerson);
 
// Print all true value person => 

const allTruePerson = guests.filter( x => x.value === true);
console.table(allTruePerson);

// Print the youngest one => 

const theOldest = allAges.pop(-1)
console.log(theOldest);

