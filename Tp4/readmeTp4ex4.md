# Advanced Calculator
## Objective :
The objective of this exercise is to develop an advanced scientific calculator using JavaScript. The calculator performs complex mathematical operations, including trigonometric, logarithmic, factorial, exponential calculations, and more.
## Technologies Used
- HTML.
- CSS.
- JavaScript.
## Explanation of Essential Code
```js
 <script>
   var text1 = document.getElementById('clv');

        function appendToclv(value) {
            text1.value += value;
        }

        function clearclv() {
            text1.value = '';
        }

        function calculate() {
            try {
                var calcule = text1.value;
                calcule = calcule.replace(/sin\(/g, 'Math.sin(');
                calcule = calcule.replace(/cos\(/g, 'Math.cos(');
                calcule = calcule.replace(/tan\(/g, 'Math.tan(');
                calcule = calcule.replace(/log\(/g, 'Math.log10(');  
                calcule = calcule.replace(/ln\(/g, 'Math.log(');
                calcule = calcule.replace(/\be\b/g, 'Math.E'); 
                calcule = calcule.replace(/x²/g, '**2');             
                calcule = calcule.replace(/\^/g, '**');              
                calcule = calcule.replace(/√\(/g, 'Math.sqrt(');
                calcule = calcule.replace(/%/g, '/100');
        
                calcule = calcule.replace(/(\d+)!/g, function(match, number) {
                    let fact = 1;
                    for (let i = 1; i <= parseInt(number); i++) {
                        fact *= i;
                    }
                    return fact;
                });
                calcule = calcule.replace(/(\d+)EXP(\d+)/g, function(match, base, exp) {
                    return base + "*Math.pow(10," + exp + ")";
                });
                var result = eval(calcule);
                text1.value = result;
            } catch (error) {
                text1.value = 'Erreur';
            }
        }
        function invert() {
            var inv = text1.value;
            if (!isNaN(inv) && inv !== '') {
                text1.value = 1 / parseFloat(inv);
            } else {
                text1.value = 'Erreur';
            }
        }
 </script>
```
- appendToclv(value):
   - This function appends the clicked button's value to the display (clv).
   - It allows the user to build complex mathematical expressions.
- clearclv():
   - This function clears the display, resetting the calculator.
- calculate():
  - This function evaluates the mathematical expression entered by the user.
  - It uses the eval() function but first performs several replacements to incorporate advanced math functionalities for exemple  :
      - sin(, cos(, tan(: Replaced with corresponding JavaScript Math functions (Math.sin, Math.cos, Math.tan).
      - log(: Replaced with Math.log10( for base-10 logarithms.
      - ln(: Replaced with Math.log( for natural logarithms.
   - Factorial (n!):
     - Recognizes patterns like 5!, calculates the factorial using a loop, and replaces it with the calculated value.
 - try...catch is used to handle any calculation errors gracefully by displaying "Erreur" if an invalid expression is entered. 


## Example Run
![Advanced Calculator](./AD.png)
