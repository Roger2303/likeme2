const express = require("express");
const posts = require("../controllers/controller.js");
const router = express.Router();


router.get("/posts", posts.getPosts);
router.post("/posts", posts.createPost);
router.put("/posts/like/:id", posts.updatePostsById);
router.delete("/posts/:id", posts.deletePostById);

module.exports = router;
