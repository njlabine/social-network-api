const { Thoughts, Users } = require('../models')

const thoughtsControle = {
 getAllThoughts(req, res) {
        Thoughts.find()
        .select('-__v')
        .then((thoughtsData) => {res.json(thoughtsData)})
        .catch((err) => res.status(500).json(err))
    },

Onethought(req,res){
        Thoughts.findOne({_id: req.params.id})
            .select('__v')
            .then((user) => res.json(user))
            .catch((err) => res.status(400).json(err));
    },

terminateThought(req, res) {
        Thoughts.findOneAndDelete({_id: req.params.id})
            .then(() => res.send(`This thought has been deleted`))
            .catch((err) => {
                console.log(err);
                res.status(500).json(err)
        })
    },
updateAThought(req, res) {
        Thoughts.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {runValidators: true, new: true}
        )
        .then((updatedThought) => res.json(updatedThought))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err)
        })
    },
getASingleThought(req, res) {
        Thoughts.findOne({ _id: req.params.id })
            .select('-__v')
            .then((user) =>
                !user
                ? res.status(404).json({ message: 'No thought matches that ID!' })
                : res.json(user))
            .catch((err) => res.status(500).json(err));
        },
    deleteThought(req, res) {
        Thoughts.findOneAndDelete({_id: req.params.id})
            .then(() => res.send(`You have deleted this thought!`))
            .catch((err) => {
                console.log(err);
                res.status(500).json(err)
        })
    },


module.exports = thoughtsControle