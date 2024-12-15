const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const schema = require("./model/model")
const app = express()


app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://texnidez3d:7GabYvrrwOHDdOxH@datacollectiondatabase.g5ucs.mongodb.net/?retryWrites=true&w=majority&appName=datacollectiondatabase")
.then(console.log("DB Mongodb Connected Successfully"))
.catch(error => console.log(error))

app.post('/entry', (req,res)=>
{
   schema.create(req.body)
   .then(result => res.json(result))
   .catch(err => res.json(err))
})

app.listen(3000,()=>
{
    console.log("Connected to Server")
})

