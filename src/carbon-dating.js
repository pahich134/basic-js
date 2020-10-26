const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  let k=0.693/HALF_LIFE_PERIOD;
  let t = Math.log2(MODERN_ACTIVITY/sampleActivity) / k;
  if(sampleActivity<=0 || sampleActivity>15 || !sampleActivity || t>18016 || typeof sampleActivity!=='number'){return false;}
  
  return t;
};