//fizzBuzz function definition that takes a number as a parameter
function fizzBuzz(limit) {
    //for loop that starts from 1 to the limit parameter
    for (let i = 1; i <= limit; i++) {
  
  	    //initializing two variables to check if i is divisible by 3 or 5
        let checkForThree = i % 3;
        let checkForFive = i % 5;
    
        //if i is divisible by both 3 and 5, then print FizzBuzz
        if((checkForThree == 0) && (checkForFive == 0))
    	    console.log("FizzBuzz");
    
        //if i is divisible by 3, then print Fizz
        else if(checkForThree == 0)
    	    console.log("Fizz");
        
        //if i is divisible by 5, then print Buzz
        else if(checkForFive == 0)
    	    console.log("Buzz");
    
        //otherwise print i
        else
    	    console.log(i);
  	}
}

//invoke fizzBuzz function that takes an integer parameter
fizzBuzz(50);

/* My reasoning with this problem starts with the conditional and using the for-loop.
This is an iterating problem where the function takes in the upper limit.
When the program runs, the function is invoked with its argument, and iteration 
starts with if statements being used to test for divisbility.*/