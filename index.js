const express = require('express'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    cors = require('cors');


const app = module.exports = express();

app.use(bodyParser.json())
app.use(express.static('./public'))


// const config = require('./config.js');

const db = massive.connectSync({
    connectionString: 'postgres://urmtupfk:AaKip6eLc5a7MlEL5dpRKIwYO9hRu4MK@stampy.db.elephantsql.com:5432/urmtupfk'
})

app.set('db', db)

// db.schema(function(err, data) {
//   if (err) console.log(err);
//   else console.log("All tables successfully reset")
// })

// see if user already exists
//
// app.post('/addToDb/:firstName/:favColor/:gender',
//     (req, res, next) => {
//         db.getAll((err, data) => {
//             // console.log(req.params.firstName, req.params, data)
//         if(data.includes(req.params) ){
//             db.addData([
//                 req.params.firstName,
//                 req.params.favColor,
//                 req.params.gender
//             ], (err, result) => {
//                 console.log(result[0])
//                 // if(!result[0])
//                 if (err) console.log('post endpoint error: ', err)
//             })
//             res.end()
//         } else if(data[0]) {
//             console.log("User Already Exists")
//         }
//         })
//     })
app.post('/addToDb/:firstName/:favColor/:gender',
    (req, res, next) => {
       

         
            db.addData([
                req.params.firstName,
                req.params.favColor,
                req.params.gender
            ], (err, result) => {
                console.log(result[0])
                // if(!result[0])
                if (err) console.log('post endpoint error: ', err)
            })
            res.end()
        })


app.get('/getAll', function (req, res, next) {
    db.getAll(function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(data)

        }
    });
})




app.listen(8124, function () {
    console.log(`listening on port ${this.address().port}`)
});