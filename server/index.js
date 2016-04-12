const express = require('express');

const frontend = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';

const app = express();

const webpackConfig = isDev ?
  require('../config/webpack.dev.config.js') :
  require('../config/webpack.prod.config.js');

app.use(frontend(webpackConfig));

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`app started on ${port}`);
  }
});
