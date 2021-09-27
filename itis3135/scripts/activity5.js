function welcome()
{

    var companyName = "Hungry Hawk"

    
    var name = window.prompt("Enter your name: ");
    var mood = window.prompt("How are you doing?: ");


    var date = new Date();
	var currentDate = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();


    
	var time = date.getTime();
	var hours = date.getHours();

	if(hours == 0) {
		hours = 12;
	}
	else {
		hours = hours % 12;
	}

	var timeResult = " " + hours + ":" + date.getMinutes();

    
    document.write("Today is: " + currentDate + ". The current time is: " + timeResult + ". The " + companyName + " company welcomes you, " + name + "! We're glad you are doing " + mood);

}

function weight()
{
    var weight = window.prompt("Enter your weight");

    if (weight > 200)
    {
        alert("You should not eat our food");
    }
    else{
        alert("You can eat our food!");
    }
}

function cost()
{
    var amount = window.prompt("How much food do you want?");
    var cost = window.prompt("How much does the food cost?");

    var total = amount * cost;

    alert("The total cost is: " + total);

}

function randomFood()
{
    var random = Math.floor(Math.random() * (4 - 1 + 1)) + 1;

    if (random == 1)
    {
        alert("You get a free hotdog!")
    }
    else if (random == 2)
    {
        alert("You get a free cake!")
    }
    else if (random == 3)
    {
        alert("You get a free Chocolate!")
    }
    else if (random == 4)
    {
        alert("You get a free sandwich!")
    }
}

function sum()
{
    var first = window.prompt("Enter first number");
    var second = window.prompt("Enter second number")

    var total = +first + +second;

    alert("The total is: " + total);
}

function favoriteFood()
{
    var randomNumber = Math.floor(Math.random() * (2 - 1 + 1)) + 1;

    var favorite = window.prompt("What is your favorite food?");

    if (randomNumber == 1)
    {
        alert("Me too!");
    }
    else
    {
        alert("Not me!")
    }
}