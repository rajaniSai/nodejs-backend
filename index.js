const express = require("express");
const cors = require("cors")
require('dotenv').config();

const connectDB = require("./config/DBConnection");
const userRouter = require("./router/userRouter")
const errorHandlers = require("./middleware/errorHandler");

const PORT = process.env.PORT || 3000;

let app = express();
app.use(express.json());
app.use(cors());
connectDB();

app.use('/user', userRouter);


app.use(errorHandlers);

app.listen(PORT, () => {
    console.log(`Listening to the server on PORT:${PORT}`);
})