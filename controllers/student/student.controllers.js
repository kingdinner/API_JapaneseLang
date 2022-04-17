const db = require("../../models");
const User = db.user;

const editStudent = (req, res) => {
    User.findOrCreate({
        where: { userid: req.body.userid}
    })
    .then([])
}


module.exports = {
    editStudent
}