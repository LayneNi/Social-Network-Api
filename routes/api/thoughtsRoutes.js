const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThoughts
} = require('../../controllers/thoughtsController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/users/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThoughts);

module.exports = router;