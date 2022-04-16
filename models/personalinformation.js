module.exports = (sequelize, Sequelize) => {
    const personalInformation = sequelize.define("personalInformation", {
      studentID: {
        type: Sequelize.STRING
      },
      Nationality: {
        type: Sequelize.STRING
      },
      Religion: {
        type: Sequelize.STRING
      },
      maritalStatus: {
        type: Sequelize.STRING
      },
      EmergencyPersonNamePrimary: {
        type: Sequelize.STRING
      },
      EmergencyRelationsShipsPrimary: {
        type: Sequelize.STRING
      },
      EmergencyPhonePrimary: {
        type: Sequelize.STRING
      },
      EmergencyPersonNameSecondary: {
        type: Sequelize.STRING
      },
      EmergencyRelationsShipsSecondary: {
        type: Sequelize.STRING
      },
      EmergencyPhoneSecondary: {
        type: Sequelize.STRING
      }
    });
    return personalInformation;
  };