const { Schema, model, Types } = require("mongoose")

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: string,
      required: true,
      max_length: 280

    
    },
    username: {
        type: String,
        required: true
    }
  },
  createdAt: {
      type: Date,
      default: ate 
  }
  {
    toJSON: {
      getters: true,
    },
  }
);



module.exports = reactionSchema;
