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
// app.post('/send-email', (req, res) => {
//     const { name, email, message } = req.body;

//     // Send the response immediately
//     alert('Your message has been received! We will contact you shortly.');

//     // Process email sending in the background
//     transporter.sendMail({
//         from: 'siyaaaach@gmail.com',
//         to: 'asiyaakram45@gmail.com',
//         subject: `Form Submission from ${name}`,
//         text: `Message: ${message}`,
//     }).then(info => {
//         console.log('Email sent:', info.response);
//     }).catch(error => {
//         console.error('Error sending email:', error);
//     });
// });

