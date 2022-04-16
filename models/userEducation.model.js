module.exports = (sequelize, Sequelize) => {
    const educationInfo = sequelize.define("educationInfo", {
      studentID: {
        type: Sequelize.STRING
      },
      school: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.STRING
      },
      year:{
        type: Sequelize.STRING
      }
    });
    return educationInfo;
  };