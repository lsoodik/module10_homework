const arr = [0,1,6,8,10,32,37,39,46];
var k= 0;
var odd = 0;
var even = 0;
for (var i = 0; i < arr.length; i++){
  if (arr[i]===0){
    k++;
  }
  else if(arr[i] % 2 === 0){
    odd++;
  }
  else if(arr[i] % 2 !== 0){
    even++;
  }
  
}
console.log(`количество нулей: ${k}\n количество четных чисел: ${odd}\n количество нечетных чисел: ${even}`);