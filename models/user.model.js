module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      firstname: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      dateofbirth: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      contactnumber: {
        type: Sequelize.STRING
      }
    });
    return User;
  };