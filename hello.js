console.log("Hello QA!");
let a = 10;



function calculator(a, b, operation) {
	    if(operation == "+") {
	      return (a + b);
	    } if(operation == "-") {
	      return (a - b);
	    } if(operation == "*") {
	      return (a * b);
	    } if(operation == "/") {
	      return b !== 0 ? a / b : "error";
	    }
	  }
	  
	  console.log(calculator(10, 15, "+"));
	  console.log(calculator(45, 40, "-"));
	  console.log(calculator(4, 9, "*"));
	  console.log(calculator(10, 0, "/"));
