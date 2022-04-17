const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.personalInformation = require("./personalinformation.model.js")(sequelize, Sequelize);
db.assignment = require("../models/assignment.model.js")(sequelize, Sequelize);
db.grade = require("../models/grade.model.js")(sequelize, Sequelize);
db.resources = require("../models/resources.model.js")(sequelize, Sequelize);
db.skills = require("../models/skills.model.js")(sequelize, Sequelize);
db.task = require("../models/task.model.js")(sequelize, Sequelize);
db.userEducation = require("../models/userEducation.model.js")(sequelize, Sequelize);
db.userWorkExperience = require("../models/userWorkExperience.model.js")(sequelize, Sequelize);
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});
db.ROLES = ["student", "admin", "professor"];
module.exports = db;