require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  response.header(
    "Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization"
  );

  app.use(cors());
  next();
});
app.use(express.json());
app.use(routes);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('connection success!');
}).catch((err) => {
  console.log(err);
});

app.listen(process.env.PORT || 3333);