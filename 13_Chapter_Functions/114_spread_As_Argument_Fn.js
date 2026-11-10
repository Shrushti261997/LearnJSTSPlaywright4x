function add(a,b,c){
return a+b+c;
}

let num =[1,2,6,4];
console.log(add(...num));

function hasError(...codes){
    return codes.some(c=>c>400);
}

let responsecodes =[200,201,404];
let responsecodes2 =[200,201,404,500];
hasError(...responsecodes);