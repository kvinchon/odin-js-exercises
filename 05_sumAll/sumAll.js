const sumAll = function (min, max) {
  if (min < 0 || max < 0 || typeof min !== 'number' || typeof max !== 'number')
    return 'ERROR';

  if (min > max) {
    let newMin = max;
    max = min;
    min = newMin;
  }

  let sum = 0;
  while (min <= max) {
    sum += min;
    min++;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
