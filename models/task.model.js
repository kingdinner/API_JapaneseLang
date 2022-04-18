module.exports = (sequelize, Sequelize) => {
    const task = sequelize.define("task", {
      studentid: {
        type: Sequelize.STRING
      },
      taskname: {
        type: Sequelize.STRING
      },
      details: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      deadline: {
        type: Sequelize.STRING
      }
    });
    return task;
  };