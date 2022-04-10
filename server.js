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
// simple route
const db = require("./models");
const Role = db.role;
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Db');
//   initial();
// });

// this for the test
// function initial() {
//     Role.create({
//       id: 1,
//       name: "student"
//     });
   
//     Role.create({
//       id: 2,
//       name: "professor"
//     });
   
//     Role.create({
//       id: 3,
//       name: "admin"
//     });
// }
// for production
// const db = require("./app/models");
// db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ status: 200 });
});
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});