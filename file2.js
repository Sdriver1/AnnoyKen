const chalk = require("chalk");
const { function1 } = require("./file1.js");

function function2(x) {
  for (let i = 0; i < x; i++) {
    console.log(chalk.red(function1()));
  }
}

module.exports = { function2 };
