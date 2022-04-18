const db = require("../../models");
const User = db.user;
const task = db.task;
const grades = db.grade;

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

const addTask = async( req, res ) => {
  const task = await task.create({
    studentid: req.body.studentid,
    taskname: req.body.taskname,
    details: req.body.details,
    date: req.body.date,
    deadline: req.body.deadline
  })
  res.send(task)
}

const displayTask = async( req, res ) => {
  const task = await task.findAll()
  res.send(task)
}

const remainder = async( req, res ) => {
  const remainder = await task.findAll({
    where: {
      studentid: req.body.studentid
    }
  })
  res.send(remainder)
}

const addGrade = async (req, res) => {
  const grade = await grades.create({
    studentid: req.body.studentid,
    subject: req.body.subject,
    grade: req.body.grade,
    status: req.body.status,
    date: req.body.date
  })
  res.send(grade)
}

const oneStudentGrade = async (req, res) => {
  const studentGrade = await grades.findAll({
    where: {
      studentid: req.body.studentid
    }
  })
  res.send(studentGrade)
}

module.exports = {
    recentMembers,
    listUserBasedTransaction,
    addTask,
    displayTask,
    remainder,
    addGrade,
    oneStudentGrade
}