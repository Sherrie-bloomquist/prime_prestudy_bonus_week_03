console.log ("hey this works!");
var x = 5;
var addition = function(x){
  return x+x;
};
console.log(addition(x));

var multiply = function(x){
  return x*x;
}
console.log(multiply(x));

var subtract = function(x){
  return x-2;
}
console.log(subtract(x));

var endResult = function(x){
  return x+(x*(x-2));
};
console.log(endResult(x));
