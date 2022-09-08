// Модуль 5
// Задание 8
let myMap = new Map();
myMap.set('dog', 'Samoyed')
myMap.set(2, 'couple')
myMap.set(true, 'boolean')
myMap.set('овчарка', 'немецкая')

let x = myMap.keys;
let y = myMap.values;

for (let [x, y] of myMap){
  console.log(x + ' - ' + y)
}

//ИЛИ
/*let myMap = new Map();
myMap.set('dog', 'Samoyed')
myMap.set(2, 'couple')
myMap.set(true, 'boolean')
myMap.set('овчарка', 'немецкая')

console.log(myMap.entries())*/