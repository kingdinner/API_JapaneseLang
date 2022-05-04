const db = require("../../models");
const userInformation = db.user
const personalInformation = db.personalInformation;
const StudentEducation = db.userEducation;
const WorkExprience = db.userWorkExperience;
const skillsHobby = db.skills
const grade = db.grade

const editPrimaryInformation = async (req, res) => {
    userInformation.update({ 
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        address: req.body.address,
        dateofbirth:  req.body.dateofbirth,
        gender: req.body.gender,
        contactnumber: req.body.contactnumber,
        SNSAccount:  req.body.SNSAccount
    }, {
        where: {
            studentid: req.body.studentid,
        }
    }).then(async() => {    
        const displayUpdate = await userInformation.findOne({where: { studentid: req.body.studentid } })
        res.send(displayUpdate)
    })
}

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
    if (req.body.create = "new") {
        existAccountID = 'new'
    }
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
    if (req.body.create = "new") {
        existAccountID = 'new'
    }
    if (!existAccountID) {
        WorkExprience.create({
            position: req.body.position,
            company: req.body.company,
            year: req.body.year
        })
        .then(user => {
            res.status(200).send({
                position: req.body.position,
                company: req.body.company,
                year: req.body.year
            })
        })        
    } else {
        WorkExprience.update({ 
            position: req.body.position,
            company: req.body.company,
            year: req.body.year
        }, {
            where: {
                studentID: req.body.studentid
            }
        })
        .then(async() => {    
            const displayUpdate = await WorkExprience.findAll({where: { studentID: req.body.studentid } })
            res.send(displayUpdate)
        })
    }
}


const editSkills = async (req, res) => {
    const existAccountID = await skillsHobby.findOne({where: { studentID: req.body.studentid } })
    if (req.body.create = "new") {
        existAccountID = 'new'
    }
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
    if (req.body.create = "new") {
        existAccountID = 'new'
    }
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

const displayPersonalInformation = (req, res) => {
    personalInformation.findOne({
        where: {
            studentid: req.body.studentid
        }
    })
    .then(personalInformation => {
        res.status(200).send({personalInformation});
    })
    .catch((error) => {
        console.log(error.toString());
        res.status(400).send(error)
    });
}

const displayStudentEducation = async (req, res) => {
    StudentEducation.findOne({
        where: {
            studentid: req.body.studentid
        }
    })
    .then(StudentEducation => {
        res.status(200).send({StudentEducation});
    })
    .catch((error) => {
        console.log(error.toString());
        res.status(400).send(error)
    });
}

const displayWorkExprience = (req, res) => {
    WorkExprience.findOne({
        where: {
            studentid: req.body.studentid
        }
    })
    .then(WorkExprience => {
        res.status(200).send({WorkExprience});
    })
    .catch((error) => {
        console.log(error.toString());
        res.status(400).send(error)
    });
}

const displayPrimaryInformation = (req, res) => {
    userInformation.findOne({
        where: {
            userid: req.body.userid
        }
    })
    .then(userInformation => {
        res.status(200).send({userInformation});
    })
    .catch((error) => {
        console.log(error.toString());
        res.status(400).send(error)
    });
}

const displayskillsHobby =  (req, res) => {
    skillsHobby.findOne({
        where: {
            studentid: req.body.studentid
        }
    })
    .then(skillsHobby => {
        res.status(200).send({skillsHobby});
    })
    .catch((error) => {
        console.log(error.toString());
        res.status(400).send(error)
    });
}

module.exports = {
    editStudentPersonalInformation,
    editStudentEducation,
    editWorkExprience,
    editSkills,
    editHobby,
    editPrimaryInformation,
    displayPrimaryInformation,
    displayGrade,
    displayPersonalInformation,
    displayStudentEducation,
    displayskillsHobby,
    displayWorkExprience
}