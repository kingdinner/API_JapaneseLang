const db = require("../../models");
const personalInformation = db.personalInformation;
const StudentEducation = db.userEducation;
const WorkExprience = db.userWorkExperience;
const skillsHobby = db.skills
const grade = db.grade

const editStudentPersonalInformation = async (req, res) => {
    const existAccountID = await personalInformation.findOne({where: { studentID: req.body.studentid } })
    if (!existAccountID) {
        personalInformation.create({
            studentID: req.body.studentid,
            Nationality: req.body.Nationality,
            Religion: req.body.Religion,
            maritalStatus: req.body.maritalStatus,
            EmergencyPersonNamePrimary: req.body.EmergencyPersonNamePrimary,
            EmergencyRelationsShipsPrimary: req.body.EmergencyRelationsShipsPrimary,
            EmergencyPhonePrimary: req.body.EmergencyPhonePrimary,
            EmergencyPersonNameSecondary: req.body.EmergencyPersonNameSecondary,
            EmergencyRelationsShipsSecondary: req.body.EmergencyRelationsShipsSecondary,
            EmergencyPhoneSecondary: req.body.EmergencyPhoneSecondary
        })
        .then(user => {
            res.status(200).send(user)
        })        
    } else {
        personalInformation.update({ 
            Nationality: req.body.Nationality,
            Religion: req.body.Religion,
            maritalStatus: req.body.maritalStatus,
            EmergencyPersonNamePrimary: req.body.EmergencyPersonNamePrimary,
            EmergencyRelationsShipsPrimary: req.body.EmergencyRelationsShipsPrimary,
            EmergencyPhonePrimary: req.body.EmergencyPhonePrimary,
            EmergencyPersonNameSecondary: req.body.EmergencyPersonNameSecondary,
            EmergencyRelationsShipsSecondary: req.body.EmergencyRelationsShipsSecondary,
            EmergencyPhoneSecondary: req.body.EmergencyPhoneSecondary
        }, {
            where: {
                studentID: req.body.studentid,
            }
        }).then(async() => {    
            const displayUpdate = await personalInformation.findOne({where: { studentID: req.body.studentid } })
            res.send(displayUpdate)
        })
    }
}

const editStudentEducation = async (req, res) => {
    const existAccountID = await StudentEducation.findOne({where: { studentID: req.body.studentid } })
    if (!existAccountID) {
        StudentEducation.create({
            studentID: req.body.studentid,
            school: req.body.school,
            level: req.body.level,
            year: req.body.year
        })
        .then(user => {
            res.status(200).send({
                school: user.school,
                level: user.level,
                year: user.year
            })
        })        
    } else {
        StudentEducation.update({ 
            school: req.body.school,
            level: req.body.level,
            year: req.body.year
        }, {
            where: {
                studentID: req.body.studentid
            }
        })
        .then(async() => {    
            const displayUpdate = await StudentEducation.findOne({where: { studentID: req.body.studentid } })
            res.send(displayUpdate)
        })
    }
}

const editWorkExprience = async (req, res) => {
    const existAccountID = await WorkExprience.findOne({where: { studentID: req.body.studentid } })
    if (!existAccountID) {
        WorkExprience.create({
            studentID: req.body.studentid,
            school: req.body.school,
            level: req.body.level,
            year: req.body.year
        })
        .then(user => {
            res.status(200).send({
                school: user.school,
                level: user.level,
                year: user.year
            })
        })        
    } else {
        WorkExprience.update({ 
            school: req.body.school,
            level: req.body.level,
            year: req.body.year
        }, {
            where: {
                studentID: req.body.studentid
            }
        })
        .then(async() => {    
            const displayUpdate = await WorkExprience.findOne({where: { studentID: req.body.studentid } })
            res.send(displayUpdate)
        })
    }
}


const editSkills = async (req, res) => {
    const existAccountID = await skillsHobby.findOne({where: { studentID: req.body.studentid } })
    if (!existAccountID) {
        skillsHobby.create({
            skills: req.body.skills,
            specialty: req.body.specialty
        })
        .then(user => {
            res.status(200).send({
                skills: user.skills,
                specialty: user.specialty
            })
        })        
    } else {
        skillsHobby.update({ 
            skills: req.body.skills,
            specialty: req.body.specialty
        }, {
            where: {
                studentID: req.body.studentid
            }
        })
        .then(async() => {    
            const displayUpdate = await skillsHobby.findOne({where: { studentID: req.body.studentid } })
            res.send(displayUpdate)
        })
    }
}

const editHobby = async (req, res) => {
    const existAccountID = await skillsHobby.findOne({where: { studentID: req.body.studentid } })
    if (!existAccountID) {
        skillsHobby.create({
            hobby: req.body.hobby
        })
        .then(user => {
            res.status(200).send({
                hobby: user.hobby
            })
        })        
    } else {
        skillsHobby.update({ 
            hobby: req.body.hobby
        }, {
            where: {
                studentID: req.body.studentid
            }
        })
        .then(async() => {    
            const displayUpdate = await skillsHobby.findOne({where: { studentID: req.body.studentid } })
            res.send(displayUpdate)
        })
    }
}

const displayGrade = async (req, res) => {
    const grades = await grade.findAll({
        where :{
            studentid: req.body.studentid
        }
    })
    res.send(grades)
}

module.exports = {
    editStudentPersonalInformation,
    editStudentEducation,
    editWorkExprience,
    editSkills,
    editHobby,
    displayGrade
}