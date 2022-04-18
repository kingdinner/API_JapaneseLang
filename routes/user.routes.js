const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controllers");
const functionController = require("../controllers/admin/dashboard.controllers");
const studentController = require("../controllers/student/student.controllers");
const commonController = require("../controllers/common/index.controllers");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  // resources file and assignment
  app.get(
    "/api/common/uploadFile",
    commonController.uploadFile
  )

  app.get(
    "/api/common/displayFileDetails",
    commonController.displayFileDetails
  )

  app.get(
    "/api/common/displayFileDownload",
    commonController.displayFileDownload
  )

  app.post(
    "/api/common/deleteFile",
    commonController.deleteFile
  )
  // ----------------------------------

  // personal information

  app.post(
    "/api/student/editStudentPersonalInformation",
    studentController.editStudentPersonalInformation
  )


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

  //-----------------------------------

  app.get(
    "/api/admin/recentMembers",
    [authJwt.verifyToken],
    functionController.recentMembers
  );

  app.post(
    "/api/admin/listUserBasedTransaction",
    [authJwt.verifyToken],
    functionController.listUserBasedTransaction
  );
};