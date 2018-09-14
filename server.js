const express = require('express');
const bodyParser = require('body-parser');
const mysql=require("mysql");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}))
let con=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"11235813",
  database:"testusers",
})
con.connect((err)=>{
  if (err) throw err;
  console.log("Connected");
})
app.post('/api', (req, res) => {
  console.log(req.body);
  const get = req.body;
  let sql=`INSERT INTO users (name,surname)
  VALUE ('${get.name}',
         '${get.surname},'
                      )`
    con.query(sql,(err,result)=>{
      if (err) throw err;
      res.send(result);
    })
  // res.send({ express: 'Hi' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
