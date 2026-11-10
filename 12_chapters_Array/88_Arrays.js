let tests = ["login","checkout", "search"];

for(let i=0; i<tests.length; i++)
{
    console.log(i,tests[i]);
}

console.log("------------------");
for(let test of tests){
    console.log(test);
}

console.log("------------------");

console.log( " -------forEach Below -----------------");

tests.forEach((test,index) =>{
    console.log(`${index}: ${test}`);
});
console.log("------------------");

for(let [i,test] of tests.entries()){
    console.log(i, test);
}
console.log("--------fff----------");

let students =["Shrushti", "Pramod", "meethi","Varud"];

for(let student in students){
    console.log(student, "->" , students[student]);
}