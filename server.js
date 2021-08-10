const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// Load config
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express(); 

// Middleware
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Sever listening on ${PORT}`)
})