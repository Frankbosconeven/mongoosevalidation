const{Schema, model} = require("mongoose");

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    published: {
        type: Boolean,
        default: false,
        min: [4, "enter a valid word"]
    
    },
});

module.exports = model("Post", postSchema);