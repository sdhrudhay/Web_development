function sumTwo(){
    try{
        let a = prompt("Enter first number");
        let b = prompt("Enter second number");
        if(isNaN(a) || isNaN(b)){
            throw TypeError("Only integers are allowed");
        }
        let sum = parseInt(a) + parseInt(b);
        console.log("The sum is", sum);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("Reload the page to try again!");
    }

}
sumTwo();