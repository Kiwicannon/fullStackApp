const express = require('express'), 
    bodyParser = require('body-parser'),
    massive = require('massive');


const app = module.exports = express();

app.use(bodyParser.json())
app.use(express.static('./public'))


const config = require('./config.js');

const db = massive.connectSync({connectionString: config.elephantsql})

app.set('db', db)

// db.schema(function(err, data) {
//   if (err) console.log(err);
//   else console.log("All tables successfully reset")
// })

app.post('/addToDb/:firstName/:favColor/:gender', 
(req, res, next)  => {
console.log(req.params.firstName,
    req.params.favColor,
    req.params.gender)
db.addData ([
    req.params.firstName,
    req.params.favColor,
    req.params.gender
],(err, result) => {
      if (err) console.log('post endpoint error: ', err)
    })
    res.end()
}
)

app.get('/getAll', (req, res,next) => {
    console.log('got here 3')
    db.getAll((err, res) => {
        if (err) {
            console.log('get fail: ', err);
        } else {
        console.log(res)
            return res
        }
    })
})






app.listen(8124, function(){
    console.log(`listening on port ${this.address().port}`)
});












