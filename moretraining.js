const cars = [
  { brand: "Audi", color: "Azul", cc: 2300, value:true },
  { brand: "Volvo", color: "Verde", cc: 2100, value:false  },
  { brand: "Audi", color: "Azul", cc: 2300, value:true  },
  { brand: "Aston Martin", color: "Gris", cc: 4500, value:false  },
  { brand: "BMW", color: "Azul", cc: 4300, value:true  },
  { brand: "Mazda", color: "Azul", cc: 2000, value:false  },
];

let cilindradaCars = cars.flatMap(({cc}) => cc);
console.log(cilindradaCars);
let laSumaCc =  cilindradaCars.reduce((x,y) => x  + y,0);
console.log(laSumaCc);
let laMediaCc = (laSumaCc / cars.length);
console.log(laMediaCc.toFixed());

let allNames = cars.map(({brand}) => brand);
console.table(allNames);

let orderAlphabeticBrands = allNames.sort();
console.log(orderAlphabeticBrands);

let orderCc = cilindradaCars.sort((a,b) => a - b);
console.log(orderCc);

// Max n Min CC
//let printMaxCc = orderCc.pop(); console.log(printMaxCc);
let printMinCc = cilindradaCars.find((x) => x > 1); console.log(printMinCc);
// Other Ways of Max n Min CC

let getTheMaxCc = orderCc.reduce((x,y) => y); console.log(getTheMaxCc);
let getMacc = Math.max(...orderCc); console.log(getMacc);

// Other ways to get Min CC =>
let otherMincc = cilindradaCars.shift();console.log(otherMincc);

// Get all False & True =>
let getAllFalse = cars.filter(({value}) => value !== true); console.log(getAllFalse);
let getAllTrue =  cars.filter(({value}) => value !== false); console.log(getAllTrue);

// Get only false =>
let allFalse = cars.filter((x) => x.value === false); console.log(allFalse);

