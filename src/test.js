function check(str) {
 for(var i=0; i<str.length; i++){
   if(str[i] == '(' ) {
     for(var j=i+1 ; j<str.length; j++){
       if(str[j] == ')'){
         break;
       } else if(str[j] == ']' || str[j]=='}'){
         return false
        }
     }
   }else if(str[i] == '[' ) {
     for(var j=i+1 ; j<str.length; j++){
       if(str[j] == ']'){
         break;
       } else if(str[j] == '}' || str[j]==')'){
         return false
        }
     }
   } else if(str[i] == '{' ) {
     for(var j=i+1 ; j<str.length; j++){
       if(str[j] == '}'){
         break;
       } else if(str[j] == ')' || str[j]==']'){
         return false
        }
     }
   }
   }

   return true
 }


console.log(check("{[]}"))

// multiply(2)(3)(4)    //returns 24
