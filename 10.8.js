let berries = new Map;
berries.set("strawberry", "red");
berries.set("blueberry", "blue");
berries.set("cranberry", "dark-red");
berries.set("cherry", "dark-purple");

for(let berry of berries.keys()){
console.log(`${berry} is ${berries.get(berry)} color`)
}