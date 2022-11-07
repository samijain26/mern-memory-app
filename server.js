const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
   res.status(200).json({ msg: "Hello" });  

})

app.post("/test", (req, res) => {
    const obj = {
        "name":"Sami"
    }
    console.log(req.body)
  res.status(200).json({ name:obj })
});

app.listen(PORT, () => {
    console.log('listening on port',PORT)
})