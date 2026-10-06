// Generate a random secret number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Initial score
let score = 20;

// Check button functionality
document.querySelector(".check").addEventListener("click", function () {

    const guess = Number(document.querySelector(".number").value);

    // If no number is entered
    if (!guess) {
        document.querySelector(".result").textContent = "Please enter a number!";
    }

    // If the guess is correct
    else if (guess === secretNumber) {
        document.querySelector(".result").textContent = "Correct Number! 🎉";
        document.querySelector(".score").textContent = score;
    }

    // If the guess is wrong
    else if (guess !== secretNumber) {

        if (score > 1) {
            document.querySelector(".result").textContent =
                guess > secretNumber ? "Too High!" : "Too Low!";

            score--;
            document.querySelector(".score").textContent = score;
        }

        else {
            document.querySelector(".result").textContent =
                "You Lost the Game!";
            document.querySelector(".score").textContent = 0;
        }
    }
});

// Play Again button
document.querySelector(".again").addEventListener("click", function () {

    // Reset score
    score = 20;

    // Generate a new secret number
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // Reset webpage
    document.querySelector(".result").textContent = "Start Guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").value = 0;
});