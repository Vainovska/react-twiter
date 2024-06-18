// Підключаємо технологію express для back-end сервера
const express = require('express')
//Створюємо роутер - місце, куди ми підключаємо
const router = express.Router()
const { Post } = require('../class/post')

router.post('/post-create', function (req, res) {
  try {
    const { username, text, postId } = req.body
    console.log({ username, text, postId })
    if (!username || !text) {
      return res.status(400).json({
        message:
          'Потрібно передати всі данні для створення поста',
      })
    }
    let post = null
    console.log(postId, 'postID')

    if (postId) {
      post = Post.getById(Number(postId))
      console.log('post', post)
    }
    if (!post) {
      return res.status(400).json({
        message: 'Пост з таким ID не існує',
      })
    }
    const newPost = Post.create(username, text, post)

    return res.status(200).json({
      post: {
        id: newPost.id,
        text: newPost.text,
        username: newPost.username,
        date: newPost.date,
      },
    })
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    })
  }
})
router.get('/post-list', function (res, req) {
  try {
    const list = Post.getList()
    if (list.length === 0) {
      return res.status(200).json({
        list: [],
      })
    }
    return res.status(200).json({
      list: list.map(({ id, username, text, date }) => ({
        id,
        username,
        text,
        date,
      })),
    })
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    })
  }
})
router.get('/post-item', function (req, res) {
  try {
    const { id } = req.query
    if (!id) {
      return res.status(400).json({
        message: 'Потрібно передати ID поста',
      })
    }
    return res.status(200).json({
      post: {
        id: post.id,
        text: post.text,
        username: post.username,
        date: post.date,
        reply: post.reply.map((reply) => ({
          id: reply.id,
          username: reply.username,
          text: reply.text,
          date: reply.date,
        })),
      },
    })
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    })
  }
})
//Підключаємо роутер до бек-енду
module.exports = router
