let number = parseInt(window.prompt('Geef een getal in.'));
let primeNumber = function(number){
    if(number === 2){
        document.write('Het getal ' + number + ' is een priemgetal. ');
    } else if (number > 1){
        for (let i = 2; i<number; i++){
            if(number%i != 1){
                document.write('Het getal ' + number + ' is een priemgetal. ');
            } else if (number === i * i) {
                document.write('Het getal ' + number + ' is geen priemgetal. ');
            } else {
                document.write('Het getal ' + number + ' is geen priemgetal. ');
            }
        }
    }
}
primeNumber(number);