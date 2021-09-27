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