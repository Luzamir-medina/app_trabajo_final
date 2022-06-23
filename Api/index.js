const express = require('express')
const cors  = require('cors')

const app = express()
const port = 3000
let transactionsArr =[]
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
    res.send(JSON.stringify(transactionsArr));
})
// cuando te hagan un post  http://localhost:3000/transactions
app.post('/transactions',(req, res)=>{
    let transaction =req.body;
    transactionsArr.push(transaction);
    res.send(JSON.stringify("guardada"))
    console.log(transactionsArr);
  

})

app.listen(port,()=>{
    console.log('estoy ejecutandome en http://localhost:${port}')
})