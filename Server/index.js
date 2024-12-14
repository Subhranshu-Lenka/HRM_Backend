require("dotenv").config();
const express=require("express");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app=express();
require("./db/db");
const empRoute = require("./routes/employee.route");

const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended:true }));
app.use("/auth", empRoute);

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})