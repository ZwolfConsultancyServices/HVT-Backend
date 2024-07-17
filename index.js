const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const userRoute = require("./Routes/UserRoutes.js")
const adminroutes = require("./Routes/adminroutes.js")
const cors = require('cors')
const morgan = require("morgan")
require("dotenv").config()

const port = process.env.PORT || 6000
const app = express()
app.use(cors())

app.use(bodyParser.json({ extended: true, limit: "5mb" }))
app.use(bodyParser.urlencoded({ extended: true, limit: "5mb" }))
app.use(express.json({ extended: true, limit: "5mb" }))
app.use(express.urlencoded({ extended: true, limit: "5mb" }))

app.use(morgan("dev"))
app.use("/user", userRoute)
app.use("/admin", adminroutes)
app.use("/", (req, res) => {
    res.send('server is running  ')
});

mongoose.connect(process.env.mongoDB_URL, {})
    .then(() => {
<<<<<<< HEAD
        app.listen(port, () => {
=======
        app.listen(process.env.Port || 9000, () => {
>>>>>>> 95e04b78f3e3dee61c226983f2e3e294a3d94e54
            console.log("server is up and running");
            console.log("connected to the database");
        })

    })
    .catch((err) => {
        console.log(err.message);
    })