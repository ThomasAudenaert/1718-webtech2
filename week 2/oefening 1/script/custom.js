//Oefening 1
/* EASY */
/*
let number = prompt("Geef een getal in.");

if(number % 2 == 0) {
    //even
    document.write("Het getal is even")
}
else {
    //oneven
    document.write("Het getal is oneven")
}*/

/* FANCY */
// elementen ophalen
let inputNumber = document.getElementById('getal');
let button = document.getElementById('evenOfOnevenKnop');
let result = document.getElementById('spanResult');
 
// clickevent
button.addEventListener('click', function() {
 
    // nummer ophalen
    let number = inputNumber.value;
 
    // controleer of het even of oneven is
    let oddOrEven = checkIfEven(number);
 
    // schrijf het resultaat in de span
    result.innerHTML = oddOrEven;
 
});
 
function checkIfEven(someNumber) {
 
    if(someNumber % 2 == 0) {
        // even
       return 'Het getal is even';
    }
    else {
        // oneven
        return 'Het getal is oneven';
    }
}
