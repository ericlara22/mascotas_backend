const express = require('express');
const app = express();
const router = require('./router');
const db = require('./models');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', router);

(async () => {
    await db.sequelize.sync({force: false});
})();

app.listen(process.env.PORT, () => {
    console.log('\x1b[33m%s\x1b[0m','SERVER UP running in: ',process.env.URL)
})
