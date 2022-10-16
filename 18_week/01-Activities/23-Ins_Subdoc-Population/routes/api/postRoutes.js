const router = require('express').Router();
const {
  getSinglePost,
  getPosts,
  createPost,
} = require('../../controllers/postController');

// /api/posts
router.route('/').get(getPosts).post(createPost);

// /api/posts/:postId
router.route('/:postId').get(getSinglePost);

module.exports = router;
