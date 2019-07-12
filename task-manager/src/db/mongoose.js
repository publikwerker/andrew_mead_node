const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})

const User = mongoose.model('User', {
  name:{
    type: String
  },
  age: {
    type: Number
  }
})

// 

const Task = mongoose.model('Task', {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
})

const newTask = new Task({
  description: 'Buy some land',
  completed: false
})

newTask.save().then(()=>{
  console.log(newTask);
}).catch((error)=>{
  console.log(`There was an ERROR: ${error}`);
})