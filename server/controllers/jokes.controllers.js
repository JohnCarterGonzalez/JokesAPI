const Joke = require('../models/jokes.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allDaJokes) => {
            res.json({ users: allDaJokes })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong, findAll()', error: err })
        });
}
 
module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => {
            res.json({ user: oneSingleJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong, oneSingle', error: err })
        });}
 
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => {
            res.json({ user: newlyCreatedJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong, newJoke', error: err })
        });}
 
module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json({ user: updatedJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong, updateJoke', error: err })
        });}
 
module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong, deleteJoke', error: err })
        });}
