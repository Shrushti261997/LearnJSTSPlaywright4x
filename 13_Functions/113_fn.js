//Immediately Invoked Function Expression (IIFE)
//They don't need to called

//function name1(){
 //console.log("hi")
//}
//name1();

(function (){
    console.log("Anonymous fn");
})();

(function (){
    console.log("Staging");
})();

(()=>{
    console.log("setup complete");
})();