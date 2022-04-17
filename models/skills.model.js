module.exports = (sequelize, Sequelize) => {
    const skills = sequelize.define("skills", {
      studentID: {
        type: Sequelize.STRING
      },
      skills: {
        type: Sequelize.STRING
      },
      specialty: {
        type: Sequelize.STRING
      },
      hobby:{
        type: Sequelize.STRING
      }
    });
    return skills;
  };