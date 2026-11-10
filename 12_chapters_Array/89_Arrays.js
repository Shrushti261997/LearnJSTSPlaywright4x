let scores = [45,60,23,59,90];

let grades = scores.map(i => i>70? "pass" : "fail"); //[ 'fail', 'fail', 'fail', 'fail', 'pass' ]
console.log(grades);

//filter
let passing = scores.filter(s => s>=70);

console.log(passing);