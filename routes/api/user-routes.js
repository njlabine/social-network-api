const router = require("express").Router();
const {
    createUser,
    deleteUser,
    updateUser,
    findOneuser,
    findAllUsers
} = require("../../controllers/user-controller")

router.route("/").get(findAllUsers).post(createUser);
module.exports = router