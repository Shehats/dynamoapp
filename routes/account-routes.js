const Account = require('../models/account');

class AccountRoutes {
  constructor (app) {
    app.get('/accounts', (req) => Account.scan()
      .loadAll().exec());

    app.get('/accounts/{id}', (req) => Account
      .query(req.pathParams.id).exec())

    app.post('/accounts', (req) => Account.create(req.body),
      { succes: 201 });

    app.put('/accounts/{id}', (req) => Account.update(req.body),
      { succes: 201 });

    app.delete('/accounts/{id}', (req) => Account.delete(req.pathParams.id),
      { succes: 200 });
  }
}

module.exports = AccountRoutes;
