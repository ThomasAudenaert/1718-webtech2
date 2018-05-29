<?php


echo '<h1>Datatypes</h1>';

echo '<h2> Scalaire Datatypes</h2>';


echo '<h3>Boolean</h3>';
$booleanVariable = false;
var_dump($booleanVariable);

echo '<h3>Integer</h3>';
$integerVariable = 2;
var_dump($integerVariable); 
$secondBoolean = is_int($integerVariable);
var_dump($secondBoolean);

echo '<h3>Float</h3>';
$floatVariable = 1.5;
var_dump($floatVariable);

echo '<h3>String</h3>';

$someCoolVariable = 'Hello world';
var_dump($someCoolVariable);

echo '<h2>Samengestelde Datatypes</h2>';

echo '<h3>Array</h3>';

// oude notatie
// enumeratieve array
$a = array(1, 3, 5, 9, 10);
$a = [1, 3, 5, 9, 10];
var_dump($a);

// associatieve array
$myFavorites = [
    'movie' => 'Star Wars',
    'book' => 'Harry Potter',
    'music' => 'M-Kids',
];

echo '<br>';
var_dump($myFavorites);
echo '<br>';

// mijn favoriet boek printen op het scherm
print $myFavorites['book'];
echo '<br>';

// multidimensionale array
$myFavoritesList = [
    'movies' => [
        'Star Wars',
        'A Clockwork Orange',
        'Scream',
        'The Hangover',
    ],
    'books' => [
        'Jane Eyre',
        'Kippenvel',
        'De GVR',
    ],
    'playlist' => 'M-Kids',
];
// opdracht: tweede favoriete boek printen adhv echo
echo $myFavoritesList['books'][1];