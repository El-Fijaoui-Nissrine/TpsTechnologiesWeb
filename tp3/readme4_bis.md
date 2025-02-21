# Exercise 4-bis: Pyramid Pattern
 ## Objective:
This exercise generates a centered pyramid pattern using stars (*) and spaces. 
## Technologies Used :
 - HTML: For the structure of the webpage.
 - JavaScript: For generating the pattern using:

## Explanation of Essential Parts :
```js
function triangle2(n){
        console.log("resultat avec for")
        var x=n;
        for(let i=1;i<n;i++){console.log(" ".repeat(x)+"*".repeat(i*2-1)+" ".repeat(x));
    x--;}
        
    }
    function triangle1(n){
    console.log("resultat avec while")
    var l=n;
    let i=1;
    while(i<n){
        console.log(" ".repeat(l)+"*".repeat(i*2-1)+" ".repeat(l));
       
        i++;
        l--;
    }
}
```
**Centering the Pyramid :**  
Leading and trailing spaces are added to center each line of stars.  
**Pattern Calculation :**  
 - Spaces decrease as the number of stars increases.  
 - Stars increase in odd numbers per line to form the pyramid shape.  
**Two Loop Approaches :**  
 - triangle1(n): Uses a while loop.  
 - triangle2(n): Uses a for loop.  

## Example Output :
For input n = 7, the output in the console is:
```text
      *
     ***
    *****
   *******
  *********
 ***********
*************
```
