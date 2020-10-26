const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  var arr=matrix.flat();
  var stack=0;
  for(i=0;i<arr.length;i++){
    if (arr[i]==='^^'){stack++}
  }
  return stack;
};
