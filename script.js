
/* programma che stampi numeri da 1 a 100 */
for(let i = 1; i <= 100; i++){
    
    
    /* per multipli sia di 3 che di 5 stampi "FizzBuzz" al posto del numero*/
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");

    /* per multipli di 3 stampi "Fizz" al posto del numero*/
    }else if(i % 3 === 0){
        console.log("Fizz");

    /* per multipli di 5 stampi "Buzz" al posto del numero*/
    }else if(i % 5 === 0){
        console.log("Buzz");

    }else{
        console.log(i);
        
    }
        
        
}




