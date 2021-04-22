'use strict'
const corts = require('cors');
const authRoutes = require('./auth/auth.routes');
const express = require('express');
const propierties = require('./config/propierties');
const DB = require('./config/db');
//init db
DB();

const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURlEncoded = bodyParser.urlencoded({ extended:true});

app.use(bodyParserJSON);
app.use(bodyParserURlEncoded);

app.use(cors()); 

app.use('/api',router);
authRoutes(router);
router.get('/',(req, res) =>{
    res.send('HELLO FROM HOME');
});

app.use(router);
app.listen(propierties.PORT, ()=> console.log(`Server runing on port ${propierties.PORT}`));