const db = require("../../models");
const multer = require('multer')
const resources = db.resources

const uploadFile = (req, res, next) => {
    console.log(req.files[0].filename);
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
    .then(users => res.status(200).send(users))
    .catch((error) => {
      console.log(error.toString());
      res.status(400).send(error)
    });
}

const deleteFile = async (req, res) => {
    const delFile = await resources.destroy({
        where: {
            id: req.body.id
        }
    })
    res.sendStatus(200).send(delFile)
}

const displayFileDetails = async (req, res) => {
    const display = await resources.findAll({
        where: {
            userID: req.body.userID,
            type: req.body.type,
            level: req.body.level
        }
    })
    res.send(display)
}

const displayFileDownload = async (req, res) => {
    const file = `${__dirname}/uploads/${req.body.filename}`;
    res.download(file);
}

module.exports = {
    uploadFile,
    deleteFile,
    displayFileDetails,
    displayFileDownload
}