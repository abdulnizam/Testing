const lib = require("../lib")

describe("fizz buzz test", function () {

	it("multiple by 3 should return fizz", function(){

		var results = lib.runProgram(3);

		expect(results).toEqual("fizz");

	})

	it("multiple by 5 should return buzz", function(){

		var results = lib.runProgram(5);

		expect(results).toEqual("buzz");

	})

	it("multiple by 3 and 5 should return fizzbuzz", function(){

		var results = lib.runProgram(15);

		expect(results).toEqual("fizzbuzz");

	})

	it("non multiple by 3 and 5 should return number", function(){

		var results = lib.runProgram(2);

		expect(results).toEqual("2");

	})

	it("if 0 pass and non multiple by 3 and 5 should return 0", function(){

		var results = lib.runProgram(0);

		expect(results).toEqual("0");

	})
	


})