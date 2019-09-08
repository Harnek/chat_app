const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const dbConfig = require('./server_app/config/dbConfig');

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(express.json());       // to support JSON-encoded bodies
// app.use(express.urlencoded()); // to support URL-encoded bodies

const usersRoutes = require('./server_app/routes/usersRoutes').setRoutes(app);

mongoose.connect(dbConfig.config.dbURI, { useNewUrlParser: true }, function (err) {
    if (err) {
        console.log("DB Error: ", err);
        process.exit(1);
    } else {
        console.log('MongoDB Connected');
    }
});

app.get('/', (req, res) => {
    res.send('Home Page');
})

app.listen(3000, (err, res)=>{
    if(err){
        console.log(err);
    }else{
        console.log('server started at port 3000');
    }
});



