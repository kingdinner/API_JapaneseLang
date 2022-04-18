const resources = db.resources

const uploadFile = (req, res, next) => {
    const file = req.file
    if (!file) {
        return res.status(400).send({ message: 'Please upload a file.' });
    }
    resources.Create({
        userID: req.body.userID,
        taskID: req.body.taskID,
        uploaded: req.body.uploaded,
        filename: req.body.filename,
        level: req.body.level,
        type: req.body.type
    })
    .then(users => res.status(200).send(users))
    .catch((error) => {
      console.log(error.toString());
      res.status(400).send(error)
    });
}

const deleteFile = async(req, res) => {
    await resources.destroy({
        where: {
            id: req.body.id
        }
    })
}

module.exports = {
    uploadFiles,
    deleteFile
}