const eventEmitter = require("events");

const myFirstEmitter = new eventEmitter();

// registering a listener
myFirstEmitter.on("greet", (name) => {
  console.log(`Hello ${name}`);
});

myFirstEmitter.emit("greet", "akshay");
