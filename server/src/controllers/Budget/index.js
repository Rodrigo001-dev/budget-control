const mongoose = require('mongoose');

require('../../models/Budget');
const Budget = mongoose.model('Budget');

async function index(request, response) {
  const budgets = await Budget.find();

  return response.json(budgets);
};

module.exports = index;