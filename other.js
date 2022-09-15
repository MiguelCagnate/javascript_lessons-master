let guests = [{nombre: 'Cheyenne', age: 23, value: true},{nombre: 'Imani', age: 23, value: true},{nombre: 'Chelo', age: 21, value: false},{nombre: 'Aritz', age: 25, value: true},{nombre: 'Zendo', age: 19, value: false},{nombre: 'Ilias', age: 27, value: true},{nombre: 'Aioros', age: 22, value: true},{nombre: 'Aitana', age: 21, value: false},{nombre: 'Ikaria', age: 29, value: true},{nombre: 'Kenya', age: 27, value: true},]


let edades = guests.map(function(x){
 return x['age'];
});
console.log(edades);

function order(a,b){
    return a - b;
}
console.log(edades.sort(order));

let findNames =  guests.map(function(x) {
    return x['nombre'];
})
console.log(findNames);


let sumaEdades = edades.reduce((x,y) => x + y, 0)
console.log(sumaEdades);
 
let longitud = guests.length;
let media =  sumaEdades / longitud;
console.log(media);

let enOrder = findNames.sort(function (a,b) {
 if (a > b) {
    return 1
 }
 if(a < b){
    return -1 
 }   
 return 0
})
console.table(enOrder);

let onlyFalse = guests.filter(x => x.value !== true)
console.table(onlyFalse);

let averNombres = guests.map(function(n) {
    return n.nombre;
});
console.log(averNombres);
let sacarElUltimo =  averNombres.slice()
console.log(sacarElUltimo);