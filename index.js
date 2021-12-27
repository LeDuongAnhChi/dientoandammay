const express = require('express')
const app = express()
const mongoose = require("mongoose")
const cors = require('cors')
var port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'));
// set the view engine to ejs
app.set('view engine', 'ejs');
app.set("views", "./views");
app.
// create application/json parser
//mongoose
mongoose.connect('mongodb://localhost/dientoandammay')


 
// create application/x-www-form-urlencoded parser
console.log('con ga be be no dau canh tre 123')




console.log('chan vlk ')

console.log('con heo be be')



app.get('/', (req, res) => {
  res.render("index")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})