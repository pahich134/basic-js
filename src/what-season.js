const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  if(date==null){return 'Unable to determine the time of year!';}
  if ( Object.prototype.toString.call(date) != '[object Date]') throw new Error('THROWN');
  let summer='summer';
  let winter='winter';
  let spring='spring';
  let autumn='autumn';
  
    //if(date instanceof Date )
    if(date.getMonth()==11 || date.getMonth()==0 || date.getMonth()==1){return winter;}
    else if(date.getMonth()==2 || date.getMonth()==3 || date.getMonth()==4){return spring;}
    else if(date.getMonth()==5 || date.getMonth()==6 || date.getMonth()==7){return summer;}
    else if(date.getMonth()==8 || date.getMonth()==9 || date.getMonth()==10){return autumn;}
  //}
  //else{throw new Error('THROWN');}
  
  
};
