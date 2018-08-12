const config = require('../config');

const dynamo = config.dynamo;
const Joi = config.Joi;

const Account = dynamo.define('Account', {
  hashKey  : 'accountId',
  rangeKey : 'email',
  timestamps : true,
  createdAt: false, 
  updatedAt: 'updateTimestamp',
  schema: {
    accountId: Joi.number(),
    email    : Joi.string().email(),
    name     : Joi.string(),
    password : Joi.string(),
    age      : Joi.number(),
    roles    : dynamo.types.stringSet(),
    settings : {
      username      : Joi.string(),
      acceptedTerms : Joi.boolean().default(false) 
    }
  }
});

Account.config({tableName: 'AccountsTable'});

module.exports = Account;
