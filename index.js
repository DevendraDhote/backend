const express = require("express");
const app = express();
const connectDB = require('./src/db/db.js')
const authRoutes = require('./src/routes/authRoutes/authRoutes.js')

app.use(express.json())

connectDB();

app.get('/', (req, res) => {
    res.send("hello from server")
})

app.use('/api/auth', authRoutes)

app.listen("3000", (req, res) => {
  console.log("server is runnig on port 3000");
});
