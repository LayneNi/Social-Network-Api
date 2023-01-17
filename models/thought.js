const { Schema, model } = require('mongoose');

const thoughtsSchema = new Schema(
  {
    thoughtText: { type: String,  required: true, minLength: 1, maxLength: 280, },
    createdAt: { type: date, default: Date.now },
    username: { type: String,  required: true },
    reactions: [{ type: Schema.Types.ObjectId, ref: 'reactionSchema' }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
