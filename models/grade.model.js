module.exports = (sequelize, Sequelize) => {
    const grade = sequelize.define("grade", {
      studentid: {
        type: Sequelize.STRING
      },
      subject: {
        type: Sequelize.STRING
      },
      grade: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      }
    });
    return grade;
  };