const Post = require("./post.model")

//geting a request from the database
exports.getAllPost = async (req, res) => {
    const post = await Post.find({});
    res.status(200).json({post});
};

exports.creatPost = async (req, res) => {
    const {title, body, published,} = req.body;

    const post = await Post.create({
        title,
        body,
        published,
    });

    res.status(201).json({Post })
}