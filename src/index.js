module.exports = function reverse (n) {
  let str = n.toString();
  let strReversed = str.split('').reverse().join('');
  return parseInt(strReversed);
}
