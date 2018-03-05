// waardes van fastfood
let pizza = parseInt(prompt("Geef de waarde van pizza in."));
let hamburger = parseInt(prompt("Geef de waarde van hamburger in."));
let donut = parseInt(prompt("Geef de waarde van donut in"));

// inputvelden uit DOM declareren
let input1 = document.getElementById('result1');
let input2 = document.getElementById('result2');
let input3 = document.getElementById('result3');
let userSolution = document.getElementById('result4');

//inputvelden invullen
input1.value = pizza + pizza + pizza;
input2.value = pizza + hamburger + hamburger;
input3.value = donut*2 + hamburger + donut*2;

// correcte oplossing berekenen
let solution = hamburger + donut * pizza;

//button declareren
let checkButton = document.getElementById('check');

checkButton.addEventListener("click", function() {
    if(solution == userSolution.value) {
        alert("Joepie, feestje!");
    } else {
        alert("Santé, beter leren hé!");
    }
});