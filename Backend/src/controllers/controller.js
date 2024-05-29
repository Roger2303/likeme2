const posts = require("../models/model.js");

class controllers {
  constructor() {}

  getPosts = async (req, res) => {
    try {
      const response = await posts.queryGetPosts();
      res.send(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  createPost = async (req, res) => {
    try {
      const response = await posts.queryCreatePosts(req.body);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  updatePostsById = async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id);
      await posts.queryUptadePostsId(id);
      res.status(200).json({ message: "Le diste like" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  deletePostById = async (req, res) => {
    try {
      const { id } = req.params;
      const response = await posts.queryDeletePostId(id);
      res.status(200).json(response.message);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}

module.exports = new controllers();
