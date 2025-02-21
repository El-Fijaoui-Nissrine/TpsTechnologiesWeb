# Exercice 1: Conversion of Temperatures 
## Objective :
The objective of this exercise is to create a JavaScript function that converts temperatures from Fahrenheit to Celsius using the following formula: `tempC= 5/9×(tempF−32)`  The program prompts the user for a temperature in Fahrenheit and displays the equivalent in Celsius, rounded to one decimal place.
## Technologies Used :
 - HTML5: For basic structure and layout.
 - JavaScript: For the conversion logic and user interaction.
 ## Explanation of Essential Parts :
 ```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>exercice1Tp3</title>
</head>
<body>
    <h1>eConversion de températures</h1>
    <script>
        function degreC(t){
            return (5/9) * (t - 32);
        }
var temp=parseFloat(prompt("Une température en Fahrenheit :"));
var x=degreC(temp);
alert("cette température équivaut a "+x.toFixed(1)+" degrés Celsius");
    </script>
</body>
</html>
```
 **Function degreC(t):**
This function takes a temperature t in Fahrenheit as input and converts it to Celsius using the formula .
**Input Prompt:**
The user is prompted to enter a temperature in Fahrenheit. parseFloat() is used to convert the input string into a floating-point number.
**Output Display:**
The result is displayed in an alert box, rounded to one decimal place using toFixed(1).
## Example Output:
``` bash
Input: 60.0  
Output: cette température équivaut à 15.6 degrés Celsius  
```
