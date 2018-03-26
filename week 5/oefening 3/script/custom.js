let dog = {
    breed: 'Collie',
    name: 'Lassie',
    color: 'brownish',
    age: 56,
    gender: 'm',
    colorEyes: function() {
        return 'brown';
    }
};

//klassedefinitie met constructor
let Dog = function(breed, name, color, age, gender) {
    this.breed = breed;
    this.name = name;
    this.color = color;
    this.age = age;
    this.gender = gender;
    this.colorEyes = function() {
        return 'pink'
    }
    const now = new Date();
    const year = now.getFullYear();
    this.birthYear = function() {
        let currentYear = year;
        let birthYear = currentYear - this.age;
        return birthYear;
    }
}


// functie toevoegen aan de klasse
Dog.prototype.speak = function(line) {
    let slogan = 'De ' + this.name + ' hond zegt: ' + line;
    return slogan;
}
let myFavouriteDog = new Dog('Collie', 'Lassie', 'brownish', 98, 'm');
//property toevoegen aan het object
myFavouriteDog.bestToyEver = 'een mooie rode bal';

let saySomething = myFavouriteDog.speak('Er klopt iemand op de deur!')
console.log(saySomething);
// functie toevoegen aan de klasse
Dog.prototype.speak = function(line) {
    let slogan = 'De ' + this.breed + ' hond zegt: ' + line;
}

document.write(myFavouriteDog.birthYear())

