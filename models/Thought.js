const { Schema, model } = require("mongoose")
const reactionSchema = requier("./Reaction")



const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
     max_length: 280
    },
    createdAt: {
      type: Date,
      default: Date.now()

    
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema],
    },
  {
    toJSON: {
      getters: true,
    },
  }
);

thoughtSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const Thought = model('thought', userSchema);




module.exports = Thought;