const Post = require('../models/Post');
const errorHandler = require('../utils/errorHandler');

module.exports.getMyPost = async function (req, res) {
  try {
    const posts = await Post.findById({
      post: req.params.postId,
      user: req.user.id
    })
    res.status(200).json(posts)
  } catch (e) {
    errorHandler(res, e)
  }
};

module.exports.getPost = async function (req, res) {
  try {
    const posts = await Post.findById(req.params.postId);
    res.status(200).json(posts)
  } catch (e) {
    errorHandler(res, e)
  }
};

module.exports.getPosts = async function (req, res) {
  try {
    const posts = await Post.find([...{groups: req.groups.id}]);
    res.status(200).json(posts)
  } catch (e) {
    errorHandler(res, e)
  }
};

module.exports.getMyPosts = async function (req, res) {
  try {
    const posts = await Post.find({user: req.user.id});
    res.status(200).json(posts)
  } catch (e) {
    errorHandler(res, e)
  }
};

module.exports.createPost = async function (req, res) {
  try {
    const post = await new Post({
      description: req.body.description,
      modifiedDate: req.body.modifiedDate,
      publicDate: req.body.publicDate,
      imageSrc: req.body.imageSrc,
      user: req.user.id,
    }).save();
    res.status(201).json(post)
  } catch (e) {
    errorHandler(res, e)
  }
};

module.exports.updatePost = async function (req, res) {
  try {
    const post = await new Post.findOneAndUpdate(
      {_id: req.params.id},
      {$set: req.body},
      {new: true}
      );
    res.status(200).json(post)
  } catch (e) {
    errorHandler(res, e)
  }
};

module.exports.deletePost = async function (req, res) {
  try {
    await Post.remove({_id: req.params.id})
    res.status(200).json({
      message: 'Post deleted!'
    })
  } catch (e) {
    errorHandler(res, e)
  }
};
