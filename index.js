const express = require("express");

const postRouter = require("./modules/posts/post.route");

const { dbConnect } = require("./config/dbConnect");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to my server");
});

app.use("/post", postRouter);

const start = async() => {
  await dbConnect();

  app.listen(4000, () => {
    console.log("Server listening to https://localhost:4000");
  });
}
start();
