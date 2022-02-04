//get button
document.getElementById("generate").addEventListener("click", calculate);

//array with nickanmes
const nicknames = ["The Shadow", "Babe", "Honey", "Baby Bruiser", "Sexy Dog", "Lame Goldfish", "Coolboy", "Major", "Grandmother", "Papa", "Mama", "Smurf", "Alpha", "Breadmaker", "Bully", "Cereal Killer", "Nutjob", "Turnip King", "Guillotine", "Nerd", "Explicit Substance Dealer", "Cowboy"];

//function to be executed on button press
function calculate() {

    //first and last name input fields
    let firstName = document.getElementById("first").value;
    let lastName = document.getElementById("last").value;

    //Random number generator
    let index = Math.floor(Math.random() * nicknames.length);

    //put the names together
    let nickname = `${firstName} "${nicknames[index]}" ${lastName}`;

    //output
    document.getElementById("nickname").innerHTML = nickname;
}