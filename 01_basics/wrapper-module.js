console.log("__filename", __filename);
console.log("__dirname", __dirname);

function func() {
  console.log("hello from wrapper-module.js");
}

module.exports = { func, };
