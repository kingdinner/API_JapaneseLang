const { authJwt } = require("../middleware");
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
  app.post(
    "/api/common/uploadFile",
    commonController.uploadFile
  )

  app.get(
    "/api/common/displayFileDetails",
    commonController.displayFileDetails
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

  app.get(
    "/api/student/displayGrade",
    studentController.displayGrade
  )

  app.get(
    "/api/student/displayPersonalInformation",
    studentController.displayPersonalInformation
  )

  app.get(
    "/api/student/displayStudentEducation",
    studentController.displayStudentEducation
  )
  
  app.get(
    "/api/student/displayWorkExprience",
    studentController.displayWorkExprience
  )

  app.get(
    "/api/student/displayskillsHobby",
    studentController.displayskillsHobby
  )

  app.get(
    "/api/admin/numberOfUsers",
    functionController.numberOfUsers
  )

  //-----------------------------------
  
  // task

  app.get(
    "/api/admin/displayTask",
    functionController.displayTask
  );

  app.post(
    "/api/admin/addTask",
    functionController.addTask
  );

  app.get(
    "/api/admin/remainder",
    functionController.remainder
  );
  
  // ----------------------------------
  // Grade

  app.post(
    "/api/admin/addGrade",
    functionController.addGrade
  );

  app.get(
    "/api/admin/oneStudentGrade",
    functionController.oneStudentGrade
  );

  //------------------------------------
  app.get(
    "/api/admin/recentMembers",
    functionController.recentMembers
  );

  app.post(
    "/api/admin/listUserBasedTypes",
    functionController.listUserBasedTypes
  );

  app.post(
    "/api/admin/editEmployees",
    functionController.editEmployees
  );

  app.post(
    "/api/admin/activedAccount",
    functionController.activedAccount
  );
};