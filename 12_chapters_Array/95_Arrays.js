let a = [1,2];
let b = [5,6];
let c = a.concat(b) 
    console.log(c); //[ 1, 2, 5, 6 ]


//spread(modern way)

let d = [...a,...b];
console.log(d); //[ 1, 2, 5, 6 ]
