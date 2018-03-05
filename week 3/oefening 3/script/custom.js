/*let height = "'";
let ground = "_";

function drawSomething(symbol, amount) {
    for(let i = 1; i<=amount;i++) {
        document.write(symbol);
    }
    if (symbol == height) {

    }
}

drawSomething(ground, 7);
drawSomething(height, 7);
drawSomething(ground, 7);
drawSomething(ground, 7);*/


//GOEIE MANIER


/*drawMountain(3);
drawFlatArea(5);
drawMountain(7);
drawFlatArea(6);
drawMountain(9);
drawFlatArea(2);
function drawMountain(lengthOfMountain) {
    //initiele toplengte
    let i = 1;
    //helling
    document.write('/');
    //zolang het einde van de top nog niet bereikt is
    while(i <= lengthOfMountain) {
        document.write("'");
        i++;
    }
    
    //afdaling
    document.write('\\');
}

function drawFlatArea(lengthOfGround) {
    let i = 1;
    while(i <= lengthOfGround){
        document.write("_");
        i++;
    }

}*/
setInterval(function(){
    let randomTrueFalse = Math.random() >= 0.5;
    let randomBetween = Math.floor(Math.random() * 4) + 1;

    //random een true of een false
    if(randomTrueFalse == true) {
        drawMountain(randomBetween); //teken berg
    } else {
        drawFlatArea(randomBetween); // teken dal
    } 
}, 1000); //elke seconde

function drawMountain(lengtOfMountain) {
    let i = 1; //initiele toplengte
    document.write('/'); //helling
    while(i <= lengtOfMountain) {
        document.write("'");
        i++;
    }
    document.write("\\") //afdaling
}
function drawFlatArea(lengtFlat) {
    let i = 1
    while(i <= lengtFlat) {
        document.write("_");
        i++;
    }
}