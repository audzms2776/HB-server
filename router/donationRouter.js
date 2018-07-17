const express = require('express');
const router = express.Router();

const Donations = require('../model/Donations.js');

router.route('/test')
    .get(showTet);

function showTet(req, res, next) {
    Donations.test1((err, result) => {
        if (err) return next(err);
        res.send(result);
    });
}

module.exports = router;