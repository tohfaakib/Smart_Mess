var mysql = require('mysql');

var config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mess'
};

var getConnection = function (callback) {
    var connection = mysql.createConnection(config);

    connection.connect(function (err) {
        if (err) {
            console.log(`Connection error with message: ${err}`);
        } else {
            console.log(`Connected as, ${connection.threadId}`);
        }
    });

    callback(connection);
};

module.exports = {
    execute: (sql, params, callback) => {
        if (params !== "") {
            getConnection((connection) => {
                connection.query(sql, params, (err, res) => {
                    if (err) {
                        console.log(`Error with message, ${err}`)
                    } else {
                        callback(res);
                    }
                });

                connection.end((err) => {
                    if (err) {
                        console.log(`Ending error with message, ${err}`);
                    } else {
                        console.log("Connection Ended");
                    }
                });
            });
        } else if (params === "") {
            getConnection((connection) => {
                connection.query(sql, (err, res) => {
                    if (err) {
                        console.log(`Error with message, ${err}`)
                    } else {
                        callback(res);
                    }
                });

                connection.end((err) => {
                    if (err) {
                        console.log(`Ending error with message, ${err}`);
                    } else {
                        console.log("Connection Ended");
                    }
                });
            });
        }

    },
};