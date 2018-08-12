const dynamo = require('dynamodb');
const Joi = require('joi');
const ApiBuilder = require('claudia-api-builder');
const AWS = require('aws-sdk');

module.exports = {
  dynamo: dynamo,
  Joi: Joi,
  ApiBuilder: ApiBuilder,
  AWS: AWS
}