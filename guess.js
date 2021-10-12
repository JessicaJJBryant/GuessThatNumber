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
    rangeNum = prompt(`Please enter a maximum number for the range:`);
    // Takes the string from the prompt and converts it into a number value. Also, if the value cannot be converted then the value returned will be NaN (Not a Number--default boolean value of false):
    rangeNum = parseInt(rangeNum);

    // This verifies that the user's entry for the range number is a number greater than zero (0). We could wrap line 36 in a parseInt instead of lines 36 and 37: rangeNum = parseInt(prompt(enterNumText)); NOTE: NaN has a default boolean value of false, so the !rangeNum will give us the reverse, (so value of true if rangeNum was false). Also, all numbers, positive and negative, have a default boolean value of true, except for zero which has a default boolean value of false. The right side prevents negative numbers being valid. And remember that OR operators just need one true to be true.
    while (!rangeNum || rangeNum < 1) {
        rangeNum = prompt(enterNumText);
        rangeNum = parseInt(rangeNum);
    }
    // Creates the random number (AKA Number to be guessed by the user) using the range number entered by the user:
    randomNum = Math.floor(Math.random() * rangeNum) + 1;
    // Prompts user to enter a number of attempts allowed (AKA Number of guesses). Also attempts to convert their response into a number value. Note, this one line is combining what occurred on 30-32 and 36-37.
    attempts = parseInt(prompt(`Please enter a number of attempts allowed:`));
    // This verifies the user's entry for a number of attempts allowed is a number greater than 0:
    while (!attempts || attempts < 1) {
        attempts = parseInt(prompt(enterNumText));
    }
    // Asks user to enter a guess in the range that they set:
    guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left:`);
    // Continues looping until the user guesses the correct number or runs out of attempts (NOTE: Loops until a BREAK keyword is run)
    while (true) {
        // This attempts to convert the user's guess into a number:
        guess = parseInt(guess);
        // Verifies the user's guess is a number greater than zero as well as a number within the range set by the user:
        while (!guess || guess < 1 || guess > rangeNum) {
            guess = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}.`));
        }
        // Removes an attempt
        attempts--;
        // Checks if the user guessed correctly. If so, the game ends. (NOTE: The BREAK ends the loop.)
        if (guess === randomNum) {
            alert(`CONGRATULATIONS!!! YOU GUESSED THE CORRECT NUMBER: ${randomNum}!!!`);
            break;
        // Checks if user has any attempts left. If not, then the game ends and the number is displayed to the user:
        } else if (attempts === 0) {
            alert(`Sorry, but you have run out of attempts :(. The number was ${randomNum}.`);
            break;
        // Checks if user's guess was too low and prompts user to guess again if that is the case. NOTE: NO BREAK. We want it to keep going on the loop.
        } else if (guess < randomNum) {
            guess = prompt(`Too low. You have ${attempts} attempt(s) left.`);
        } else {
            guess = prompt(`Too high. You have ${attempts} attempt(s) left.`)
        }
    }
    // Prompts user with option to play again:
    playAgain = prompt(`Would you like to play again? Y for yes. N for no.`);
    // Loop continues until user submits a valid response:
    while (true) {
        // Checks if the user's response is No (AKA "N"). Takes care of uppercase/lowercase issue here too also.
        if (playAgain.toUpperCase() ==="N") {
            alert("Thanks for playing!");
            // Changes value of restartGame and ends that loop.
            restartGame = false;
            break;
        // Checks if the user's response is Yes (AKA "Y"). Takes care of uppercase/lowercase issue here too also.
        } else if (playAgain.toUpperCase() === "Y") {
            // The game restarts with the break:
            break;
        // This is if they put in anything but Y or N:
        } else {
            prompt ("Please enter Y or N.");
        }
    }
}
