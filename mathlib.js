



module.exports = function (){
	return {
	  add: function(num1, num2) { 
		   // add code here
		   console.log(num1 + num2); 
	  },
	  multiply: function(num1, num2) {
		   // add code here 
		   console.log(num1 * num2); 
	  },
	  square: function(num) {
		   // add code here 
		   console.log(num * num);
	  },
	  random: function(num1, num2) {
		   // add code here
		   console.log(Math.floor(Math.random() * num2) + num1);
	  }
	}
  };


  var math = require('./mathlib')();

//   console.log(math);
  math.add(8, 2);
  math.multiply(3, 7);
  math.square(9);
  math.random(1,100);