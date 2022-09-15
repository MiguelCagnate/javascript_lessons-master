const usersData = [];

function setUsers() {
  let user = document.getElementById("user").value;
  let password = document.getElementById("password").value;
  usersData.push({ user, password });
}
function testUsers() {
  let user = document.getElementById("user2").value;
  let password = document.getElementById("password2").value;
  const errors = [];

  usersData.forEach((x) => {
    if (x.user !== user) {
      return errors.push("The username is not correct!");
    }
    if (x.password !== password) {
      return errors.push("The password is not correct!");
    }
  });

  if (errors.length === 0) {
    return alert("Login correct!");
  }
  alert(errors.join("\n"));
}


// Callback function
const arr = ["a", "b", "b"];

function forEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

forEach(arr, (value, index) => {
  console.log(value, index);
});

// This
let user = 'Eliut'

const obj = {
  user: 'Roberth',
  getUser() {
      return this.user
  }
}

console.log(obj)
obj.getUser();



let guests = [{nombre: 'Cheyenne', age: 23, value: true},{nombre: 'Imani', age: 23, value: true},{nombre: 'Chelo', age: 21, value: false},{nombre: 'Aritz', age: 25, value: true},{nombre: 'Zendo', age: 19, value: false},{nombre: 'Ilias', age: 27, value: true},{nombre: 'Aioros', age: 22, value: true},{nombre: 'Aitana', age: 21, value: false},{nombre: 'Ikaria', age: 29, value: true},{nombre: 'Kenya', age: 27, value: true},]

let findFalse = guests.filter(x => x.value !== true)
console.log(findFalse);



let menores = guests.map(function(item) {return item['age'];});
let ordenMenores = menores.sort()


console.log(menores); 



let total = 0;
let sumaEdades = menores.reduce((x,y) => x + y,total)
console.log(sumaEdades);

let largo = menores.length
console.log(largo);

let lamedia = (sumaEdades / largo) 
console.log(lamedia);

function namesOrder(a,b){
  return a - b 
}

let ordeNombres = guests.sort(function(a,b){
if (a.nombre > b.nombre) {
  return 1
}                                                                                                                                                             
if (a.nombre < b.nombre) {
  return -1
}
return 0
});
console.table(ordeNombres);


let masGRandes = [];
let menosChicos = [];
function setDifference(){
let maxAge = guests.forEach(({nombre, age}) => {
  age >= 23 ? masGRandes.push(nombre, age) :  menosChicos.push(nombre, age);
})
console.log(`Mayores de 23 => ${masGRandes} \n'Menores de 23 => ${menosChicos}`);
return maxAge
}
console.log(`${masGRandes} \n ${menosChicos}`);

const numeros = [11,27,13,5,3,7,27,49,81];

function recorre(){  
  numeros.forEach(function(elnum) {
   console.log(elnum); 
  });
} 
 

