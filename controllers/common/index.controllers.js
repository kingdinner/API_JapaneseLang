const multer = require("multer");
const resources = db.resources

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
       cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
       cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
 });

var upload = multer({ storage: storage });

const uploadFiles = async (req, res, next) => {
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

module.exports = {
    uploadFiles
}