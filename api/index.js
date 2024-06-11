import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
.connect(
    process.env.MONGO
)
.then(()=>{
    console.log('database connected....')
}).catch((err)=>{
    console.log(err)
})

const app=express();

const PORT=3000;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}...`)
})