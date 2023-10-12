const express = require('express')
const mongoose = require('mongoose')
const UserModel = require('./db')

const app = express()
const port = 5000


const DBurl = 'mongodb+srv://yashwant:yashwant@cluster0.wxlvzcb.mongodb.net/?retryWrites=true&w=majority'

const connectionparams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(DBurl,connectionparams).then(()=>{
    console.log('Mongoose Connected')
}).catch((e)=>{
    console.log("Error in connecting to mongoose. Error : ",e)
})


app.get('/add',(req,res)=>{
    UserModel.create({
        name: 'yashwant',
        password: 'yashwant'
    })
    .then(()=>{
        console.log("Data Inserted")
        res.send("Inserted")
    })
})


app.get('/find',(req,res)=>{
    UserModel.find()
    .then((data)=>res.json(data))
    .catch((err)=>res.json(err))
})


app.listen(port,(err)=>{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log("Server running at ",port)
    }
})