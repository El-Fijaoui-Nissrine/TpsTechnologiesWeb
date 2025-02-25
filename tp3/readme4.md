# Exercise 4: Staircase Pattern 
## Objective :
This exercise demonstrates how to generate a staircase pattern of stars (*) using JavaScript. 
## Technologies Used :
 - HTML: For the structure of the webpage.
 - JavaScript: For generating the pattern using:
## Explanation of Essential Parts :
```js
function triangle2(n){
    console.log("resultat avec for")
    for(let i=1;i<n;i++)
    console.log("*".repeat(i));
}
function triangle1(n){
    console.log("resultat avec while")
    let i=1;
    while(i<n){
      
        console.log("*".repeat(i));
        i++;
    }
}
```
- Two Looping Techniques:  
**triangle1(n):** Uses a while loop.  
**triangle2(n):**  Uses a for loop.  
- Pattern Generation:
The loop variable i starts at 1 and increments until it reaches the input value. Each iteration prints a line of stars repeated i times.
## Example Output
For input n = 7, the output in the console is:
```text
*
**
***
****
*****
******
*******
```
