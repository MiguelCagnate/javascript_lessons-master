const guests = [
  { nombre: "Cheyenne🙂", age: 23, value: true },
  { nombre: "Imani👋", age: 23, value: true },
  { nombre: "Chelo👅", age: 21, value: false },
  { nombre: "Aritz🤖", age: 25, value: true },
  { nombre: "Zendo🥵", age: 19, value: false },
  { nombre: "Ilias🌞", age: 27, value: true },
  { nombre: "Aioros👾", age: 22, value: true },
  { nombre: "Aitana🥊", age: 3, value: false },
  { nombre: "Ikaria🍤", age: 29, value: true },
  { nombre: "Kenya🍩", age: 27, value: true },
];

let allAgesall = guests.map(({ age }) => age);
console.log(allAgesall);
let sumAllAges = allAgesall.reduce((x, y) => x + y, 0);
console.log(sumAllAges);

let lamediaAges = (sumAllAges / allAgesall.length).toFixed();
console.log(lamediaAges);

let orderAges = allAgesall.sort((x, y) => x - y);

let masViejo = allAgesall.reduce((x, y) => y);
console.log(masViejo);
let theOlder = guests.find(({ age }) => age === masViejo);
console.log(theOlder.nombre);

let allTrue = guests.filter(({ value }) => value !== false);
console.log(allTrue);

let getAlltrue = allTrue.map(({nombre}) => nombre)
console.log(getAlltrue);

 function orderAges(a,b){
    return a - b; 
 }
 console.log(getAlltrue.sort());


let orderAllAges = allAgesall.sort()
console.log(orderAllAges);