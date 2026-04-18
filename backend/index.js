const express  = require('express')
const app = express()
const PORT = 8000

const mainRounter = require('./routes/index')

app.use('/api/v1', mainRounter)


app.listen(PORT, ()=>{
    console.log('server running ...')
})