const { Schema, model } = require("mongoose")
const reactionSchema = requier("./Reaction")

const { Schema, model } = require("mongoose")

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
     max_length: 280
    },
    createdAt: {
      type: Date,
      default: Date.now(),

    
    },
    username: {
        type: String,
        required: true
    }
  },
  reactions: [
      reactionSchema
  ],
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model('thought', userSchema);

thoughtSchema.virtual("reactionCount").get(funtion(){
    return this.friends.length
});

module.exports = User;

module.exports = Thought;