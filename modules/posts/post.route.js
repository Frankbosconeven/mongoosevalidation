const router = require("express").Router;
const {creatPost, getAllPost} = require("./post.controller");

const postRouter = router();

postRouter.route("/").get(getAllPost).post(creatPost);

module.exports = postRouter;