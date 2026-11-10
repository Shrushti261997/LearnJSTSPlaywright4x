//map and filters

//every vs some

//ever - All must pass
console.log([80,90,85].every (i=> i>=70)); //true
console.log([80,60,85].every (i=> i>=70)); //false


//some - At least one must pass

console.log([80,60,40].some(s => s<22)); //false
console.log([50,30,56].some (s=> s<40)); //true

