const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members ) {
  
let stack=[];
if(Array.isArray(members)){
  for(i=0;i<members.length;i++){
    if(typeof members[i]==='string'){stack.push(members[i].toUpperCase().replace(/\s+/g, '').charAt(0));}
  
  } 
  
  return stack.sort().join().replace(/[\s.,%]/g, '');
}
else {return false;}

};