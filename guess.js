// GUESS THAT NUMBER PROJECT

// Message to be used throughout the file/project:
const enterNumText = `Please enter a number greater than zero`;

// For restarting the game:
let restartGame = true;

// For storing the range of the number to be guessed (the random number created)
let rangeNum;

// For storing the number to be guessed (the random number)
let randomNum;

// For storing the number of attempts the user has left
let attempts;

// For storing the user's guess:
let guess;

// For storing the user's response to play again or not play again:
let playAgain;

// Starting alert message:
alert(`Welcome to "GUESS THAT NUMBER!" Please click "OK" to start the game.`);

// Game restarts as long as restartGame has value of true
while (restartGame) {
    // Asks user to enter a number to set the upper bound for the random number that will be created (AKA Number to be guessed). Prompt results are ALWAYS STRINGS:
    rangeNum = prompt(`Please enter a maximum number for the range`);
    // Takes the string from the prompt and converts it into a number value. Also, if the value cannot be converted then the value returned will be NaN (Not a Number--default boolean value of false):
    rangeNum = parseInt(rangeNum);

    // This verifies that the user's entry for the range number is a number greater than zero (0). We could wrap line 36 in a parseInt instead of lines 36 and 37: rangeNum = parseInt(prompt(enterNumText)); NOTE: NaN has a default boolean value of false, so the !rangeNum will give us the reverse, so value of true. Also, all numbers, positive and negative, have a default boolean value of true, except for zero which has a default boolean value of false. 
    while (!rangeNum || rangeNum < 1) {
        rangeNum = prompt(enterNumText);
        rangeNum = parseInt(rangeNum);
    }
    break;
}
