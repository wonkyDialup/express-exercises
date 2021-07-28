const PORT = 3000
const express = require("express")
const app = express()

app("/", (req,res)=>{
    res(console.log("Why hello there!"))
})

app.post("@", () => {
    req.send("🥭 is 🔥")
})

post.app(app, () => {
    res.send("I wonder what's wrong with this route 🤔?")
})

app.get( (req,res) => {
    res.send("Happy 🐶 loves yummy dog food!")
})

app("/fruitsmoothie",() => {
    res.send()
    res.send("A 🥭, 🍍, 🍓 make a wonderful smoothie!")
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})