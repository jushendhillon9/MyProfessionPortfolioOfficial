const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const port = 3001;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "process.env.EMAIL_ADDRESS",
        pass: "process.env.EMAIL_PASSWORD"
    }
})

app.post("/submit-form", async (req,res) => {
    try {
        const { fullname, sender, message } = req.body;
        const emailToSend = {
            from: sender,
            to: "process.env.EMAIL_ADDRESS",
            subject: `New Contacter, ${fullname}, from SWE Portfolio`,
            text: message,
        }

        await transporter.sendMail(emailToSend);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})