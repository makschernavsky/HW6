const { db } = require('../../DB')

const getPosts = (req, res) => {
  const filter = req.query.filter && JSON.parse(req.query.filter)
  let dataForClient = db.posts.map(({ email, ...rest }) => rest)

  if (filter) {
    if (filter.search) {
      const searchRegExp = new RegExp(filter.search, 'i')
      dataForClient = dataForClient.filter((post) => searchRegExp.test(post.title))
    }
  }
  setTimeout(() => {
    res.json(dataForClient)
  }, 1e3)
}

const getCurrentPost = (req, res) => {
  const { id } = req.params

  const dataForClient = db.posts.find((post) => post.id === +id)

  if (!dataForClient) {
    return res.sendStatus(404)
  }

  return setTimeout(() => {
    res.json(dataForClient)
  }, 1e3)
}

// eslint-disable-next-line consistent-return
const createPost = (req, res) => {
  const dataFromClient = req.body

  if (!Object.values(dataFromClient).every((value) => !!value)) return res.sendStatus(400)

  const newPost = {
    ...dataFromClient,
    id: Date.now(),
  }

  db.posts.push(newPost)

  res.status(201).json(newPost)
}

const updatePost = (req, res) => {
  const { id } = req.params

  const currentPostIndex = db.posts.findIndex((post) => post.id === +id)

  if (currentPostIndex === -1) return res.sendStatus(404)

  if (!Object.values(req.body).every((value) => !!value)) return res.sendStatus(400)

  db.posts[currentPostIndex] = {
    ...db.posts[currentPostIndex],
    ...req.body,
  }

  return res.json(db.posts[currentPostIndex])
}

const deletePost = (req, res) => {
  const { id } = req.params

  const index = db.posts.findIndex((post) => post.id === +id)

  if (index > -1) {
    db.posts.splice(index, 1)

    return res.sendStatus(200)
  }

  return res.sendStatus(404)
}


module.exports = {
  getPosts,
  getCurrentPost,
  deletePost,
  updatePost,
  createPost,
}
