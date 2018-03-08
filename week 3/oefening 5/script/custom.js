const password = 'rappersjors';
let i = 0;

    let guess = prompt('Wat is het geheime wachtwoord?');
/*if (password == guess) {
    document.write(`Proficiat, het wachtwoord was juist, je hebt hier ${i}x voor moeten proberen.`)
} 
*/
while(password != guess) {
    i++;
    guess = prompt('Wat is het geheime wachtwoord?');
}
document.write(`Je hebt het wachtwoord ${password} geraden!`)
document.write('<br> Je had wel ' + i + ' pogingen nodig...')