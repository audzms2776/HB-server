const pool = require('../config/db_connect.js');
class Donations {
}

Donations.test1 = (callback) => {
    pool.getConnection((err, connection) => {
        if (err) {
            connection.release();
            throw err;
        }

        connection.query('SELECT * FROM Persons;', (err, rows) => {
            if (err) {
                connection.release();
                throw err;
            }

            console.log(rows);
            connection.release();

            return callback(null, );
        });
    });
};

module.exports = Donations;
