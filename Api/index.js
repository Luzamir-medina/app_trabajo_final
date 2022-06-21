const express = require('express')
const cors  = require('cors')

const app = express()
const port = 3000

//#region
app.use(
    express.urlencoded({
        extended: true

    })

)

app.use(express.json({
    type: "*/*"
}))

app.use(cors());
 //#region 
// cuando te hagan un get http://localhost:3000/transactions
app.get('/transactions',(req, res)=> {
    res.send('me hicieron un get a app transactions')
})
// cuando te hagan un post  http://localhost:3000/transactions
app.post('/transactions',(req, res)=>{
    res.send('me hicieron un post')
    //res.send('Me hicieron un post')
})

app.listen(port,()=>{
    console.log('estoy ejecutandome en http://localhost:${port}')
})