# Exercice 2: Conversion of Durations :
## Objective :
The goal of this exercise is to write a JavaScript function that converts a duration given in seconds into an equivalent in days, hours, minutes, and seconds.
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
    <title>exercice2Tp3</title>
</head>
<body>
    <h1>Exercice 2 : Conversion de durées</h1>
    <script>
        function hjms(s){
            var j =parseInt (s / (24 * 3600));
        s = s % (24 * 3600);

        var h =parseInt (s / 3600);
        s = s % 3600;

        var m =parseInt (s / 60);

        var scr = parseInt(s % 60);
        return "cette durée équivaut à "+ j +" jours" +h+" heures "+m+" minutes " +scr+" secondes"
        }
var sc=parseInt(prompt("Une durée en secondes :"));
var rj=hjms(sc);
alert(rj);
    </script>
</body>
</html>
```
 **Function hjms(s):**
 This function takes a duration s in seconds and converts it into days (j), hours (h), minutes (m), and seconds (scr).
 - Days Calculation: j is calculated by dividing the total seconds by the number of seconds in a day (24 * 3600).
 - Hours Calculation: The remaining seconds are divided by the number of seconds in an hour (3600).
 - Minutes Calculation: The remainder is divided by 60 to get the minutes.
 - seconds Calculation: The remaining seconds are stored in scr.<br>
**Return Statement:** The function returns a formatted string with the calculated days, hours, minutes, and seconds.  
**Calling the Function and Displaying Result:** The hjms() function is called with the user's input, and the result is displayed in an alert box.
## Example Output:
``` text
Input: 235789  
Output: cette durée équivaut à 2 jours 17 heures 29 minutes 49 secondes   
```
