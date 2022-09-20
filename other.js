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

// Sum All the ages =>
const sumAll = allAges.reduce((x, y) => x + y, 0);
console.log(sumAll);

// Get the average ages =>
const getMedia = sumAll / guests.length;
console.log(getMedia);

// Print all false values person =>
const allFalsePerson = guests.filter((x) => x.value === false);
console.table(allFalsePerson);

// Print all true value person =>
const allTruePerson = guests.filter((x) => x.value === true);
console.table(allTruePerson);

// Print the youngest one =>
let theCero = [];
const theYounguest = allAges.find((x) => x > theCero);
console.log(theYounguest);

const min = allAges.reduce((a, b) => a);
console.log(min);

const mini = Math.min(...allAges);
console.log(min);

// Print the Oldest =>
const theOldest = allAges.find((x) => x > 1);
console.log(theOldest);

const theOlder = allAges.reduce((a, b) => b);
console.log(theOlder);

const theViejo = Math.max(...allAges);
console.log(theViejo);

// __________________________________ADVANCE____________________________________

// Get only the names in order at once =>
const nombres = guests.flatMap(({ nombre }) => nombre).sort();
console.table(nombres);

// Get only the ages in ascendent order at once =>
const edades = guests.flatMap(({ age }) => age).sort((a, b) => a - b);
console.table(edades);

const tuList = [
  "Papaya",
  "Mango",
  "Corozo",
  "Nispero",
  "Zapote",
  "Lapicero",
  "Mogolla",
];
const miList = [
  "Piña",
  "Mango",
  "Guanabana",
  "Lulo",
  "Mora",
  "Lapicero",
  "Mogolla",
];

// const iguales = miList.filter(x => x ===  tuList.indexOf[x]);
// console.log(iguales);

const iguales = [];
const distintos = [];

function findIguales() {
  for (let x = 0; x < tuList.length; x++) {
    if (miList.indexOf(tuList[x]) === -1) {
      distintos.push(tuList[x]);
    }
  }
  for (let x = 0; x < miList.length; x++) {
    if (tuList.indexOf(miList[x]) === -1) {
      distintos.push(miList[x]);
    }
  }
  for (let x = 0; x < tuList.length; x++) {
    if (miList.indexOf(tuList[x]) !== -1) {
      iguales.push(tuList[x]);
    }
  }
  return `${iguales} //\n ${distintos}`
}

console.table(findIguales(tuList, miList)); 
let sameP = [];
let othersP = [];

let getTheSames = tuList.filter(x => miList.includes(x));othersP.push(getTheSames) 
console.table(getTheSames);
let getTheOthers = tuList.filter(x => !miList.includes(x));sameP.push(getTheOthers);  
console.table(getTheOthers);



