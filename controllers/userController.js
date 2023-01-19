const User = require('../models/user');

module.exports = {
  getUsers(req, res) {
    User.find()
      .populate('thoughts')
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .populate('thoughts')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
       { $set: req.body }, 
      { runValidators: true, new: true }
    )
      .then((User) =>
        !User
          ? res.status(404).json({ message: 'No User with this id!' })
          : res.json(User)
      )
      .catch((err) => res.status(500).json(err));
  },
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      // { $addToSet: { friends: req.body.username } },
      { $push: { friends: req.body.username } },
      { runValidators: true, new: true }
    )
      .then((User) =>
        !User
          ? res.status(404).json({ message: 'No User with this id!' })
          : res.json(User)
      )
      .catch((err) => res.status(500).json(err));
  },
};


