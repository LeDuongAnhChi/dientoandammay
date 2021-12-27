const express = require('express')
const app = express()

var port = process.env.PORT || 8080

app.use(express.static(__dirname + '/public'));
// set the view engine to ejs
app.set('view engine', 'ejs');
app.set("views", "./views");
// create application/json parser

 
// create application/x-www-form-urlencoded parser


console.log('con heo be be')


app.get('/', (req, res) => {
  res.render("index")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})