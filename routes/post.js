const express = require('express');
const passport = require('passport');
const controller = require('../controllers/post');
const router = express.Router();

router.get('/:postId', passport.authenticate('jwt', {session: false}), controller.getPost);
router.get('/', passport.authenticate('jwt', {session: false}) , controller.getPosts);
router.post('/', controller.createPost);
router.patch('/:id', controller.updatePost);
router.delete('/:id', controller.deletePost);


module.exports = router;
