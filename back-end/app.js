const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const session = require('express-session');
  app.use(
    session({
      secret: 'secret string',
      resave: false,
      saveUninitialized: false,
      cookie: {}
    })
  )

app.get('/', function(req,res){
  if(!req.session.pageCountByCurrentUser)
    req.session.pageCountByCurrentUser = 0;
  req.session.pageCountByCurrentUser++;
  res.send({
    pageCount: req.session.pageCountByCurrentUser
  });
});


// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});



