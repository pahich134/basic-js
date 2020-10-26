const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( array ) {
    var myFuncCalls = 0;
      var flattend = [];
      (function flat(array) {
        myFuncCalls++;
        array.forEach(function(el) {
          if (Array.isArray(el)) flat(el);
          else flattend.push(el);
        });
      })(array);
      return myFuncCalls;
    }
  }
