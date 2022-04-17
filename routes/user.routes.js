const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controllers");
const functionController = require("../controllers/admin/dashboard.controllers");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/admin/recentMembers",
    [authJwt.verifyToken, authJwt.isAdmin || authJwt.isModerator],
    functionController.recentMembers
  );

  app.post(
    "/api/admin/listUserBasedTransaction",
    [authJwt.verifyToken, authJwt.isAdmin],
    functionController.listUserBasedTransaction
  );
};