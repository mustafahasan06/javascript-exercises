const palindromes = function (string) {
const str = string.toLowerCase().replace(/[^a-z0-9]/g, "");    let l =0;
    let r= str.length-1;
    while(l < r){
        if(str.charAt(l)!= str.charAt(r)) return false;
        l++;
        r--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
