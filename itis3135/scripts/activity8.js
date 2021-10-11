// At the start of the JavaScript file, declare two empty arrays: one for person and one for salaries. 

// Create three functions (in your script) and associated buttons (in your page) named addSalary(), displayResults(), and displaySalary() and attach them to the click events of the buttons. 

alert("running");

var salaries = [];
var people = [];



function addSalary()
{
    var inputSalary = document.getElementById("salaryNum").value;
    var inputName = document.getElementById("employee").value;


    salaries.push(inputSalary);
    people.push(inputName);

}

function displayResults()
{

    var total = 0;
    for(var i = 0; i < salaries.length; i++) 
    {
        total += salaries[i];
    }

    average = total / salaries.length;

    
    

    

    document.getElementById("results").innerHTML = "Average value:" + average + " Highest value: " + maxSalary + " Total: " + total;

}

function displaySalary()
{

}


