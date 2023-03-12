require('dotenv').config();
require('express-async-errors');

const express = require("express");
const app = express();
const cors = require('cors');
const morgan = require("morgan");
const PORT = 3000;

const connectDB = require("./db/connect");

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"))
app.disable("x-powered-by")

app.get("/", (req, res) => {
  res.status(200).json({ success: true, msg: "This is the get route" })
})

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server connected to: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}

start();