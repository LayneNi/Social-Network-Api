const { Post, Friend } = require('../models');

module.exports = {
  getFriends(req, res) {
    Friend.find()
      .then((friend) => res.json(friend))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single Friend
  getSingleComment(req, res) {
    Friend.findOne({ _id: req.params.friendId })
      .then((friend) =>
        !friend
          ? res.status(404).json({ message: 'No Friend found with that id' })
          : res.json(friend)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a comment
  createFriend(req, res) {
    Friend.create(req.body)
      .then((friend) => {
        return Post.findOneAndUpdate(
          { _id: req.body.friendId },
          { $push: { friends: friend._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'Friend created, but no posts with this ID' })
          : res.json({ message: 'Friend created' })
      )
      .catch((err) => {
        console.error(err);
      });
  },
};
