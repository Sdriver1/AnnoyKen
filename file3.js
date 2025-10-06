const readline = require("readline");
const { function4 } = require("./file4.js");

function function3() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Enter a number: ", (answer) => {
    const num = parseInt(answer, 10);
    function4(num);
    rl.close();
  });
}

module.exports = { function3 };
