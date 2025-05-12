const eventEmitter = require("events");

const myFirstEmitter = new eventEmitter();

// registering a listener
myFirstEmitter.on("greet", (name) => {
  console.log(`Hello ${name}`);
});
myFirstEmitter.on("greet", (name) => {
  console.log(`Hello ${name}`);
});

myFirstEmitter.emit("greet", "akshay");

// ! objective
//* create a progarm using node.js eventEmitter2 that:

//? Listens for multiple types of user events (e.g., login, logout, purchase, and profile update).
//? Tracks how many times each event is emitted.
//? Logs a summary of all event occurrences when a special summary event is triggered.

//! Requirements
//? Create at least four custom events (e.g., user-login, user-logout, user-purchase, profile-update).
//? Emit these events multiple times with different arguments (e.g., username, item purchased).
//? Track and store the count of each event type.
//? Define a summary event that logs a detailed report of how many times each event was triggered.

const eventEmitter2 = new eventEmitter();
const events = {
  "user-login": 0,
  "user-logout": 0,
  "user-purchase": 0,
  "profile-update": 0,
};

eventEmitter2.on("user-login", () => {
  console.log("user-login");
  events["user-login"] += 1;
});

eventEmitter2.on("user-logout", () => {
  console.log("user-logout");
  events["user-logout"] += 1;
});

eventEmitter2.on("user-purchase", () => {
  console.log("user-purchase");
  events["user-purchase"] += 1;
});

eventEmitter2.on("profile-update", () => {
  console.log("profile-update");
  events["profile-update"] += 1;
});

eventEmitter2.on("eventSummary", () => {
  console.log(`user-login event is triggered ${events["user-login"]}`);
  console.log(`user-logout event is triggered ${events["user-logout"]}`);
  console.log(`user-purchase event is triggered ${events["user-purchase"]}`);
  console.log(`profile-update event is triggered ${events["profile-update"]}`);
});

// Trigger events
eventEmitter2.emit("user-login");
eventEmitter2.emit("user-login");
eventEmitter2.emit("user-login");
eventEmitter2.emit("user-login");

eventEmitter2.emit("user-logout");
eventEmitter2.emit("user-logout");
eventEmitter2.emit("user-logout");

eventEmitter2.emit("user-purchase");
eventEmitter2.emit("user-purchase");

eventEmitter2.emit("profile-update");

eventEmitter2.emit("eventSummary");
