const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000



require("dotenv").config();
const mongoConfig = require("./config");

app.use(cors());
app.use(express.json());

//available route
const authRoutes = require("./routes/authRoutes");
// const userRoutes = require("./routes/userRoutes");
const memoryRoutes = require("./routes/memoryRoutes");

 app.use("/auth", authRoutes);
// app.use("/users", authorize, userRoutes);
app.use("/memory", memoryRoutes);



app.listen(PORT, () => {
    console.log('listening on port', PORT)
    mongoConfig();
})