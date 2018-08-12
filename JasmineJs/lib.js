
module.exports =  {

	runProgram ( number ) {

		var results = number.toString()
		
		if( this.multipleByThree( number ) && number != '0' )
		{
			results = 'fizz'
		}

		if( this.multipleByFive( number ) && number != '0')
		{
			results = 'buzz'
		}

		if( this.multipleByThree( number ) && this.multipleByFive( number ) && number != '0' )
		{
			results = 'fizzbuzz'
		}

		return results

	},

	multipleByThree( number )
	{
		return number % 3 == 0
	},

	multipleByFive( number )
	{
		return number % 5 == 0
	}

	
}
