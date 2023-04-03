const express=require('express')
const app=express()

const http=require('http').createServer(app)

const Port = process.env.Port||3000

http.listen(Port,()=>{
    console.log(`Working on port ${Port}`)
})

app.use(express.static(__dirname+'/public'))

app.get('/',(req, res)=> {
    res.sendFile(__dirname+'/index.html')
})


