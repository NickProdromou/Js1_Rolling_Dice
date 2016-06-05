/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice.
Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random1 to form the random class for the second die, secondDie
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint:document.getElementById)

3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.

*/

//variables
var random1 = Math.round(Math.random() * (6 - 1) + 1);
var random2 = Math.round(Math.random() * (6 - 1) + 1);

//Test to see if variables output correct
// console.log(random1);
// console.log(random2);

//cache DOM
var firstDie = document.getElementById("first-die");
var secondDie = document.getElementById("second-die");
var rollDice = document.getElementById("roll-dice");
