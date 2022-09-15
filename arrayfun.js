let guests = [{nombre: 'Cheyenne', age: 23 },{nombre: 'Imani', age: 23},{nombre: 'Chelo', age: 21},{nombre: 'Aritz', age: 25},{nombre: 'Kyoto', age: 19},{nombre: 'Ilias', age: 27},{nombre: 'Aioros', age: 22},{nombre: 'Aitana', age: 21},{nombre: 'Ikaria', age: 29},{nombre: 'Kenya', age: 27},]

let getAge = guests.filter(({age})=> age > 24)
    


function compare(a,b){return a - b}

console.table(getAge.sort(compare));

