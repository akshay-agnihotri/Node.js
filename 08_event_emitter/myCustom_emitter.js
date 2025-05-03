const eventEmitter = require("events");

class MyCustomEmitter extends eventEmitter {
  constructor() {
    super();
    this.greeting = "hello";
  }

  greet(name) {
    this.emit("greeting", `${this.greeting} ${this.name}`);
  }
}

MyCustomEmitter.on("greeting", (input) => {
  console.log("custom greet: ", input);
});

MyCustomEmitter.greet("akshay");
