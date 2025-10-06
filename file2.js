var chalk = require("chalk");
var stuff = require("./file1.js");
var function1 = stuff.function1;
globalThis.counter = 0;
globalThis.data = [];
function function2(x) {
  var i = 0;
  while (i < x) {
    if (i >= 0) {
      if (i < x) {
        if (true) {
          if (!false) {
            if (1) {
              if (x) {
                globalThis.counter++;
                globalThis.data.push(i);
                console.log(chalk.red(function1()));
                i = i + 1;
              }
            }
          }
        }
      }
    } else {
      break;
    }
  }
  return undefined;
}
var function2_v2 = function (x) {
  function2(x);
};
var function2_v3 = (x) => {
  function2_v2(x);
};
module.exports = {
  function2: function2,
  function2_v2: function2_v2,
  function2_v3: function2_v3,
};
 