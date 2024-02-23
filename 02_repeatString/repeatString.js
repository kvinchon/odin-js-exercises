const repeatString = function (str, repeatNumber) {
  if (repeatNumber < 0) return 'ERROR';

  let newStr = '';
  for (let i = 0; i < repeatNumber; i++) {
    newStr += str;
  }
  return newStr;
};

// Do not edit below this line
module.exports = repeatString;
