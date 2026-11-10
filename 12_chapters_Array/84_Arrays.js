let arr =[1,2,3];
console.log(arr); //[ 1, 2, 3 ]

//Add to End
arr.push(5);
console.log(arr); //[ 1, 2, 3, 5 ]

//Remove from End
arr.pop();
console.log(arr);  //[ 1, 2, 3 ]


arr.push(5,6);
console.log(arr); //[ 1, 2, 3, 5, 6 ]


//add at beginning
arr.unshift(0);
console.log(arr); //[ 0, 1, 2, 3, 5, 6 ]

//Remove from beginning
arr.shift(0);
console.log(arr); //[ 1, 2, 3, 5, 6 ]

//splice() is used to remove, add, or replace elements in an array. It changes the original array.

//arr.splice(startIndex, deleteCount);
arr.splice(2,1);
console.log(arr); //[ 1, 2, 5, 6 ]

//splice(start, deleteCount, newItems...)

arr.splice(1,2,10,20);
console.log(arr); //[ 1, 10, 20, 6 ]

