const sequelize = require('./config');

sequelize.authenticate()
    .then(() => {
        console.log('Connected to PostgreSQL');
    })
    .catch(err => {
        console.error('Connection error', err);
    });
