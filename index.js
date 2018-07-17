const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const donationRouter = require('./router/donationRouter.js');
app.use(donationRouter);

app.use((err, req, res, next) => {
    res.send({error: err.message});
});

app.listen(3000, () => {
    console.log('server start!')
});


/* 
 pool.getConnection((err, connection) => {
 if (err) {
 conn.release();
 throw err;
 }

 connection.query('SELECT * FROM Persons;', (err, rows) => {
 if (err) {
 connection.release();
 throw err;
 }

 console.log(rows);
 res.json(rows);
 connection.release();
 });
 });

 */