const db = require("../../models");
const personalInformation = db.personalInformation;
const StudentEducation = db.userEducation;

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
            res.status(200).send({
                Nationality: user.Nationality,
                Religion: user.Religion,
                maritalStatus: user.maritalStatus,
                EmergencyPersonNamePrimary: user.EmergencyPersonNamePrimary,
                EmergencyRelationsShipsPrimary: user.EmergencyRelationsShipsPrimary,
                EmergencyPhonePrimary: user.EmergencyPhonePrimary,
                EmergencyPersonNameSecondary: user.EmergencyPersonNameSecondary,
                EmergencyRelationsShipsSecondary: user.EmergencyRelationsShipsSecondary,
                EmergencyPhoneSecondary: user.EmergencyPhoneSecondary
            })
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
                studentID: req.body.studentid
            }
        })
        .then(user => {
            res.status(200).send({
                Nationality: user.Nationality,
                Religion: user.Religion,
                maritalStatus: user.maritalStatus,
                EmergencyPersonNamePrimary: user.EmergencyPersonNamePrimary,
                EmergencyRelationsShipsPrimary: user.EmergencyRelationsShipsPrimary,
                EmergencyPhonePrimary: user.EmergencyPhonePrimary,
                EmergencyPersonNameSecondary: user.EmergencyPersonNameSecondary,
                EmergencyRelationsShipsSecondary: user.EmergencyRelationsShipsSecondary,
                EmergencyPhoneSecondary: user.EmergencyPhoneSecondary
            })
        });
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
        .then(user => {
            res.status(200).send({
                school: user.school,
                level: user.level,
                year: user.year
            })
        });
    }
}


module.exports = {
    editStudentPersonalInformation,
    editStudentEducation
}