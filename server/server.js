require('dotenv').config();
require('express-async-errors');

const express = require("express");
const app = express();
const cors = require('cors');
const morgan = require("morgan");
const PORT = 3000;

const connectDB = require("./db/connect");
const UserRoute = require("./routes/routes");

const ErrorHandlerMiddleware = require("./middleware/error-handling");
const NotFoundMiddleware = require("./middleware/route-not-found");

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by");


app.use("/api/v1", UserRoute);

app.use(NotFoundMiddleware);
app.use(ErrorHandlerMiddleware);

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