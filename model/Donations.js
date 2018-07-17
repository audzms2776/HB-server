const pool = require('./dbConnection.js');
class Donations { };

Donations.test1 = (callback) => {
    callback(null, { rr: 123123 });
};

module.exports = Donations;