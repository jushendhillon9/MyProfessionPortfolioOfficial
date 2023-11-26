const router = require("express").Router();

const contactFormRouter = require("./contactFormRoute");
const homeRoute = require("./homeroute")

router.use("/", homeRoute);
router.use("/contactform", contactFormRouter);

module.exports = router;

