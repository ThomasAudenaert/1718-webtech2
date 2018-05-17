let header = document.querySelector('header');
let section = document.querySelector('section');

var myRequest = new Request('https://annaudenaert.github.io/testing/superheroes.json');
fetch(myRequest)
    .then(function(response) {
        console.log(response);
        if (response.ok) {
            return response.json();
        } else {
            console.log("something went wrong");
        }
    })
    .then(function(jsonObj) {
        populateHeader(jsonObj);
        showHeroes(jsonObj);
    });

function populateHeader(jsonObj) {
    let myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);
    let myPara = document.createElement('p');
    myPara.textContent = `Hometown:  ${jsonObj.homeTown}  // Formed: ${jsonObj.formed}`;
    header.appendChild(myPara);
}

function showHeroes(jsonObj) {
    let heroes = jsonObj['members'];
    for (let i = 0; i < heroes.length; i++) {
        let myArticle = document.createElement('article');
        let myH2 = document.createElement('h2');
        let myPara1 = document.createElement('p');
        let myPara2 = document.createElement('p');
        let myPara3 = document.createElement('p');
        let myList = document.createElement('ul');
        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
        myPara2.textContent = 'Age: ' + heroes[i].age;
        myPara3.textContent = 'Superpowers:';
        let superPowers = heroes[i].powers;
        for (let j = 0; j < superPowers.length; j++) {
            let listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
        section.appendChild(myArticle);
    }
}