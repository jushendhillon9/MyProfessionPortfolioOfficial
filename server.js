const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;
const routes = require("./controllers");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})