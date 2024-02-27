const fibonacci = function (member) {
  if (member < 0) return 'OOPS';

  let seq = [0, 1];
  while (seq[member] === undefined) {
    let digits = seq.slice(-2);
    seq.push(digits.reduce((total, value) => total + value));
  }

  return seq[member];
};

// Do not edit below this line
module.exports = fibonacci;
