const express = require("express")

var app = express()

app.set("view engine", "ejs")

app.use(express.static('public'))

const PORT = process.env.PORT || 3000

app.get("/",(req, res)=>{
    res.render("index.ejs")
})

app.listen(PORT, ()=>{
    console.log(`Started on ${PORT}`)
});
