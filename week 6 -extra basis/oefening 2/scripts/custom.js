let fruits = ['orange', 'strawberry','apple', 'melon', 'pineapple'];

for(let i = 0; i<fruits.length; i++){
    document.write(fruits[i]);
    document.write('<br>')
}

const showItems = function(arrayName){
    for(let i = 0; i<arrayName.length; i++){
    document.write(arrayName[i]);
    document.write('<br>')
    }
}
showItems(fruits);