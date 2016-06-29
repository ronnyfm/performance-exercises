/* document */

/**
 * Loop for the sake of the use of Profiling tools
 */
function loop(){
    "use strict";
    var i;
    
    for(i = 0; i < 40; i++){
        document.write("<p> Fibonacci (" + i + "): " + fibonacci(i));
    }
}

/**
 * Gets the fibonacci number for the specified integer
 * @param n
 */
function fibonacci(n){
    "use strict";
    if(Number.isSafeInteger(n) && n >= 0){
        
        if(n === 0){
            return 0;
        }else if(n === 1){
            return 1;
        }else{
            return fibonacci(n-1) + fibonacci(n - 2);
        }
        
    }
}

loop();