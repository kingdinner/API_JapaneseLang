const db = require("../../models");
const multer = require('multer')
const resources = db.resources
const User = db.user;
var fs = require('fs');

const uploadFile = (req, res, next) => {
    const file = req.files
    if (!file) {
        return res.status(400).send({ message: 'Please upload a file.' });
    }
    resources.create({
        userID: req.body.userID,
        taskID: req.body.taskID,
        uploaded: Date.now(),
        filename: req.files[0].filename,
        level: req.body.level,
        type: req.body.type
    })
    .then(async(users) => {
        const userName = await User.findOne({
            where: {
                userid: users.userID
            }
        })
        res.status(200).send({
            userID:users.userID,
            taskID:users.taskID,
            name: `${userName.firstname} ${userName.lastname}`,
            uploaded:users.updatedAt,
            filename:users.filename,
            type:users.type
        })
    })
    .catch((error) => {
      console.log(error.toString());
      res.status(400).send(error)
    });
}

const logOut = (req, res) => {
    res.json({ 'success': data.success, 'message': data.message });
}

const deleteFile = async (req, res) => {
    try {
        fs.unlinkSync(`${process.cwd()}/uploads/${req.body.filename}`);
        const delFile = await resources.destroy({
            where: {
                id: req.body.id
            }
        })
        res.sendStatus(200).send(delFile)
    } catch (error) {
        res.send("invalid")
    }

}

const displayFileDetails = (req, res) => {
    resources.findAll({
        where: {
            userID: req.body.userID
        }
    })
    .then(user => {
        res.send(user)
    })
}

const displayAllFile = async (req, res) => {
    const display = await resources.findAll()
    const displayFiles = []
    display.forEach(element => {
        User.findOne({
            where: {
                userid: element.userID
            }
        })
        displayFiles.push({
            userID:element.userID,
            taskID:element.taskID,
            uploaded:element.updatedAt,
            filename:element.filename,
            type:element.type
        })
    })
    res.send(displayFiles)
   
}

const displayName = async(req, res) => {
    const names = []
    const datas = await User.findAll()
    // .then(name => {
    datas.forEach(element => {
        names.push({ [element.userid]: `${element.firstname}${element.lastname}` })
    });
    
    // })
    res.send(names)
}

const displayFileDownload = async (req, res) => {
    const file = `./uploads/${req.body.filename}`;
    res.download(file);
}

module.exports = {
    displayAllFile,
    uploadFile,
    deleteFile,
    displayFileDetails,
    displayFileDownload,
    logOut,
    displayName
}