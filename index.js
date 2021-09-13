
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())

//connecting to database:

mongoose.connect(
    process.env.db,{useNewUrlParser:true,useUnifiedTopology:true},
    () => console.log('Database connected..')
);

//Importing Routes:

const product_routes = require('./Routes/Routes')

//route middleware:

app.use('/api',product_routes)

app.listen(5000,()=>console.log('Listening to the port..'))

