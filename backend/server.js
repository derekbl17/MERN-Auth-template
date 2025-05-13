const express = require('express')
const dotenv=require('dotenv').config() // any changes to .env require server restart
const {errorHandler}=require('./middleware/errorMiddleware')
const port = process.env.PORT || 5001

const app = express()

app.use(express.json()) // enables reading of data in request body if its in .json format

app.use('/api/posts', require('./routes/postRoutes'))

app.use(errorHandler

)
app.listen(port,()=>console.log(`server started on port ${port}`))