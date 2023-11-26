const router = require("express").Router();
require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.APP_PASSWORD
    }
})

router.post("/submit-form", async (req,res) => {
    try {
        const { fullname, sender, message } = req.body;
        const emailToSend = {
            from: sender,
            to: process.env.EMAIL_ADDRESS,
            subject: `New Contacter, ${fullname}, from SWE Portfolio. Email is @${sender}`,
            text: message,
        }

        await transporter.sendMail(emailToSend);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;