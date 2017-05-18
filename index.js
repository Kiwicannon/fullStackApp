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

// for (var name in buz) {
//   if (buz.hasOwnProperty(name)) {
//     console.log('this is fog (' + 
//       name + ') for sure. Value: ' + buz[name]);
//   }


// app.post('/addToDb/:firstName/:favColor/:gender',
//     (req, res, next) => {
//         db.getAll((err, data) => {
//             console.log(data.length)
//             for (var i = 0 ; i < data.length; i++) {
//                 console.log('started',data[i], data[i].firstname === req.params.firstName)
//                 if (data[i].firstname === req.params.firstName && data[i].color === req.params.favColor) {
//                     console.log(1)
//                     break
//                     return console.log('user already Exists')
//                 } else {
//                     console.log(2)
//                    return  db.addData([
//                         req.params.firstName,
//                         req.params.favColor,
//                         req.params.gender
//                     ], (err, result) => {

//                         if (err) console.log('post endpoint error: ', err)
//                     })

//                     return res.end()
//                 }
//             }
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