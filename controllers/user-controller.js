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
    findOneUser(req, res) {
        Users.findOne({username: req.params.username})
        .select('-__v')
        .then((user) => res.json(user))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err)
        })
    },
    findAllUsers(req, res){
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500),json(err))

    },
allTheUsers(req, res) {
        Users.find()
        .select('-__v')
        .then((usersData) => {res.json(usersData)})
        .catch((err) => res.status(500).json(err))
    },
removeAUser(req,res){
        User.findOneAndRemove({_id: req.params.id})
            .then((user) => 
            User.findOneAndUpdate({_id: req.params.id}, {$pull: {_id: req.params.id}}, {new: true})) 
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err))
    },
}

module.exports = userController;