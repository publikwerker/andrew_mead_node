const express = require('express');
require('./db/mongoose');
require('dotenv').config();
const chalk = require('chalk');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, ()=> {
  console.log(chalk.green.inverse(`Server is running on port ${port}`));
});