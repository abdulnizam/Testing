const Express = require("express")

var lib = require("./lib");

var app = Express();


var runProgram = function (length) {

	var result = [ ];

	for (var i = 0; i < length; i++) {
		
		// console.log( lib.runProgram( i ) )

		result.push( lib.runProgram(i) )

	}

	return result
	
}

app.get("/", function (req, res) {

	res.send( runProgram( 100 ) )

})

app.get("/:length", function (req, res) {

	res.send(  runProgram( req.params.length ) )

})

app.listen( 2000 )
