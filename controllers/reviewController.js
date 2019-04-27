const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Review
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    create: function(req, res) {
        console.log(req.body);
        db.Review
            .create(req.body)
            .then(dbReview => db.Game.findOneAndUpdate({ _id: req.body.game_id }, { $push: { reviews: dbReview._id } }, { new: true }))
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Review
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    delete: function(req, res) {
        db.Review
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));      
    }   
}