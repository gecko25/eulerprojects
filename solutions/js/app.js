
(function(){
	var app = angular.module('answergenerator', []);

	/******* PROBLEM ONE *********/
	app.controller("ProblemOneController", function(){
		this.answer = 0;
		var sum = 0; // keep track of "passed" variables

		//loop through all numbers 1-1000
		for (var i=1; i<1000; i++){

			if (i%3===0){
				sum=sum+i;
				continue;

			}else if (i%5===0){
				sum=sum+i;
				continue;

			}else{
				continue;
			}
		}

		this.answer = sum;
		console.log("The sum is " + sum);
}); // closes app.controller 

})();  //closes closure function
