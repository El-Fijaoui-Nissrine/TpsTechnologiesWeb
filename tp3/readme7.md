# exercise 7 :Approximate value of the square root of a positive real number
## Objective :
The objective of this exercise is to implement a JavaScript function that calculates an approximate value of the square root of a positive real number using an iterative method. The function uses the Newton-Raphson method to converge to the square root of the given number.
## Technologies Used :
 - HTML: For structuring the web page.
 - JavaScript: For implementing the square root approximation logic and handling user input/output.
## Explanation of Essential Parts :
```js
 function Raca1(A) {
            var x = A / 2;
            var e = 1e-5;
            while (Math.abs(x * x - A) > e) {
                x = 0.5 * (x + A / x);  
            }

            return x; 
        }
```
**Raca1 Function**  
Calculates an approximate value of the square root of a given positive real number.
 - Initializes x as A / 2 (a starting guess for the square root).
 - Defines a small tolerance value e = 1e-5 to determine when the approximation is close enough to the actual square root.
 - Uses a while loop to iteratively improve the approximation of the square root using the Newton-Raphson formula.
 - The loop continues until the difference between x^2 and A is less than the tolerance e.
 - Returns the approximate value of the square root.
## Example Output :
```text
Pour un nombre A entre 1 et 100: 25
Valeur approchée de la racine carrée = 5.000000000053722
```
