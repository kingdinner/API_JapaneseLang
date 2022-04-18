const db = require("../../models");
const User = db.user;
const task = db.task;

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
        accounttype: req.body.accounttype
      }
    })
    .then(userlistaccounts => {
          res.status(200).send({userlistaccounts});
    })
    .catch((error) => {
      console.log(error.toString());
      res.status(400).send(error)
    });
}

// const addTask = async( req, res ) => {
//   task.create({

//   })
// }

module.exports = {
    recentMembers,
    listUserBasedTransaction
}