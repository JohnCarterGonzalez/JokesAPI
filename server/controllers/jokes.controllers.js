const Joke = require('../models/jokes.models');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((findAllJokes) => {
            res.json({ findAllJokes })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong, findAll()', error: err })
        });
}
 
module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => {
            res.json({ oneSingleJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong, oneSingle', error: err })
        });}
 
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => {
            res.json({ newlyCreatedJoke })
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
            res.json({ updatedJoke })
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

