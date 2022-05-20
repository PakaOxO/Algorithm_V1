var s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').reverse();
var n = s.pop().split(' ').map(function(e) { return parseInt(e); });
var a = {};
for(var i = 0; i < n[0]; ++i) {
  a[s.pop()] = false;
}
for(var i = 0; i < n[1]; ++i) {
  var k = s.pop();
  if(a[k] === false) {
    a[k] = true;
  }
}
var x = Object.keys(a).filter(function(e) { return a[e]; });
console.log(x.length + '\n' + x.sort().join('\n'));
