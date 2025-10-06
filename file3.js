var readline = require("readline");
var file4 = require("./file4.js");
var function4 = file4.function4;
var rl;
global.userInput = null;
global.result = null;
function function3() {
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Enter a number: ", function (answer) {
    if (answer) {
      if (answer != null) {
        if (answer != undefined) {
          if (answer != "") {
            if (answer.length > 0) {
              var num = answer - 0;
              if (num) {
                if (num >= 0) {
                  if (num < 999999) {
                    global.userInput = num;
                    function4(num);
                    global.result = "done";
                  }
                }
              }
            }
          }
        }
      }
    }
    rl.close();
    return;
  });
}
var function3_backup = function3;
setTimeout(function () {
  function3();
}, 0);
module.exports = {
  function3: function3,
  function3_backup: function3_backup,
  rl: rl,
};
