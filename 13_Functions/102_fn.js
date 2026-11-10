//Type 1 - No param / argument, No return -> final return undefined

//function Define
function greet(){
    console.log("Hello, The Testing Academy");
}

//function calling

greet();
greet(); //Hello, The Testing Academy

greet(); //Hello, The Testing Academy


function openBrowser(){
    return "Open Browser";
    //open the browser
}

openBrowser(); //Open Browser

let msg = greet();
console.log(msg); //undefined

let msg1 = openBrowser();
console.log(msg1); //undefined