const express = require('express')
const {
  getPosts, getCurrentPost, createPost, updatePost, deletePost,
} = require('../controllers/postsController')

const postsRouter = express.Router()

postsRouter.route('/')
  .get(getPosts)
  .post(createPost)


postsRouter.route('/:id')
  .get(getCurrentPost)
  .patch(updatePost)
  .delete(deletePost)

module.exports = {
  postsRouter,
}
