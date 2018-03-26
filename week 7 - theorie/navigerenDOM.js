// aanspreken elementen
//  1. op basis van id-waarden
let list1 = document.getElementById("list1");
console.log(list1);
/*window.setTimeout(function(){
    list1.classList.toggle("visible");
}, 2000);
*/

// 2. alle p-elementen (op basis van de tag)
let paras = document.getElementsByTagName("p"); //dynamic --> blijft controleren
console.log(paras);
let parasAlt = document.querySelectorAll("p"); // static --> wordt maar één keer uitgevoerd
console.log(parasAlt);

// 3. alle elementen met de klasse a
let aElementen = document.getElementsByClassName("a");
console.log(aElementen);
let aElementenAlt = document.querySelectorAll(".a");
console.log(aElementenAlt);

//4. eerste element die voldoet aan een selectie
let element = document.querySelector(".b");
console.log(element);
let elementAlt = document.getElementsByClassName("b")[0];
console.log(elementAlt);

// toevoegen van elementen
// 1. li-element achter list2 toevoegen
// stap 1: leeg element aanmaken
let nieuweLi = document.createElement("li");
//stap 2: tekst toevoegen aan li-element
    //eerste manier 
    //let nieuweTekstNode = document.createTextNode("item 2-4");
    //nieuweLi.appendChild(nieuweTekstNode);
    //tweede manier
    //nieuweLi.textContent = "item 2-4";
    //derde manier
    nieuweLi.innerHTML = "<strong>item</strong> 2-4";
console.log(nieuweLi);
//stap 3: toevoegen van de klasse
    //eerste manier
    nieuweLi.setAttribute("class", "b");
    //tweede manier: enkel voor klasses
    nieuweLi.classList.add("c");
//stap 4: element toevoegen aan DOM-structuur 
let list2 = document.getElementById("list2");
list2.appendChild(nieuweLi);

//klasse verwijderen
nieuweLi.classList.remove("b");
//toggle klassen
nieuweLi.classList.toggle("c");