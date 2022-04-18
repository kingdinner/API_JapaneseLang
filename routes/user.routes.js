const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controllers");
const functionController = require("../controllers/admin/dashboard.controllers");
const studentController = require("../controllers/student/student.controllers");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/student/editStudentPersonalInformation",
    studentController.editStudentPersonalInformation
  )

  // app.post(
  //   "/api/common/uploadFile",
  //   studentController.uploadFile
  // )

  // app.post(
  //   "/api/common/deleteFile",
  //   studentController.deleteFile
  // )


  app.post(
    "/api/student/editStudentEducation",
    studentController.editStudentEducation
  )

  app.post(
    "/api/student/editWorkExprience",
    studentController.editWorkExprience
  )

  app.post(
    "/api/student/editSkills",
    studentController.editSkills
  )

  app.post(
    "/api/student/editHobby",
    studentController.editHobby
  )

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