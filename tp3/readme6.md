# Exercise 6 : Fibonacci sequence
## Objective :
The objective of this exercise is to implement two functions related to the Fibonacci sequence in JavaScript:
 - Fibo1: Calculates the nth term of the Fibonacci sequence.
 - Fibo2: Finds the first term in the Fibonacci sequence that is greater than a given value and returns both the term and its position in the sequence.
## Technologies Used :
 - HTML: For structuring the web page.
 - JavaScript: For implementing the Fibonacci sequence logic and handling user input/output.
## Explanation of Essential Parts :
```js
function Fibo1(n){
var u0=0;
var u1=1;
if(n==0){
    return 0;
}
if(n==1){
    return 1;
}
for(let i=2;i<=n;i++){
var s=+u0+u1;
u0=u1;
u1=s;

}
return s;
}

function Fibo2(val) {
    var u0 = 0;
    var u1 = 1;
    var n = 1; 
    while (u1 <= val) {
        var s = u0 + u1;
        u0 = u1;
        u1 = s;
        n++;
    }
    return "Le premier terme de la suite de Fibonacci supérieur à " + val +" est :"+u1+ " et le rang est  : " + n;
}
```
**Fibo1 Function**
 Calculates the nth term of the Fibonacci sequence.
 - Initializes the first two terms of the sequence: u0 = 0 and u1 = 1.
 - If n is 0, returns 0.
 - If n is 1, returns 1.
 - For n >= 2, iteratively calculates the next terms in the sequence until the nth term is reached.
 - Returns the nth term.  
**Fibo2 Function**
Finds the first term in the Fibonacci sequence that is greater than a given value and returns both the term and its position.
 - Initializes the first two terms of the sequence: u0 = 0 and u1 = 1.
 - Iteratively calculates the next terms in the sequence until a term greater than the given value is found.
 - Returns the term and its position in the sequence.
## Example Output:
```text
Un entier positif : 5
Le 5-ième terme de la suite de Fibonacci est :5
Entrez un nombre pour trouver le premier terme de la suite de Fibonacci supérieur à ce nombre : 10
Le premier terme de la suite de Fibonacci supérieur à 10 est :13 et le rang est : 7
```
