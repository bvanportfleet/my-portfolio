const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors package

const app = express();
const port = process.env.PORT || 3001;

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON body
app.use(bodyParser.json());

// Configure Nodemailer with Gmail SMTP
const transporter = nodemailer.createTransport({
  service: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "bvanportfleet@gmail.com", // Your Gmail address
    pass: " ", // Your Gmail password
  },
});

// API endpoint to handle email sending
app.post("/send-email", (req, res) => {
  const { name, email, phone, company, message } = req.body;

  // Email content
  const mailOptions = {
    from: "bvanportfleet@gmail.com", // Your Gmail address
    to: "bvanportfleet@gmail.com",
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent successfully");
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
