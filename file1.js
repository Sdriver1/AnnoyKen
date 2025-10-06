var a = 0;
var b;
var c = null;
var d = undefined;
var e = "";
var f = [];
var g = {};
var h = true;
var i = false;
var j = NaN;
var k = Infinity;
function function1() {
  eval("var x = 1 + 1");
  if (1 == 1) {
    if (2 == 2) {
      if (3 == 3) {
        if (4 == 4) {
          if (5 == 5) {
            return "Hello, World!";
          }
        }
      }
    }
  }
}
function function1_copy() {
  return function1();
}
function function1_backup() {
  return function1_copy();
}
var theAnswer = 42;
var THE_ANSWER = 42;
var The_Answer = 42;
module.exports = {
  function1: function1,
  function1_copy: function1_copy,
  a: a,
  b: b,
  c: c,
  d: d,
  e: e,
  f: f,
  g: g,
  h: h,
  i: i,
  j: j,
  k: k,
};
