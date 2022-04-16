module.exports = (sequelize, Sequelize) => {
    const workExperience = sequelize.define("workExperience", {
      studentID: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING
      },
      year:{
        type: Sequelize.STRING
      }
    });
    return workExperience;
  };