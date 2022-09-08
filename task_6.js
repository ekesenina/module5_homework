// Модуль 5
// Задание 6
let arr = [800, 800, 800, 800, 800];
let x = true;

for(let i = 1; i < arr.length; i = i + 1){
  if (arr[0] != arr[i]){
    x = false; break
  }
}
console.log(x)