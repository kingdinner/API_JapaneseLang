const db = require("../../models");
const User = db.user;
const Role = db.role;

const recentMembers = (req, res) => {
    User.findAll({order: [['createdAt', 'DESC']]})
    .then(users => res.status(200).send(users))
    .catch((error) => {
      console.log(error.toString());
      res.status(400).send(error)
    });
}

const listUserBasedTransaction = (req, res) => {
    User.findAll({
        where: {
            type: req.body.usertype
        }
    })
    .then(users => res.status(200).send(users))
    .catch((error) => {
      console.log(error.toString());
      res.status(400).send(error)
    });
}

module.exports = {
    recentMembers,
    listUserBasedTransaction
}