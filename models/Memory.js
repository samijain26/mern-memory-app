const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memorySchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
   
    },
    tag: {
        type: String,
        default: "General"
        
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Memory = mongoose.model("Memory", memorySchema);

module.exports = Memory;
