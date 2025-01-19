document.addEventListener("DOMContentLoaded", () => {
    const words = ["Passion", "Purpose",];
    let index = 0;

    function changeWord() {
        const wordElement = document.getElementById("changing-word");

        if (wordElement) {
            wordElement.textContent = words[index]; // Update the word
            index = (index + 1) % words.length; // Loop back to the first word
        }
    }

    // Change the word every 2 seconds
    setInterval(changeWord, 2000);

    // Run immediately to show the first word
    changeWord();
});

// });

