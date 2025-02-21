# Exercice 2-bis: Enhanced Conversion of Durations 
## Objective : 
This exercise improves the previous duration conversion program by:
 - Omitting zero values ( no display of "0 jours" if days are zero).
 - Displaying singular units when the value is 1 ("1 jour" instead of "1 jours").
## Technologies Used :
 - HTML5: For basic structure and layout.
 - JavaScript: For the enhanced conversion logic and intelligent display.
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
    <h1>Exercice 2-bis : Améliorer le programme de conversion de durées</h1>
    <script>
        function hjms(s){
            var j =parseInt (s / (24 * 3600));
        s = s % (24 * 3600);

        var h =parseInt (s / 3600);
        s = s % 3600;

        var m =parseInt (s / 60);

        var scr = parseInt(s % 60);
        var resu=[]
if(j >0){
    if(j==1){
        resu.push( 1 +" jour" ) 
    }else{ resu.push( j +" jours")}
   }

    if(h >0){
    if(h==1){
        resu.push(1 +" heure " ) 
    }else{ resu.push(h+" heures ")}
   }

    if(m >0){
    if(m==1){
        resu.push(1+" minute " ) 
    }else{resu.push(m+" minutes " )}
    }
    if(scr >0){
    if(scr==1){
        resu.push(1+" seconde " ) 
    }else{resu.push(scr+" secondes" )}
    }
        return "cette durée équivaut à  "+resu.join(" ");
          
        }
var sc=parseInt(prompt("Une durée en secondes :"));
var rj=hjms(sc);
alert(rj);
    </script>
</body>
</html>
```
**Array resu:**
This array is used to dynamically store the non-zero parts of the duration (days, hours, minutes, and seconds).  
**Smart Display for Days:**
 - Checks if the value of days (j) is greater than zero.
 - If j is equal to 1, it pushes the singular form "1 jour" to the array.
 - Otherwise, it pushes the plural form "<j> jours".  
**Returning the Result:**
The join(" ") method is used to convert the array into a single string, separating each element with a space.  
**Input and Output:**
Same as in Exercice 2, but this version uses the enhanced hjms() function for smarter display.  
## Example Output:
``` text
Input: 3621  
Output: Cette durée équivaut à 1 heure 21 secondes     
```
