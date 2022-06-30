const { User, Thought } = require("../models");
const Users = require("../models/User");
const userController = {
    createUser(req, res){
        Users.create(req.body)
            .then((data) => {
                res.json(data)
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);

            })
    },
    deleteUser(req, res){
        Users.findOneAndDelete({username: req.params.username})
        .then(() => res.send(`You have deleted this User.`))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err)
        }

    },
    updateUser(req, res){
        Users.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) => 
             !user
                ? res.status(404).json({ message: "Cannot find user with this ID."})
                : res.json(users)
                )
                .catch((err) => res.status(500).json(err));

    },
    findOneUser(req, res){

    },
    findAllUsers(req, res){
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500),json(err))

    },
}

module.exports = userController;