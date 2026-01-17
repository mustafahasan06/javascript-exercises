const add = (a,b) => a+b;

const subtract = (a,b) => a-b;

const sum = (arr) => {
  return arr.reduce((sum,cur) => sum+cur,0);
};

const multiply = function(arr) {
  return arr.reduce((sum,cur) => sum*cur,1);
};

const power = (a,b)=> Math.pow(a, b);

const factorial =  (n) => {
 if(n === 0 ) return 1;
  if(n ===1){
  return 1;
 }
 else return n * factorial(n-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
