const { authJwt } = require("../middleware");
const functionController = require("../controllers/admin/dashboard.controllers");
const studentController = require("../controllers/student/student.controllers");
const commonController = require("../controllers/common/index.controllers");

module.exports = function(app) {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'x-www-form-urlencoded, Origin, X-Requested-With, Content-Type, Accept, Authorization, *');
    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Credentials', true);
        return res.status(200).json({});
    }
    next();
  });
  // resources file and assignment
  app.post(
    "/api/common/uploadFile",
    commonController.uploadFile
  )

  app.post(
    "/api/common/displayFileDetails",
    commonController.displayFileDetails
  )

  app.get(
    "/api/common/displayAllFile",
    commonController.displayAllFile
  )  

  app.post(
    "/api/common/displayFileDownload",
    commonController.displayFileDownload
  )

  app.get(
    "/api/common/displayName",
    commonController.displayName
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

  app.post(
    "/api/student/displayGrade",
    studentController.displayGrade
  )

  app.post(
    "/api/student/displayPersonalInformation",
    studentController.displayPersonalInformation
  )

  app.post(
    "/api/student/displayStudentEducation",
    studentController.displayStudentEducation
  )
  
  app.post(
    "/api/student/displayWorkExprience",
    studentController.displayWorkExprience
  )

  app.post(
    "/api/student/displayskillsHobby",
    studentController.displayskillsHobby
  )

  app.post(
    "/api/admin/numberOfUsers",
    functionController.numberOfUsers
  )

  app.post(
    "/api/student/displayPrimaryInformation",
    studentController.displayPrimaryInformation
  )

  app.get(
    "/api/student/displayPrimaryInformation",
    commonController.logOut
  )

  app.post(
    "/api/student/editPrimaryInformation",
    studentController.editPrimaryInformation
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

  app.post(
    "/api/admin/singleTask",
    functionController.singleTask
  );

  app.post(
    "/api/admin/editTask",
    functionController.editTask
  );

  app.get(
    "/api/admin/remainder",
    functionController.remainder
  );
  app.post(
    "/api/admin/removeTask",
    functionController.removeTask
  );
  
  // ----------------------------------
  // Grade

  app.post(
    "/api/admin/addGrade",
    functionController.addGrade
  );

  app.post(
    "/api/admin/oneStudentGrade",
    functionController.oneStudentGrade
  );

  app.post(
    "/api/admin/deleteGrade",
    functionController.deleteGrade
  )

  app.post(
    "/api/student/editGrade",
    functionController.editGrade
  )

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