//Weekly Project 
//Ask the user for options

// Example:
// "Welcome to Kenn's program. Press 1 to count. Press 2 to use a calculator. Press q to quit".

// #### When selecting count by pressing 1 (2 points):
// Ask the user to count by ones.
// - If they select count by ones, ask them to enter a number. Start at 1 and count up to that number in the console log.


var userMainOptions = prompt("********Welcome to Hamida's program. ********** Press 1 to count. Press 2 to use a calculator. Press q to quit. ");


if (userMainOptions === "1")

{
	var countByones =prompt("To count by ones press y ");



	if (countByones== "y")

	{
		var numOneInt = parseInt(prompt("Please enter a positive numeber here:" ));
		var i=1;

		while (i<= numOneInt)

		{
			console.log(i);
			i++;

		}





		
	}

	



// #### When selecting use a calculator by pressing 2 (2 points):
// Ask the user if they want to use addition.
// - If they select 'a', ask them to enter two numbers. Give them the sum of the numbers.







if (userMainOptions === "2")
{ 
	prompt("Lets try again");

}

}