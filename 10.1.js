const x=+prompt ("Введите число");
const typeX=typeof x;
console.log(x);
if (!isNaN(x) && x!=""){
    console.log(typeX);
    if (typeX!=="number"){
        console.log("Кажется вы ошиблись")}
    else if ((typeX==="number") && (x%2!==0)){
        console. log("нечетное число")}
    else if ((typeX==="number") && (x%2===0)){
        console. log("четное число")}
}
else{
    console. log("Кажется вы ошиблись")}