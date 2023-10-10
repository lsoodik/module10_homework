const arr = [1,1,1,1];
var x = true;
for (var i = 0; i < arr.length; i++){
  for (var j = i + 1; j < arr.length; j++){
        if (arr[i] !== arr[j]){
           x=false;
        }
   }
}
if (x){
  console.log("true");
}
else{
  console.log("false");
}