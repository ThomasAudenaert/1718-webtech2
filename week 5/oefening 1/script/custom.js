let recipe = {

    name: "Pizza Margharita",
    servings: 2,
    difficulty: 'easy peasy',
    ingredients: [
        'cheese',
        'dough',
        'tomato sauce',
        'basil',
        'gralic'
    ]
};

console.log(recipe.name);

let divRecipe = document.getElementById('recipe');

// de naam printen
divRecipe.innerHTML = '<h2>' + recipe.name + '</h2>';

// aantal porties
divRecipe.innerHTML += '<p>' + recipe.servings + '</p>';

// ingredienten in een unordered list printen met een for loop
divRecipe.innerHTML += '<ul>';

for(let i = 0; i < recipe.ingredients.length; i++) {
    divRecipe.innerHTML += "<li>" + recipe.ingredients[i] + "</li>"
}

divRecipe.innerHTML += '</ul>';

