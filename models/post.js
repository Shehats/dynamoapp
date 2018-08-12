const config = require('../config');

const dynamo = config.dynamo;
const Joi = config.Joi;

const Post = dynamo.define('Post', {
  hashKey  : 'postId',
  rangeKey : 'email',
  timestamps : true,
  createdAt: false, 
  updatedAt: 'updateTimestamp',
  schema   : {
    postId : Joi.number(),
    email  : Joi.string().email(),
    content: Joi.string()
  }
});

Post.config({tableName: 'PostsTable'});

module.exports = Post;