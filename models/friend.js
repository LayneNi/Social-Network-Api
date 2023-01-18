const { Schema, model } = require('mongoose');

// Schema for what makes up a comment
const friendSchema = new Schema({
  username: String,
});

// Initialize the friend model
const Friend = model('friend', friendSchema);

module.exports = Friend;
