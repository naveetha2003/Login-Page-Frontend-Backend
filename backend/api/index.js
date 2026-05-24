const express = require("express")

const cors = require("cors")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

var username ="Navee"
var password = "123"

app.post("/login", (req, res) => {
    const { username: u, password: p } = req.body

    if (u === username && p === password)
         {
        res.json({ status: "success" })
    } else {
        res.json({ status: "fail" })
    }
})

app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});
module.exports = app;

