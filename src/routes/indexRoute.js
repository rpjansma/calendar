'use strict';

const express = require('express');
const router = express.Router();

//Test route
const route = router.get('/', (req, res, next) => {
  res.status(200).send({
    title: "Calendar API",
    version: "0.0.2"
  });
});

module.exports = router;