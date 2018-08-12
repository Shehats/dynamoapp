const Post = require('../models/post');

class PostRoutes {
  constructor (app) {
    app.get('/posts', (req) => Post.scan()
      .loadAll().exec());

    app.get('/posts/{id}', (req) => Post
      .query(req.pathParams.id).exec())

    app.post('/posts', (req) => Post.create(req.body),
      { succes: 201 });

    app.put('/posts/{id}', (req) => Post.update(req.body),
      { succes: 201 });

    app.delete('/posts/{id}', (req) => Post.delete(req.pathParams.id),
      { succes: 200 });
  }
}

module.exports = PostRoutes;
