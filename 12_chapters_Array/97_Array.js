let original =[1,2,3];
let copy1 = [...original];
console.log(original); //[ 1, 2, 3 ]

console.log(copy1); //[ 1, 2, 3 ]

let copy2 = original.slice();
copy2.push(95);
copy2.push(96);
console.log(original); //[ 1, 2, 3 ]
console.log(copy1); //[ 1, 2, 3 ]
console.log(copy2); //[ 1, 2, 3, 95, 96 ]


//Deep copy
let deep_copy_array = original;

deep_copy_array.push(44);
console.log(original); //[ 1, 2, 3, 44 ]
console.log(deep_copy_array); //[ 1, 2, 3, 44 ]


