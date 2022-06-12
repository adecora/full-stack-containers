const express = require('express');
const redis = require('../redis');
const router = express.Router();

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

const statisticsRouter = express.Router();

/* GET statistics. */
statisticsRouter.get('/', async (req, res) => {
  const counter = await redis.getAsync('add-todo-counter') || '0';
  res.send({
    added_todos: Number(counter),
  });
});

router.use('/statistics', statisticsRouter);

module.exports = router;
