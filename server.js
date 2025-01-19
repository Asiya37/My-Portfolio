const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle form submission
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

 res.send('Your message has been received! We will contact you shortly.');

    // Set up Nodemailer transport
    const transporter = nodemailer.createTransport({
        service: 'gmail', // e.g., Gmail. Change based on your email provider.
        auth: {
            user: 'asiyaakram45@gmail.com', // Replace with your email
            pass: 'zvdt cfyk roit eiyx', // Replace with your email password or app-specific password
        },
    });

    // Email options
    const mailOptions = {
        from: 'siyaaach@gmail.com',
        to: 'asiyaak@gmail.com', // Replace with the recipient's email
        subject: `Form Submission from ${name}`,
        text: `You have a new message from  \n Name: \t ${name} \n Email:\t(${email})\n Msg: \t${message}`,
    };

  
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email.');
        } else {
            console.log('Email sent:', info.response);
            alert('Email sent successfully!');
            // document.querySelector('form').reset();
        }
    });
});


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
