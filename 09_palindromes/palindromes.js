const palindromes = function (str = '') {
  str = str.replace(/[ ,;.:/?!]/g, '').toLowerCase();
  let reversed = str.split('').reverse().join('');
  if (reversed === str) return true;
  return false;
};

// Do not edit below this line
module.exports = palindromes;
