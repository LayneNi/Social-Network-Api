const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  addFriend,
  updateUser
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser);

router.route('/:userId/friend/:userId').post(addFriend);
module.exports = router;