(function(){
	var app = angular.module('answergenerator', []);


	/******* PROBLEM ONE *********/
	app.controller("ProblemOneController", function(){
		var sum = 0; // keep track of "passed" variables

		//loop through all numbers 1-1000
		for (var i=1; i<1000; i++){

			if (i%3===0){
				sum+=i;
				continue;

			}else if (i%5===0){
				sum+=i;
				continue;

			}else{
				continue;
			}
		}

		this.answer = sum;
		//this.sourceCode = "		//loop through all numbers 1-1000 <br> for (var i=1; i<1000; i++){			if (i%3===0){				sum+=i;				continue;			}else if (i%5===0){				sum+=i;				continue;			}else{				continue;			}		}";
}); // closes app.controller 


	/******* PROBLEM ONE *********/
	app.controller("ProblemTwoController", function(){
		

		var max = 4000000;  //limit for calcuating sum
		var previous_value = 1;  //1st in fib sequence  (1,2,3,5,8..)
		var current_value = 2;   //2nd value in fib
		var next_value; //3

		sumOfEvenValues = 2; // initialize to 2 so we can test current_value for evenness

		do{
			//calculate fib seq
			next_value = previous_value + current_value;

			//determine if even
			if (next_value%2==0){
				sumOfEvenValues+=next_value;
			}

			//shift the sequence
			previous_value = current_value;
			current_value = next_value;


		}while (current_value<max);

		this.answer = sumOfEvenValues;  //controllerobject.answer
		//this.sourceCode = "feature coming soon";


}); // closes app.controller 	

})();  //closes iffe function


for (var i=1; i<6; i++){
	var bar = [];
	bar[i] = function(){
		return i };
	console.log("i=" + i);
	console.log("bar[i]=" + bar[i]);
};

console.log("-------");
console.log("i=" + i);
console.log("bar[i]=" + bar[i]);
console.log("bar[2]=" + bar[2]);
console.log(bar);


	
