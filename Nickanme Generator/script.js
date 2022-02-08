//get button
document.getElementById("generate").addEventListener("click", Random);
document.getElementById("listAll").addEventListener("click", ListAll);

//get nickname text field
const textField = document.getElementById("nickname");

//array with nickanmes
const nicknames = ["The Shadow", "Babe", "Honey", "Baby Bruiser", "Sexy Dog", "Lame Goldfish", "Coolboy", "Major", "Grandmother", "Papa", "Mama", "Smurf", "Alpha", "Breadmaker", "Bully", "Cereal Killer", "Nutjob", "Turnip King", "Guillotine", "Nerd", "Explicit Substance Dealer", "Cowboy"];

//random nickname function
function Random() {

    //first and last name input fields
    let firstName = document.getElementById("first").value;
    let lastName = document.getElementById("last").value;

    //if the input fields are empty, return a message
    if (firstName == "" || lastName == "")
        return textField.innerHTML = "Please enter your name!";

    //Random number generator
    let index = Math.floor(Math.random() * nicknames.length);

    //put the names together
    let nickname = `${firstName} "${nicknames[index]}" ${lastName}`;

    //output
    textField.innerHTML = nickname;
}

//list all nicknames function
function ListAll() {
    
    //first and last name input fields
    let firstName = document.getElementById("first").value;
    let lastName = document.getElementById("last").value;

    //if the input fields are empty, return a message
    if (firstName == "" || lastName == "")
        return textField.innerHTML = "Please enter your name!";

    //all the nickanmes will be put into this string
    let allNicknames = "";

    //loop to put all the nicknames into the string
    for (i = 0; i < nicknames.length; i++) {
        allNicknames += `${firstName} "${nicknames[i]}" ${lastName}<br>`
    }

    //output
    textField.innerHTML = allNicknames;
}