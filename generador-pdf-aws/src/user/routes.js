const express = require('express');

const routes = express.Router({
  mergeParams: true
});

routes.get('/', (req, res) => {
  res.status(200).json({name: 'Jack'});
});

module.exports = { routes };