const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let tr=[...arr];
 for(i=0;i<tr.length;i++){
  
   if(tr[i]=='--double-next'){tr[i]=tr[i+1];}
   else if(tr[i]=='--discard-prev'){tr.splice(i-1, 2);}
   else if(tr[i+2]=='--double-prev' && tr[i]=='--discard-next'){tr.splice(i, 3);}
   else if(tr[i+2]=='--discard-prev' && tr[i]=='--discard-next'){tr.splice(i, 3);}
   else if(tr[i]=='--discard-next' ){tr.splice(i, 2);}
   else if(tr[i]=='--double-prev' ){tr[i]=tr[i-1];}
   else if(tr[0]=='--discard-prev'){tr.splice(0,1)}
   else if(tr[0]=='--double-prev' ){tr.splice(0,1)}
   else if(tr[tr.length-1]=='--double-next'){tr.pop();}
   else if(tr[tr.length-1]=='--discard-next'){tr.pop();}

   
   
 }
 return tr;
};

