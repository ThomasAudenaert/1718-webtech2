let getal1 = parseFloat(prompt('Geef een getal in.'));
let getal2 = parseFloat(prompt('Geef nog een getal in'));

function comparison(x, y) {
    if (x > y){
        vergelijking = x + ' is groter dan ' + y;
    } else if (x < y) {
        vergelijking = x + ' is kleiner dan ' + y;
    } else {
        vergelijking = x + ' is gelijk aan ' + y;
    }
    return vergelijking;
}
document.write(comparison(getal1, getal2));