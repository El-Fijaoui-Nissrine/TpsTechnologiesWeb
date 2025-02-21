# Exercise 5: Check if a Number is Prime
## Objective:
The goal of this exercise is to write a program that checks whether a given number is a prime number. A prime number is a positive integer greater than 1 that is divisible only by 1 and itself.
## Technologies Used:
 - HTML: The structure of the webpage.
 - JavaScript: The main logic for checking if a number is prime is written in JavaScript.
## Explanation of Essential Parts:
```js
function Premier(n){
if(n<=1){
    return n+" n'est pas un nombre premier"

}
for(let i=2;i<=parseInt(n**0.5)+1;i++){
    if(n%i==0){
         return n+" n'est pas un nombre premier, il est divisible par "+i;

    }
}
return n+"est un nombre premier";

}
```
 - The function Premier(n) takes an integer n as input and first checks if n is less than or equal to 1. If it is, the function immediately returns that the number is not prime.
 - It then loops through integers from 2 to the square root of n (rounded up to the next integer) to check if n is divisible by any of these numbers. If it finds any number that divides n evenly, it returns a message that the number is not prime and specifies the divisor.
 - If no divisor is found, the function concludes that the number is prime.  
 - The program prompts the user to input a positive integer using prompt().
 - After calculating whether the number is prime, it displays the result using alert().
