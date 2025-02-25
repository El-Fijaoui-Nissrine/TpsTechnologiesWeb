# exercice 3 : Sorting 3 Numbers 
## Objective :
The goal of this exercise is to create a JavaScript program that takes three numbers as input and displays them in ascending order. 
## Technologies Used :
 - HTML: For the structure of the webpage.
 - JavaScript: To implement the sorting logic using:
## Explanation of Essential Parts :
```js
function troisNombres(a,b,c){
var mn=Math.min(a,b,c);
var mx=Math.max(a,b,c);
if(a!=mn && a!=mx){
    return mn+" "+a+" "+mx;   
}
if(b!=mn && b!=mx){
    return mn+" "+b+" "+mx;   
}
return mn+" "+c+" "+mx;
}
```
**Finding Minimum and Maximum:**
The program uses Math.min() and Math.max() to get the smallest and largest numbers among the three inputs.  
**Identifying the Middle Number:**
The middle number is determined by checking which number is neither the minimum nor the maximum. This avoids complex nested conditions.  
**Returning Sorted Order:**
The numbers are returned as a concatenated string in ascending order and displayed using an alert.
## Example Output
```text
**For input:**  
1st number: 4  
2nd number: 10  
3rd number: 7  
**Output:**  
Alert: The numbers in ascending order: 4 7 10
```
