function My_First_Function () { //Defining the function and giving it a name
    
    var str = "This text is blue!"; //Defining a variable and assinging it a string value

    var result = str.fontcolor("blue"); //Using the fontcolor method on the str variable

    document.getElementById("Blue_Text").innerHTML = result; //Putting the value of result into HTML elemet with "Blue_Text" id

}

function Concatenate_Example () {
    var Concatenate_text = "The text should turn red,";

    Concatenate_text += " did it work?";

    var color = Concatenate_text.fontcolor("red");
    
    document.getElementById("Concatenate").innerHTML = color;
}

function My_Own_Function () {
    
    var Mouse_Over_Text = "You changed the color!".fontcolor("gold"); 

    document.getElementById("Another_Function_Example").innerHTML = Mouse_Over_Text;

}