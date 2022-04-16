module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      UserID: {
        type: Sequelize.STRING
      },
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
      },
      accounttype: {
        type: Sequelize.STRING
      },
      SNSAccount: {
        type:Sequelize.STRING
      },
      joiningDate: {
        type:Sequelize.STRING
      },
      group: {
        type:Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      }
    });
    return User;
  };