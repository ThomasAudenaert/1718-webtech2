/*
//element aanmaken
let brick = document.createElement('div');
//klasse toevoegen
brick.className = 'brick brick-yellow';
//de muur declareren
let wall = document.getElementById('wall-1');
//div (steen) toevoegen aan div met id wall-1 (muur)
wall.appendChild(brick);*/

function createBrick(color){

    let brick = document.createElement('div');
    brick.className = 'brick brick-' + color;
    return brick;
}

function addBrickToWall(color, wallNumber) {

    //<div id="wall-1" class= "wall">
    // id beschrijven
    let wallId = 'wall-' + wallNumber;
    //element ophalen (juiste muur ophalen)
    let wall = document.getElementById(wallId);

    //steentje maken met juiste kleur
    let newBrick = createBrick(color);
    // steentje toevoegen aan de juiste muur

    wall.appendChild(newBrick);
}

function removeBrick(color) {
    let brick = document.removeChild(brick);
    brick.className = 'brick brick-' + color;
    return brick;
}

function removeBrickFromWall(color, wallNumber) {
    let wallId = 'wall-' + wallNumber;
    let wall = document.getElementById(wallId);
    
    let bricks = document.getElementsByClassName('brick-'+ color);
    if(bricks.length > 0){
        wall.removeChild(bricks[0]);
    }
}