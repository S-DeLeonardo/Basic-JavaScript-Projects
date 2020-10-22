function My_Dictionary () {
    var Animal = {
        Species:"Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound:"Bark!",
    };
    delete Animal.Breed;  //Delete a value from the "Dictionary"
    document.getElementById("Dictionary").innerHTML = Animal.Breed; //Since "Breed" no longer exist, this returns "undefined"
}