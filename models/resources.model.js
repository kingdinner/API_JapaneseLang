module.exports = (sequelize, Sequelize) => {
    const resources = sequelize.define("resources", {
      level: {
        type: Sequelize.STRING
      },
      filename: {
        type: Sequelize.STRING
      }
    });
    return resources;
  };