const config = require('config');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.get('db_name'), config.get('db_user'), config.get('db_pass'), {
  host: config.get('db_host'),
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }

});

sequelize
  .authenticate()
  .then(() => {
	console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
