const express = require('express');
const sequelize = require('./db/config');
const Product = require('./app/routes/product');

const app = express();
app.use(express.json());
app.use('/api', Product);

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
