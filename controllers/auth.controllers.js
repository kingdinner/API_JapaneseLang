const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const userStatus = db.userStatus
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const latestIDStudent = async (req, res) => {
  return User.findAll({order: [['createdAt', 'DESC']]})
}

exports.signup = async (req, res) => {
  // Save User to Database
  const numberStudent = await latestIDStudent()
  User.create({
    userid: `CC${!numberStudent.id ? 1 : parseInt(numberStudent.id) + 1}`,
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    lastname: req.body.lastname,
    firstname: req.body.firstname,
    address: req.body.address,
    dateofbirth:req.body.dateofbirth,
    gender: req.body.gender,
    contactnumber: req.body.contactnumber,
    accounttype: req.body.accounttype,
    status: 0
  })
    .then(user => {
      if (req.body.roles) {
        // can be remove if deploy for production base for the client request 
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles
            }
          }
        }).then(roles => {
          user.setRoles(roles).then(() => {
            res.send({ message: "User was registered successfully!" });
          });
        });
        // ------------
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {
          res.send({ message: "User was registered successfully!" });
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
exports.signin = (req, res) => {
  // console.log(req.body.username)
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
      var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token,
          accountType: user.accounttype
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

const editAccountBasedTransactionType = (req, res) => {
  
}