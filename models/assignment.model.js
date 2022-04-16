module.exports = (sequelize, Sequelize) => {
    const assignment = sequelize.define("assignment", {
      studentID: {
        type: Sequelize.STRING
      },
      taskID: {
        type: Sequelize.STRING
      },
      fileName: {
        type: Sequelize.STRING
      },
      uploaded:{
        type: Sequelize.STRING
      }
    });
    return assignment;
  };