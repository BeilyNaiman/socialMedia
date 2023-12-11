import express  from "express";
import users from './usersRouter.js';
import cors from 'cors';
import pictures from './picturesRouter.js'


const app=express();
const port=5000;
app.listen(port,()=>{
    console.log("server is running in port:" + port)
})
app.use(cors());
app.use('/users',users);
app.use('/pictures',pictures);

