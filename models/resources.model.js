module.exports = (sequelize, Sequelize) => {
    const resources = sequelize.define("resources", {
      userID: {
        type: Sequelize.STRING
      },
      taskID: {
        type: Sequelize.STRING
      },
      uploaded:{
        type: Sequelize.STRING
      },
      filename: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
    });
    return resources;
  };