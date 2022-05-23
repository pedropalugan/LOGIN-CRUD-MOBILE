const express = require("express")
const app = express()
const porta = 3000
const itemsRoutes = require("./routes/index")

app.use(express.json())
app.use('/', itemsRoutes)


app.listen(porta, () => console.log("Servidor rodando"))