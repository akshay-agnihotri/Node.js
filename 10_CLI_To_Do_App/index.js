// cli to do app
// As i run the cmnd node index.js the prompt is shown as follows:

// 1. Add a task
// 2. Remove a task
// 3. List all tasks
// 4. Mark a task as done
// 5. Exit
// Enter your choice:
// The user can enter a number from 1 to 5 to perform the corresponding action.

const fs = require("fs");
const path = require("path");
const readline = require("readline");
const filePath = path.join(__dirname, "tasks.json");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to read tasks from the JSON file
function readTasks() {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

// Function to write tasks to the JSON file
function writeTasks(tasks) {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

// Function to add a task
function addTask() {
  rl.question("Enter the task: ", (task) => {
    const tasks = readTasks();
    tasks.push({ task, done: false });
    writeTasks(tasks);
    console.log(`Task "${task}" added.`);
    showMenu();
  });
}

// Function to remove a task
function removeTask() {
  const tasks = readTasks();
  if (tasks.length === 0) {
    console.log("No tasks to remove.");
    showMenu();
    return;
  }
  console.log("Tasks:");
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task.task}`);
  });
  rl.question("Enter the task number to remove: ", (number) => {
    const index = parseInt(number) - 1;
    if (index >= 0 && index < tasks.length) {
      const removedTask = tasks.splice(index, 1);
      writeTasks(tasks);
      console.log(`Task "${removedTask[0].task}" removed.`);
    } else {
      console.log("Invalid task number.");
    }
    showMenu();
  });
}

// Function to list all tasks
function listTasks() {
  const tasks = readTasks();
  if (tasks.length === 0) {
    console.log("No tasks available.");
  } else {
    console.log("Tasks:");
    tasks.forEach((task, index) => {
      console.log(
        `${index + 1}. ${task.task} [${task.done ? "Done" : "Not Done"}]`
      );
    });
  }
  showMenu();
}

// Function to mark a task as done
function markTaskAsDone() {
  const tasks = readTasks();
  if (tasks.length === 0) {
    console.log("No tasks to mark as done.");
    showMenu();
    return;
  }
  console.log("Tasks:");
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task.task}`);
  });
  rl.question("Enter the task number to mark as done: ", (number) => {
    const index = parseInt(number) - 1;
    if (index >= 0 && index < tasks.length) {
      tasks[index].done = true;
      writeTasks(tasks);
      console.log(`Task "${tasks[index].task}" marked as done.`);
    } else {
      console.log("Invalid task number.");
    }
    showMenu();
  });
}

// Function to show the menu
function showMenu() {
  console.log("\n1. Add a task");
  console.log("2. Remove a task");
  console.log("3. List all tasks");
  console.log("4. Mark a task as done");
  console.log("5. Exit");
  rl.question("Enter your choice: ", (choice) => {
    switch (choice) {
      case "1":
        addTask();
        break;
      case "2":
        removeTask();
        break;
      case "3":
        listTasks();
        break;
      case "4":
        markTaskAsDone();
        break;
      case "5":
        rl.close();
        break;
      default:
        console.log("Invalid choice. Please try again.");
        showMenu();
    }
  });
}

// Start the application
console.log("Welcome to the To-Do App!");
showMenu();
