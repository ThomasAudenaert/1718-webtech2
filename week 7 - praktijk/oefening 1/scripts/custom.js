// functie expressie om JSON-request via url uit te voeren
const getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};
//const firstName = window.prompt('Geef je voornaam in.');
//const lastName = window.prompt('Geef je achternaam in.');

// const url = 'http://api.icndb.com/jokes/random?firstName=' + firstName + '&lastName' + lastName;

//JSON functie oproepen, binnen de callback manipuleren we de verkregen data
/*getJSON('http://api.icndb.com/jokes/random?firstName=Thomas&lastName=Audenaert', function(error, data) {

    document.write(data.value.joke);

})*/

let button =  document.getElementById('reveal');
let result = document.getElementById('mopje');
button.addEventListener('click', function() {
    let firstName = document.getElementById('fName').value;
    let lastName = document.getElementById('lName').value;
    const url = 'http://api.icndb.com/jokes/random?firstName=' + firstName + '&lastName=' + lastName;
    getJSON(url, function(error, data) {

        const joke = data.value.joke;

        let listitem = document.createElement('li');
        listitem.innerHTML = joke;
        let list = document.getElementById('jokelist');
        jokelist.appendChild(listitem);
        jokelist.style.color = 'yellow'
    })
})