const fs = require("fs");
const filePath = "./tasks.json";

const loadTasks = () => {
  //for loading data
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
}; 

const saveTasks = (tasks) => {
   const dataJSON = JSON.stringify(tasks);
   fs.writeFileSync(filePath,dataJSON);
};

const addTask = (task) => {
  //for adding task
  const tasks = loadTasks();
  tasks.push({task}); // push task 1 by 1
  saveTasks(tasks);
  console.log("Task added",task);
};

const listTasks = () => {
  const tasks = loadTasks();
  tasks.forEach((task,index) => console.log(`${index + 1} - ${task.task}`));
};

const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask(parseINT(argument));
} else {
  console.log("command not found");
}
