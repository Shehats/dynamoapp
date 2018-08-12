const config = require('./config');
const AccountRoutes = require('./routes/account-routes');
const PostRoutes = require('./routes/post-routes');

class App {
  constructor () {
    config.dynamo.AWS.config
    .loadFromPath('credentials.json');
    this.app =  new config.ApiBuilder();
    this.dynamodb = new config.AWS.DynamoDB();
    config.dynamo.dynamoDriver(this.dynamodb);
    config.dynamo.createTables((err) => {
      if (err) {
        console.log('Error creating tables: ', err);
      } else {
        console.log('Tables has been created');
      }
    });
    this.acc  = new AccountRoutes(this.app);
    this.post = new PostRoutes(this.app);
  }

  getApp () {
    return this.app;
  }
}

const app = new App();

module.exports = app.getApp();
