const { Router } = require('express');

const CreateBudget = require('./controllers/Budget/create');
const ListBudgets = require('./controllers/Budget/index');

const routes = Router();

routes.get('/budget', ListBudgets);
routes.post('/budget', CreateBudget);

module.exports = routes;