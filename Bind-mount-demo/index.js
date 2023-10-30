const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();


app.get('/home', (req, res) => {
    res.json({message: "Abhijeet_AKs"})
});

app.listen(process.env.PORT, () => {
    console.log(`Server started at PORT: ${process.env.PORT}`);
});