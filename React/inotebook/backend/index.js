const connectToMongo = require('./db');

connectToMongo();

const express = require('express')
const app = express()
const port = 5000

// app.get('/', (req, res) => { res.send('Connected using express server') })

// For using req.body we use express as middle-ware
app.use(express.json())


app.use("/api/auth", require("./routes/auth"))
app.use("/api/notes", require("./routes/notes"))

// http://localhost:3000/api/notes

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
