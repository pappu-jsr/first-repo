/////  immediately invoked function expression (iife)

(function chai(){
    console.log("DB CONNECTED");
    
})();

((name) =>  {
    console.log(`DB CONNECTED TO ${name}`);
    
    
}) ("ranjna")