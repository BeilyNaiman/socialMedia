import  express  from "express";
import pool from './dbconfig.js'

const router=express.Router();

router.get('/get/:password',(req, res)=>{
    const password = req.params.password;
    pool.connect().then(() => {
        var queryString = `SELECT * FROM users WHERE password =${password}`
        pool.request().query(queryString, (err, result) => {
          if(err)
          console.log(err)
          else {
            console.log("i'm here");
            res.send(result.recordset[0]);}
          })
      })
    
});

export default router;