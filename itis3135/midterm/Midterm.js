var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var calories = [3000,2500,1500,4000,2200,1200,4400];

var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    //event handlers

};


function updateCalorie()
{
    

    var index;
    var calorieAmount = document.getElementById("calorie").value;


    if(document.getElementById("monday").checked) {
        index = 0;
    }
    else if(document.getElementById("tuesday").checked) {
        index = 1;
    }
    else if(document.getElementById("wednesday").checked) {
        index = 2;
    }
    else if(document.getElementById("thursday").checked) {
        index = 3;
    }
    else if(document.getElementById("friday").checked) {
        index = 4;
    }
    else if(document.getElementById("saturday").checked) {
        index = 5;
    }
    else if(document.getElementById("sunday").checked) {
        index = 6;
    }
    
    
    if (calorieAmount > 10 || calorieAmount < 1 )
    {
        calories[index] = calorieAmount;

        alert("Your updated calories details are: " + calories);
    }
    else
    {
        alert("Enter a valid number");
        document.getElementById("calorie").value = "";
    }
    
    return 0;
}

function showAverageCalories()
{

    var sum = 0;
    var avg = 0;

    for (let i = 0; i < calories.length; i++) {
        sum += calories[i];
    }

    avg = Math.round(sum / calories.length);

    
    document.getElementById("avg").value = avg;

}

function showMax()
{
    var maximum = 0;
    var dayNum = 0;
    var day;

    for (let i = 0; i < calories.length; i++) {
        if (calories[i] > maximum)
        {
            maximum = calories[i];
            dayNum = i;
        }
    }

    if (dayNum = 0)
    {
        day = "Monday"
    }
    else if (dayNum = 1)
    {
        day = "tuesday"
    }
    else if (dayNum = 2)
    {
        day = "wednesday"
    }
    else if (dayNum = 3)
    {
        day = "thursday"
    }
    else if (dayNum = 4)
    {
        day = "friday"
    }
    else if (dayNum = 5)
    {
        day = "saturday"
    }
    else if (dayNum = 6)
    {
        day = "sunday"
    }
    


    document.getElementById("showMax").innerText = "Your maximum consumed calorie is " + maximum
    + " on " + day;

}


