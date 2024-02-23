const removeFromArray = function (arr = []) {
  const args = Array.from(arguments);
  let i = 0;
  while (i < arr.length) {
    if (args.includes(arr[i])) {
      arr.splice(i, 1);
    } else {
      i++;
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
