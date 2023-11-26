const router = require("express").Router();
const path = require('path');

router.get("/homepage", async (req,res) => {
    try {
        const indexPath = path.join(__dirname, "..", "index.html");
        res.sendFile(indexPath)
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;