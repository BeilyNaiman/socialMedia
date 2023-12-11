import  express  from "express";

const router=express.Router();
import pool from './dbconfig.js'

// router.get('/get',fetch);
router.get('/getAll/:userId', (req, res) => {
    const userId = req.params.userId; // Get the userId from the request parameters
    console.log(userId);
    pool.connect().then(() => {
      var queryString = `SELECT link FROM pictures WHERE userId = ${userId}`;
      pool.request().query(queryString, (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send('Error occurred');
        } else {
          const stringArray = result.recordset.map(obj => obj.link);
          res.send(stringArray);
        }
      });
    });
  });
  ;
  router.get('/getOne/:userId', (req, res) => {
    const userId = req.params.userId;
    pool.connect()
      .then(() => {
        const queryString = `SELECT TOP 1 link FROM pictures WHERE userId = ${userId}`;
        pool.request().query(queryString, (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
          } else {
            const link = result.recordset[0].link || '';
            res.send(`${link}`);
          }
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send('Internal Server Error');
      });
  });
      

export default router;