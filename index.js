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
	var countByonesOrtwo =prompt("To count by ones press 1  or press 2 to count ny twos");


	if (countByonesOrtwo== "1")

	{
		var numStart1 = parseInt(prompt("Please enter a positive number to start count number there:" ));
		var numOneInt = parseInt(prompt("Please enter a positive number to stop count here:" ));


		var i=numStart1;

		while (i<= numOneInt)

		{
			console.log(i);

			i++;

		}
    }

}



// ### Phase 2
// #### When selecting count by pressing 1 (2 points):
// Ask the user to count by twos.
// - If they select count by twos, ask them to enter a number. Start at 1 and count up to that number in the console log by twos.

if (countByonesOrtwo === "2")

{


var numStart2 = parseInt(prompt("Please enter a positive number to start count number there:" ));
var numTwoInt = parseInt(prompt("Please enter a positive number here:" ));

		var x=numStart2;

		while (x<= numTwoInt)

		{
			console.log(x);
			
			x=x+2;

		}


}

// #### When selecting use a calculator by pressing 2 (2 points):
// Ask the user if they want to use addition.
// - If they select 'a', ask them to enter two numbers. Give them the sum of the numbers.

// #### When selecting use a calculator by pressing 2 (2 points):
// Ask the user if they want to use subtraction.
// - If they select 's', ask them to enter two numbers. Give them the difference of the numbers.



if (userMainOptions === "2")

{ 
	var userOptions2Calulater = prompt("Enter 'a'  if you like to do addition or enter 's' for subtraction -: ");

	     if (userOptions2Calulater === "a")

	        {
	
	           var number1UserOpt2Int = parseInt(prompt("Please enter your first number here :"));
	           var number2UserOpt2Int = parseInt(prompt("Please enter your second number here :"));

	
	               alert("The addition of your numbers is  : " + (number2UserOpt2Int + number1UserOpt2Int));

            }


         if (userOptions2Calulater === "s")

           {
	
	          var number1UserOpt2Int = parseInt(prompt("Please enter your first number here :"));
	          var number2UserOpt2Int = parseInt(prompt("Please enter your second number here :"));

                  if(number2UserOpt2Int < number1UserOpt2Int)

                            {

                              alert("The subtraction of your numbers is  : " + (number1UserOpt2Int - number2UserOpt2Int));

                            }
	
	          
	           alert(" ERROR Please enter second number higher than first number");


            }




    if (userMainOptions === "q")

    {

	alert("You Quit My Program..Thank you and Good Bye!!!!");

	
    }

}

else

{

alert("ERROR");

}



// ### Challenge
// - Ask the user to input the starting number when counting by ones and twos.
// - Make sure if the user enters an invalid selection say "ERROR", then retry the question. 
//  This should include an ERROR when a user inserts a smaller second number when counting in the above challenge.



