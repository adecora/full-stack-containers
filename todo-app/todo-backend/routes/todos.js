const express = require('express');
const { Todo } = require('../mongo')
const redis = require('../redis');
const router = express.Router();

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const counter = await redis.getAsync('add-todo-counter') || '0';
  await redis.setAsync('add-todo-counter', Number(counter) + 1);
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()  
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', (req, res) => {
  const { todo } = req;
  res.send(todo);
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  const { _id: id, done } = req.todo;
  const todo = await Todo.findByIdAndUpdate(id,
    { done: !done },
    { new: true }
  );
  res.send(todo);
});

router.use('/:id', findByIdMiddleware, singleRouter);


module.exports = router;
