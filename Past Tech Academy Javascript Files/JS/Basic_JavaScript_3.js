function Basic_Addition_Function () {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 +2 = " + addition;

}

function Basic_Subtratcion_Function () {

    var subtraction = 5 - 2;
    document.getElementById("Math_2").innerHTML = "5 - 2 =" + subtraction;

}

function Basic_Multiplication_Division () {
    var multiplication = 6 * 6;
    var division = 36 / 6;
    document.getElementById("Math_3").innerHTML = "6 * 6 = " + multiplication + " 36/6 = " + division;
}

function More_Math () {
    var simple_math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Multi_Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_math;
}

function Modulus_Math () { // division with a remainder or "modulus"
    var modulus_div = 25 % 6;
    document.getElementById("Modulus").innerHTML = "When you divide 25 by 6 you have a remainder of " + modulus_div;
}

function Negation_Operator () {
    var x = 10;
    document.getElementById("Unary_Math").innerHTML = -x;
}

function Increment_Decrement () {
    var I = 5;
    I++                     // This took me forever to figure out. The variable you want to perform the increment on needs to be on its own line.
    var D = 4;
    D--
    document.getElementById("Incre_Decre_Math").innerHTML = "5 increased by 1 increment to " + I + " 4 is decreased by one decrement to " + D;
    
}

function Random_Number() {
    var R = (Math.random())
    document.getElementById("Random").innerHTML = "Your random number is " + R;
}

function Random_Range () {
    var RR = Math.floor(Math.random() * 6) + 1; // Using Math.floor to return a whole number.
    document.getElementById("Die").innerHTML = "You rolled a " + RR + " Click to roll again"
}