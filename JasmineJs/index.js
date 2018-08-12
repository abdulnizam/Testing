const Express = require("express")

var lib = require("./lib");

var app = Express();


var runProgram = function (length) {

	for (var i = 0; i < length; i++) {
		
		console.log( lib.runProgram( i ) )

	}
	
}

runProgram(100)