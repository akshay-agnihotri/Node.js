function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

//? commonjs exports
//module.exports = add;
//module.exports = substract;

// module.exports = {
//   add,
//   substract,
// };


//? ES Module exports
// > default export
// export default add;

// > named export
export { add, substract };