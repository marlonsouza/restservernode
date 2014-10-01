var db = require('mysql');

module.exports = {
     db_pool: db.createPool({
        host: 'localhost',
        port: '3306',
        database: 'explorando_angularjs',
        user: 'root',
        password: 'root'
    })
}
