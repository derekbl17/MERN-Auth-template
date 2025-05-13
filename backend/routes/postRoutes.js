const express = require('express')
const router = express.Router()
const {getPosts,postPosts,putPost,deletePost} = require('../controllers/postController.js')

router.route('/').get(getPosts).post(postPosts)
router.route('/:id').put(putPost).delete(deletePost)

module.exports = router