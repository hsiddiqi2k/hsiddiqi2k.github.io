function numberToWord()
{
    var condition = false;
    var number;
    var shape;

    number = window.prompt("The Hungry Hawk would like you to enter a number 1-10");
    if (number > 10 || number < 1)
    {
        condition = true;
    }

    while (condition)
    {
        number = window.prompt("Thats not a number 1-10. Try again!");
        
        if (number <= 10 & number >= 1)
        {
            condition = false;
        }
    }

    shape = getShape(number);
    alert("the shape is a: " + shape);

}



function getShape(sides)
{
    if (validateEntry(sides))
    {
        if (sides == 1)
        {
            return "no shape exists";
        }
        else if (sides == 2)
        {
            return "no shape exists";
        }
        else if (sides == 3)
        {
            return "Triangle";
        }
        else if (sides == 4)
        {
            return "Quadrilateral";
        }
        else if (sides == 5)
        {
            return "Pentagon";
        }
        else if (sides == 6)
        {
            return "Hexagon";
        }
        else if (sides == 7)
        {
            return "Heptagon";
        }
        else if (sides == 8)
        {
            return "Octagon";
        }
        else if (sides == 9)
        {
            return "Nonagon";
        }
        else if (sides == 10)
        {
            return "Decagon";
        }

    }
    
}



function validateEntry(num)
{

    if (num <= 10 & num >= 1)
    {
        return true;
    }
    
}

