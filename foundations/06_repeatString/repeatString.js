const repeatString = function(str,n) {
    if(n < 0 ) return "ERROR";
    let res='';
    while(n > 0){
        res+=str;
        n--;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
3