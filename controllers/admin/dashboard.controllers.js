const db = require("../../models");
const User = db.user;
const task = db.task;
const grades = db.grade;
const Sequelize = require("sequelize");
var bcrypt = require("bcryptjs");

const recentMembers = (req, res) => {
    User.findAll({order: [['createdAt', 'DESC']]})
    .then(users => res.status(200).send(users))
    .catch((error) => {
      console.log(error.toString());
      res.status(400).send(error)
    });
}

const editEmployees = async (req, res) => {
  const updateEmployee = {
    username: req.body.username,
    email: req.body.email,
    lastname: req.body.lastname,
    firstname: req.body.firstname,
    address: req.body.address,
    contactnumber: req.body.contactnumber,
  }

  if (req.body.password !== undefined) {
    updateEmployee.push({password: bcrypt.hashSync(req.body.password, 8)})
  }

  User.update(updateEmployee, {
    where: {
      userid: req.body.userid,
    }
  })
  .then(async() => {    
    const displayUpdate = await User.findOne({where: { userid: req.body.userid } })
    res.send(displayUpdate)
  })
}

const activedAccount = async (req, res) => {
  User.update({
    statusaccount: 1
  }, {
    where: {
      userid: req.body.userid,
    }
  })
  .then(async() => {    
    const displayUpdate = await User.findOne({where: { userid: req.body.userid } })
    res.send(displayUpdate)
  })
}

const numberOfUsers = async (req, res) => {
  const studentNum = await User.count({
    where: {
      accounttype: 'student'
    }
  })
  const professorNum = await User.count({
    where: {
      accounttype: 'professor'
    }
  })
  
  res.send({student: studentNum, professor:professorNum})
}

const listUserBasedTypes = (req, res) => {
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
  const reqID = JSON.parse(req.body.studentID)
  let data = []
  
  for await(const ids of reqID) {
    data = await task.create({
      studentid: ids,
      taskname: req.body.taskname,
      details: req.body.details,
      date: req.body.date,
      deadline: req.body.deadline
    })
  };
  
  res.status(200).send(data);
}

const singleTask = async(req, res) => {
  task.findAll({
    where: {
      studentid: req.body.studentid
    }
  })
  .then(task => {
    res.status(200).send(task)
  })
  .catch((error) => {
    console.log(error.toString());
    res.status(400).send(error)
  });
}

const displayTask = async (req, res) => {
  const tasks = await task.findAll()
  const studentID = []
  const studentList = []
  tasks.forEach(element => {
    studentID.push(element.studentid)
  });

  const counts = studentID.reduce((acc, value) => ({
    ...acc,
    [value]: (acc[value] || 0) + 1
  }), "");

  for (let [key, value] of Object.entries(counts)) {
    const studentName = await User.findOne({
      where: {
        userid: key
      }
    })

    if (studentName !== null) {
      studentList.push({
        id: key,
        name: `${studentName.firstname} ${studentName.lastname}`,
        accountType: studentName.accounttype,
        value: value
      })
    }
  }
  const studentLists = await User.findAll({
    where: {
      [Sequelize.Op.not]:{userid:Object.keys(counts)}
    }
  })
  for (let index = 0; index < studentLists.length; index++) {
    const dataNumber = studentLists[index]
    studentList.push({
      id: dataNumber.userid,
      name: `${dataNumber.firstname} ${dataNumber.lastname}`,
      accountType: dataNumber.accounttype,
      value: 0
    })
  }
  if (!counts) {
    const studentLists = await User.findAll()
    for (let index = 0; index < studentLists.length; index++) {
      const dataNumber = studentLists[index]
      studentList.push({
        id: dataNumber.userid,
        name: `${dataNumber.firstname} ${dataNumber.lastname}`,
        accountType: dataNumber.accounttype,
        value: 0
      })
    }
  }

  res.send(studentList)
}

const removeTask = async(req, res) => {
  task.destroy({
    where: {
      studentid: req.body.studentid
    }
 }).then((rowDeleted) => {
   if(rowDeleted === 1){
      res.send('Deleted successfully');
    }
 }, function(err){
     res.send(err); 
 });  
}

const editTask = async (req, res) => {
  task.update({
    taskname: req.body.taskname,
    details: req.body.details,
    date: req.body.date,
    deadline: req.body.deadline
  }, {
    where: {
      studentid: req.body.studentid,
    }
  })
  .then(async() => {    
    const task = await task.findOne({where: { studentid: req.body.studentid } })
    res.send(task)
  })
}


// reuse for task and remainder?
const remainder = async( req, res ) => {
  const remainder = await task.findAll({
    where: {
      studentid: req.body.studentid
    }
  })
  res.send(remainder)
}

const deleteGrade =  (req, res) => {
  grades.destroy({
    where: {
      studentid: req.body.studentid    }
 }).then((rowDeleted) => {
   if(rowDeleted === 1){
      res.send('Deleted successfully');
    }
 }, function(err){
     res.send(err); 
 });
}

const addGrade = async (req, res) => {
  grades.create({
    studentid: req.body.studentid,
    subject: req.body.subject,
    grade: req.body.grade,
    status: req.body.status,
    date: req.body.date
  })
  .then(grade => {
    res.status(200).send({grade});
  })
  .catch((error) => {
    console.log(error.toString());
    res.status(400).send(error)
  });
}

const editGrade = async (req, res) => {
  task.update({
    subject: req.body.subject,
    grade: req.body.grade,
    status: req.body.status,
    date: req.body.date
  }, {
    where: {
      studentid: req.body.studentid,
    }
  })
  .then(async() => {    
    const task = await task.findOne({where: { studentid: req.body.studentid } })
    res.send(task)
  })
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
    listUserBasedTypes,
    addTask,
    displayTask,
    remainder,
    addGrade,
    oneStudentGrade,
    editEmployees,
    activedAccount,
    numberOfUsers,
    deleteGrade,
    removeTask,
    editTask,
    editGrade,
    singleTask
}