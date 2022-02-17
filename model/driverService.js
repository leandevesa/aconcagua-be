const Sequelize = require('sequelize');
const sequelize = new Sequelize('thehanger', process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: getLogging()
});

function getLogging() {
    if (process.env.LOG_SQL === "false") {
        return false;
    }
    return console.log;
}

module.exports = {
    sequelize: sequelize
};