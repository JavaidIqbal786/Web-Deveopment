let randomNumber;
let attemptsLeft = 5;

document.getElementById('start-btn').addEventListener('click', () => {
    const minRange = parseInt(document.getElementById('min-range').value);
    const maxRange = parseInt(document.getElementById('max-range').value);

    if (isNaN(minRange) || isNaN(maxRange) || minRange >= maxRange) {
        alert("Please enter a valid range.");
        return;
    }

    randomNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
    attemptsLeft = 5;

    document.getElementById('message').textContent = '';
    document.getElementById('attempts').textContent = `Attempts left: ${attemptsLeft}`;
    document.getElementById('guess-section').style.display = 'block';
    document.getElementById('user-guess').value = '';  // Clear the previous guess
});

document.getElementById('guess-btn').addEventListener('click', () => {
    const userGuess = parseInt(document.getElementById('user-guess').value);

    if (isNaN(userGuess)) {
        alert("Please enter a valid number.");
        return;
    }

    if (userGuess === randomNumber) {
        alert("🎉 Congratulations! You guessed the correct number!");  // Pop-up message on win
        document.getElementById('message').textContent = "🎉 Congratulations! You guessed the correct number!";
        document.getElementById('guess-section').style.display = 'none';  // Hide the guessing section
    } else {
        attemptsLeft--;

        if (attemptsLeft > 0) {
            const hint = userGuess < randomNumber ? "Your guess is too low!" : "Your guess is too high!";
            document.getElementById('message').textContent = hint;
            document.getElementById('attempts').textContent = `Attempts left: ${attemptsLeft}`;
        } else {
            alert(`😞 You lost! The correct number was ${randomNumber}.`);  // Pop-up message on loss
            document.getElementById('message').textContent = `😞 You lost! The correct number was ${randomNumber}.`;
            document.getElementById('guess-section').style.display = 'none';  // Hide the guessing section after losing
        }
    }
});
